import Store from './Store.js';
import ActionTypes from '../actions/ActionTypes.js';
import {App} from '../constants.js';

class LoginStore extends Store {
	register(action) {

		switch(action.actionType) {
			case ActionTypes.USER_LOGGED_IN:
			this.login(action.token);
			break;

			case ActionTypes.USER_LOGGED_OUT:
			this.logout();
			break;
		}
	}

	isUserLoggedIn() {
		return !!localStorage.getItem(App.SECURITY_KEY);
	}

	login(token) {
		localStorage.setItem(App.SECURITY_KEY, token);
		this.emitChange();
	}

	logout() {
		localStorage.removeItem(App.SECURITY_KEY);
		this.emitChange();
	}
}

module.exports = new LoginStore;