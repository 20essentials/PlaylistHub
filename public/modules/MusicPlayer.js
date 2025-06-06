import { emitEvent } from './emitter.js';
import { formatTime } from './formatTime.js';
import { togglePlayIcon } from './ui/play.js';
import { shuffle } from './shuffle.js';
import { MusicList } from './MusicList.js';
import { convertInValidSlug } from './generalUtils.js';
import {
  existThisSongInTheCurrentPlaylist,
  FAVORITE_SLUG
} from './localStorage.js';

const getPlaylistInfo = playlistName => {
  const playlists = [...document.querySelectorAll('.playlist-item')];
  const selectedPlaylist = playlists.find(
    playlist => playlist.dataset.id === playlistName
  );
  const color = selectedPlaylist.dataset.color;
  const title = selectedPlaylist.querySelector('.title').textContent;

  return { color, title };
};

const shuffleButton = document.querySelector('.song-player-container .shuffle');
const repeatButton = document.querySelector('.song-player-container .repeat');

export class MusicPlayer {
  songList = [];
  currentSongIndex = 0;
  currentSong = new Audio();
  musicList = new MusicList();
  globalVolume = 1;
  lastVolume = 1;
  originalPlaylist = [];

  constructor(playlistName = 'Electronic', id = 1) {
    this.musicList.get(playlistName).then(songs => {
      if (id > songs.length || id < 1 || isNaN(Number(id))) {
        id = 1;
      }
      const { color, title, imgSrc } = getPlaylistInfo(playlistName);

      this.selectList(playlistName, title, color, imgSrc);

      const [_, durationTag] = document.querySelectorAll(
        '.song-player-container time'
      );
      this.durationTag = durationTag;
      this.updateList(songs);
      this.setSongs(songs);
      this.prepare(id - 1);
      this.init();
      this.updateList(songs);
      this.sendInfo({ autoplay: false });
      this.lastPlaylistItemClicked = null;
      this.lastSongItemClicked = null;
    });
    this.addMediaSessionEvents();
  }

  init() {
    this.currentSong.addEventListener('timeupdate', ev => {
      const [currentTimeTag, durationTag] = document.querySelectorAll(
        '.song-player-container time'
      );
      const songProgress = document.querySelector('progress-slider#current-song');
      const mstime = ~~ev.target.currentTime;
      const time = formatTime(mstime);
      currentTimeTag.textContent = time;
      const percentage = (mstime * 100) / this.currentSong.duration;

      songProgress.setValue(percentage + 1);
    });

    document.addEventListener('song:changetime', ({ detail }) => {
      const targetCurrentTime = (detail * this.currentSong.duration) / 100;
      this.currentSong.currentTime = targetCurrentTime;
    });

    document.addEventListener('volume:change', ({ detail }) => {
      const newValue = detail / 100;
      this.detectMuteUnmute(newValue);
      this.globalVolume = newValue;
      this.lastVolume = newValue;
      this.updateVolume();
    });

    document.addEventListener('volume:slide', ({ detail }) => {
      const newValue = Math.max(0, Math.min(1, this.globalVolume + detail));
      this.detectMuteUnmute(newValue);
      this.globalVolume = newValue;
      this.lastVolume = newValue;
      this.updateVolume();
    });

    document.addEventListener('mutedByClick', ({ detail }) => {
      const { muteado } = detail;
      if (muteado) {
        this.detectMuteUnmute(0);
        this.globalVolume = 0;
        this.updateVolume();
        document.dispatchEvent(
          new CustomEvent('volumeNewProgress', {
            composed: true,
            bubbles: true,
            detail: { muteado, lastVolume: this.lastVolume }
          })
        );
      } else {
        this.detectMuteUnmute(this.lastVolume);
        this.globalVolume = this.lastVolume;
        this.updateVolume();
        document.dispatchEvent(
          new CustomEvent('volumeNewProgress', {
            composed: true,
            bubbles: true,
            detail: { muteado, lastVolume: this.lastVolume }
          })
        );
      }
    });

    document.addEventListener('song:slidetime', ({ detail }) => {
      const song = this.currentSong;
      if (!song || isNaN(song.duration)) return;

      const deltaSeconds = detail * song.duration;
      const targetCurrentTime = Math.max(
        0,
        Math.min(song.currentTime + deltaSeconds, song.duration)
      );

      song.currentTime = targetCurrentTime;

      const newProgress = (targetCurrentTime / song.duration) * 100;
      const progressSlider = document.querySelector('#current-song');
      if (progressSlider) {
        progressSlider.setValue(newProgress);
      }
    });

    this.currentSong.addEventListener('ended', () => {
      if (this.isRepeat) {
        this.currentSong.currentTime = 0;
        this.currentSong.play();
      } else {
        this.next();
      }
    });
  }

