import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './css/style.css';

class Header extends Component {
  render() {
    return (
      <div className="header flex">
        <div className="header__title">
          Masaya Kibayashi
        </div>
        <ul className="header__menues flex">
          <li className="header__menue"><Link to="">home</Link></li>
          <li className="header__menue"><Link to="/works">work</Link></li>
          <li className="header__menue"><Link to="/blog">blog</Link></li>
          <li className="header__menue"><Link to="/about">about</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
