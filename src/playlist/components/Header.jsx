import React from 'react';
import PlayerActions from 'actions/PlayerActions.js';

class Header extends React.Component {

  getFollowers() {
    if (!this.props.data.followers) {
      return null;
    }

    return (<span className="pull-right text-sm">{this.props.data.followers.total} <br />Followers</span>);
  }

  play() {
    let data = this.props.data;
    let tracks = data.tracks;
    let playlist = data.playlist;
    let track = (tracks.items[0] || {}).track || {};

    PlayerActions.playNew(track, tracks, data);
  }

	render() {
    let name = this.props.data.name;
    let images = this.props.data.images;
    let coverImage = 'https://www.gravatar.com/avatar/2?d=retro';

    if (images.length) {
      coverImage = (images[0]) ? images[0].url : coverImage;
    }

    return (
			<div className="m-t-n-xxs item pos-rlt">
        <div className="bottom gd bg-info wrapper-lg">
          
          <div className="row">
            <div className="col-md-4"><span className="h2 font-thin">{name}</span></div>
            <div className="col-md-4"><button className="btn btn-s-md btn-success btn-rounded" onClick={this.play.bind(this)}>Play</button></div>
            <div className="col-md-4">{this.getFollowers()}</div>
          </div>
        </div>


        <img src={coverImage} height="200" />
      </div>
		);	

	}
}

export default Header;