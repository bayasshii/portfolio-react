import React, { Component } from 'react';
import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";

import PhotalHeader from "./photalHeader";

import * as color from "../../../css/color.js"

class PhotalContents extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap>
            <WorkTitle
              style={{padding: '70px 0 20px'}}
            >
              TeamLab Internshp
            </WorkTitle>
            <WorkSubTitle
              style={{ padding: '0 0 70px' }}
            >
              BackEndEngineering / FrontEndEngineering / UI.UX Design
            </WorkSubTitle>
            <WorkText
              style={{padding: '0 0 50px'}}
            >
              チームラボサマーインターンシップ2019にて個人で製作したwebサービスです。
              事前課題として製作した『美味しいケーキの検索サイト』と合わせて紹介します。
              BeforeAfterを見て欲しい。
            </WorkText>
            <WorkHeading
              style={{margin: '0 0 0 30px'}}
            >
              <div>Case 1.　</div>
              <div>美味しいケーキの検索サイト</div>
            </WorkHeading>
            <WorkMenuComponent
              role="BackEnd(PHP / MySQL) / SCSS"
              duration="July 2019"
              url="https://php-study-teamlab.herokuapp.com"
            />
          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotalContents;
