import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"
import Photo from "./photo.jsx"


class Photos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-wrap" style={{justifyContent: 'space-between', padding:'0 0 0px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/cahri5.jpg"
            title="ママチャリで大阪から東京に行ったとき @富士山"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/chari3.jpg"
            title="特技は石で自転車を自立させることです @小浜"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baobabu.jpg"
            title="バオバブ #木林を探せ @Morondava"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/mada.jpg"
            title="一日中泳いだマダガスカルのビーチ @NosyBe"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/volley1.jpg"
            title="旅行にもバレーボールを持って行きます @沖縄"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/volley3.jpg"
            title="高校のバレー部のOB作ったチーム"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/fuzisan.jpg"
            title="山に登るのも好きです @富士山"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/mikosi.jpg"
            title="毎年参加してる下宿先の近所の神輿 @京都"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/soho.jpg"
            title="建築が好きです @凌空SOHO"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/teamlab.jpg"
            title="チームラボも好き @シンガポール国立博物館"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby1.jpg"
            title="息抜きはカラオケが多いです @ジャンカラ洛北店"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby4.jpg"
            title="カラオケ大会に飛び入り参加しました @Hefei Chana"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby2.jpg"
            title="自称 京都一の甘党です"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby3.jpg"
            title="収集グセがあります"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Photos ;
