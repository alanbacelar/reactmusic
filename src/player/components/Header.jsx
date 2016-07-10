import React from 'react';

class Header extends React.Component {

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
          <span className="pull-right text-sm">{this.props.data.followers.total} <br />Followers</span>
          <span className="h2 font-thin">{name}</span>
        </div>
        <img src={coverImage} height="200" />
      </div>
		);	

	}
}

export default Header;