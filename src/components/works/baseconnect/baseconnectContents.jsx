import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import WorkTitle from "../workContents/workTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkPoint from "../workContents/workPoint";
import WorkBack from "../workContents/workBack";

import BaseconnectHeader from "./baseconnectHeader";



const OthersDerails = styled.span`
  font-size: 1.2rem;
  background: #fff;
  padding: 10px 30px;
  margin-top: 10px;
  border-radius: 10px;
  max-width: calc(100% - 40px);
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`

const BaseconnectContetsWrap = styled.div`
  border-radius: 20px;
  background: #FFF;
  padding: 40px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

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
  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

class BaseconnectContents extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseconnectHeader/>
        <div
          style={{ background:color.background , padding:'0 0 80px'}}
        >
          <WorkWrap>
            <WorkTitle>Baseconnect Internship</WorkTitle>

            <WorkSubTitle
              style={{ padding: '0 0 30px' }}
            >
              UI Design / Frontend Cording
            </WorkSubTitle>

            <div className="flex flex-wrap">
              <OthersDerails style={{margin: '10px 0 0 20px'}}>課外活動</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>グループワーク</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>期間 ： 16month / 2018.10 ~ 2020.01 (学部4年 ~ 修士1年)</OthersDerails>
              <OthersDerails style={{margin: '10px 0 0 20px'}}>使用ツール ： Sketch / React / HTML / CSS</OthersDerails>
            </div>

            <WorkText
              style={{padding: '30px 20px'}}
            >
              デザイナーインターンとして2018年10月から現在まで勤務しています。自社プロダクトや、自社の開発画面を主に担当しています。具体的な業務としては
                <ul>
                  <li>- UIデザイン</li>
                  <li>- 新画面・新機能のマークアップ</li>
                  <li>- フロントエンドの改修</li>
                  <li>- コーディングレビュー</li>
                  <li>- Design Bootcampの運営 <a href="http://company.baseconnect.in/design-bootcamp/" target="_blank">(http://company.baseconnect.in/design-bootcamp)</a></li>
                </ul>
              などを行なっています。
            </WorkText>

            <WorkText
              style={{padding: '0 20px 50px'}}
            >
              以下では数点、実際に担当した業務を紹介します
            </WorkText>

            <BaseconnectContetsWrap style={{margin: '0 20px 0'}}>
              <WorkHeadingPhotal style={{margin: '0 0 10px'}}>
                case 1.　Frontend Cording　- 事業所画面 -
              </WorkHeadingPhotal>
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
                style={{padding: '0 0 0'}}
              >
              <div>
                <WorkPoint>Point 1. レスポンシブ対応</WorkPoint>
                <div style={{padding: '0 0 20px'}}>
                  スマホからの流入が多いサービスなので、レスポンシブ対応にも時間をかけました。
                  事業所名の文字が長くなった場合でもスマホとPCの両方でレイアウトが崩れないように、デザインと並行してコーディングを進めました。
                </div>
                <WorkPoint>Point 2. マークアップの構成とクラスの命名</WorkPoint>
                <div style={{padding: '0 0 20px'}} >
                  新しい画面だったので、マークアップの構成を考えるのと、クラスの命名にはいつもより時間がかかりました。
                  具体的にはAtomicDesignを意識して、再利用できる箇所はコンポーネント単位で切り分けて実装するように心がけました。
                  また後にコーディングする人が迷わずに作業できるように、BEMに則ってクラスの命名をしました。
                </div>
                <WorkPoint>Point 3. データの読み込み</WorkPoint>
                <div style={{padding: '0 0 0'}}>
                  読み込みの動作が重たくならないように、「もっと見る」をクリックしてから表示されてない事業所を読み込むようにコーディングしました。
                </div>
              </div>
              </WorkText>
            </BaseconnectContetsWrap>


            <BaseconnectContetsWrap style={{margin: '50px 20px 100px'}}>
              <WorkHeadingPhotal style={{margin: '0 0 10px'}}>
                case 2.　Design Bootcamp 運営
              </WorkHeadingPhotal>
              <img
                alt="baseconnect"
                src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Design+Bootcamp+%E8%AA%AC%E6%98%8E%E4%BC%9A%E8%B3%87%E6%96%99+(1).jpg"
                style={{
                  width: '100%',
                  padding: '20px 0'
                }}
              />
              <img
                alt="baseconnect"
                src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Design+Bootcamp+%E8%AA%AC%E6%98%8E%E4%BC%9A%E8%B3%87%E6%96%99.jpg"
                style={{
                  width: '100%',
                  padding: '20px 0'
                }}
              />

              <WorkText
                style={{padding: '0px 0 0px',textAlign:'center', color:color.baseText__thin}}
              >
              説明会で使用している資料の一部

              </WorkText>

              <WorkText
                style={{padding: '30px 0 30px'}}
              >
                Design Bootcampは未経験からデザイナーを目指すプログラムです。優秀で意欲の高い人材の長期インターン採用を目標に、毎月開催してます。
              </WorkText>

              <WorkText
                style={{padding: '0px 0 30px'}}
              >
                優秀で意欲の高い人材に興味を持ってもらうために、なるべく自分の情報を開示したり、自分のインターンでの体験談を話したりして、インターンを通して得られる経験が想像しやすくなるように工夫して運営しています。
              </WorkText>

            </BaseconnectContetsWrap>

            <WorkBack
            />

          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default BaseconnectContents;
