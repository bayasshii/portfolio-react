import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const CoralHeaderWrap = styled.div`
  background: ${color.coralGradientVertical};
  width: 100%;
  height: 600px;
  font-size: 5rem;
`;

class CoralHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralHeaderWrap>
        </CoralHeaderWrap>
      </React.Fragment>
    )
  }
}

export default CoralHeader;