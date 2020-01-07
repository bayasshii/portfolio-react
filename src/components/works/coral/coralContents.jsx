import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkSubTitle from "../workContents/workSubTitle";

import CoralHeader from "./coralHeader";
import CoralContentsUX from "./coralContentsUX";

import * as color from "../../../css/color.js"


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
            <WorkSubTitle style={{padding: '0 0 70px'}}>
              UX & UI Design / Business Design
            </WorkSubTitle>

            <WorkText style={{padding: '0 0 50px'}}>
              オンライン歯科検診アプリCoralは、歯科医と患者を繋ぐヘルスケアアプリです。
              大学の授業で考えたアイデアを元に製作しました。
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
