import React, { Component } from 'react';

import './css/style.css';

class TopImage extends Component {
  render() {
    return (
      <div className="topImage">
        <img className="header__image" alt="header" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg" />
      </div>
    );
  }
}

export default TopImage;
