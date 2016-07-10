import Store from './Store.js';
import ActionTypes from '../actions/ActionTypes.js';
import {App} from '../constants.js';
import SpotifyApi from 'api/SpotifyApi.js';

class PlaylistStore extends Store {
	register(action) {
		switch(action.actionType) {
			case ActionTypes.USER_LOGGED_IN:
			break;
		}
	}

	getAll() {
		return SpotifyApi.getPlaylists();
	}

	get(user_id, playlist_id) {
		return SpotifyApi.getPlaylist(user_id, playlist_id);
	}
}

module.exports = new PlaylistStore;