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
  }
`;

const TextWrap = styled.div`
  margin: auto;
  padding: 30px;
  text-align: center;
`;

const TextWrapTitle = styled.div`
  color: ${color.baseText}
  font-size: 2rem;
  padding-bottom: 20px;
  font-weight: 600;
  & span {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.6rem
    & span {
      font-size: 1.8rem;
    }
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
            <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralImage.png"
              style={{ width: '400px' }}
            />
          </ImagetWrap>
          <TextWrap>
            <TextWrapTitle>オンライン歯科検診アプリ<span>- Coral -</span></TextWrapTitle>
            <TextWrapSubTitle>UI & UX Design / Business Design</TextWrapSubTitle>
          </TextWrap>
        </WorkWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