  detectMuteUnmute(detail) {
    if (detail / 100 === 0 && this.globalVolume > 0) {
      emitEvent('volume:mute', document, null);
    } else if (detail / 100 > 0 && this.globalVolume === 0) {
      emitEvent('volume:unmute', document, null);
    }
  }

  get isShuffle() {
    return !shuffleButton.classList.contains('disabled');
  }

  get isRepeat() {
    return !repeatButton.classList.contains('disabled');
  }

  async updateList(songs) {
    return new Promise((resolve, reject) => {
      const songPlaylist = document.querySelector('.song.playlist');
      const oldSongs = songPlaylist.querySelectorAll('song-item');
      const headerDataClass = document.querySelector('.header-data-items-class');
      const existUser = headerDataClass.dataset.lastColumn;
      const displayValueOfLastIcon = existUser === 'TRUE' ? 'flex' : 'none';
      oldSongs.forEach(song => song.remove());

      songs.forEach((song, index) => {
        const currentSidebarPlaylistItem = document.querySelector(
          '.playlist-item-active'
        );
        const attributeIsFromUser =
          currentSidebarPlaylistItem?.getAttribute('data-from-user') ?? 'FALSE';
        const PlaylistItemIsFromUser =
          attributeIsFromUser === 'TRUE' ? 'TRUE' : 'FALSE';

        const attributeIsFavoritePlaylist =
          currentSidebarPlaylistItem?.getAttribute(
            'data-is-playlist-favorites'
          ) ?? 'FALSE';
        const thisSongsIsInfAvoritePlaylist =
          attributeIsFavoritePlaylist === 'TRUE';

        const attrs = Object.entries({ ...song, displayValueOfLastIcon })
          .map(([attr, value]) => `${attr}="${value}"`)
          .join(' ');

        const element = `<song-item index="${index}" ${attrs} playlist-from-user="${PlaylistItemIsFromUser}" data-this-song-is-in-favorite-playlists=${thisSongsIsInfAvoritePlaylist}></song-item>`;
        songPlaylist.insertAdjacentHTML('beforeend', element);
      });
      resolve();
    });
  }

  setSongs(songs) {
    this.songList = songs.map((song, index) => ({ ...song, index }));
    this.originalPlaylist = structuredClone(this.songList);
    if (this.isShuffle) this.sortSongs();
  }

