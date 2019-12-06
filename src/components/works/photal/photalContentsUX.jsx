import React, { Component } from 'react';
import styled from 'styled-components'

import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";
import WorkUnderLine from "../workContents/workUnderLine";
import WorkPoint from "../workContents/workPoint";

import * as color from "../../../css/color.js"

const ImageWrap = styled.div`
  display: flex;
`

const ImageItem = styled.div`
  width:100%;
  margin: 30px 0;
  text-align: center;
`

const FunctionListWrap = styled.div`
  width: 100%;
  display: flex;
`

const FunctionList = styled.div`
  background: ${color.photal_thin};
  border-radius: 5px;
  width: 30%;
  padding: 8px;
  text-align: center;
  margin: 0 3% 3% 0;
`

class PhotalContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkText style={{padding: '10px 0 30px'}}>
          インターンシップとしてteamLabに求められた要件と、アルバム管理する上で必要な要件を書き出した結果、
          以下の８つの機能を最低限実装する必要があることが分かりました。<WorkUnderLine>なるべく要件の粒度を揃える</WorkUnderLine>ことを意識したので、プロジェクトマネジメントがしやすくなりました。
          (とはいえコーディングの工数が全くわからなかったので全然思うようにマネジメントできませんでしたが...)
        </WorkText>
        <FunctionListWrap>
          <FunctionList>アルバム作成機能</FunctionList>
          <FunctionList>アルバム編集機能</FunctionList>
          <FunctionList>いいね機能</FunctionList>
        </FunctionListWrap>
        <FunctionListWrap>
          <FunctionList>いいねしたユーザー一覧機能</FunctionList>
          <FunctionList>タイムライン表示機能</FunctionList>
          <FunctionList>プロフィール表示機能</FunctionList>
        </FunctionListWrap>
          <FunctionListWrap>
          <FunctionList>新規アカウント作成機能</FunctionList>
          <FunctionList>ログイン・ログアウト機能</FunctionList>
        </FunctionListWrap>
        <WorkText style={{padding: '10px 0 30px'}}>
          続いて、上記の要件を満たす画面のワイヤーを作成しました。
        </WorkText>
        <ImageWrap>
          <ImageItem style={{marginRight: '4%'}}>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire.png"
              style={{width: '100%'}}
            />
            <WorkSubTitle style={{marginTop: '10px'}}>ワイヤーデザイン</WorkSubTitle>
          </ImageItem>
        </ImageWrap>
        <WorkText style={{padding: '10px 0 30px'}}>
          ユーザーとしてもっとも意識したのは、teamLabのメンターさんです。
          今回のワイヤーデザインでは<WorkUnderLine>メンターさんが迷わずにテストしやすいデザイン</WorkUnderLine>を目指しました。
          以下がワイヤーの中でも特にこだわってデザインしたポイントになります。
        </WorkText>

        <WorkPoint style={{padding: '10px 0'}}>Point 1. 新規アルバム作成機能</WorkPoint>
        <WorkText style={{padding: '10px 0 30px'}}>
          ホーム画面のTOPに新規アルバム作成機能を配置しました。
          メンターさんがテストの際に行う行為の順番を考えると、まず始めにアルバムの作成をすると思います。
          なのでメンターさんが迷わずにアルバムを作成できるように、ファーストビューに新規アルバム作成機能を配置しました。
        </WorkText>

        <WorkPoint style={{padding: '10px 0'}}>Point 2. アルバム編集機能</WorkPoint>
        <WorkText style={{padding: '10px 0 30px'}}>
          アルバム編集機能は各アルバムの右上にアイコンを配置して、そのアイコンを押すとモーダルが表示されるようにしました。
          同系統のサービスであるインスタグラムのデザインを参考しました。
          アイコン押下後、メニューにせず、モーダルにしてタブで管理した理由は、メンターさんがテストを行うのはPCだからです。
          PCであればタブ管理した方が、一度のアイコン押下で複数の編集ができるので効率が良いと考えたからです。
          そもそも、「アルバム名編集」「写真の追加」「写真の削除」などを一つのタブにまとめなかった理由は、シンプルな方が操作性が良いからです。
          「編集→保存」の行程はアルバム名ごとにしなければいけないのか、一括でできるのかが、一つのタブでまとめた場合分かりにくくなります。
          日頃から使うサービスなら慣れれば大丈夫ですが、今回初めて触るメンターでも直感的なインターフェースにするには分けたほうがシンプルで良いだろうと考えました。
        </WorkText>
      </React.Fragment>
    )
  }
}

export default PhotalContentsUX;
