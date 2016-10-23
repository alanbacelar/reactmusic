import Store from './Store.js';
import ActionTypes from '../actions/ActionTypes.js';
import {App} from '../constants.js';
import SpotifyApi from 'api/SpotifyApi.js';

class SongStore extends Store {
	register(action) {
		switch(action.actionType) {
			case ActionTypes.USER_LOGGED_IN:
			break;
		}
	}

	getMySongs() {
		return SpotifyApi.getMySongs();
	}
}

module.exports = new SongStore;