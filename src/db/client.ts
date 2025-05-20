import { createClient } from '@libsql/client';
import { DATABASE_URL, DATABASE_TOKEN } from 'astro:env/server';

const client = createClient({
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
