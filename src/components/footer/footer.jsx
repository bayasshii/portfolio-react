import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './css/style.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer flex width">
          <ul className="flex">
            <li className="footer__menue"><Link to="">home</Link></li>
            <li className="footer__menue"><Link to="/about">about</Link></li>
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
