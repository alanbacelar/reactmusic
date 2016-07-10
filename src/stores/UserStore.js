import Store from './Store.js';
import ActionTypes from '../actions/ActionTypes.js';
import {App} from '../constants.js';
import SpotifyApi from 'api/SpotifyApi.js';

class UserStore extends Store {
	register(action) {
		switch(action.actionType) {
			case ActionTypes.USER_LOGGED_IN:
			break;
		}
	}

	me() {
		return SpotifyApi.me();
	}
}

module.exports = new UserStore;