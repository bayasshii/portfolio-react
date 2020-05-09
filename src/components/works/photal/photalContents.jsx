import React, { Component } from 'react';
import styled from 'styled-components'
import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkBack from "../workContents/workBack";

import PhotalHeader from "./photalHeader";

import PhotalContentsNeedfinding from "./photalContentsNeedfinding"
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
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
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
        <div style={{ background:color.background }}>
          <WorkWrap style={{padding: '0 0 100px'}}>
            <WorkTitle>
              アルバム共有アプリ - Photal -
            </WorkTitle>
            <WorkSubTitle style={{ padding: '0 0 30px' }}>
              Backend & Frontend Coding / UI & UX Design
            </WorkSubTitle>

            <div className="flex flex-wrap">
              <OthersDerails style={{margin: '10px 0 0 10px'}}>個人ワーク</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 10px'}}><a href="http://my-photal.herokuapp.com" target="_blank">URL：http://my-photal.herokuapp.com</a></OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 10px'}}>期間：2weeks / 2019.07 (修士1年)</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 10px'}}>使用ツール：Laravel / PosgreSQL / Vue / Heroku</OthersDerails>
            </div>

            <WorkText style={{padding: '50px 20px 50px'}}>
              チームラボ サマーインターンシップ2019にサーバーサイドエンジニアとして参加しました。
              二週間のインターンシップを通してサービスの企画から、サーバーサイド・フロントエンド・デプロイまでを個人で行いました。
              またインターン終了後、制作物のリデザインをしました。
            </WorkText>


            <PhotalContentsWrap style={{margin: '0 20px 50px'}}>
              <WorkHeadingPhotal>
                1. Concept
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
            <PhotalContentsWrap style={{margin: '0 20px 50px'}}>
              <WorkHeadingPhotal>
              2. Coding
              </WorkHeadingPhotal>
              <PhotalContentsServerside/>
            </PhotalContentsWrap>

            <PhotalContentsWrap style={{margin: '0 20px 50px'}}>
              <WorkHeadingPhotal>
              3. Internship Summary
              </WorkHeadingPhotal>
              <WorkText style={{padding: '20px 0 10px'}}>
                二週間という短い時間でしたが、エンジニアの業務・考え方について学べました。
                サーバーサイドやデータベースという全く未知の分野に苦しめられましたが、 自分自身の手で実装を経験して得た知識は、
                今後デザイナーとしての僕が実装に携わることはなくても、その知識は、実装を考慮しながらデザインを行う際や、エンジニアとコミュニケーションをとる際には必ず役に立つと思います。
              </WorkText>
            </PhotalContentsWrap>

            <PhotalContentsWrap style={{margin: '0 20px 50px'}}>
              <WorkHeadingPhotal>4. Redesign</WorkHeadingPhotal>
              <WorkText style={{padding: '80px 0 60px', textAlign:'center', fontSize:'3.0rem', fontWeight:'900'}}>
                Coming Soon...
              </WorkText>
            </PhotalContentsWrap>

            <WorkBack/>


          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotalContents;
