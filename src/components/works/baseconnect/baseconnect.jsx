import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const BaseconnectWrap = styled.div`
  background: linear-gradient(to left, #222f40, #323f50);
  height: 600px;
  position: relative;
  z-index: -2;
`;

const BaseconnectTitleWrap = styled.div`
  position: absolute;
  top: 70px;
  left: 6%;
  width: 650px;
  padding: 80px 50px 60px;
  background: rgba(255,255,255,0.2);
`

const BaseconnectTitle = styled.div`
  font-size: 6.0rem;
  color: #fff;
  font-weight: 600;
  line-height: 10.0rem;
  letter-spacing: 0.5rem;
  &::before {
    content:  '';
    width: 350px;
    height: 10px;
    background-color: ${color.baseconnectGreen};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const BaseconnectSubTitle = styled.div`
  font-size: 2.0rem;
  color: ${color.baseconnectGreen};
  font-weight: 400;
  line-height: 10.0rem
`;

const BaseconnectLogo = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  z-index: -1;
`;

const BaseconnectPC = styled.div`
  position: absolute;
  top: 55px;
  right: 6%;
  z-index: 1;
`;

class Baseconnect extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseconnectWrap>
          <BaseconnectTitleWrap>
            <BaseconnectTitle>Baseconnect<br/>Internship</BaseconnectTitle>
            <BaseconnectSubTitle>UI Design / MarkUpEngineering / FrontEndEngineering</BaseconnectSubTitle>
          </BaseconnectTitleWrap>
          <BaseconnectLogo>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png"
              style={{ width: '1000px' }}
            />
          </BaseconnectLogo>
          <BaseconnectPC>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect_imac.png"
              style={{ width: '600px' }}
            />
          </BaseconnectPC>
        </BaseconnectWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
