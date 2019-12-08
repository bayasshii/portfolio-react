import React, { Component } from 'react';
import styled from 'styled-components'

import WorkSubTitle from "../workContents/workSubTitle";
import WorkText from "../workContents/workText";
import WorkUnderLine from "../workContents/workUnderLine";
import WorkPoint from "../workContents/workPoint";

import * as color from "../../../css/color.js"

const ImageWrap = styled.div`
  display: flex;
`

const ImageItem = styled.div`
  width: 100%;
  margin: 0 0 20px;
  text-align: center;
`

const FunctionWrap = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #ccc;
  padding: 10px 20px;
`

const FunctionList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FunctionListItem = styled.div`
  background: ${color.photal_thin};
  border-radius: 5px;
  width: 31%;
  padding: 8px;
  text-align: center;
  margin: 10px 0;
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
        <FunctionWrap>
          <FunctionList>
            <FunctionListItem>新規アルバム作成機能</FunctionListItem>
            <FunctionListItem>アルバム編集機能</FunctionListItem>
            <FunctionListItem>いいね機能</FunctionListItem>
          </FunctionList>
          <FunctionList>
            <FunctionListItem>いいねしたユーザー一覧機能</FunctionListItem>
            <FunctionListItem>タイムライン表示機能</FunctionListItem>
            <FunctionListItem>プロフィール表示機能</FunctionListItem>
          </FunctionList>
          <FunctionList>
            <FunctionListItem>新規アカウント作成機能</FunctionListItem>
            <FunctionListItem>ログイン・ログアウト機能</FunctionListItem>
            <FunctionListItem style={{background:'none'}}></FunctionListItem>
          </FunctionList>
        </FunctionWrap>
        <WorkText style={{padding: '30px 0 30px'}}>
          続いて、上記の要件を満たすために、３つの画面のワイヤーを作成しました。
          しかし数時間で勢いよくデザインしたので、正直、考えが足りなかった点が多いです。
          インターンシップから数ヶ月経った<WorkUnderLine>『今ならこうデザインするのにな』</WorkUnderLine>というのを以下で示したいと思います。
        </WorkText>
        <ImageWrap>
          <ImageItem style={{marginRight: '20px'}}>
            <WorkSubTitle>(旧) タイムライン/アルバム作成画面</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_home.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
          <ImageItem style={{marginRight: '20px'}}>
            <WorkSubTitle>(旧) ホーム画面</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_timeline.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
          <ImageItem>
            <WorkSubTitle>(旧) アルバム編集モーダル</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_modal.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
        </ImageWrap>

        <ImageWrap>
          <ImageItem style={{marginRight: '20px'}}>
            <WorkSubTitle>(新) タイムライン画面</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_timeline_after.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
          <ImageItem style={{marginRight: '20px'}}>
            <WorkSubTitle>(新) ホーム画面</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_home_after.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
          <ImageItem>
            <WorkSubTitle>(新) アルバム編集モーダル</WorkSubTitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_wire_modal_after.jpg"
              style={{width: '100%'}}
            />
          </ImageItem>
        </ImageWrap>

        <WorkPoint style={{margin: '10px 0'}}>Point 1. 新規アルバム作成機能</WorkPoint>
        <WorkSubTitle style={{textAlign: 'left', margin: '30px 0 0 -1.5rem', borderBottom:'3px solid #ccc'}}>当時の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 40px'}}>
          誰もが迷わずにアルバムを作成できるように、ファーストビューであるタイムライン画面の上部に、新規アルバム作成機能を配置しよう。
        </WorkText>
        <WorkSubTitle style={{textAlign: 'left', marginLeft:'-1.5rem', borderBottom:'3px solid #ccc'}}>今の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 30px'}}>
          ファーストビューに配置するには、新規アルバム作成機能は利用頻度が少ないように思う。
          作成をせず、閲覧だけをしたいユーザーも多いのではないだろうか。
          またホーム画面から新規アルバム作成ができないのも、ユーザーを惑わせる原因になるだろう。
          どの画面からでもアクセスできて、かつ、絶対に主張の強いデザインにすべき。
        </WorkText>

        <WorkPoint style={{margin: '10px 0'}}>Point 2. アルバム編集機能</WorkPoint>
        <WorkSubTitle style={{textAlign: 'left', margin: '30px 0 0 -1.5rem', borderBottom:'3px solid #ccc'}}>当時の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 40px'}}>
          アルバム編集機能は各アルバムの右上にアイコンを配置して、そのアイコンを押すとモーダルが表示される。
          同系統のサービスであるインスタグラムのデザインを参考した。
          アイコン押下後、メニューを表示せず、モーダルにしてタブで管理した理由は、メンターさんがテストを行う環境はPCだからである。
          PCであれば画面は横に広いのでタブ管理した方が、一度のアイコン押下で複数の編集ができるので効率が良いと考えた。
          またそもそも、「アルバム名編集」「写真の追加」「写真の削除」などを一つのタブにまとめなかった理由は、シンプルな方が操作性が良い。
          一つのタブでまとめた場合、「編集→保存」の行程はアルバム名ごとにしなければいけないのか、一括でできるのかが分かりにくくなる。
          日頃から使うサービスなら慣れれば大丈夫だが、今回初めて操作する人でも理解できる直感的なインターフェースにするにはタブに分けたほうがシンプルで良いだろう。
        </WorkText>
        <WorkSubTitle style={{textAlign: 'left', marginLeft:'-1.5rem', borderBottom:'3px solid #ccc'}}>今の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 30px'}}>
          悩ましい
        </WorkText>

        <WorkPoint style={{margin: '10px 0'}}>Point 3. タイムライン表示機能</WorkPoint>
        <WorkSubTitle style={{textAlign: 'left', margin: '30px 0 0 -1.5rem', borderBottom:'3px solid #ccc'}}>当時の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 40px'}}>
          一目見て、アルバムのタイトルとその内容が分かるようにデザインした。
          LINEのアルバム機能とFACEBOOKのタイムラインを参考にした。
          まずLINEのアルバム機能では、アルバム名と日時が下の方に控えめに表示されている。
          今回のケースでは写真の表示も大だが、グループ単位での管理でない分、「誰」という情報を強調する必要がある。
          その点ではFACEBOOKのように「内容」よりも「誰」が発言したのかが強調されているデザインを参考にすべき。
        </WorkText>
        <WorkSubTitle style={{textAlign: 'left', marginLeft:'-1.5rem', borderBottom:'3px solid #ccc'}}>今の考え</WorkSubTitle>
        <WorkText style={{padding: '10px 0 30px'}}>
          現状のデザインでは画像に視線が行きづらい。メンバーはともかく必ずしもタイトルを強調する必要はない。
          「メンバー → 画像 → タイトル・日時」の順で視線が行くのがこのサービスにおいては自然。
        </WorkText>
      </React.Fragment>
    )
  }
}

export default PhotalContentsUX;
