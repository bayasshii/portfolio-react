import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkPoint from "../workContents/workPoint";

import BaseconnectHeader from "./baseconnectHeader";



class BaseconnectContents extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseconnectHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap>
            <WorkTitle
              style={{ padding: '70px 0 20px' }}
            >
              Baseconnect Internship
            </WorkTitle>

            <WorkSubTitle
              style={{ padding: '0 0 70px' }}
            >
              UI Design / Frontend Cording
            </WorkSubTitle>

            <WorkText
              style={{padding: '0 0 50px'}}
            >
              Baseconnectのミッションは「世界中のデータを繋げることで、ダイレクトに必要な情報にアクセスできる世界を作る」ことです。現在は主に、営業を支援するBtoBのwebサービスを開発しています。
            </WorkText>
            <WorkText
              style={{padding: '0 0 50px'}}
            >
              私が担当している領域は
                <ul>
                  <li>- UIデザイン</li>
                  <li>- 新画面・新機能のマークアップ</li>
                  <li>- フロントエンドの改修</li>
                  <li>- IE対応</li>
                  <li>- モバイル対応</li>
                  <li>- DESIGN BOOTCAMPの運営 <a href="http://company.baseconnect.in/design-bootcamp/" target="_blank">(http://company.baseconnect.in/design-bootcamp)</a></li>
                </ul>
                などです。
            </WorkText>
            <WorkHeading
              style={{margin: '0 0 0 30px'}}
            >
              <div>CASE 1.</div>
              <div>事業所画面 フロントエンドコーディング</div>
            </WorkHeading>
            <WorkMenuComponent
              role="Cording(React / SCSS)"
              duration="July 2019"
              url="https://baseconnect.in/"
            />
            <div
              style={{
                position: 'relative',
                margin: '0 0 50px'
              }}
            >
              <img
                alt="branchoffice_mobile"
                src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect__pc%26mobile.jpg"
                style={{
                  width: '100%',
                  padding: '20px 0'
                }}
              />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '180px',
                    fontSize: '2rem',
                    color: color.baseText__thin
                  }}
                >
                  Mobile
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '200px',
                    fontSize: '2rem',
                    color: color.baseText__thin
                  }}
                >
                  PC
                </div>
            </div>
            <WorkText
              style={{padding: '0 0 30px'}}
            >
              企業情報検索エンジン『Baseconnect』は企業と企業のデータを繋げることで、営業の情報収集を効率的にするサービスです。
              今回は『Baseconnect』に、企業の事業所の情報を追加することになり、私はその画面のフロントエンドのコーディングを担当しました。
            </WorkText>
            <WorkText
              style={{padding: '0 0 30px'}}
            >
            <div>
              <WorkPoint>Point 1. レスポンシブ対応</WorkPoint>
              <div style={{padding: '0 0 20px'}}>
                文字が長い事業所名が少なくなかったので、文字が長くなった場合でもスマホとPCの両方でレイアウトが崩れないように、デザインと並行してコーディングを進めました。
              </div>
              <WorkPoint>Point 2. データの読み込み</WorkPoint>
              <div style={{padding: '0 0 20px'}}>
                「もっと見る」をクリックすると事務所が全て表示されるようにしました。また、動作が重たくならないように「もっと見る」をクリックするまでは表示されてない事業所を読み込まないようにコーディングしました。
              </div>
              <WorkPoint>Point 3. クラスの命名</WorkPoint>
              <div style={{padding: '0 0 20px'}} >
                新しい画面だったので、クラスの命名にはいつもより時間がかかりました。
                結果、過去のcssを使いまわせそうな箇所が多かったので、過去のクラス名を多く使用しました。
                ただ過去のクラス名はユニークな名前が多く、そのまま使用するのはふさわしくない名前も少なくありませんでした。
                他の場所でも使えるように汎用性のある名前にすべき状況と、他の箇所に影響を与えないようにユニークな名前を使用すべき状況があることを実感しました。
              </div>
            </div>
            </WorkText>
          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default BaseconnectContents;
