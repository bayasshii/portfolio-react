import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

import WorkText from "../workContents/workText";

const CoralContentsUXWrap = styled.div`
  width: 100%;
`

const CoralContentsUXImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
`

const CoralContentsUXImage = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
`

const CoralContentsUXImageText = styled.div`
  font-size: 2.0rem;
  border: 1px solid ${color.baseText__thin};
  border-radius: 5px;
  color: ${color.baseText__thin};
  padding: 15px 0;
  margin: 0 0 20px 0;
`

class CoralContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsUXWrap>
          <WorkText style={{padding: '0 0 30px'}}>
            今回はユーザー側の画面を設計しました。
            『歯科医を選択する画面(初回)』『歯科医の詳細画面』『歯科医の検索条件を変更するモーダル』『歯科医を選択する画面(2回目以降)』の4画面を設計しました。
          </WorkText>
          <CoralContentsUXImageWrap>
            <CoralContentsUXImage style={{ left: '0'}}>
              <CoralContentsUXImageText>歯科医の詳細画面</CoralContentsUXImageText>
                <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorDetailWire.jpg"
                  style={{ width: '400px' }}
                />
            </CoralContentsUXImage>
            <CoralContentsUXImage style={{ right: '0'}}>
              <CoralContentsUXImageText>歯科医を選択する画面(初回)</CoralContentsUXImageText>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorFirsrtWire.jpg"
                style={{ width: '400px' }}
              />
            </CoralContentsUXImage>
          </CoralContentsUXImageWrap>
          <CoralContentsUXImageWrap style={{ height: '850px'}}>
            <CoralContentsUXImage style={{ left: '0'}}>
              <CoralContentsUXImageText>歯科医を選択する画面(2回目以降)</CoralContentsUXImageText>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralChooseDoctorSecondWire.jpg"
                style={{ width: '400px' }}
              />
            </CoralContentsUXImage>
            <CoralContentsUXImage style={{ right: '0'}}>
              <CoralContentsUXImageText>歯科医の検索条件を変更するモーダル</CoralContentsUXImageText>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralModalWire.jpg"
                style={{ width: '400px' }}
              />
            </CoralContentsUXImage>
          </CoralContentsUXImageWrap>
        </CoralContentsUXWrap>
      </React.Fragment>
    )
  }
}

export default CoralContentsUX;
