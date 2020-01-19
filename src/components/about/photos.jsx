import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"
import Photo from "./photo.jsx"


class Photos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/cahri5.jpg"
            title="初めて自転車で東京まで行ったとき(高3) @富士山"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/chari6.jpg"
            title="東京まで行ったとき(左の写真の3年後) @浜名湖"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/chari3.jpg"
            title="特技は石で自転車を自立させることです"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/chari4.jpg"
            title="斜め後ろから撮るのがセクシーで好きです"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baobabu.jpg"
            title="バオバブ with木林 @Morondava"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/mada.jpg"
            title="日が暮れるまで泳いだビーチ @NosyBe"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/volley1.jpg"
            title="マダガスカルにも持っていったバレーボール"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/volley3.jpg"
            title="高校のバレー部のOBでサークルの大会に出ました"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/soho.jpg"
            title="建築が好きです。特にザハ・ハディド @凌空SOHO"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/kentiku.jpg"
            title="伊東豊雄も好き @瞑想の森"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/teamlab.jpg"
            title="チームラボも好き @シンガポール国立博物館"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zaha.jpg"
            title="でもやっぱりザハが好きです @東大門デザインプラザ"
          />
        </div>
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby1.jpg"
            title="息抜きはだいたいカラオケ"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby4.jpg"
            title="謎のカラオケ大会に参加しました @Hefei Chana"
          />
        </div>

        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby2.jpg"
            title="自称京都一の甘党です"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby3.jpg"
            title="収集グセがあります"
          />
        </div>
        {/*
        <div className="flex" style={{justifyContent: 'space-between', padding:'0 0 70px'}}>
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/mikosi.jpg"
            title="毎年参加してる下宿先の近所の神輿"
          />
          <Photo
            src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/hobby2.jpg"
            title="富士山"
          />
        </div>
        */}
      </React.Fragment>
    );
  }
}

export default Photos ;
