import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkSubTitle from "../workContents/workSubTitle";

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
              style={{padding: '70px 0 20px'}}
            >
              <span style={{fontSize: '4.0rem'}}>オンライン歯科診断アプリ</span> - Coral -
            </WorkTitle>
            <WorkSubTitle style={{padding: '0 0 40px'}}>
              UX & UI Design / Business Design
            </WorkSubTitle>

            <div className="flex">
              <OthersDerails>課外活動</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>(ほぼ) 個人ワーク</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>期間：1month / 2019.12 ~ 2020.01(修士1年)</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>使用ツール：Sketch / Illustrator / Photoshop</OthersDerails>
            </div>

            <WorkText style={{padding: '60px 0 50px'}}>
              オンライン歯科検診アプリCoralは、歯科医と患者を繋ぐヘルスケアアプリです。
              大学の授業でグループで考えたアイデアを元にして、アプリデザインのトレーニングとしてターゲットの定義からモックアップのデザインまで、一から個人で取り組み直しました。
            </WorkText>

            {/*
            <WorkHeadingCoral style={{margin: '0 0 30px'}}>ペルソナ</WorkHeadingCoral>
            <CoralContentsStakeholder />
            */}

            {/*

            <WorkHeadingCoral style={{margin: '50px 0 30px'}}>ビジネスモデル</WorkHeadingCoral>
            <CoralContentsBusinnesModel/>

            */}

            {/*<WorkHeadingCoral style={{margin: '30px 0 30px'}}>UXデザイン</WorkHeadingCoral>*/}
            <CoralContentsUX/>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default CoralContents;
