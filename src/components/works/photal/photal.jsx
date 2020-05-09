import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkWrap = styled.div`
  position: relative;
  padding-top: 30px;
`;

const ImagetWrap = styled.div`
  width: 400px;
  text-align: center;
  margin: auto;
  padding: 30px;
  background: ${color.photalGradientNaname};
  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
    height: auto;
    padding: 0 20px;
    margin: 0 20px;
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
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal__mac_ver.png"
              style={{ width: '300px' }}
            />
          </ImagetWrap>
          <TextWrap>
            <TextWrapTitle>アルバム共有アプリ<span>- Photal -</span></TextWrapTitle>
            <TextWrapSubTitle>Backend & Frontend Coding / UI & UX Design</TextWrapSubTitle>
          </TextWrap>
        </WorkWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
