import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkWrap = styled.div`
  position: relative;
  padding-top: 30px;
`;

const ImagetWrap = styled.div`
  width: 400px;
  height: 335px
  text-align: center;
  margin: auto;
  padding: 30px;
  background: ${color.mainYellow};
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


class Baseconnect extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkWrap>
          <ImagetWrap>

          </ImagetWrap>
          <TextWrap>
            <TextWrapTitle>Others</TextWrapTitle>
            <TextWrapSubTitle>Architecture / Programming / etc...</TextWrapSubTitle>
          </TextWrap>
        </WorkWrap>
      </React.Fragment>
    )
  }
}

export default Baseconnect;
