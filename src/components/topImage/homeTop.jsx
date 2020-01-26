import React, { Component } from 'react';
import './homeTop.css'
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  z-index: -2;
  position: relative;
  height: 700px;
  background: ${color.background}
  @media screen and (max-width: 767px) {
    height: 400px
  }
`

const HometopRec = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  width: 100%;
  max-width: 1300px;
  height: 600px;
  border-top: 300px solid ${color.mainYellow};
  border-right: 650px solid transparent;
  border-bottom: 300px solid transparent;
  border-left: 650px solid ${color.mainYellow};
}
`

const HometopImage = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 800px;
  height: auto;
`

const HometopContents = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 280px 0 0 850px;
  @media screen and (max-width: 1400px) {
    padding-right: 50px
  }
`

const HometopText = styled.div`
  font-size: 3rem;
  color: ${color.mainBlue};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

const HometopMainText = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 80%, ${color.mainYellow} 20%);
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
      <HometopImage>
        <img alt="homeTop" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/topIlla.png"
          style={{ width: '100%' , height: 'auto'}}
        />
      </HometopImage>
      <HometopContents>
        <HometopText>I'm Masaya Kibayashi,</HometopText>
        <div><HometopMainText style={{paddingTop: '30px'}}>UI/UX Designer,</HometopMainText></div>
        <HometopText style={{paddingTop: '50px'}}>Engineer, Architect, & More !</HometopText>
      </HometopContents>
    </HometopWrap>
    );
  }
}

export default TopImage ;
