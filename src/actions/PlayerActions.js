import Action from './Actions.js';
import ActionTypes from './ActionTypes.js';

class PlayerActions extends Action {

	playNew(track, tracks, playlist) {
		this.dispatch(ActionTypes.PLAY_NEW, {track, tracks, playlist});
	}

	play() {
		this.dispatch(ActionTypes.PLAY);
	}

	pause() {
		this.dispatch(ActionTypes.PAUSE);
	}

	stop() {
		this.dispatch(ActionTypes.STOP);
	}

}

module.exports = new PlayerActions;