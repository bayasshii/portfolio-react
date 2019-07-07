import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Foltana extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "fortana"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="bg-white">
          <div className="width">
            <div className="work__contents">
              <div className="work__contents--title">
                {this.state.workTitle}
              </div>
              <div>
                <div className="work__contents--kinds">
                  <ul className="flex">
                    <li>学内課題</li>
                    <li>グループワーク</li>
                    <li>空間デザイン</li>
                    <li>コンピュテーショナルデザイン</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana1.svg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana2.svg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana4.svg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana3.svg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/01 ~ 2018/02 (1month)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>設計 / プログラミング / パネルデザイン仕上げ / 撮影 / 模型制作 </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Rhinoceros / RhinoPython / Illustrator / PhotoShop </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　「プログラミングを使用した設計」という比較的自由度の高いテーマで設計が始まった。そこでまず私たちは「自由な公園」というコンセプトを定めた。
                    </p>
                    <p className="pb-10">
                      　例えば、建築の周辺にランダムなサイズに丸く切り取られた飛び石は最大の直径で10m程で、最小が0.4m程である。
                      このランダムなサイズ感は様々なアクティビティに対応することができる。
                      2mほどの飛び石では2,3人での立ち話がしやすいだろうし、5mあれば数人での宴会ができるだろう。さらに10mの飛び石ではダンスやライブなどのパフォーマンスの披露や、大人数での宴会など、私たちでは考えられないほど沢山のアクティビティが実現できるだろう。
                    </p>
                    <p className="pb-20">
                      何も設備はないけど、何でもできるような<br/>
                      何も目的はないけど、ふと人が集まるような<br/>
                      そんな大きな曖昧性を持った公園である。<br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="backToTop"><Link to="/works">back</Link></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Foltana ;
