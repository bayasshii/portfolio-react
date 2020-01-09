import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"

const HometopWrap = styled.div`
  z-index: -2;
  position: relative;
  height: 800px;
`

const HometopContents = styled.div`
  position: absolute;
  width: 80%;
  height: 800px;
  left: 0;
`

const HometopRec = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;
  width: 20%;
  height: 800px;
  background: ${color.mainYellow};
`

const HometopImage = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  height: 600px;
  opacity: 1;
`

const HometopMainText = styled.div`
  font-size: 73px;
  font-weight: 700;
  color: ${color.mainBlue};
  position: absolute;
  right: -100px;
  top: 370px;
  z-index: 10;
  opacity: 0.4
`


class TopImage extends Component {
  render() {
    return (
    <HometopWrap>
      <HometopRec>
      </HometopRec>
      <HometopContents>
        <HometopImage>
          <img
            alt="my_photo"
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
            style={{
              objectFit: 'cover',
              position: 'absolute',
              width: '70%',
              height:'600px',
              left: '0',
              top: '100px',
              margin:'auto',
              zIndex: -1
            }}
          />
          <HometopMainText>Masaya Kibayashi</HometopMainText>
        </HometopImage>
      </HometopContents>
    </HometopWrap>
    );
  }
}

export default TopImage ;
