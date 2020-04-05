import React, { Component } from 'react';
import styled from 'styled-components'

import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";

import * as color from "../../../css/color.js"


const ImageWrap = styled.div`
  display: flex;
`

const ImageItem = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px 0;
  text-align: center;
`

class PhotalContentsServerside extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkText style={{padding: '20px 0 10px'}}>
          サーバーサイドとフロントエンドのコーディングを行いました。
          データ通信するwebサイトの実装を自分でするのが初めてだったので、非常に良い経験になりました。
        </WorkText>
        <WorkText style={{padding: '20px 0 10px'}}>
          学んだこととしては、<br/>
          - API、MVC、正規化など、サーバーサイドやデータベースの用語<br/>
          - サーバーとの通信の方法<br/>
          - 非同期通信の仕組み<br/>
          などです。
        </WorkText>
        <ImageWrap>
          <ImageItem style={{marginRight: '4%'}}>
            <img
              alt="photal_laughUX_before"
              src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal_database_laugh.jpg"
              style={{width: '100%'}}
            />
            <WorkSubTitle style={{marginTop: '10px'}}>メンターや友達に助言をもらいながら、DBの構造を考えました。</WorkSubTitle>
          </ImageItem>
        </ImageWrap>
      </React.Fragment>
    )
  }
}

export default PhotalContentsServerside;
