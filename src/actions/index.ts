import { defineAction } from 'astro:actions';
import { client } from '@/db/client';
import { z } from 'astro:schema';

export const server = {
  createNewPlaylistInDb: defineAction({
    input: z.object({
      id_playlist: z.string(),
      title: z.string(),
      color: z.string(),
      whatColorIs: z.string(),
      isPlaylistFavorites: z.boolean().optional(),
      fromUser: z.boolean().optional(),
      id_user: z.string()
    }),
    handler: async ({
      id_playlist,
      title,
      color,
      whatColorIs,
      isPlaylistFavorites = false,
      fromUser = false,
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
  })
};
