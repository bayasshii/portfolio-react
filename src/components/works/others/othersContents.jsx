import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import WorkWrap from "../workContents/workWrap";

import Slider from "react-slick";

import OthersHeader from "./othersHeader.jsx"

const OthersContetsWrap = styled.div`
  position: relative;
  padding-top: 30px;
`

const OthersTopImage = styled.div`
  width: 500px;
  height: auto;
  background: #fff;
  z-index: 100;
`

const OthersTopImageWrap = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
`

const OthersTitleWrap = styled.div`
  margin-left: auto;
  width: 600px;
  height: 270px;
  background: #C5E6E7;
  z-index: 10;
  padding: 35px 30px 30px 140px
`

const OthersTitle = styled.div`
  font-size: 3.0rem;
  letter-spacing: 0.3rem
`

const OthersDerailsWrap = styled.div`
  padding-bottom: 30px
`

const OthersDerails = styled.span`
  font-size: 1.2rem;
  background: #fff;
  padding: 5px 15px;
  margin-top: 10px;
  border-radius: 10px;
  width: auto;
`

const OthersTextWrap = styled.div`
  margin: 0 0 0 auto;
  padding: 20px 30px 30px 140px;
  width: 600px;
  height: auto;
  z-index: 10;
  font-size: 1.5rem;
  line-height: 3rem;
