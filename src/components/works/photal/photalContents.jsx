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
  padding-left: 20px;
  &::before {
    height: 35px;
    background: ${color.photalGradient};
  }
`;

class PhotalContents extends Component {
  render() {
    return (
      <React.Fragment>
        <PhotalHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap>
            <WorkTitle style={{padding: '70px 0 20px'}}>
              teamLab Internship
            </WorkTitle>
            <WorkSubTitle style={{ padding: '0 0 70px' }}>
              SeverSide Cording / FrontEnd Cording / UX Design
            </WorkSubTitle>
            <WorkText style={{padding: '0 0 50px'}}>
              チームラボ サマーインターンシップ2019にサーバーサイドエンジニアとして参加しました。
              二週間のインターンシップを通してサービスの企画から、サーバーサイド・フロントエンド・デプロイまでを個人で行いました。
            </WorkText>

            <WorkHeadingPhotal>1. Concept Make</WorkHeadingPhotal>
            <PhotalContentsNeedfinding/>

            <WorkHeadingPhotal>2. UX Design</WorkHeadingPhotal>
            <WorkText style={{padding: '20px 0 50px'}}>
              <PhotalContentsUX/>
            </WorkText>

            <WorkHeadingPhotal>3. ServerSide Cording</WorkHeadingPhotal>
            <PhotalContentsServerside/>

            <WorkHeadingPhotal>4. FrontEnd Cording</WorkHeadingPhotal>
            <WorkText style={{padding: '20px 0 50px'}}>
              少し時間に余裕があったので、Vueでの非同期通信の実装も行いました。
              上記の要件のうちの全てを非同期通信として書き直しました。
              操作性がすごく向上しました。
            </WorkText>

            <WorkHeadingPhotal>5. MarkUp Cording & UI Design</WorkHeadingPhotal>
            <WorkText style={{padding: '20px 0 50px'}}>
              非同期にこだわったため時間がなくなったので、UIデザインと同時にマークアップを行いました。ですので正直に言うと、ほとんどUIがワイヤーのままで、UIに関してあまり意図はありません。笑<br/>
              ただ一つだけ、やはり写真のアプリなので、グラデーションを使って、綺麗で写真映えしそうなアプリであることは意識しました。
            </WorkText>

            <WorkHeadingPhotal>6. Summary</WorkHeadingPhotal>
            <WorkText style={{padding: '20px 0 50px'}}>
              エンジニアを学べた。
              PHPという未知の分野に苦しめられましたが、 実装を通して得た知識・経験は、
              今後デザイナーとしての僕が直接使うことはなくても、エンジニアとコミュニケーションをとる際には共通言語として必ず役に立つと思います。
            </WorkText>

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotalContents;
