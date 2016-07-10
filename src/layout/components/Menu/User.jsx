import React from 'react';
import UserStore from 'stores/UserStore.js';
import {Link} from 'react-router';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loaded: false, user: {}};
	}

	componentWillMount() {
		UserStore.me().then(this.updateState.bind(this));
	}

	updateState(data) {
		this.setState({user: data, loaded: true});
	}

	getUserImage() {
		let userImages = this.state.user.images || [];
		let image = userImages[0] || {};

		return image.url || '';
	}

	render() {
		if (this.state.loaded) {
			return (
				<li className="dropdown">
		            <a href="javascript:void(0)" className="dropdown-toggle bg clear" data-toggle="dropdown">
		              <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
		                <img src={this.getUserImage()} alt="..." />
		              </span>

		              {this.state.user.display_name}
		            </a>
		        </li>
			);
		}
			
		return null;
	}

}

export default User;