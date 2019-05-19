import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './css/style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          Masaya Kibayashi
        </div>
        <div>
          <ul className="header__menues flex flex-end">
            <li className="header__menue"><Link to="">home</Link></li>
            <li className="header__menue"><Link to="works">works</Link></li>
            <li className="header__menue"><Link to="blog">blog</Link></li>
            <li className="header__menue"><Link to="about">about</Link></li>
          </ul>
        </div>
        <img className="header__image" alt="header" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg" />
      </div>
    );
  }
}

export default Header;
