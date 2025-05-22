export const PREFIX_LS = 'playlist_hub_';

export function addSongInPlaylist(slugPlaylist, songObject) {
  const playlistArray = getPlaylistAsArray(slugPlaylist);
  playlistArray.push(songObject);
  createPlaylist(slugPlaylist, JSON.stringify(playlistArray));
}

export function getTheTheArrayAlreadyConvertedFromLS(key) {
  const playlistString = localStorage.getItem(key) ?? '[]';
  return JSON.parse(playlistString);
}

export const FAVORITE_SLUG = 'favorite-brands';
export const convertInValidSlug = text =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');

export const convertSlugToText = slug =>
  slug
    .replace(/(?<!\d)-(?!\d)/g, ' ') // Reemplaza los guiones que no están entre números
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitaliza cada palabra

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

export function deletePlaylistFromLs(slug) {
  const playlistName = getPlaylistName(slug);
  localStorage.removeItem(playlistName);
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

export function createPlaylistElement(playlistName) {
  const containerOfPlaylists = document.querySelector(
    '.container-of-add-to-playlists'
  );

  const slugTitle = convertInValidSlug(playlistName);

  const html = `<aside class="row" data-playlist-titulo="${slugTitle}" data-astro-cid-x3dkagmf=""> <aside class="container-icons" data-astro-cid-x3dkagmf=""> <svg class="playlistEmpty" data-astro-cid-x3dkagmf="true" viewBox="0 0 24 24"> <path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zm12.78 3.03a.75.75 0 1 0-1.06-1.06l-6.223 6.216L7.78 12.22a.75.75 0 0 0-1.06 1.06l2.745 2.746a.75.75 0 0 0 1.06 0z"></path></svg> <svg viewBox="0 0 24 24" class="playlistFull" data-astro-cid-x3dkagmf="true"> <path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28l-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216l6.223-6.217a.75.75 0 1 1 1.06 1.062"></path></svg> <img class="confetti" src="/assets/confetti.gif" alt="Confetti Image" data-astro-cid-x3dkagmf=""> </aside> <h4 class="container-title-of-a-playlist" data-astro-cid-x3dkagmf="">${playlistName}</h4> </aside>`;

  containerOfPlaylists.insertAdjacentHTML('beforeend', html);
}

export function createSidePlaylistItem({ tabindex, slug, color, poster, title }) {
  const initialLetterOfEachWord = title.slice(0, 3).toUpperCase();

  let text = `<aside class="playlist-item visible" data-id="${slug}" data-color="${color}" tabindex="${tabindex}" data-from-user="TRUE" data-is-playlist-favorites="FALSE" data-astro-cid-4ht3nsfd=""> <img src=${poster} alt="${title}" data-astro-cid-4ht3nsfd=""> <div class="data" data-astro-cid-4ht3nsfd=""> <strong class="title" data-astro-cid-4ht3nsfd="">${title}</strong> <div class="subtitle-container" data-astro-cid-4ht3nsfd=""> <svg width="0.7vmax" color="springgreen" data-astro-cid-4ht3nsfd="true" data-encore-id="icon" role="img" aria-hidden="false" class="Svg-sc-ytk21e-0 kLkTcI cSWBDsMjkH62GXIXo6mQ" viewBox="0 0 16 16"> <title>Fijada</title> <path fill="currentColor" d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path> </svg> <span class="subtitle" data-astro-cid-4ht3nsfd="">Playlist - ${initialLetterOfEachWord}</span> </div> </div> <svg class="volume-icon2" data-astro-cid-4ht3nsfd="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M9 17v-13h10v13"></path><path d="M9 8h10"></path></svg> </aside>`;

  const $sideBarPlaylist = document.querySelector('.sidebarPlaylist');
  $sideBarPlaylist.insertAdjacentHTML('beforeend', text);
}

export function obtenerElementoAleatorio(arr) {
  const indiceAleatorio = Math.floor(Math.random() * arr.length);
  return arr[indiceAleatorio];
}
