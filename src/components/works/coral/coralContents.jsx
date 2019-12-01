import React, { Component } from 'react';
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";

import CoralHeader from "./coralHeader";

import * as color from "../../../css/color.js"

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
              style={{padding: '70px 0'}}
            >
              Coral
            </WorkTitle>
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
              <div>事業所画面 コーディング</div>
            </WorkHeading>
            <WorkMenuComponent
              role="Cording(React / SCSS)"
              duration="July 2019"
              url="https://baseconnect.in/"
            />
            <WorkText
              style={{padding: '0 0 30px'}}
            >
              企業情報検索エンジン『Baseconnect』は企業と企業のデータを繋げることで、営業の情報収集を効率的にするサービスです。
              今回は『Baseconnect』に、企業の事業所の情報を追加することになり、私はその画面のフロントエンドのコーディングを担当しました。
            </WorkText>
          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default CoralContents;