  sortSongs() {
    setTimeout(() => {
      if (this.isShuffle) {
        this.songList = shuffle(this.songList);

        if (localStorage.getItem('sortRandomButtonPressed') === 'TRUE') {
          (async () => {
            const playlistName = this.musicList.currentId;
            // const songs = await this.musicList.get(playlistName);
            const { color, title, imgSrc } = getPlaylistInfo(playlistName);
            await this.selectList(playlistName, title, color, imgSrc);
            await this.updateList(this.songList);
            localStorage.setItem('sortRandomButtonPressed', 'FALSE');
            ///Agregado o quitado del icon Playlist
            const $ = el => document.querySelector(el);
            const headerDataClass = $('.header-data-items-class');
            const existUser = headerDataClass.dataset.lastColumn;
            const songItems = document.querySelectorAll('song-item');
            songItems.forEach(el => {
              const row = el.shadowRoot?.querySelector('.row-item');
              const isFlex = el.getAttribute('displayValueOfLastIcon');
              const playListIcon = row?.querySelector('.playlist-icon');
              if (existUser === 'true' || isFlex === 'flex') {
                playListIcon?.classList.remove('escondido');
                return;
              }

              playListIcon?.classList.toggle('escondido', true);
            });

            //Agregar el ultijo rowItem

            setTimeout(() => {
              const songItems = document.querySelectorAll('song-item');

              const matchingElement = Array.from(songItems).find(item => {
                const internal = item.shadowRoot.querySelector(
                  '.row-item.title-green'
                );
                return internal !== null;
              });

              const rowItem =
                matchingElement?.shadowRoot.querySelector('.row-item');

              if (!rowItem) return;

              this.lastSongItemClicked = rowItem;
            }, 400);
          })();
        }

        this.currentSongIndex = this.songList.findIndex(
          ({ index }) => index === this.currentSongIndex
        );
      } else {
        this.songList = structuredClone(this.originalPlaylist);
        this.originalPlaylist = structuredClone(this.songList);
        this.currentSongIndex = Number(this.currentSong.dataset.index);
      }
    }, 100);
  }

  prepare(index) {
    if (this.songList.length === 0) return;
    this.currentSongIndex = index;
    const song = this.songList[this.currentSongIndex];
    this.currentSong.src = song.urlSong;
    this.currentSong.setAttribute('data-index', song.index);
    this.durationTag.textContent = this.songList[this.currentSongIndex].duration;
  }

  updateItemClicked({ ButtonTitle, artist, album }) {
    const dataIdOfThePlaylistItem = convertInValidSlug(album);

    const currentPlaylistButton = document.querySelector(
      `.playlist-item[data-id=${dataIdOfThePlaylistItem}]`
    );

    this.lastPlaylistItemClicked?.classList.remove('title-green');
    currentPlaylistButton?.classList.add('title-green');

    const $sideBarPlaylist = document.querySelector('.sidebarPlaylist');
    const lastIndexOfPlaylistItemClicked = [...$sideBarPlaylist.children].indexOf(
      currentPlaylistButton
    );
    const globalPlaylistLength = [...$sideBarPlaylist.children].filter(
      playlist => playlist.getAttribute('data-from-user') === 'FALSE'
    ).length;

    if (
      lastIndexOfPlaylistItemClicked >= 0 &&
      lastIndexOfPlaylistItemClicked < globalPlaylistLength
    ) {
      localStorage.setItem(
        'lastIndexOfPlaylistItemClicked',
        `${lastIndexOfPlaylistItemClicked}`
      );
    }
    this.lastPlaylistItemClicked = currentPlaylistButton;

    //Song Item Playlist Green
    const SongItem = document.querySelector(
      `song-item[title="${CSS.escape(ButtonTitle)}"][artist="${CSS.escape(
        artist
      )}"]`
    );
    if (!SongItem) return;
    const $row = SongItem.shadowRoot?.querySelector('.row-item');

    this.lastSongItemClicked?.classList.remove('title-green');
    $row.classList?.add('title-green');
    this.lastSongItemClicked = $row;
  }

