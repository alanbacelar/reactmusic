import React from 'react';

import Header from '../components/Header.jsx';
import Tracks from '../components/Tracks.jsx';
import PlaylistStore from 'stores/PlaylistStore.js';

class PlaylistContainer extends React.Component {

	constructor() {
		super();
		this.state = {loaded: false, data: {}};
	}

	componentWillReceiveProps(nextProps) {
		this.updateData(nextProps.params);
	}

	componentWillMount() {
		this.updateData(this.props.params);
	}

	updateData(params) {
		PlaylistStore.get(params.user_id, params.playlist_id).then(this.updateState.bind(this));
	}

	updateState(data) {
		this.setState({
			data: data,
			loaded: true
		});
	}

	render() {
		let params = this.props.params;

		if (this.state.loaded) {
			return (
				<section className="vbox">
		          <section className="w-f-md">
		            <section className="hbox stretch bg-black dker">
		              <aside className="col-sm-5 no-padder" id="sidebar">
		                <section className="vbox animated fadeInUp">
		                  <section className="scrollable">

		                    <Header data={this.state.data} />
		                    <Tracks tracks={this.state.data.tracks} playlist={this.state.data} />
		                    
		                  </section>
		                </section>
		              </aside>
		            </section>
		           </section>
		    	</section>
			);
		}
			
		return null;
	}

}

export default PlaylistContainer;