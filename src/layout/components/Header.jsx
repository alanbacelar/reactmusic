import React from 'react';
import UserMenu from 'layout/components/Menu/User.jsx';

class Header extends React.Component {

	render() {
		return (
			<header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
		      <div className="navbar-header aside bg-success">
		        <a className="btn btn-link visible-xs">
		          <i className="icon-list"></i>
		        </a>

		        <a href="/" className="navbar-brand text-lt">
		          <i className="icon-earphones"></i>
		          <span className="hidden-nav-xs m-l-sm">ReactMusic</span>
		        </a>

		        <a className="btn btn-link visible-xs">
		          <i className="icon-settings"></i>
		        </a>
		      </div>

		      <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
		        <div className="form-group">
		          <div className="input-group">
		            <span className="input-group-btn">
		              <button type="submit" className="btn btn-sm bg-white btn-icon rounded"><i className="fa fa-search"></i></button>
		            </span>
		            <input type="text" className="form-control input-sm no-border rounded" placeholder="Search songs, albums..." />
		          </div>
		        </div>
		      </form>

		      <div className="navbar-right ">
		        <ul className="nav navbar-nav m-n hidden-xs nav-user user">

		          <UserMenu />
		        </ul>
		      </div>      
		    </header>
		);
	}

}

export default Header;