import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const PhotalWrap = styled.div`
  background: ${color.photalGradient};
  height: 600px;
  position: relative;
  z-index: -2;
`

const PhotalTitle = styled.div`
  font-size: 3.0rem;
`

const PhotalSubTitle = styled.div`
  font-size: 2.0rem;
`

class Photal extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalWrap>
          <PhotalTitle>TeamLab  Internship</PhotalTitle>
          <PhotalSubTitle>
            Planning / UX Design / UI Design / BackEndEngineering / MarkUpEngineering / FrontEndEngineering / Deploy
          </PhotalSubTitle>
        </PhotalWrap>
      </React.Fragment>
    )
  }
}

export default Photal;
