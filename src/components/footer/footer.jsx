import React, { Component } from 'react'
import './css/style.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer flex width">
          <ul className="flex">
            <li className="footer__menue"><a href="https://github.com/bayasshii" target="_blank">GitHub</a></li>
            <li className="footer__menue"><a href="https://qiita.com/kibayashi_masaya" target="_blank">Qiita</a></li>
            <li className="footer__menue"><a href="https://note.mu/kibachan" target="_blank">note</a></li>
          </ul>
          <div className="ml-auto">
            2019 Masaya Kibayashi
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
