import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkWrap = styled.div`
  position: relative;
  padding-top: 30px;
`;

const ImagetWrap = styled.div`
  width: 400px;
  height: 306px;
  text-align: center;
  margin: auto;
  padding: 30px;
  background: ${color.mainYellow};
  position: relative;
  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
    height: 250px;
    padding: 0 20px;
    margin: 0 20px
    & img {
      width: 100% !important;
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
`;

const TextWrapSubTitle = styled.div`
  color: ${color.baseText__thin}
  font-size: 1.5rem;
  font-weight: 600;
`;

const OthersHeaderContents = styled.div`
  text-align: center;
  padding-top: 95px;
  font-size: 6.0rem;
  font-weight: 900;
  color: #fff;
`
const OthersHeaderRec = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 340px;
  height: 190px;
  border: 20px solid #fff;
  @media screen and (max-width: 767px) {
    display: none;
    }
`


class Baseconnect extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkWrap>
          <ImagetWrap>
            <OthersHeaderRec/>
            <OthersHeaderContents>Others</OthersHeaderContents>
          </ImagetWrap>
          <TextWrap>
            <TextWrapTitle>Others</TextWrapTitle>
            <TextWrapSubTitle>Workshop / Architecture / Programming / etc...</TextWrapSubTitle>
          </TextWrap>
        </WorkWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
