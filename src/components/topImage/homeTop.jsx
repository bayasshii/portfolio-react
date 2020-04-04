import React, { Component } from 'react';
import './homeTop.css'
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  position: relative;
  background: ${color.background};
  height: 760px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height:auto;
  }
`

const HometopRec = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 360px;
  max-width: 1400px;
  border-top: 380px solid ${color.mainYellow};
  border-right: 700px solid transparent;
  border-bottom: 380px solid transparent;
  border-left: 700px solid ${color.mainYellow};
  @media screen and (max-width: 767px) {
    display: none;
  }
}
`

const HometopRec2 = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 0;
    width: 100%;
    height: 180px;
    max-width: 1400px;
    background: ${color.mainYellow};
  }
}
`

const HometopImage = styled.div`
  position: relative;
  z-index: 10;
  width: 1100px;
  height: auto;
  @media screen and (max-width: 1300px) {
    width: 800px
  }
  @media screen and (max-width: 1000px) {
    width: 650px
  }
`

const HometopContents = styled.div`
  position: relative;
  z-index: 10;
  margin: 310px 0 0 -150px;
  @media screen and (max-width: 767px) {
    margin: 40px 0 0;
    margin-left: auto;
    padding: 0 20px;
    text-align: right;
  }
`

const HometopText = styled.div`
  font-size: 3rem;
  color: ${color.mainBlue};
  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`

const HometopMainText = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 80%, ${color.mainYellow} 20%);
  display: inline-block;
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`

class TopImage extends Component {
  render() {
    return (
    <HometopWrap>
      <HometopRec/>
      <HometopRec2/>
      <div className="flex flex-wrap">
        <HometopImage>
          <img alt="homeTop" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/topImage.png"
            style={{ width: '100%' , height: 'auto'}}
          />
        </HometopImage>
        <HometopContents>
          <HometopText>I'm Masaya Kibayashi,</HometopText>
          <div><HometopMainText style={{paddingTop: '30px'}}>UI/UX Designer,</HometopMainText></div>
          <HometopText style={{paddingTop: '40px'}}>Engineer, Marketer, Architect,</HometopText>
          <HometopText style={{paddingTop: '30px'}}>& More !</HometopText>
        </HometopContents>
      </div>
    </HometopWrap>
    );
  }
}

export default TopImage ;
