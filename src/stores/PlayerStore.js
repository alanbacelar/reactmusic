import Store from './Store.js';
import ActionTypes from '../actions/ActionTypes.js';
import {App} from '../constants.js';
import SpotifyApi from 'api/SpotifyApi.js';
import Sound from 'react-sound';

class PlayerStore extends Store {
	register(action) {
		switch(action.actionType) {
			case ActionTypes.PLAY_NEW:
			this.playNew(action.track, action.tracks, action.playlist);
			break;

			case ActionTypes.PLAY:
			this.play();
			break;

			case ActionTypes.PAUSE:
			this.pause();
			break;

			case ActionTypes.STOP:
			this.stop();
			break;
		}
	}

	playNew(track, tracks, playlist) {
		localStorage.setItem(App.TRACKS_KEY, JSON.stringify(tracks));
		localStorage.setItem(App.ACTIVE_TRACK_KEY, JSON.stringify(track));
		localStorage.setItem(App.ACTIVE_TRACK_STATUS_KEY, Sound.status.PLAYING);
		localStorage.setItem(App.ACTIVE_PLAYLIST_KEY, JSON.stringify(playlist));

		this.emitChange();
	}

	play() {
		localStorage.setItem(App.ACTIVE_TRACK_STATUS_KEY, Sound.status.PLAYING);
		this.emitChange();
	}

	pause() {
		localStorage.setItem(App.ACTIVE_TRACK_STATUS_KEY, Sound.status.PAUSED);
		this.emitChange();
	}

	stop() {
		localStorage.setItem(App.ACTIVE_TRACK_STATUS_KEY, Sound.status.STOPPED);
		this.emitChange();
	}

	getActiveTracks() {
		return JSON.parse(localStorage.getItem(App.TRACKS_KEY)) || false;
	}

	getActiveTrack() {
		return JSON.parse(localStorage.getItem(App.ACTIVE_TRACK_KEY)) || false;
	}

	getActiveTrackStatus() {
		return localStorage.getItem(App.ACTIVE_TRACK_STATUS_KEY) || Sound.status.STOP;
	}

	getPlaylist() {
		return JSON.parse(localStorage.getItem(App.ACTIVE_PLAYLIST_KEY)) || false;
	}
}

module.exports = new PlayerStore;