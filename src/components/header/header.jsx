import React, { Component } from 'react';

import './css/style.css';

class Header extends Component {
  render() {
    return (
      <div className="header flex">
        <ul className="header__menue--others flex">
          <li className="header__menue"><a href="https://github.com/bayasshii" target="_blank">GitHub</a></li>
          <li className="header__menue"><a href="https://qiita.com/kibayashi_masaya" target="_blank">Qiita</a></li>
          <li className="header__menue"><a href="https://note.mu/kibachan" target="_blank">note</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
