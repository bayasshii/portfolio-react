import React, { Component } from 'react'
import "./baseconnect.css";

class BaseconnectContents extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="baseconnectContents">
          <div className="baseconnectContents__header flex">
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png" />
          </div>
          <div className="baseconnectContents__wrap">
            <h1>Baseconnect Internship</h1>
            <div className="baseconnectContents__text">
              Baseconnectのミッションは「世界中のデータを繋げることで、ダイレクトに必要な情報にアクセスできる世界を作る」ことです。
              現在は主に、営業を支援するBtoBのwebサービスを開発しています。
            </div>
            <div className="baseconnectContents__text">
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
            </div>
            <div className="baseconnectContents__text">
              以下では具体的な活動について紹介していきます。
            </div>
            <div>

            </div>
            <div className="baseconnectContents__title">
              <div>Case 1.　</div>
              <h2>事業所画面 コーディング</h2>
            </div>
            <div className="baseconnectContents__list">
              <ul>
                <li>
                  URL
                </li>
                <li>
                  <a href="https://baseconnect.in/" target="_blank">https://baseconnect.in</a>
                </li>
              </ul>
            </div>
            <div className="baseconnectContents__list">
              <ul>
                <li>
                  Roles
                </li>
                <li>
                  コーディング (React.js / SCSS)
                </li>
              </ul>
            </div>
            <div className="baseconnectContents__list">
              <ul>
                <li>
                  Detail
                </li>
                <li>
                  企業情報検索エンジン『Baseconnect』は企業と企業のデータを繋げることで、営業の情報収集を効率的にするサービスです。
                  <br/>
                  今回は『Baseconnect』に、企業の事業所の情報を追加することになり、私はその画面のフロントエンドのコーディングを担当しました。
                  <div className="baseconnectContents__image">
                    <div className="flex">
                      <div>Mobile</div>
                      <div>PC</div>
                    </div>
                    <img alt="branchoffice_mobile" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect__pc%26mobile.jpg"/>
                  </div>
                </li>
              </ul>
            </div>
            <div className="baseconnectContents__list">
              <ul>
                <li>
                  Points
                </li>
                <li className="pb-20">
                  ・普段の業務は改修が多く、新画面を実装するのが初めてだったので、クラスの命名にはいつもより悩みました。
                  結果、過去のcssを使いまわせそうな箇所が多かったので、クラス名も過去のものを多く使用しました。
                  ただ過去のクラス名はユニークな名前のものも多く、そのまま使用するのはふさわしくないものも少なくありませんでした。
                  他の場所でも使えるように汎用性のある名前にすべきところと、他の箇所に影響を与えないようにユニークな名前を使用すべきところがあることを実感しました。
                </li>
                <li className="pb-20">
                  ・文字が長い事業所名も少なくなかったので、文字が長くなった場合でもスマホでレイアウトが崩れないように、デザイナーと共同でデザインしました。
                </li>
                <li className="pb-20">
                  ・「もっと見る」をクリックすると事務所が全て表示されるようにしました。また、動作が重たくならないように「もっと見る」をクリックするまでは表示されてない事業所を読み込まないようにコーディングしました。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BaseconnectContents ;
