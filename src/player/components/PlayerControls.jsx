import React from 'react';
import Sound from 'react-sound';
import PlayerStore from 'stores/PlayerStore.js';
import PlayerActions from 'actions/PlayerActions.js';
import {Link} from 'react-router';

class PlayerControls extends React.Component {

  constructor() {
    super();
    this.state = this.getState();

    PlayerStore.addChangeListener(this.updateState.bind(this));

    window.onbeforeunload = (e) => {
        if (this.state.trackStatus == Sound.status.PLAYING) {
          this.pause();
        }
    };
  }

  componentWillMount() {
    this.updateState();
  }

  componentWillUnmount() {
    PlayerStore.removeChangeListener(this.updateState.bind(this));
  }

  getState() {
    let playlist = PlayerStore.getPlaylist();
    let track = PlayerStore.getActiveTrack();
    let tracks = PlayerStore.getActiveTracks();
    let trackStatus = PlayerStore.getActiveTrackStatus();

    return {
      playlist: playlist,
      noPlaylistClassName: (!track) ? 'no-track' : '',
      track: track,
      tracks: tracks,
      trackStatus: trackStatus,
      sound: this.getSound(track.preview_url, trackStatus)
    }
  }

  updateState() {
    this.setState(this.getState());
  }

  getSound(url, status) {
    if (url) {
      return <Sound url={url} playStatus={status} onFinishedPlaying={this.handleSongFinishedPlaying.bind(this)} />;  
    }

    return null;
  }

  handleSongFinishedPlaying(e) {
    PlayerActions.stop();
    this.forward();
  }

  getPlayButton() {
    let button = (<a className={`jp-play ${this.state.noPlaylistClassName}`} onClick={this.play.bind(this)}><i className="icon-control-play i-2x"></i></a>);
    
    if (this.state.trackStatus == Sound.status.PLAYING) {
      button = (<a className={`jp-pause ${this.state.noPlaylistClassName}`} onClick={this.pause.bind(this)}><i className="icon-control-pause i-2x"></i></a>);
    }
    
    return (<div>{button}</div>);
  }

  getStopButton() {
    return (
      <div>
        <a className={`jp-stop ${this.state.noPlaylistClassName}`} onClick={this.stop.bind(this)}><i className="fa fa-stop"></i></a>
      </div>
    );
  }

  play() {
    PlayerActions.play();
  }

  pause() {
    PlayerActions.pause();
  }

  stop() {
    PlayerActions.stop();
  }

  getNextTrack() {
    let activeTrack = this.state.track;
    let items = this.state.tracks.items;

    return items.reduce((previous, current, index) => {
      if (current.track.id == activeTrack.id) {
        let item = items[++index] || {};
        return (item.track) ? item.track : {};
      }

      return previous;
    }, {});
  }

  getPreviousTrack() {
    let activeTrack = this.state.track;
    let items = this.state.tracks.items;

    return items.reduce((previous, current, index) => {
      if (current.track.id == activeTrack.id) {
        let item = items[--index] || {};
        return (item.track) ? item.track : {};
      }

      return previous;
    }, {});
  }

  forward() {
    let nextTrack = this.getNextTrack() || {};

    if (nextTrack.id) {
      PlayerActions.playNew(nextTrack, this.state.tracks, this.state.playlist);  
    }
  }

  rewind() {
    let previousTrack = this.getPreviousTrack() || {};

    if (previousTrack.id) {
      PlayerActions.playNew(previousTrack, this.state.tracks, this.state.playlist);  
    }
  }

  render() {
    let item = this.state.playlist || {};
    let owner = item.owner || {};
    let link = (owner.id) ? `/playlist/${owner.id}/${item.id}` : '/songs';

    return (
        <div className="jp-controls">
          <div>
            <a className={`jp-previous ${this.state.noPlaylistClassName}`} onClick={this.rewind.bind(this)}><i className="icon-control-rewind i-lg"></i></a>
          </div>

          {this.getPlayButton()}

          <div>
            <a className={`jp-next ${this.state.noPlaylistClassName}`} onClick={this.forward.bind(this)}><i className="icon-control-forward i-lg"></i></a>
          </div>
          
          {this.getStopButton()}

          <div>
            <Link to={link} className={`${this.state.noPlaylistClassName}`}>
                <i className="icon-list"></i>
            </Link>
          </div>
          
          <div className="jp-progress hidden-xs">
            <div className="jp-seek-bar dk">
              <div className="jp-title text-lt">
                {this.state.track.name || '--'}
              </div>
            </div>
          </div>
          
          {this.state.sound}
        </div>
    );

  }
}

export default PlayerControls;