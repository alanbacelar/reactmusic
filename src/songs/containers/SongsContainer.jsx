import React from 'react';

import Header from 'playlist/components/Header.jsx';
import Tracks from 'playlist/components/Tracks.jsx';
import SongStore from 'stores/SongStore.js';

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
		SongStore.getMySongs().then(this.updateState.bind(this));
	}

	updateState(tracks) {
		this.setState({
			data: {name: 'Songs', images: [], tracks: tracks},
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