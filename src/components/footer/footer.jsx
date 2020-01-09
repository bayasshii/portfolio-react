import React, { Component } from 'react'
import './css/style.css';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="flex width">
            <div>
              <ul className="flex">
                <li className="footer__menue"><a href="https://github.com/bayasshii" target="_blank">GitHub</a></li>
                {/*<li className="footer__menue"><a href="https://note.com/kibachan" target="_blank">note</a></li>*/}
                <li className="footer__menue"><a href="https://www.wantedly.com/users/98019768" target="_blank">Wantedly</a></li>
              </ul>
            </div>
            <div className="ml-auto">
              © 2020 Masaya Kibayashi All rights Reserved.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
