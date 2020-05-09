import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkWrap = styled.div`
  position: relative;
  padding-top: 30px;
`;

const ImagetWrap = styled.div`
  width: 400px;
  height: 326px;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 20px
    & img {
      width: 100%!important;
    }
`;

const TextWrap = styled.div`
  margin: auto;
  padding: 30px;
  text-align: center;
`;

const TextWrapTitle = styled.div`
  color: ${color.baseText}
  font-size: 2.5rem;
  padding-bottom: 20px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    font-size: 2rem
  }
`;

const TextWrapSubTitle = styled.div`
  color: ${color.baseText__thin}
  font-size: 1.5rem;
  font-weight: 600;
`;


class Baseconnect extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkWrap>
          <ImagetWrap>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect_icon.png"
              style={{ width: '400px' }}
            />
          </ImagetWrap>
          <TextWrap>
            <TextWrapTitle>Baseconnect Internship</TextWrapTitle>
            <TextWrapSubTitle>Frontend Coding / UI Design</TextWrapSubTitle>
          </TextWrap>
        </WorkWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
