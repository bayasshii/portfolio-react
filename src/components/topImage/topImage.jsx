import React, { Component } from 'react';

import './css/style.css';

class TopImage extends Component {
  render() {
    return (
      <div className="topImage">
        <img className="header__image" alt="header" src={this.props.imageURL} />
      </div>
    );
  }
}

export default TopImage;
