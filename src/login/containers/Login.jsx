import React from 'react';
import LoginActions from 'actions/LoginActions.js';
import {App} from 'constants.js';

class Login extends React.Component {

	componentDidMount() {
		window.addEventListener("message", this.onGetAccessToken.bind(this), false);
	}

	onGetAccessToken(event) {
		LoginActions.loggedIn(event.data);
	}

	getLoginURL(scopes) {
		return 'https://accounts.spotify.com/authorize?client_id=' + App.CLIENT_ID
			+ '&redirect_uri=' + encodeURIComponent(App.REDIRECT_URI)
			+ '&scope=' + encodeURIComponent(scopes.join(' '))
			+ '&response_type=token';
	}

	login() {
		let url = this.getLoginURL([
			'user-read-private',
			'playlist-read-private',
			'playlist-modify-public',
			'playlist-modify-private',
			'user-library-read',
			'user-library-modify',
			'user-follow-read',
			'user-follow-modify'
		]);

		window.open(url);
	}

	render() {
		return (
			<div className="bg-info dker">
				<section id="content" className="m-t-lg wrapper-md animated fadeInUp">    
				    <div className="container aside-xl">
				      <a className="navbar-brand block" href="/">
				      	<span className="h1 font-bold">ReactMusic</span>
				      </a>

				      <section className="m-b-lg">
				        <header className="wrapper text-center">
				          <strong>Sign in to get in touch</strong>
				        </header>
				        <form>
				          <button 
				          	type="button" 
				          	onClick={this.login.bind(this)} 
				          	className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded">
				          	<i className="icon-arrow-right pull-right"></i>
				          	<span className="m-r-n-lg">Sign in Spotify</span>
				          </button>

				          <div className="line line-dashed"></div>
				          <p className="text-muted text-center"><small>Do not have an account?</small></p>
				          <a href="https://www.spotify.com" target="_black" className="btn btn-lg btn-info btn-block rounded">Create an account</a>
				        </form>
				      </section>
				    </div>
				</section>

				<footer id="footer">
				    <div className="text-center padder">
				      <p>
				        <small>ReactJS Spotify Clone<br/>&copy; 2016</small>
				      </p>
				    </div>
				</footer>
			</div>
		);
	}

}

export default Login;
