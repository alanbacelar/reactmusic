import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout from 'layout/containers/LayoutContainer.jsx';

import PlaylistContainer from 'playlist/containers/PlaylistContainer.jsx';
import SongsContainer from 'songs/containers/SongsContainer.jsx';

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<Route path="playlist/:user_id/:playlist_id" component={PlaylistContainer} />
					<Route path="songs" component={SongsContainer} />
				</Route>
			</Router>
		);
	}
}