  updateMetadata({ title, artist, urlPoster, album }) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      artwork: [
        {
          src: urlPoster,
          sizes: '128x128',
          type: 'image/avif'
        }
      ]
    });

    this.updateItemClicked({ ButtonTitle: title, artist, album });
  }

  addMediaSessionEvents() {
    navigator.mediaSession.setActionHandler('play', () => {
      this.currentSong.play();
      this.togglePlayPause();
      navigator.mediaSession.playbackState = 'playing';
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      this.currentSong.pause();
      this.togglePlayPause();
      navigator.mediaSession.playbackState = 'paused';
    });

    navigator.mediaSession.setActionHandler('seekbackward', details => {
      this.currentSong.currentTime = Math.max(
        this.currentSong.currentTime - 10,
        0
      );
    });

    navigator.mediaSession.setActionHandler('seekforward', details => {
      this.currentSong.currentTime = Math.min(
        this.currentSong.currentTime + 10,
        this.currentSong.duration
      );
    });

    navigator.mediaSession.setActionHandler('seekto', details => {
      if (details.fastSeek && 'fastSeek' in this.currentSong) {
        this.currentSong.fastSeek(details.seekTime);
      } else {
        this.currentSong.currentTime = details.seekTime;
      }
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
      this.nextSong();
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
      this.prev();
    });
  }

  getInfoSong() {
    return this.songList[this.currentSongIndex];
  }

  play() {
    const song = this.songList[this.currentSongIndex];
    const { title, artist, urlPoster, urlSong, album } = song;
    this.updateMetadata({ title, artist, urlPoster, album });
    document.title = `${title} - ${artist}`;

    this.updateVolume();
    if (this.currentSong.paused) {
      const isResume = this.currentSong.currentTime < 1;
      this.currentSong.play();
      if (isResume) this.sendInfo();
    } else this.currentSong.pause();

    this.togglePlayPause();
  }

  updateVolume() {
    this.currentSong.volume = this.globalVolume;
  }

  togglePlayPause(forcePause = false) {
    if (!forcePause) {
      togglePlayIcon();
    } else {
      togglePlayIcon(false);
    }
  }

  async selectList(slug, title, color) {
    const songs = await this.musicList.select(slug, title, color);
    await this.updateList(songs);
  }

  next() {
    const isEndPlaylist = this.currentSongIndex + 1 === this.songList.length;
    if (isEndPlaylist && !this.isRepeat) this.nextList();
    else this.nextSong();
  }

  nextSong() {
    const index = (this.currentSongIndex + 1) % this.songList.length;
    this.prepare(index);
    this.play();
    this.togglePlayPause(true);
    //New
    const { title, artist } = this.getInfoSong();
    const existInFavoritesBrands = existThisSongInTheCurrentPlaylist(
      FAVORITE_SLUG,
      {
        title,
        artist
      }
    );

    emitEvent('updateNewSongInFavoriteBrands', document, {
      title,
      artist,
      updating: existInFavoritesBrands
    });
  }

  setCurrentSongIndex(newSongIndex) {
    this.currentSongIndex = newSongIndex;
  }

  async nextList(forcePlay = true) {
    const { slug, title, color } = await this.musicList.next();
    await this.selectList(slug, title, color);
    this.setSongs(this.musicList.getCurrent());
    this.currentSongIndex = -1;
    forcePlay && this.nextSong();
    setTimeout(() => {
      const currentPlaylistItem = document.querySelector(
        '.playlist-item.title-green'
      );
      document
        .querySelectorAll('.playlist-item-active')
        .forEach(el => el.classList.remove('playlist-item-active'));
      currentPlaylistItem?.classList.add('playlist-item-active');
      currentPlaylistItem?.click();
    }, 15);
  }

  async prevList(forcePlay = true) {
    const { slug, title, color } = await this.musicList.prev();
    await this.selectList(slug, title, color);
    this.setSongs(this.musicList.getCurrent());
    this.currentSongIndex = -1;
    forcePlay && this.nextSong();
  }

  prev() {
    const index =
      this.currentSongIndex - 1 < 0
        ? this.songList.length - 1
        : this.currentSongIndex - 1;
    this.prepare(index);
    this.play();
    this.togglePlayPause(true);
    //New
    const { title, artist } = this.getInfoSong();
    const existInFavoritesBrands = existThisSongInTheCurrentPlaylist(
      FAVORITE_SLUG,
      {
        title,
        artist
      }
    );

    emitEvent('updateNewSongInFavoriteBrands', document, {
      title,
      artist,
      updating: existInFavoritesBrands
    });
  }

  sendInfo(options = { autoplay: true }) {
    emitEvent('player:update-info', document, {
      autoplay: options.autoplay,
      songData: this.songList[this.currentSongIndex]
    });
  }
}
