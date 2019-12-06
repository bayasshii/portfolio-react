import React, { Component } from 'react';
import styled from 'styled-components'

import WorkSubTitle from "../workContents/workSubTitle";
import WorkText from "../workContents/workText";
import WorkUnderLine from "../workContents/workUnderLine";

import * as color from "../../../css/color.js"


const ImageWrap = styled.div`
  display: flex;
`

const ImageItem = styled.div`
  width: 48%;
  margin: 30px 0;
  text-align: center;
`

class PhotalContentsNeedfinding extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkText style={{padding: '20px 0 10px'}}>
          上記にもありますが、僕はサーバーサイドエンジニアとしてteamLabの二週間のインターンに参加しました。
          そこで与えられた課題の主な要件は<WorkUnderLine>「インスタグラムのような写真投稿機能のあるWEBサービスの実装」</WorkUnderLine>です。
          しかし、当たり前かもしれませんが、その要件に独自性やデザインの要素は全く不要でした。<WorkUnderLine>「何を作るか」よりも「どう作るか」</WorkUnderLine>がエンジニアにとっては大事だからです。<br/>
          でも、せっかくサービスをつくるんだったら、ただ要件を満たすだけでなく、何か実際の問題を解決できるものを作りたい！と、僕の中のデザイナーとしての血がどうしても騒いでしまいました。笑
        </WorkText>
        <WorkText style={{padding: '10px 0'}}>
          それをメンターに相談したところ、「期限内で要件を満たせば何を作ってもいい」との優しいお言葉を頂けたので、僕はまず解決したい問題探しからスタートしました。
        </WorkText>
        <WorkText style={{padding: '10px 0'}}>
          30分ほど考えて、僕が目をつけたのは<WorkUnderLine>「LINEのアルバム機能」</WorkUnderLine>です。
          大抵の大学生は、グループでの旅行の後の写真の共有にLINEのアルバム機能を使用します。それはすごく便利なのですが、僕は１ユーザーとして、改善して欲しいと思っていたことがあります。
        </WorkText>
        <ImageWrap>
          <ImageItem style={{marginRight: '4%'}}>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_laughUX_before.jpg"
              style={{width: '100%'}}
            />
            <WorkSubTitle style={{marginTop: '10px'}}>LINEのアルバム管理方法。アルバム単位での管理。</WorkSubTitle>
          </ImageItem>
          <ImageItem>
            <img
              alt="photal_laughUX_after"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_laughUX_after.jpg"
              style={{width: '100%'}}
            />
            <WorkSubTitle　style={{marginTop: '10px'}}>今回提案するアルバム管理方法。ユーザー単位での管理。</WorkSubTitle>
          </ImageItem>
        </ImageWrap>
        <WorkText style={{padding: '10px 0'}}>
          LINEのアルバムの管理方法としては、個人と個人を繋いだグループ単位でのアルバムの管理です。
          それはそれで便利なのですが、グループ単位でのアルバム管理に加えて、<WorkUnderLine>ユーザー個人単位でのアルバムの管理</WorkUnderLine>もできればいいのになぁと常々思っていました。
          あのグループでの旅行も、社内でのあのイベントも、あの人とのデートも... 自分が関わった行事のアルバムを一括で時系列で閲覧できればとても便利だと思いませんか？
        </WorkText>
        <WorkText style={{padding: '10px 0 50px'}}>
          これは自分が不満に思っていた分すごく解決し甲斐のある問題だし、しかも『写真投稿機能のあるWEBサービス』というインターンシップとしての要件も満たせている！
          とウキウキの気分で、続いてUXの設計に取り掛かりました。
        </WorkText>
      </React.Fragment>
    )
  }
}

export default PhotalContentsNeedfinding;
