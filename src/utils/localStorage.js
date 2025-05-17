const PREFIX_LS = 'playlist_hub_';
export const FAVORITE_SLUG = 'favorite-brands';

export function getPlaylistName(slug) {
  return `${PREFIX_LS}${slug}`;
}

export function obtenerFechaActualISO() {
  const ahora = new Date();
  const año = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');
  return `${año}-${mes}-${dia}T00:00:00`;
}

export function createPlaylist(slug, data) {
  const playlistName = getPlaylistName(slug);
  localStorage.setItem(playlistName, data);
}

export function existsPlaylist(slug) {
  const playlistName = getPlaylistName(slug);
  return Boolean(localStorage.getItem(playlistName));
}

export function getPlaylistAsJSON(slug) {
  const playlistName = getPlaylistName(slug);
  return localStorage.getItem(playlistName);
}

export function getPlaylistAsArray(slug) {
  const playlistString = getPlaylistAsJSON(slug) ?? '[]';
  return JSON.parse(playlistString);
}

export function addSongInPlaylist(slugPlaylist, songObject) {
  //Si no existe lo crea, y si ya existe lo pushea
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

export function updateListOfSongsItemsAfterAnUpdateOrDelete() {
  const currentSidebarPlaylistItem = document.querySelector(
    '.playlist-item-active'
  );

  setTimeout(() => {
    currentSidebarPlaylistItem?.click();

    setTimeout(() => {
      const $headerOfCells = document.querySelector('.cell-title');
      $headerOfCells.click();

      const currentSonginPlayer = JSON.parse(
        localStorage.getItem('currentSongInPlayer')
      );

      const $heartEmpty = document.querySelector('.heartEmpty');
      const existThisSongInFavorites = existThisSongInTheCurrentPlaylist(
        FAVORITE_SLUG,
        currentSonginPlayer
      );
      $heartEmpty.classList.toggle('isSaved', existThisSongInFavorites);
    }, 20);
  }, 10);
}
