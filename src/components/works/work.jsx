import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const WorkWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const WorkUrl = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

class Work extends Component {
  render() {
    return (
      <WorkWrap>
        <Link
          to={this.props.to}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'pointer',
            width: '100%',
            height: '100%'
          }}
        />
        <this.props.childComponent/>
      </WorkWrap>
    )
  }
}

export default Work;
