import React, { Component } from 'react';
import './homeTop.css'
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  position: relative;
  height: 600px;
  background: ${color.background}
`

const HometopRec = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 600px;
  max-width: 1300px;
  border-top: 300px solid ${color.mainYellow};
  border-right: 650px solid transparent;
  border-bottom: 300px solid transparent;
  border-left: 650px solid ${color.mainYellow};
  @media screen and (max-width: 1300px) {
    max-width: 1100px;
    border-top: 250px solid ${color.mainYellow};
    border-right: 550px solid transparent;
    border-bottom: 250px solid transparent;
    border-left: 550px solid ${color.mainYellow};
    height: 500px
  }
  @media screen and (max-width: 1000px) {
    max-width: 800px;
    border-top: 200px solid ${color.mainYellow};
    border-right: 400px solid transparent;
    border-bottom: 200px solid transparent;
    border-left: 400px solid ${color.mainYellow};
    height: 400px
  }
}
`

const HometopImage = styled.div`
  position: relative;
  z-index: 10;
  width: 950px;
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
  margin: 280px 0 0 -150px;
  @media screen and (max-width: 1300px) {
    margin: 280px 0 0 -200px;
  }
  @media screen and (max-width: 1000px) {
    margin: 210px 0 0 -200px;
  }
  @media screen and (max-width: 850px) {
    margin: 0 0 0 300px;
  }
`

const HometopText = styled.div`
  font-size: 3rem;
  color: ${color.mainBlue};
`

const HometopMainText = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 80%, ${color.mainYellow} 20%);
  display: inline-block;
`

class TopImage extends Component {
  render() {
    return (
    <HometopWrap>
      <HometopRec/>
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
