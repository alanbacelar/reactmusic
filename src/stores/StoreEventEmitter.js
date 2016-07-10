import EventEmitter from 'events';
import {EventTypes} from '../constants.js';

class StoreEventEmitter extends EventEmitter {
	emitChange() {
		this.emit(EventTypes.CHANGE);
		console.info(`a new change event was emitted for ${this.constructor.name}`);
	}

	addChangeListener(callback) {
		this.on(EventTypes.CHANGE, callback);
		console.info(`a new change event was registered in ${this.constructor.name}`);
	}

	removeChangeListener(callback) {
		this.removeListener(EventTypes.CHANGE, callback);
		console.info(`a new change event was removed in ${this.constructor.name}`);
	}
}

export default StoreEventEmitter;