import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const OthersHeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  font-size: 5rem;
  @media screen and (max-width: 767px) {
    height: 400px
  }
`

const OthersHeaderBackground = styled.div`
  background: ${color.mainYellow};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height:600px;
  z-index: -1;
  @media screen and (max-width: 767px) {
    height: 400px
  }
`

const OthersHeaderContents = styled.div`
  text-align: center;
  padding-top: 250px;
  font-size: 10.0rem;
  font-weight: 900;
  color: #fff;
  @media screen and (max-width: 767px) {
    font-size: 5rem;
    padding-top: 180px;
  }
`

const OthersHeaderRec = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 700px;
  height: 300px;
  border: 30px solid #fff;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 200px
    border: 10px solid #fff;
  }
`


class BaseconnectHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <OthersHeaderWrap>
          <OthersHeaderRec/>
          <OthersHeaderBackground/>
          <OthersHeaderContents>Others</OthersHeaderContents>
        </OthersHeaderWrap>
      </React.Fragment>
    )
  }
}

export default BaseconnectHeader;
