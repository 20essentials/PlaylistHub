import { defineAction } from 'astro:actions';
import { client } from '@/db/client';
import { z } from 'astro:schema';

export const server = {
  /* ✅ */
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
  /* ✅ */
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
      // Verifica si ya existe una canción con los mismos datos
      const existing = await client.execute({
        sql: `
        SELECT id_song
        FROM songs
        WHERE title = ? AND artist = ? AND album = ?
      `,
        args: [title, artist, album]
      });

      if (existing.rows.length > 0) {
        // Ya existe, no la insertamos
        return existing.rows[0];
      }

      const id_song = crypto.randomUUID(); // o usa tu generador de ID preferido

      // Inserta la nueva canción
      await client.execute({
        sql: `
        INSERT INTO songs (
          id_song,
          title,
          artist,
          album,
          date,
          duration,
          urlSong,
          urlPoster
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
        args: [id_song, title, artist, album, date, duration, urlSong, urlPoster]
      });

      return { id_song };
    }
  }),
  /* ✅ */
  insertDataIntoPlaylistsSong: defineAction({
    input: z.object({
      id_playlist: z.string(),
      title: z.string(),
      artist: z.string(),
      album: z.string() // Recomendado si hay canciones con mismo título y artista en álbumes distintos
    }),
    handler: async ({ id_playlist, title, artist, album }) => {
      // Buscar el id_song a partir del title, artist y album
      const songResult = await client.execute({
        sql: `
        SELECT id_song
        FROM songs
        WHERE title = ? AND artist = ? AND album = ?
      `,
        args: [title, artist, album]
      });

      const { id_song } = songResult.rows[0] ?? {};

      if (!id_song) {
        throw new Error('La canción no existe en la base de datos.');
      }

      // Verificar si ya existe la entrada en playlist_songs
      const existing = await client.execute({
        sql: `
        SELECT id_playlist, id_song
        FROM playlist_songs
        WHERE id_playlist = ? AND id_song = ?
      `,
        args: [id_playlist, id_song]
      });

      if (existing.rows.length > 0) {
        return existing.rows[0];
      }

      // Insertar nueva relación
      await client.execute({
        sql: `
        INSERT INTO playlist_songs (
          id_playlist,
          id_song
        ) VALUES (?, ?)
      `,
        args: [id_playlist, id_song]
      });

      return { id_playlist, id_song };
    }
  }),
  /* ✅ */
  addedFirstPlaylistsIfTheUserIsNew: defineAction({
    input: z.object({
      userId: z.string()
    }),
    handler: async ({ userId }) => {
      const uuid4 = crypto.randomUUID();
      const playlists = [
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
          console.info(`✅ Playlist "${playlist.title}" creada correctamente.`);
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
            const id_song = crypto.randomUUID();

            await client.execute({
              sql: `INSERT INTO songs 
              (id_song, title, artist, album, date, urlPoster, duration, urlSong) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
              args: [
                id_song,
                title,
                artist,
                album,
                date,
                urlPoster,
                duration,
                urlSong
              ]
            });

            console.info(
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

      const songsToInsert: any[] = []; // Coloca aquí tus canciones iniciales si las tienes
      await insertSongs(songsToInsert, 'Favorite Brands');

      const playlistMap = {
        'Favorite Brands': { id: uuid4, songs: songsToInsert }
      };

      for (const [name, { id: id_playlist, songs }] of Object.entries(
        playlistMap
      )) {
        for (const song of songs) {
          const { title, artist } = song;

          try {
            // Buscar el id_song correspondiente
            const result = await client.execute({
              sql: `SELECT id_song FROM songs WHERE title = ? AND artist = ?`,
              args: [title, artist]
            });

            const { id_song } = result.rows[0] ?? {};

            if (!id_song) {
              console.warn(
                `⚠️ [${name}] No se encontró id_song para "${title}" de ${artist}`
              );
              continue;
            }

            await client.execute({
              sql: `INSERT INTO playlist_songs (id_playlist, id_song) VALUES (?, ?)`,
              args: [id_playlist, id_song]
            });

            console.info(
              `🎶 [${name}] Canción "${title}" vinculada a la playlist.`
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
  /* ✅ */
  deleteSongFromThePlaylist: defineAction({
    input: z.object({
      title: z.string(),
      artist: z.string(),
      id_playlist: z.string()
    }),
    handler: async ({ title, artist, id_playlist }) => {
      // Buscar el id_song correspondiente
      const result = await client.execute({
        sql: `SELECT id_song FROM songs WHERE title = ? AND artist = ?`,
        args: [title, artist]
      });

      const { id_song } = result.rows[0] ?? {};

      if (!id_song) {
        console.warn(`⚠️ No se encontró la canción "${title}" de ${artist}.`);
        return { success: false, message: 'Canción no encontrada.' };
      }

      // Eliminar la canción de la playlist
      await client.execute({
        sql: `
        DELETE FROM playlist_songs
        WHERE id_playlist = ? AND id_song = ?
      `,
        args: [id_playlist, id_song]
      });

      return { success: true };
    }
  }),
  /* ✅ */
  deletePlaylistFromTheUser: defineAction({
    input: z.object({
      id_playlist: z.string(),
      id_user: z.string()
    }),
    handler: async input => {
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
  }),
  /* ✅ */
  renamePlaylistName: defineAction({
    input: z.object({
      id_playlist: z.string(),
      id_user: z.string(),
      newNameOfPlaylist: z.string()
    }),
    handler: async ({ id_playlist, id_user, newNameOfPlaylist }) => {
      const result = await client.execute({
        sql: `
        UPDATE playlists
        SET title = ?
        WHERE id_playlist = ? AND id_user = ?
      `,
        args: [newNameOfPlaylist, id_playlist, id_user]
      });

      return result.rows;
    }
  })
};
