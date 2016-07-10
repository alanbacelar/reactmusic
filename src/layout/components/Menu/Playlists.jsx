import React from 'react';
import PlaylistStore from 'stores/PlaylistStore.js';
import {Link} from 'react-router';

class Playlists extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: [], loaded: false};
	}

	componentWillMount() {
		PlaylistStore.getAll().then(this.updateState.bind(this));
	}

	updateState(data) {
		this.setState({items: data.items, loaded: true});
	}

	getMenu() {
		return this.state.items.map((item, index) => {
			let link = `/playlist/${item.owner.id}/${item.id}`;

			return (
				<li key={index}>
					<Link to={link}>
		                <i className="icon-music-tone icon"></i>
		                <span>{item.name}</span>
		          	</Link>
	          	</li>
			);
		});
	}

	render() {
		let menuItems = (<li className="text-center"><span>Loading...</span></li>);

		if (this.state.loaded) {
			menuItems = this.getMenu();
		}

		return (
			<ul className="nav text-sm">
                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                  PLAYLISTS
                </li>

                {menuItems}
           	</ul>
		);
	}

}

export default Playlists;