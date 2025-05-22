import { defineAction } from 'astro:actions';
import { client } from '@/db/client';
import { z } from 'astro:schema';
import SpotiManz from '@/data/spotimanz-favorites.json';
import ChillLofi from '@/data/chill-lofi.json';
import CodeFi from '@/data/code-fi.json';

export const server = {
  createNewPlaylistInDb: defineAction({
    input: z.object({
      id_playlist: z.string(),
      title: z.string(),
      color: z.string(),
      whatColorIs: z.string().optional(),
      isPlaylistFavorites: z.string().optional(),
      fromUser: z.string().optional(),
      id_user: z.string()
    }),
    handler: async ({
      id_playlist,
      title,
      color,
      whatColorIs = 'transparent',
      isPlaylistFavorites = 'false',
      fromUser = 'false',
      id_user
    }) => {
      const result = await client.execute({
        sql: `
          INSERT INTO playlists (
            id_playlist,
            title,
            color,
            whatColorIs,
            isPlaylistFavorites,
            fromUser,
            id_user
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          id_playlist,
          title,
          color,
          whatColorIs,
          isPlaylistFavorites,
          fromUser,
          id_user
        ]
      });

      return result.rows;
    }
  }),
  insertNewSongInDb: defineAction({
    input: z.object({
      title: z.string(),
      artist: z.string(),
      album: z.string(),
      date: z.string(),
      duration: z.string(),
      urlSong: z.string().url(),
      urlPoster: z.string().url()
    }),
    handler: async ({
      title,
      artist,
      album,
      date,
      duration,
      urlSong,
      urlPoster
    }) => {
      // Verifica si la canción ya existe
      const existing = await client.execute({
        sql: `
        SELECT title, artist
        FROM songs
        WHERE title = ? AND artist = ?
      `,
        args: [title, artist]
      });

      const { title: foundTitle = false, artist: foundArtist = false } =
        existing.rows[0] ?? {};

      if (foundTitle && foundArtist) {
        // Ya existe, no la insertamos
        return existing.rows[0];
      }

      // Inserta la nueva canción
      const result = await client.execute({
        sql: `
        INSERT INTO songs (
          title,
          artist,
          album,
          date,
          duration,
          urlSong,
          urlPoster
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
        args: [title, artist, album, date, duration, urlSong, urlPoster]
      });

      return result.rows;
    }
  }),
  insertDataIntoPlaylistsSong: defineAction({
    input: z.object({
      id_playlist: z.string(),
      title: z.string(),
      artist: z.string()
    }),
    handler: async ({ id_playlist, title, artist }) => {
      // Verificar si ya existe la entrada
      const existing = await client.execute({
        sql: `
        SELECT id_playlist, title, artist
        FROM playlist_songs
        WHERE id_playlist = ? AND title = ? AND artist = ?
      `,
        args: [id_playlist, title, artist]
      });

      const { id_playlist: foundPlaylist = false } = existing.rows[0] ?? {};

      // Si ya existe, no se inserta
      if (foundPlaylist) return existing.rows[0];

      // Insertar nueva relación
      const result = await client.execute({
        sql: `
        INSERT INTO playlist_songs (
          id_playlist,
          title,
          artist
        ) VALUES (?, ?, ?)
      `,
        args: [id_playlist, title, artist]
      });

      return result.rows;
    }
  }),
  addedFirstPlaylistsIfTheUserIsNew: defineAction({
    input: z.object({
      userId: z.string()
    }),
    handler: async ({ userId }) => {
      const uuid1 = crypto.randomUUID();
      const uuid2 = crypto.randomUUID();
      const uuid3 = crypto.randomUUID();
      const uuid4 = crypto.randomUUID();

      const playlists = [
        {
          id_playlist: uuid1,
          title: 'Spotimanz Favorites',
          color: '#ec1cce',
          whatColorIs: 'Purple Elegant',
          isPlaylistFavorites: 'FALSE',
          fromUser: 'TRUE',
          id_user: userId
        },
        {
          id_playlist: uuid2,
          title: 'Code Fi',
          color: '#08d437',
          whatColorIs: 'Clear Green',
          isPlaylistFavorites: 'FALSE',
          fromUser: 'TRUE',
          id_user: userId
        },
        {
          id_playlist: uuid3,
          title: 'Chill Lofi',
          color: '#DAA520',
          whatColorIs: 'GoldenRod',
          isPlaylistFavorites: 'FALSE',
          fromUser: 'TRUE',
          id_user: userId
        },
        {
          id_playlist: uuid4,
          title: 'Favorite Brands',
          color: '#f00',
          whatColorIs: 'red',
          isPlaylistFavorites: 'TRUE',
          fromUser: 'TRUE',
          id_user: userId
        }
      ];

      for (const playlist of playlists) {
        try {
          await client.execute({
            sql: `INSERT INTO playlists 
            (id_playlist, title, color, whatColorIs, isPlaylistFavorites, fromUser, id_user) 
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
            args: [
              playlist.id_playlist,
              playlist.title,
              playlist.color,
              playlist.whatColorIs,
              playlist.isPlaylistFavorites,
              playlist.fromUser,
              playlist.id_user
            ]
          });
          console.log(`✅ Playlist "${playlist.title}" creada correctamente.`);
        } catch (error) {
          console.error(
            `❌ Error al crear la playlist "${playlist.title}":`,
            error
          );
        }
      }

      async function insertSongs(songs: any[], label: string) {
        for (const song of songs) {
          const { title, artist, album, date, urlPoster, duration, urlSong } =
            song;
          try {
            await client.execute({
              sql: `INSERT INTO songs (title, artist, album, date, urlPoster, duration, urlSong) VALUES (?, ?, ?, ?, ?, ?, ?)`,
              args: [title, artist, album, date, urlPoster, duration, urlSong]
            });
            console.log(
              `🎵 [${label}] Canción "${title}" agregada exitosamente.`
            );
          } catch (error) {
            console.error(
              `❌ [${label}] Error al insertar la canción "${title}" de ${artist}:`,
              error
            );
          }
        }
      }

      await insertSongs(SpotiManz, 'Spotimanz');
      await insertSongs(ChillLofi, 'ChillLofi');
      await insertSongs(CodeFi, 'CodeFi');

      const playlistMap = {
        'Spotimanz Favorites': { id: uuid1, songs: SpotiManz },
        'Chill Lofi': { id: uuid3, songs: ChillLofi },
        'Code-Fi': { id: uuid2, songs: CodeFi }
      };

      for (const [name, { id: id_playlist, songs }] of Object.entries(
        playlistMap
      )) {
        for (const song of songs) {
          const { title, artist } = song;
          try {
            await client.execute({
              sql: `INSERT INTO playlist_songs (id_playlist, title, artist) VALUES (?, ?, ?)`,
              args: [id_playlist, title, artist]
            });
            console.log(
              `🎶 [${name}] Canción "${title}" de ${artist} vinculada a la playlist.`
            );
          } catch (error) {
            console.error(
              `❌ [${name}] Error al vincular "${title}" de ${artist} a la playlist:`,
              error
            );
          }
        }
      }

      return { success: true };
    }
  }),
  deleteSongFromThePlaylist: defineAction({
    input: z.object({
      title: z.string(),
      artist: z.string(),
      id_playlist: z.string()
    }),
    handler: async inp => {
      const remove = await client.execute({
        sql: `
        DELETE 
        FROM playlist_songs
        WHERE title = ? AND artist = ? AND id_playlist = ?
      `,
        args: [inp.title, inp.artist, inp.id_playlist]
      });
    }
  }),
  deletePlaylistFromTheUser: defineAction({
    input: z.object({
      id_playlist: z.string(),
      id_user: z.string()
    }),
    handler: async input => {
      console.log(input);
      const { id_playlist, id_user } = input;

      // Primero borra las relaciones con canciones
      await client.execute({
        sql: 'DELETE FROM playlist_songs WHERE id_playlist = ?',
        args: [id_playlist]
      });

      // Luego borra la playlist
      const result = await client.execute({
        sql: 'DELETE FROM playlists WHERE id_playlist = ? AND id_user = ?',
        args: [id_playlist, id_user]
      });
    }
  })
};
