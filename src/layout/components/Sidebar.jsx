import React from 'react';
import Playlists from './Menu/Playlists.jsx';

class Sidebar extends React.Component {

	render() {
		return (
			<aside className="bg-black dk aside hidden-print" id="nav">          
	          <section className="vbox">
	            <section className="w-f-md scrollable">
	              <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
	                <nav className="nav-primary hidden-xs">
	                  <ul className="nav bg clearfix">
	                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
	                      MAIN
	                    </li>
	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-disc icon text-success"></i>
	                        <span className="font-bold">Browser</span>
	                      </a>
	                    </li>
	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-music-tone-alt icon text-info"></i>
	                        <span className="font-bold">Radio</span>
	                      </a>
	                    </li>
	                    
	                    <li className="m-b hidden-nav-xs"></li>
	                  </ul>

	                  <ul className="nav" data-ride="collapse">
	                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
	                      YOUR MUSIC
	                    </li>

	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-disc icon text-success"></i>
	                        <span className="font-bold">Songs</span>
	                      </a>
	                    </li>
	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-music-tone-alt icon text-info"></i>
	                        <span className="font-bold">Albums</span>
	                      </a>
	                    </li>

	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-music-tone-alt icon text-info"></i>
	                        <span className="font-bold">Artists</span>
	                      </a>
	                    </li>

	                    <li>
	                      <a href="javascript:void(0)">
	                        <i className="icon-music-tone-alt icon text-info"></i>
	                        <span className="font-bold">Stations</span>
	                      </a>
	                    </li>

	                    <li className="m-b hidden-nav-xs"></li>

	                  </ul>
	                  
	                  <Playlists />
	                </nav>
	              </div>
	            </section>
	          </section>
	         
	        </aside>
		);
	}

}

export default Sidebar;