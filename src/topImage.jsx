import React, { Component } from 'react';

import './style.css';

class TopImage extends Component {
  render() {
    return (
      <div className="topImage">
        <img className="header__image" alt="header" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg" />
        <img className="header__image--back" alt="header" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__about.svg" />
      </div>
    );
  }
}

export default TopImage;
