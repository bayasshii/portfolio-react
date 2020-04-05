import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const BaseconnectHeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  font-size: 5rem;
  @media screen and (max-width: 767px) {
    height: 400px;
  }
`

const BaseconnectHeaderBackground = styled.div`
  background: linear-gradient(to left, #222f40, #323f50);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  z-index: -1;
  @media screen and (max-width: 767px) {
    height: 50px;
  }
`
const BaseconnectHeaderPC = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  & img {
    width: 550px;
    @media screen and (max-width: 767px) {
      width: 250px;
    }
  }
`

const BaseconnectHeaderBack = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 500px;
  opacity: 0.2;
  @media screen and (max-width: 767px) {
    height: 350px;
  }
  & img {
    width: 100%;
    height: 550px;
    @media screen and (max-width: 767px) {
      height: 350px;
    }
  }
`

class BaseconnectHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseconnectHeaderWrap>
          <BaseconnectHeaderBack>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect_headerBack.png"/>
          </BaseconnectHeaderBack>
          <BaseconnectHeaderPC>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/eTVTfB.png"/>
          </BaseconnectHeaderPC>
          <BaseconnectHeaderBackground/>
        </BaseconnectHeaderWrap>
      </React.Fragment>
    )
  }
}

export default BaseconnectHeader;
