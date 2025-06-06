import { existsPlaylist, getPlaylistAsArray } from './localStorage.js';

export class MusicList {
  constructor() {
    this.playLists = {};
    this.currentId = 'electronic';
  }

  async get(slug) {
    //Existe esta playlist en el localStorage
    if (existsPlaylist(slug)) {
      return getPlaylistAsArray(slug);
    }

    //If no existe en el LOCALSTORAGE lo traigo de un file
    if (!this.playLists[slug]) {
      const playList = await fetch(`./data/${slug}.json`).then(response =>
        response.json()
      );
      this.playLists[slug] = playList;
      return playList;
    }
    return this.playLists[slug];
  }

  getCurrent() {
    return this.playLists[this.currentId];
  }

  async select(slug, title, color ) {
    document.body.style.setProperty('--theme-color', color);
    const songs = await this.get(slug, title);
    const listHeader = document.querySelector('list-header');
    listHeader.setData(title, songs);
    this.currentId = slug;
    return songs;
  }

  async prev() {
    return new Promise((resolve, reject) => {
      const lists = [
        ...document.querySelectorAll('.main-sidebar .playlist .playlist-item')
      ];
      const nextIndex =
        lists.findIndex(list => list.dataset.id === this.currentId) - 1;
      const nextListIndex = nextIndex >= 0 ? nextIndex : lists.length - 1;
      const slug = lists[nextListIndex].dataset.id;
      const color = lists[nextListIndex].dataset.color;
      const title = lists[nextListIndex].querySelector('.title').textContent;
      resolve({ slug, title, color });
    });
  }

  async next() {
    return new Promise((resolve, reject) => {
      const lists = [
        ...document.querySelectorAll('.main-sidebar .playlist .playlist-item')
      ];
      const currentIdTocando = document.querySelector(
        '.playlist-item.title-green'
      ).dataset.id;
      const nextListIndex =
        (lists.findIndex(list => list.dataset.id === currentIdTocando) + 1) %
        lists.length;
      const slug = lists[nextListIndex].dataset.id;
      const color = lists[nextListIndex].dataset.color;
      const title = lists[nextListIndex].querySelector('.title').textContent;
      resolve({ slug, title, color });
    });
  }
}
