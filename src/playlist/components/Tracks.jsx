import React from 'react';
import Sound from 'react-sound';
import moment from 'moment';

import PlayerStore from 'stores/PlayerStore.js';
import PlayerActions from 'actions/PlayerActions.js';

class Tracks extends React.Component {

  constructor() {
    super();
    this.state = {status: Sound.status.STOP, track: {}};

    PlayerStore.addChangeListener(this.updateState.bind(this));
  }

  componentWillMount() {
    this.updateState();
  }

  componentWillUnmount() {
    PlayerStore.removeChangeListener(this.updateState.bind(this));
  }

  updateState() {
    let track = PlayerStore.getActiveTrack() || {};
    let trackStatus = PlayerStore.getActiveTrackStatus();

    this.setState({track, trackStatus});
  }

  getPlayButton(track) {
    let playButton = (<i className="icon-control-play text" onClick={this.handlePlay.bind(this, track)}></i>);

    if (this.state.trackStatus === Sound.status.PLAYING && this.state.track.id == track.id) {
      playButton = (<i className="icon-control-pause text" onClick={this.handlePause.bind(this, track)}></i>);
    }

    return playButton;
  }

  getTrackItem(item, key) {
    let track = item.track;
    let duration = moment.utc(track.duration_ms).format("mm:ss");

    return (
      <li className="list-group-item" key={key}>
          {/*<div className="pull-right m-l">
            <a href="javascript:void(0)" className="m-r-sm"><i className="icon-plus"></i></a>
            <a href="javascript:void(0)"><i className="icon-close"></i></a>
          </div>*/}

          <a href="javascript:void(0)" className="jp-play-me m-r-sm pull-left">
            {this.getPlayButton(track)}
          </a>

          <div className="clear text-ellipsis">
            <span>{track.name}</span>
            <span className="text-muted"> --  {duration}</span>
          </div>
      </li>
    );
  }

  getTracksItems() {
    let tracks = this.props.tracks;
    let items = tracks.items;

    return items.map((item, key) => this.getTrackItem(item, key));
  }

  handlePlay(track) {
    PlayerActions.playNew(track, this.props.tracks, this.props.playlist);
  }

  handlePause(track) {
    PlayerActions.pause();
  }

	render() {

		return (
			<ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto playlist-tracks">
        {this.getTracksItems()}
      </ul>
		);

	}
}

export default Tracks;