import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const CoralHeaderWrap = styled.div`
  background: #fff;
  width: 100%;
  height: 600px;
  font-size: 5rem;
  position: relative;
`;

const CoralHeaderLogoImage = styled.div`
  width: 300px;
  position: absolute;
  top: 270px;
  right: 80px;
`;

const CoralHeaderDesignImage = styled.div`
  width: calc(100% - 200px);
  height: 300px
`;


class CoralHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralHeaderWrap>
          <CoralHeaderDesignImage>
            <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral_many2.png"
              style={{ width: '100%' ,height: '600px', objectFit: 'cover'}}
            />
          </CoralHeaderDesignImage>
          <CoralHeaderLogoImage>
            <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralLogo.png"
              style={{ width: '100%' }}
            />
          </CoralHeaderLogoImage>
        </CoralHeaderWrap>
      </React.Fragment>
    )
  }
}

export default CoralHeader;
