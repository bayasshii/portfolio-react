import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const OthersHeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  font-size: 5rem;
`

const BaseconnectHeaderBackground = styled.div`
  background: ${color.mainYellow};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height:600px;
  z-index: -1;
`


class BaseconnectHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <OthersHeaderWrap>
          <BaseconnectHeaderBackground/>
        </OthersHeaderWrap>
      </React.Fragment>
    )
  }
}

export default BaseconnectHeader;
