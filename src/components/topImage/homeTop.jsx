import React, { Component } from 'react';
import './homeTop.css'
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  z-index: -2;
  position: relative;
  height: 800px;
  background: ${color.background}
  @media screen and (max-width: 767px) {
    height: 400px
  }
`

const HometopContents = styled.div`
  position: absolute;
  width: 1000px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 300px 0 0 0
  @media screen and (max-width: 767px) {
    padding: 100px 30px 0;
  }
`

const HometopRec = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;
  width: 20%;
  height: 800px;
  background: ${color.mainYellow};
`

const HometopCircle = styled.div`
  position: absolute;
  top: -250px;
  left: -300px;
  width: 500px;
  height: 500px;
  border: 30px solid ${color.mainGreen};
  border-radius: 50%;
  z-index: -1;
`

const HometopText = styled.div`
  font-size: 32px;
  color: ${color.mainBlue};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

const HometopMainText = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 70%, ${color.mainYellow} 30%);
  display: inline-block;
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

class TopImage extends Component {
  render() {
    return (
    <HometopWrap>
      <HometopRec/>
      <HometopContents>
        <HometopText>I'm Masaya Kibayashi,</HometopText>
        <div><HometopMainText style={{paddingTop: '30px'}}>UI & UX Designer,</HometopMainText></div>
        <HometopText style={{paddingTop: '50px'}}>Frontend Engineer, Architect, & More !</HometopText>
      </HometopContents>
    </HometopWrap>
    );
  }
}

export default TopImage ;
