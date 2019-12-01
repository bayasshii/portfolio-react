import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const PhotalHeaderWrap = styled.div`
  background: #ccc;
  width: 100%;
  height: 600px;
  font-size: 5rem;
`;

class PhotalHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalHeaderWrap>
          Photal
        </PhotalHeaderWrap>
      </React.Fragment>
    )
  }
}

export default PhotalHeader;
