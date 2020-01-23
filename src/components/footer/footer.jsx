import React, { Component } from 'react'
import './css/style.css';
import styled from 'styled-components'
import * as color from "../../css/color.js"

const FooterWrap = styled.div`
  width: 1000px;
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`

const FooterReseave = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <FooterWrap className="flex flex-wrap">
            <div>
              <ul className="flex">
                <li className="footer__menue"><a href="https://github.com/bayasshii" target="_blank">GitHub</a></li>
                {/*<li className="footer__menue"><a href="https://note.com/kibachan" target="_blank">note</a></li>*/}
                <li className="footer__menue"><a href="https://www.wantedly.com/secret_profiles/eOicdvwNpTUl9YEYuF024VBplVALVl1h" target="_blank">Wantedly</a></li>
              </ul>
            </div>
            <FooterReseave className="ml-auto">
              © 2020 Masaya Kibayashi All rights Reserved.
            </FooterReseave>
          </FooterWrap>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
