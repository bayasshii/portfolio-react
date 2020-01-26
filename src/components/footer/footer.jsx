import React, { Component } from 'react'
import styled from 'styled-components'
import * as color from "../../css/color.js"

const FooterWrap = styled.div`
  position: inherit;
  width: 100%;
  margin: auto;
  text-align: right;
  z-index: 3;
  font-size: 3rem;
  padding: 0 6% 70px 0
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`

const FooterMenu = styled.div`
  position: inherit;
  z-index: 3;
  & ul {
    margin-left: auto;
    padding-bottom: 40px;
    font-weight: 600
  }
`

const FooterReseave = styled.div`
  position: inherit;
  font-size: 2rem;
  color: ${color.mainBlue};
  z-index: 3;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const FooterRec = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 1300px;
  height: 400px;
  border-top:200px solid transparent;
  border-right: 650px solid ${color.mainYellow};
  border-bottom: 200px solid ${color.mainYellow};
  border-left: 650px solid transparent;
}
`

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{position:'relative',background: '#fafafa',}}>
          <FooterRec/>
          <FooterWrap>
            <FooterMenu className="flex">
              <ul className="flex">
                <li><a style={{color: color.mainBlue, paddingRight:'30px'}} href="https://github.com/bayasshii" target="_blank">GitHub</a></li>
                {/*<li className="footer__menue"><a href="https://note.com/kibachan" target="_blank">note</a></li>*/}
                <li><a style={{color: color.mainBlue}} href="https://www.wantedly.com/secret_profiles/eOicdvwNpTUl9YEYuF024VBplVALVl1h" target="_blank">Wantedly</a></li>
              </ul>
            </FooterMenu>
            <FooterReseave>
              © 2020 Masaya Kibayashi All rights Reserved.
            </FooterReseave>
          </FooterWrap>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
