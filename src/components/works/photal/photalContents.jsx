import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";

import PhotalHeader from "./photalHeader";

import PhotalContentsNeedfinding from "./photalContentsNeedfinding"
import PhotalContentsUX from "./photalContentsUX"
import PhotalContentsServerside from "./photalContentsServerside"

import * as color from "../../../css/color.js"

const WorkHeadingPhotal = styled(WorkHeading)`
  &::before {
    height: 35px;
    background: none
  }
  & span {
    opacity: 0.6;
    margin-left: 20px;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 3px 10px;
    border: 1px solid #000;
    border-radius: 3px;
  }
  & span:first-child {
    margin-left: 50px;
  }
`;

const PhotalContentsWrap = styled.div`
  border-radius: 20px;
  background: #FFF;
  padding: 40px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`

const OthersDerails = styled.span`
  font-size: 1.2rem;
  background: #fff;
  padding: 10px 30px;
  margin-top: 10px;
  border-radius: 10px;
  width: auto;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`

class PhotalContents extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap style={{padding: '0 0 50px'}}>
            <WorkTitle style={{padding: '70px 0 30px'}}>
              アルバム共有アプリ - Photal -
            </WorkTitle>
            <WorkSubTitle style={{ padding: '0 0 70px' }}>
              SeverSide Cording / FrontEnd Cording / UX Design
            </WorkSubTitle>

            <div className="flex">
              <OthersDerails>課外活動</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>個人ワーク</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>期間：2weeks / 2019.07 ~ 08 (修士1年)</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>使用ツール：Laravel / PosgreSQL / Vue / Heroku / HTML / CSS</OthersDerails>
            </div>

            <WorkText style={{padding: '0 0 50px'}}>
              チームラボ サマーインターンシップ2019にサーバーサイドエンジニアとして参加しました。
              二週間のインターンシップを通してサービスの企画から、サーバーサイド・フロントエンド・デプロイまでを個人で行いました。
              またインターン終了後、制作物のリデザインをしました。
            </WorkText>


            <PhotalContentsWrap style={{margin: '0 0 50px'}}>
              <WorkHeadingPhotal>
                1. Concept
                <span>Duration: 2hours</span>
              </WorkHeadingPhotal>
              <PhotalContentsNeedfinding/>
            </PhotalContentsWrap>
            {/*
            <WorkHeadingPhotal>
              UI/UX Redesign
              <span>Duration: 2days</span>
              <span>Tools: Sketch</span>
            </WorkHeadingPhotal>
            <PhotalContentsUX/>
            */}
            {/*

            <WorkHeadingPhotal>
              2. UX Design
              <span>Duration: 3hours</span>
              <span>Tools: Sketch</span>
            </WorkHeadingPhotal>
            <WorkText style={{padding: '20px 0 50px'}}>
              <PhotalContentsUX/>
            </WorkText>

            */}
            <PhotalContentsWrap style={{margin: '0 0 50px'}}>
              <WorkHeadingPhotal>
              2. ServerSide Cording
                <span>Duration: 32hours</span>
                <span>Tools: Laravel / PosgreSQL</span>
              </WorkHeadingPhotal>
              <PhotalContentsServerside/>
            </PhotalContentsWrap>

            <PhotalContentsWrap style={{margin: '0 0 50px'}}>
              <WorkHeadingPhotal>
                3. FrontEnd Cording
                <span>Duration: 24hours</span>
                <span>Tools: Vue.js</span>
              </WorkHeadingPhotal>
              <WorkText style={{padding: '20px 0 0'}}>
                時間に余裕があったので、Vueでの非同期通信の実装も行いました。
                上記の要件のうちほぼ全てを非同期通信として書き直しました。
                非同期通信になることで操作性が大きく向上しました。
              </WorkText>
            </PhotalContentsWrap>

            <PhotalContentsWrap style={{margin: '0 0 50px'}}>
              <WorkHeadingPhotal>
                4. MarkUp Cording & UI Design
                <span>Duration: 5hours</span>
                <span>Tools: HTML / css</span>
              </WorkHeadingPhotal>
              <WorkText style={{padding: '20px 0 0'}}>
                非同期にこだわったため時間がなくなったので、UIデザインと同時進行でマークアップを行いました。
                ですので正直に言うと、ほとんどUIがワイヤーのままで、UIに関してあまり意図はありません。<br/>
                ただ一つだけ、やはり写真のアプリなので、グラデーションを使って、綺麗で写真映えしそうなアプリであることは意識しました。
              </WorkText>
            </PhotalContentsWrap>

            <PhotalContentsWrap>
              <WorkHeadingPhotal>5. Summary</WorkHeadingPhotal>
              <WorkText style={{padding: '20px 0 0'}}>
                実装すべき機能は他にもたくさんありましたが、エンジニアの業務・考え方について学べました。
                PHPという未知の分野に苦しめられましたが、 実装を通して得た知識・経験は、
                今後デザイナーとしての僕が直接使うことはなくても、エンジニアとコミュニケーションをとる際には共通言語として必ず役に立つと思います。
              </WorkText>
            </PhotalContentsWrap>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotalContents;
