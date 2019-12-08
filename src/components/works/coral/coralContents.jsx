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

            <WorkText style={{padding: '0 0 50px'}}>
              オンライン診断アプリCoralは、歯科医とユーザーを繋ぐヘルスケアアプリです。
              ユーザーは自身で口内の写真を撮って、それをアプリ内で歯科医に送信します。
              歯科医は空いた時間にその診断を行い、現在の口内の状況と、いますぐ歯科医に行くべきか、今後どのようにブラッシングを心がければいいかなどを返信します。
              これによりユーザーはより気軽に快適に自身の歯と向き合うことができるのです。
            </WorkText>

            <WorkHeadingCoral style={{margin: '0 0 30px'}}>ステークホルダー</WorkHeadingCoral>
            <CoralContentsStakeholder/>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>ビジネスモデル</WorkHeadingCoral>
            <CoralContentsBusinnesModel/>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>UXデザイン</WorkHeadingCoral>
            <CoralContentsUX/>

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>UIデザイン</WorkHeadingCoral>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default CoralContents;
