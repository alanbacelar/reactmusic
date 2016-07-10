import React from 'react';

import PlayerControls from 'player/components/PlayerControls.jsx';
import PlaylistStore from 'stores/PlaylistStore.js';

class PlayerContainer extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div id="jp_container_N">
	          <div className="jp-type-playlist">
	            <div className="jp-gui">
	              <div className="jp-interface">
	                <PlayerControls />
	              </div>
	            </div>
	          </div>
	      </div>
		);
	}

}

export default PlayerContainer;