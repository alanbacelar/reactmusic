import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import PlaylistContainer from 'playlist/containers/PlaylistContainer.jsx';
import Layout from 'layout/containers/LayoutContainer.jsx';

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<Route path="playlist/:user_id/:playlist_id" component={PlaylistContainer} />
				</Route>
			</Router>
		);
	}
}
