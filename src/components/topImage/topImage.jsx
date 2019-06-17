import React, { Component } from 'react';

import './css/style.css';

class TopImage extends Component {
  render() {
    return (
      <div className="topImage">
        <img className="header__image" alt="header" src={this.props.imageURL} />
        <img className="header__image--back" alt="header" src={this.props.backImageURL} />
      </div>
    );
  }
}

export default TopImage;
