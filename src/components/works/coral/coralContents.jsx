import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkTextBold from "../workContents/workTextBold";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkBack from "../workContents/workBack";

import CoralHeader from "./coralHeader";
import CoralContentsUX from "./coralContentsUX";

import * as color from "../../../css/color.js"

const OthersDerails = styled.span`
  font-size: 1.2rem;
  background: #fff;
  padding: 10px 30px;
  margin-top: 10px;
  border-radius: 10px;
  width: auto;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`


class CoralContents extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralHeader/>
        <div
          style={{ background: color.background }}
        >
          <WorkWrap>
            <WorkTitle
              style={{padding: '50px 0 20px'}}
            >
              <span>遠隔歯科検診アプリ</span> - Coral -
            </WorkTitle>
            <WorkSubTitle style={{padding: '0 0 40px'}}>
              UX & UI Design / Business Design
            </WorkSubTitle>

            <div className="flex flex-wrap">
              <OthersDerails style={{margin: '10px 0 0 20px'}}>課外活動</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>個人ワーク</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>期間：1month / 2019.12 ~ 2020.01(修士1年)</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>使用ツール：Sketch / Illustrator / Photoshop</OthersDerails>
            </div>

            <WorkText style={{padding: '40px 20px 40px'}}>
              遠隔歯科検診アプリCoralは、<WorkTextBold>歯科医と患者を繋ぐヘルスケアアプリ</WorkTextBold>です。
              大学の授業でグループで考えたアイデアを元に、アプリデザインのトレーニングとしてターゲットの定義からモックアップのデザインまで、一から個人で取り組み直しました。
            </WorkText>

            <CoralContentsUX/>

            <WorkBack/>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default CoralContents;
