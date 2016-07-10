import Dispatcher from 'dispatcher.js';

export default class Action {

	dispatch(actionType, data) {
		Dispatcher.dispatch({
			actionType: actionType,
			...data
		});
	}

}
