import React from 'react';
import Routes from './Routes.jsx';
import Login from './login/containers/Login.jsx';
import SpotifyStore from './stores/LoginStore.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isUserLoggedIn: false};

		SpotifyStore.addChangeListener(this.updateState.bind(this));
	}

	componentWillMount() {
		this.updateState();
	}

	componentWillUnMount() {
		SpotifyStore.removeChangeListener(this.updateState.bind(this));
	}

	updateState() {
		this.setState({
			isUserLoggedIn: SpotifyStore.isUserLoggedIn()
		});
	}

	render() {
		return (this.state.isUserLoggedIn) ? <Routes /> : <Login />;
	}
}

export default App;
