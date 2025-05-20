import { createClient } from '@libsql/client';
import { DATABASE_URL, DATABASE_TOKEN } from 'astro:env/server';
import type { UserTable, PlaylistTable } from '@/db/types.d';
import { actions } from 'astro:actions';
import SpotiManz from '@/data/spotimanz-favorites.json';
import ChillLofi from '@/data/chill-lofi.json';
import CodeFi from '@/data/code-fi.json';

export const client = createClient({
  url: DATABASE_URL ?? '',
  authToken: DATABASE_TOKEN ?? ''
});

// export async function addedFirstPlaylistsIfTheUserIsNew(userId: string) {
//   const uuid1 = crypto.randomUUID();
//   const uuid2 = crypto.randomUUID();
//   const uuid3 = crypto.randomUUID();
//   const uuid4 = crypto.randomUUID();

//   const playlists = [
//     {
//       id_playlist: uuid1,
//       title: 'Spotimanz Favorites',
//       color: '#ec1cce',
//       whatColorIs: 'Purple Elegant',
//       isPlaylistFavorites: 'FALSE',
//       fromUser: 'TRUE',
//       id_user: userId
//     },
//     {
//       id_playlist: uuid2,
//       title: 'Code-Fi',
//       color: '#08d437',
//       whatColorIs: 'Clear Green',
//       isPlaylistFavorites: 'FALSE',
//       fromUser: 'TRUE',
//       id_user: userId
//     },
//     {
//       id_playlist: uuid3,
//       title: 'Chill Lofi',
//       color: '#DAA520',
//       whatColorIs: 'GoldenRod',
//       isPlaylistFavorites: 'FALSE',
//       fromUser: 'TRUE',
//       id_user: userId
//     },
//     {
//       id_playlist: uuid4,
//       title: 'Favorite Brands',
//       color: '#f00',
//       whatColorIs: 'red',
//       isPlaylistFavorites: 'TRUE',
//       fromUser: 'TRUE',
//       id_user: userId
//     }
//   ];

//   // Crear playlists
//   for (const playlist of playlists) {
//     const { data: playlistResult, error: playlistError } =
//       await actions.createNewPlaylistInDb(playlist);

//     if (playlistError) {
//       console.error(
//         `❌ Error al crear la playlist "${playlist.title}":`,
//         playlistError
//       );
//     } else {
//       console.log(`✅ Playlist "${playlist.title}" creada correctamente.`);
//     }
//   }

//   async function insertSongs(songs: any[], label: string) {
//     for (const song of songs) {
//       const { title, artist, album } = song;
//       const { data: result, error } = await actions.insertNewSongInDb(song);

//       if (error) {
//         console.error(
//           `❌ [${label}] Error al insertar la canción "${title}" de ${artist} en "${album}":`,
//           error
//         );
//       } else {
//         console.log(
//           `🎵 [${label}] Canción "${title}" agregada exitosamente a "${album}".`
//         );
//       }
//     }
//   }

//   // Insertar canciones por colección
//   await insertSongs(SpotiManz, 'Spotimanz');
//   await insertSongs(ChillLofi, 'ChillLofi');
//   await insertSongs(CodeFi, 'CodeFi');

//   // Relación de playlists con canciones
//   const playlistMap = {
//     'Spotimanz Favorites': { id: uuid1, songs: SpotiManz },
//     'Chill Lofi': { id: uuid3, songs: ChillLofi },
//     'Code-Fi': { id: uuid2, songs: CodeFi }
//     // Favorite Brands no se incluye
//   };

//   for (const [name, { id: id_playlist, songs }] of Object.entries(playlistMap)) {
//     for (const song of songs) {
//       const { title, artist } = song;
//       const { data: insertResult, error: insertError } =
//         await actions.insertDataIntoPlaylistsSong({
//           id_playlist,
//           title,
//           artist
//         });

//       if (insertError) {
//         console.error(
//           `❌ [${name}] Error al vincular "${title}" de ${artist} a la playlist:`,
//           insertError
//         );
//       } else {
//         console.log(
//           `🎶 [${name}] Canción "${title}" de ${artist} vinculada a la playlist.`
//         );
//       }
//     }
//   }
// }

/* export async function addedFirstPlaylistsIfTheUserIsNew(
  userId: string,
  Astro: any
) {
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
      title: 'Code-Fi',
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
    const { data: playlistResult, error: playlistError } = await Astro.callAction(
      'createNewPlaylistInDb',
      playlist
    );

    if (playlistError) {
      console.error(
        `❌ Error al crear la playlist "${playlist.title}":`,
        playlistError
      );
    } else {
      console.log(`✅ Playlist "${playlist.title}" creada correctamente.`);
    }
  }

  async function insertSongs(songs: any[], label: string) {
    for (const song of songs) {
      const { title, artist, album } = song;
      const { data: result, error } = await Astro.callAction(
        'insertNewSongInDb',
        song
      );

      if (error) {
        console.error(
          `❌ [${label}] Error al insertar la canción "${title}" de ${artist} en "${album}":`,
          error
        );
      } else {
        console.log(
          `🎵 [${label}] Canción "${title}" agregada exitosamente a "${album}".`
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

  for (const [name, { id: id_playlist, songs }] of Object.entries(playlistMap)) {
    for (const song of songs) {
      const { title, artist } = song;
      const { data: insertResult, error: insertError } = await Astro.callAction(
        'insertDataIntoPlaylistsSong',
        {
          id_playlist,
          title,
          artist
        }
      );

      if (insertError) {
        console.error(
          `❌ [${name}] Error al vincular "${title}" de ${artist} a la playlist:`,
          insertError
        );
      } else {
        console.log(
          `🎶 [${name}] Canción "${title}" de ${artist} vinculada a la playlist.`
        );
      }
    }
  }
} */

export async function readPlaylistsOfTheUser(userId: string) {
  const result = await client.execute({
    sql: 'SELECT * FROM playlists WHERE id_user = ?',
    args: [userId]
  });

  return result.rows;
}

export async function getAllSongsOfOnePlaylist(id_playlist: string) {
  const result = await client.execute({
    sql: `SELECT 
    s.title,
    s.artist,
    s.album,
    s.date,
    s.duration,
    s.urlSong,
    s.urlPoster
    FROM playlist_songs pls
    INNER JOIN songs s
      ON pls.title = s.title AND pls.artist = s.artist
    WHERE pls.id_playlist = ?;`,
    args: [id_playlist]
  });

  return result.rows;
}

export async function insertNewUser(
  userId: string,
  userEmail: string,
  userName: string
) {
  const resultUser = await client.execute({
    sql: `
      SELECT email, name
      FROM users
      WHERE id_user = ?
    `,
    args: [userId]
  });

  const { email = false, name = false } = resultUser.rows[0] ?? ({} as UserTable);

  //If already inserts we don't insert
  //Un true de decir que el usuario ya existia
  if (email || name) return true;

  const result = await client.execute({
    sql: `
      INSERT INTO users (id_user, email, name)
      VALUES (?, ?, ?);
    `,
    args: [userId, userEmail, userName]
  });

  //If you want to tests your results
  //Si es false significa que es la primera vez del usuario registrandose
  return false;
}
