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
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
`

const HometopRec2 = styled.div`
  @media screen and (max-width: 1000px) {
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
  @media screen and (max-width: 1000px) {
    margin: 20px 0 40px;
    margin-left: auto;
    padding: 0 20px;
    text-align: right;
  }
`

const HometopText = styled.div`
  font-size: 3rem;
  color: ${color.mainBlue};
  padding: 30px 0 0;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    padding: 10px 0 0;
  }
`

const HometopTextKind = styled(HometopText)`
  max-width: 420px;
  line-height: 50px;
  @media screen and (max-width: 767px) {
    line-height: 20px;
  }
`

const HometopMainText = styled.span`
  font-size: 5rem;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 80%, ${color.mainYellow} 20%);
  display: inline-block;
  padding: 20px 0 0;
  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
    padding: 7px 0 0;
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
          <div><HometopMainText>UI/UX Designer,</HometopMainText></div>
          <HometopTextKind>Engineer, Marketer, Architect, & More !</HometopTextKind>
        </HometopContents>
      </div>
    </HometopWrap>
    );
  }
}

export default TopImage ;
