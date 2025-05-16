const PREFIX_LS = 'playlist_hub_';
export const FAVORITE_SLUG = 'favoritebrands'

export function createPlaylist(slug, data) {
  const playlistName = `${PREFIX_LS}${slug}`;
  localStorage.setItem(playlistName, data);
}

export function existsPlaylist(slug) {
  const playlistName = `${PREFIX_LS}${slug}`;
  return Boolean(localStorage.getItem(playlistName));
}

export function getPlaylistAsJSON(slug) {
  const playlistName = `${PREFIX_LS}${slug}`;
  return localStorage.getItem(playlistName);
}

export function getPlaylistAsArray(slug) {
  const playlistString = getPlaylistAsJSON(slug) ?? '[]';
  return JSON.parse(playlistString);
}

export function addSongInPlaylist(slugPlaylist, songObject) {
  //Sin no existe lo crea, y si ya existe lo pushea
  const playlistArray = getPlaylistAsArray(slugPlaylist);
  playlistArray.push(songObject);
  createPlaylist(slugPlaylist, JSON.stringify(playlistArray));
}

export function existThisSongInTheCurrentPlaylist(slugPlaylist, songObject) {
  const playlistArray = getPlaylistAsArray(slugPlaylist);
  return playlistArray?.some(
    ({ title, artist }) =>
      title === songObject.title && artist === songObject.artist
  );
}

export function removeSongFromPlaylist(slugPlaylist, songObject) {
  const playlistArray = getPlaylistAsArray(slugPlaylist);
  const newArray = playlistArray.filter(
    ({ title, artist }) =>
      title !== songObject.title && artist !== songObject.artist
  );
  createPlaylist(slugPlaylist, JSON.stringify(newArray));
}




/* copiar del otro */