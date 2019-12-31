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
          要件さえ満たせば内容は自由だったので、何か現存する問題を解決できるものを作りたいと思いました。
        </WorkText>
        <WorkText style={{padding: '20px 0 10px'}}>
          そこで僕が目をつけたのは「LINEのアルバム機能」です。
          大抵の大学生は、グループでの旅行の後の写真の共有にLINEのアルバム機能を使用します。
          それはすごく便利なのですが、僕は１ユーザーとして、改善して欲しいと思っていたことがありました。
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
          あのグループでの旅行も、社内でのあのイベントも、あの人とのデートも... 自分が関わった行事のアルバムを一括して閲覧できればとても便利だと思いませんか？
        </WorkText>
        <WorkText style={{padding: '10px 0 50px'}}>
          そのような思いで作り始めて、二週間の期間で、デザインからサーバーサイド、フロントエンド、マークアップまでを個人で行いました。

        </WorkText>
      </React.Fragment>
    )
  }
}

export default PhotalContentsNeedfinding;
