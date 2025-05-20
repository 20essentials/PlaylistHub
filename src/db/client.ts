import { createClient } from '@libsql/client';
import { DATABASE_URL, DATABASE_TOKEN } from 'astro:env/server';
import type { UserTable } from '@/db/types.d';

export const client = createClient({
  url: DATABASE_URL ?? '',
  authToken: DATABASE_TOKEN ?? ''
});


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
