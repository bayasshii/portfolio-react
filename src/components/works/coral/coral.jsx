import React, { Component } from 'react';
import styled from 'styled-components'

const CoralWrap = styled.div`
  background: #ccc;
  height: 600px;
  position: relative;
  z-index: -2;
`

const CoralTitle = styled.div`
  font-size: 3.0rem;
`

const CoralSubTitle = styled.div`
  font-size: 2.0rem;
`

class Coral extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralWrap>
          <CoralTitle>Coral</CoralTitle>
          <CoralSubTitle>
            Planning / UX Design / UI Design
          </CoralSubTitle>
        </CoralWrap>
      </React.Fragment>
    )
  }
}

export default Coral;
