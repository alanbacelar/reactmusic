import Dispatcher from '../dispatcher';
import StoreEventEmitter from './StoreEventEmitter';

class Store extends StoreEventEmitter {
	constructor() {
		super();
		this._dispatcherIndex = Dispatcher.register(this.register.bind(this));
	}

	register(action) {}
}

export default Store;