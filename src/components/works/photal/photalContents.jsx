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
            <WorkTitle style={{padding: '70px 0 20px'}}>
              teamLab Internship
            </WorkTitle>
            <WorkSubTitle style={{ padding: '0 0 70px' }}>
              SeverSideEngineer / FrontEndEngineer / UI.UX Design
            </WorkSubTitle>
            <WorkText style={{padding: '0 0 50px'}}>
              チームラボ サマーインターンシップ2019にサーバーサイドエンジニアとして参加しました。
              以下では二週間のインターンシップを通して個人で製作したwebサービスと、事前課題として製作したwebサービスの二つを合わせて紹介します。
            </WorkText>

            <WorkHeading style={{margin: '0 0 50px 30px'}}>
              <div>Case 1.　</div>
              <div>美味しいケーキの検索サイト</div>
            </WorkHeading>
            <WorkMenuComponent
              role="BackEnd(PHP / MySQL) / SCSS"
              duration="July 2019"
              url="https://php-study-teamlab.herokuapp.com"
            />
            <img style={{ margin: '50px 0 0 0',width: '100%'}} src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sweetSearch.png"/>
            <WorkText style={{padding: '20px 0 50px'}}>
              インターンシップの事前課題として一週間で作成しました。
              主な機能は２つで、『ケーキの名前、値段、解説を添えて画像を投稿する機能』と『ケーキの名前を入れて検索する機能』です。
              フレームワークを使わず（使えず）、PHPをベタ書きで実装しています。
              ここで基本的なサーバーとの通信の方法とデータベースの管理の仕方を学びました。この時点では正規化も非同期通信も何も知りません。
            </WorkText>


            <WorkHeading style={{margin: '0 0 0 30px'}}>
              <div>Case 2.　</div>
              <div>写真アルバムSNS - Photal -</div>
            </WorkHeading>
            <WorkMenuComponent
              role="BackEnd( / MySQL) / SCSS"
              duration="July 2019"
              url="https://php-study-teamlab.herokuapp.com"
            />
            <WorkText style={{padding: '20px 0 50px'}}>
              インターンシップの課題として２週間で設計しました。与えられた課題は『インスタグラムのような写真投稿機能のあるWEBサービスの実装』でした。
              そこで、僕が目をつけた問題はLINEのアルバム機能についてです。
              LINEのアルバム機能の問題 → アルバムを一元で管理できないことが挙げられます。
              A君との思い出も、B君との思い出も、同じ場所で管理できたらいいのになぁという個人的なニーズから考えました。
            </WorkText>
          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default PhotalContents;
