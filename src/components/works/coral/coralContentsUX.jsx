import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

import WorkText from "../workContents/workText";
import WorkPoint from "../workContents/workPoint";

const CoralContentsUXWrap = styled.div`
  width: 100%;
`

const CoralContentsUXImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
`

const CoralContentsUXImage = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
`

const CoralContentsUXImageText = styled.div`
  font-size: 1.5rem;
  width: 100%;
  color: ${color.baseText__thin};
  padding: 10px 0 0;
  margin: 0 auto 20px;
`

const CoralContentsUXSubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const Table1 = styled.div`

`
const Table2 = styled.div`
  padding-left: 20px;
`
const Table3 = styled.div`
  padding-left: 40px;
`

class CoralContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsUXWrap>
          <WorkText style={{padding: '0 0 30px'}}>
            今回はユーザー側の『歯科医を選択する画面(初回)』『歯科医を選択する画面(2回目以降)』『歯科医の詳細画面』の3画面を設計しました。
          </WorkText>
          <WorkText style={{padding: '0 0 30px'}}>
            <CoralContentsUXSubTitle style={{padding: '0 0 10px'}}>▶︎  コンセプト</CoralContentsUXSubTitle>
            『安心感』<br/>
            病院を選ぶ際に、患者が考えていることは一体なんでしょう？<br/>
            私は『安心できる医者かどうか』だと思います。自分では分からない病気のことだからこそ、きちんと診断してくれる医師がいい、と思う人が多いのではないでしょうか。<br/>
            今回、オンライン歯科診断アプリという未知の分野では、ユーザーは歯科医の顔を直接見ることができません。
            そんな中でユーザーに使用してもらうには、特にこの『安心できる医者かどうか』という点が大事だと思います。
            ので今回、『安心できる医師か判断しやすいこと』をデザインのコンセプトに定めました。
          </WorkText>
          <WorkText style={{padding: '0 0 30px'}}>
            <CoralContentsUXSubTitle style={{padding: '0 0 10px'}}>▶︎  情報設計</CoralContentsUXSubTitle>
            <Table1>-　ユーザーが『安心感を持って』歯科医を選択するために必要な情報</Table1>
              <Table2>-　歯科医の詳細情報</Table2>
                <Table3>-　名前</Table3>
                <Table3>-　医院名</Table3>
                <Table3>-　場所</Table3>
              <Table2>-　歯科医の人柄</Table2>
                <Table3>-　顔写真</Table3>
                <Table3>-　ひとこと</Table3>
              <Table2>-　歯科医の評価</Table2>
                <Table3>-　５段階評価</Table3>
                <Table3>-　クチコミ</Table3>
                <Table3>-　実績</Table3>
              <Table2>-　診断可能日</Table2>
              <Table3>-　日程</Table3>
              <Table3>-　時間</Table3>
          </WorkText>
          <CoralContentsUXSubTitle style={{padding: '0 0 20px'}}>▶︎  ワイヤーデザイン</CoralContentsUXSubTitle>
          <CoralContentsUXImageWrap>
            <CoralContentsUXImage style={{ left: '0'}}>
              <CoralContentsUXImageText>歯科医の詳細画面</CoralContentsUXImageText>
                <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorDetailWire.jpg"
                  style={{ width: '280px' }}
                />
            </CoralContentsUXImage>
            <CoralContentsUXImage style={{ right: '0', left: '0', margin: 'auto', width: '280px'}}>
              <CoralContentsUXImageText>歯科医を選択する画面(初回)</CoralContentsUXImageText>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorFirsrtWire.jpg"
                style={{ width: '280px' }}
              />
            </CoralContentsUXImage>
            <CoralContentsUXImage style={{ right: '0'}}>
              <CoralContentsUXImageText>歯科医を選択する画面(2回目以降)</CoralContentsUXImageText>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorSecondWire.jpg"
                style={{ width: '280px' }}
              />
            </CoralContentsUXImage>
          </CoralContentsUXImageWrap>
          <WorkPoint>Point 1. 歯科医の個人情報の強調</WorkPoint>
          <WorkText style={{padding: '10px 0 30px'}}>
            歯科医の顔や名前を大きく見せることで、どんな人に診察してもらえるのか、ユーザーの体験を想像しやすくしました。
            オンライン診断という未知のアプリケーションなので、体験を想像しやすくすることで、ユーザーに安心感を持ってもらいやすくするためです。
          </WorkText>
          <WorkPoint>Point 2. 歯科の評価の強調</WorkPoint>
          <WorkText style={{padding: '10px 0 30px'}}>
            いいねの数を大きく表示することで、一目で歯科医への不信感を取り除くことができて、ユーザーの安心感が増すようにしました。
          </WorkText>
          <WorkPoint>Point 3. 健全なUI</WorkPoint>
          <WorkText style={{padding: '10px 0 30px'}}>
            近年マッチングアプリに見られる「横スクロール(スワイプ)」ではなく、「縦スクロール」で歯科医を選択するUXにしました。
            より現代的なUXである横スクロールよりも、昔から馴染みのある縦スクロールの方がユーザーは安心するのではないかと考えたからです。
            また縦スクロールの利点として、より多くの情報を短時間で見ることができるという面もあります。
          </WorkText>
        </CoralContentsUXWrap>
      </React.Fragment>
    )
  }
}

export default CoralContentsUX;
