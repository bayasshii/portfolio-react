import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkPoint from "../workContents/workPoint";

import OthersHeader from "./othersHeader.jsx"

const OthersContetsWrap = styled.div`
  border-radius: 20px;
  background: #FFF;
  padding: 40px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`

class OthersContents extends Component {
  render() {
    return (
      <React.Fragment>
        <OthersHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap style={{padding: '50px 0'}}>
            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              Oltana
            </OthersContetsWrap>

            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              ME310
            </OthersContetsWrap>

            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              シンガポールワークショップ
            </OthersContetsWrap>

            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              CloudChair
            </OthersContetsWrap>

            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              すだく
            </OthersContetsWrap>

            <OthersContetsWrap style={{margin: '0 0 50px 0'}}>
              TAMAGO
            </OthersContetsWrap>

            <OthersContetsWrap　style={{margin: '0 0 50px 0'}}>
              オフィスデザイン
            </OthersContetsWrap>

            <OthersContetsWrap　style={{margin: '0 0 50px 0'}}>
              山田の名刺
            </OthersContetsWrap>

            <OthersContetsWrap　style={{margin: '0 0 50px 0'}}>
              ジャンプ大会
            </OthersContetsWrap>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default OthersContents;
