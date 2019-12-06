import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const PhotalHeaderWrap = styled.div`
  background: ${color.photalGradient};
  width: 100%;
  height: 600px;
  font-size: 5rem;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  bottom: 240px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  font-size: 5rem;
  color: #fff;
  font-weight: 600;
`;

const TitleEx = styled.div`
  position: absolute;
  bottom: 300px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  font-size: 3rem;
  color: #fff;
  & span {
    font-weight: 600;
  }
`;

class PhotalHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalHeaderWrap>
          <TitleEx><span>フォトアルバム</span><br/>を共有するSNS</TitleEx>
          <Title>Photal</Title>
        </PhotalHeaderWrap>
      </React.Fragment>
    )
  }
}

export default PhotalHeader;
