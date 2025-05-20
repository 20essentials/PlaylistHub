export interface UserTable {
  user_id?: string;
  email?: string;
  name?: string;
};

export interface PlaylistTable {
  id_playlist: string,
  title: string,
  color: string,
  whatColorIs: string,
  isPlaylistFavorites?: boolean,
  fromUser?: boolean,
  id_user: sting
}