import React from 'react';
import PlayerContainer from 'player/containers/PlayerContainer.jsx';

class Footer extends React.Component {

	render() {
		return (
			<footer className="footer bg-dark">
        		<PlayerContainer />
      		</footer>
		);
	}

}

export default Footer;