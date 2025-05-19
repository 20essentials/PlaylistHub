export const PREFIX_LS = 'playlist_hub_';
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
      title !== songObject.title || artist !== songObject.artist
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

export const convertInValidSlug = text =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');

export function createPlaylistElement(playlistName) {
  const containerOfPlaylists = document.querySelector(
    '.container-of-add-to-playlists'
  );

  const slugTitle = convertInValidSlug(playlistName);

  const html = `<aside class="row" data-playlist-titulo="${slugTitle}" data-astro-cid-x3dkagmf=""> <aside class="container-icons" data-astro-cid-x3dkagmf=""> <svg class="playlistEmpty" data-astro-cid-x3dkagmf="true" viewBox="0 0 24 24"> <path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zm12.78 3.03a.75.75 0 1 0-1.06-1.06l-6.223 6.216L7.78 12.22a.75.75 0 0 0-1.06 1.06l2.745 2.746a.75.75 0 0 0 1.06 0z"></path></svg> <svg viewBox="0 0 24 24" class="playlistFull" data-astro-cid-x3dkagmf="true"> <path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28l-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216l6.223-6.217a.75.75 0 1 1 1.06 1.062"></path></svg> <img class="confetti" src="/assets/confetti.gif" alt="Confetti Image" data-astro-cid-x3dkagmf=""> </aside> <h4 class="container-title-of-a-playlist" data-astro-cid-x3dkagmf="">${playlistName}</h4> </aside>`;

  containerOfPlaylists.insertAdjacentHTML('beforeend', html);
}
