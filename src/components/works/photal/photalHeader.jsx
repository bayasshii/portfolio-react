import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const BaseconnectHeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  font-size: 5rem;
`

const BaseconnectHeaderBackground = styled.div`
  background: linear-gradient(0deg, #6babde, #c5dbeb);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 600px;
  z-index: -1;
`
const BaseconnectHeaderPC = styled.div`
  z-index: 10;
  position: absolute;
  bottom: -200px;
  left: 0;
  right: 0;
  text-align: center;
`

const BaseconnectHeaderBack = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 500px;
  opacity: 0.2;
`

class BaseconnectHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseconnectHeaderWrap>
          <BaseconnectHeaderPC>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal__mac.png"
              style={{ width: '1200px' }}
            />
          </BaseconnectHeaderPC>
          <BaseconnectHeaderBackground/>
        </BaseconnectHeaderWrap>
      </React.Fragment>
    )
  }
}

export default BaseconnectHeader;
