import React, { Component } from 'react';
import styled from 'styled-components'

import WorkSubTitle from "../workContents/workSubTitle";
import WorkText from "../workContents/workText";
import WorkUnderLine from "../workContents/workUnderLine";
import WorkPoint from "../workContents/workPoint";

import * as color from "../../../css/color.js"

const ImageWrap = styled.div`
  display: flex;
  background: #fff;
  padding: 20px 20px 10px;
`

const ImageItem = styled.div`
  width: 100%;
  margin: 0 0 20px;
  text-align: center;
  & img {
    width: 100%;
  }
`

const PhotaImagetitle = styled(WorkSubTitle)`
  margin-bottom: 10px;
`

const WorkTextTitle = styled(WorkText)`
  color: ${color.baseText__thin};
  font-size: 2.0rem
`



class PhotalContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkText style={{padding: '30px 0 0'}}>
          teamLabのインターンではエンジニアとして参加したので、デザインを考える時間が少なかったので、インターン後にリデザインしました。
          以下ではリデザインの際に悩んだ点について、大きく二つに絞ってまとめました。
        </WorkText>
        <WorkTextTitle style={{padding: '30px 0 10px'}}>
          Point
        </WorkTextTitle>
        <WorkText style={{padding: '0 0 10px'}}>
          1. アルバムの表示デザインの変更。
        </WorkText>
        <WorkText style={{padding: '0 0 30px'}}>
          2. 新規アルバム作成をモーダル化。
        </WorkText>
        <ImageWrap>
          <ImageItem style={{marginRight: '20px'}}>
            <PhotaImagetitle>(旧) タイムライン/アルバム作成画面</PhotaImagetitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_notDesigned.jpg"
            />
          </ImageItem>
          <ImageItem>
            <PhotaImagetitle>(新) タイムライン/アルバム作成画面</PhotaImagetitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_designed.jpg"
            />
          </ImageItem>
        </ImageWrap>
        <ImageWrap>
          <ImageItem style={{marginRight: '20px'}}>
            <PhotaImagetitle>(旧) アルバム表示</PhotaImagetitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_timeline_alubum_before.jpg"
              style={{height:'300px', width:'auto'}}
            />
          </ImageItem>
          <ImageItem>
            <PhotaImagetitle>(新) アルバム表示</PhotaImagetitle>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_timeline_alubum_after.jpg"
              style={{height:'300px'}}
            />
          </ImageItem>
        </ImageWrap>
        <WorkTextTitle style={{padding: '30px 0 10px'}}>
          UX Design
        </WorkTextTitle>
        <WorkText style={{padding: '30px 0'}}>
          写真を最も目立たせたい。
        </WorkText>
      </React.Fragment>
    )
  }
}

export default PhotalContentsUX;