`

class OthersContents extends Component {
  render() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };

    return (
      <React.Fragment>
        <OthersHeader/>
        <div
          style={{ background:color.background }}
        >
          <WorkWrap style={{padding: '80px 0'}}>
            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="me310" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/me310_2.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="me310" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/me310_1.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="me310" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/me310_3.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="me310" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/me310_4.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="me310" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/me310_5.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap>
                <OthersTitle>ME310/Sugar</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>グループワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'15px'}}><OthersDerails>課外活動</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：デザイン / マーケティング / インタビュー</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Illustrator</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：11months / 2019.09 ~ 2020.07 (修士1年)</OthersDerails></OthersDerailsWrap>
              </OthersTitleWrap>

              <OthersTextWrap>
                ME310/Sugarとはスタンフォード大学主催の国際プロジェクトです。
                自国の学生４人と他国の学生４人で１つのチームを組んで、デザイン思考やユーザー中心設計を実践的に学ぶプロジェクトです。
                私たちのチームは現代の農家が抱える問題の発見と解決に取り組んでいます。
                2020.01現在、リサーチをしながらプロトタイプを作成して検証を行っている段階です。
              </OthersTextWrap>
            </OthersContetsWrap>



            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="fortana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana1.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="fortana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana2.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="fortana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana3.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="fortana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana4.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>
              <OthersTitleWrap style={{background:color.mainYellow__thin}}>
                <OthersTitle>fortana</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>グループワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'15px'}}><OthersDerails>授業課題</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / プログラミング</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Rhinoceros / Python / Illustrator / Photoshop</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：1months / 2018.01 (学部3年)</OthersDerails></OthersDerailsWrap>
              </OthersTitleWrap>

              <OthersTextWrap>
                コンセプトは「自由な公園」です。
                プログラミングによってランダムに配置された飛び石や木々が自由なアクティビティを偶発することを期待してデザインしました。
                何もないけど何でもできるような、大きな曖昧性を持った公園です。
              </OthersTextWrap>
            </OthersContetsWrap>






            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-01.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-02.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-03.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-04.svg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap>
                <OthersTitle>Workshop with SUTD</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>グループワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'15px'}}><OthersDerails>課外活動</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / プログラミング</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Python / Illustrator / Photoshop</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：5days / 2018.06 (学部4年)</OthersDerails></OthersDerailsWrap>
              </OthersTitleWrap>
              <OthersTextWrap>
                シンガポール国立工科大学との共同ワークショップに参加しました。
                Twitter上のツイートをスクレイピングして得た位置情報データを、実際の地図にプロットして分析しました。
                日本人と外国人観光客でかなり違いがあって面白かったです。
              </OthersTextWrap>
            </OthersContetsWrap>




            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sotsuron1.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sotsuron2.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap style={{background:color.mainYellow__thin}}>
                <OthersTitle>CloudChair</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>個人ワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'15px'}}><OthersDerails>卒業制作</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / デザイン / プログラミング</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Rhinoceros / Python / Illustrator</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：4months / 2018.10 ~ 2019.01(学部4年)</OthersDerails></OthersDerailsWrap>
              </OthersTitleWrap>

              <OthersTextWrap>
                紙のみを使用して軽い椅子を制作しました。
                Rhinocerosを用いて、椅子の高さ・横幅・座面の深さなど様々な要素をパラメトリックにプログラミングした後、３種類の異なる形の椅子を制作してユーザー評価を行いました。
              </OthersTextWrap>
            </OthersContetsWrap>



            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <OthersTopImage style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakuWebImage.jpg"
                    style={{ width: '100%' }}
                  />
                </OthersTopImage>
              </OthersTopImageWrap>

              <OthersTitleWrap style={{height:'310px'}}>
                <OthersTitle>近江焼肉すだく LPデザイン</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>個人ワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'15px'}}><OthersDerails>課外活動</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails><a href="http://sudaku.crap.jp" target="_blank">URL：http://sudaku.crap.jp</a></OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / デザイン / コーディング</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Sketch / HTML / CSS</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：5days / 2018.12 (学部4年)</OthersDerails></OthersDerailsWrap>
              </OthersTitleWrap>

              <OthersTextWrap>
                友人が経営する焼肉屋のLPをデザインしました。
                当時の私はwebデザインやコーディングが本当に初心者だった上、期間が一週間だったので、レスポンシブは諦めてスマホのみに絞りました。
                今見返すと、デザイン以前にclass名がとても面白くて笑えます。
              </OthersTextWrap>
            </OthersContetsWrap>




            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/office1.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/office2.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap style={{background:color.mainYellow__thin}}>
                <OthersTitle>Connect Office</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>個人ワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'10px'}}><OthersDerails>授業課題</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / デザイン / 模型制作</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Illustrator / Photoshop / JWCAD</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：2months / 2017.06 ~ 07 (学部3年)</OthersDerails></OthersDerailsWrap>

              </OthersTitleWrap>

              <OthersTextWrap>
                老舗オフィス家具メーカーの新オフィスの設計を行いました。
                「イノベーティブなアイデアが生まれない会社に、オフィスの力でイノベーションを起こす」ことをコンセプトにしてデザインに取り組みました。
              </OthersTextWrap>
            </OthersContetsWrap>



            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/meishidayon2.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/meishidayon1.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap>
                <OthersTitle>名刺</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>個人ワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'10px'}}><OthersDerails>課外活動</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：コンセプトメイク / デザイン</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Illustrator / Photoshop</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：2days / 2019.04 (修士1年)</OthersDerails></OthersDerailsWrap>

              </OthersTitleWrap>

              <OthersTextWrap>
                世界中を旅して写真を届けるJoueneyalistを名乗る友人の名刺をデザインしました。
                旅のワクワク感と、Joueneyalistという未知の新しい職業の近未来感が伝わることを意識しました。
              </OthersTextWrap>
            </OthersContetsWrap>



            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/undolight092.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/undolight01.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap style={{background:color.mainYellow__thin}}>
                <OthersTitle>UnduLight</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>個人ワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'10px'}}><OthersDerails>授業課題</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：デザイン / プログラミング</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Rhinoceros / Python / Illustrator / Photoshop</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：2months / 2017.12 (学部3年)</OthersDerails></OthersDerailsWrap>

              </OthersTitleWrap>

              <OthersTextWrap>
                『プログラミングとデジタルファブリケーションを使用した照明』をテーマにデザインしました。
                また、『人の手では実現できない複雑なデザインであること』と『低コストで何パターンも制作できること』をコンセプトにプログラミングしました。
              </OthersTextWrap>
            </OthersContetsWrap>




            <OthersContetsWrap style={{margin: '0 0 80px 0'}}>
              <OthersTopImageWrap>
                <Slider {...settings} style={{ width: '500px' , zIndex:'1000', position:'relative'}}>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobida.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobi3.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                  <OthersTopImage>
                    <img alt="Workshop with SUTD" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobi1.jpg"
                      style={{ width: '100%' }}
                    />
                  </OthersTopImage>
                </Slider>
              </OthersTopImageWrap>

              <OthersTitleWrap>
                <OthersTitle>高飛びチャレンジ大運動会</OthersTitle>
                <div className="flex">
                  <OthersDerailsWrap style={{marginTop:'30px'}}><OthersDerails>グループワーク</OthersDerails></OthersDerailsWrap>
                  <OthersDerailsWrap style={{marginTop:'30px',marginLeft:'10px'}}><OthersDerails>授業課題</OthersDerails></OthersDerailsWrap>
                </div>
                <OthersDerailsWrap><OthersDerails>担当：企画 / ポスターデザイン</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>使用ツール：Illustrator</OthersDerails></OthersDerailsWrap>
                <OthersDerailsWrap><OthersDerails>期間：1months / 2018.11 (学部4年)</OthersDerails></OthersDerailsWrap>

              </OthersTitleWrap>

              <OthersTextWrap>
                『エレベータを使う人が多くて階段を使う人がなかなかいない。階段を使えば節電にもなるし運動にもなるのに』という課題から、
                階段をより意識してもらうために『階段の踊り場で高飛び大会を開く』という企画を行ないました。意外と大盛況でした。
              </OthersTextWrap>
            </OthersContetsWrap>


          </WorkWrap>
        </div>
      </React.Fragment>
    )
  }
}

export default OthersContents;
