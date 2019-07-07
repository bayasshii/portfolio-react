import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Trivet extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "Trivet"
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
              <div className="flex">
                <div className="work__contents--kinds">
                  <ul className="flex">
                    <li>学内課題</li>
                    <li>鍋敷き</li>
                    <li>コンピュテーショナルデザイン</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img className="w-50" alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E9%8D%8B%E6%95%B7%E3%81%8D%E7%B2%BE%E9%8B%AD.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/S__729093.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/S__729092.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/S__729091.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2017/10 ~ 2017/11 (1month)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Rhinoceros / RhinoPython / Illustrator </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　『プログラミングとデジタルファブリケーションを使用した鍋敷き』というテーマ。
                      「人の手では書けない複雑なデザインであること」と「ワンクリックで何パターンも異なる模様をデザインできること」をコンセプトに設計した。
                    </p>
                    <p className="pb-20">
                      　「コースターの方が使い勝手いいじゃん」と思ってコースターサイズにもデザインした。
                      下の画像の、枝の集合体や円の集合体のようなコースターは2018年6月に後から作ったもの。今も自宅で愛用されている。
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

export default Trivet ;
