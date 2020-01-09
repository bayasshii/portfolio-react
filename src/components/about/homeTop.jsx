import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  z-index: -2;
  position: relative;
  height: 800px;
  background: ${color.mainGreen__thin};
`

const HometopContents = styled.div`
  position: absolute;
  width: 60%;
  height: 800px;
  left: 0;
`

const HometopRec = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;
  width: 40%;
  height: 800px;
  background: ${color.mainYellow};
  text-align: center;
  padding-top: 370px;
  font-size: 8rem;
  font-weight: 400;
  color: #003778;
`

const HometopImage = styled.div`
  z-index: -2;
  position: relative;
  width: 60%;
  opacity: 0.9
`

const HometopMainText = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: ${color.mainBlue};
  background: linear-gradient(transparent 70%, ${color.mainYellow} 30%);
  display: inline-block;
`

class TopImage extends Component {
  render() {
    return (
    <HometopWrap>
      <HometopRec>
        <span style={{opacity:'0.9'}}>About Me</span>
      </HometopRec>
      <HometopContents>
        <HometopImage>
          <img
            alt="my_photo"
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/S__1024112.jpg"
            style={{
              objectFit: 'cover',
              height: '800px',
              position: 'absolute',
              left: '0'
            }}
          />
        </HometopImage>
      </HometopContents>
    </HometopWrap>
    );
  }
}

export default TopImage ;
