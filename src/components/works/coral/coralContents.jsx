import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";

import CoralHeader from "./coralHeader";
import CoralContentsStakeholder from "./coralContentsStakeholder";
import CoralContentsBusinnesModel from "./coralContentsBusinnesModel";
import CoralContentsUX from "./coralContentsUX";

import * as color from "../../../css/color.js"

const WorkHeadingCoral = styled(WorkHeading)`
  padding-left: 20px;
  &::before {
    height: 35px;
    background: ${color.coralGradientVertical};
  }
`;

class CoralContents extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap>
            <WorkTitle
              style={{padding: '70px 0 20px'}}
            >
              <span style={{fontSize: '4.0rem'}}>オンライン歯科診断アプリ</span> - Coral -
            </WorkTitle>
            <WorkSubTitle style={{padding: '0 0 70px'}}>
              UX Design / UI Design
            </WorkSubTitle>

            <WorkHeadingCoral style={{margin: '0 0 30px'}}>ステークホルダー</WorkHeadingCoral>
            <CoralContentsStakeholder/>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>ビジネスモデル</WorkHeadingCoral>
            <CoralContentsBusinnesModel/>
            <WorkText style={{padding: '0 0 30px'}}>
              オンライン診断アプリCoralのビジネスモデルを考えました。
            </WorkText>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>ワイヤーデザイン</WorkHeadingCoral>
            <CoralContentsUX/>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>UIデザイン</WorkHeadingCoral>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default CoralContents;
