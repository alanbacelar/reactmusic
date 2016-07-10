import Action from './Actions.js';
import ActionTypes from './ActionTypes.js';

class LoginActions extends Action {

	loggedIn(token) {
		this.dispatch(ActionTypes.USER_LOGGED_IN, {token});
	}

	loggedOut() {
		this.dispatch(ActionTypes.USER_LOGGED_OUT);
	}

}

module.exports = new LoginActions;