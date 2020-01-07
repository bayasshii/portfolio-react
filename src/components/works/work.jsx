import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const WorkWrap = styled.div`
  position: relative;
  width: 470px;
  background: #fff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  z-index: -2
`;

const WorkUrl = styled.a`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

class Work extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
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
        <WorkWrap>
          <this.props.childComponent/>
        </WorkWrap>
      </div>
    )
  }
}

export default Work;
