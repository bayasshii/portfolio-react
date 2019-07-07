import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Sotsuron extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "CloudChair"
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
                    <li>インテリアデザイン</li>
                    <li>コンピュテーショナルデザイン</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="sotsuron" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sotsuron1.jpg" />
                  </li>
                  <li>
                    <img alt="sotsuron" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sotsuron2.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 要旨URL</div>
                  <div>
                    <a href="https://treeethreee.s3-ap-northeast-1.amazonaws.com/15124007%E8%A6%81%E6%97%A8.pdf" target="_blank">卒業論文要旨PDF</a>
                  </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/10 ~ 2019/02</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Rhinoceros / RhinoPython / PhotoShop</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　コンピュテーショナルデザインを使って、紙を面白くデザインしたい！という想いから始まり、最終的には紙を使った軽い椅子の制作を行った。
                      Rhinocerosを用いて、椅子の高さ・横幅・座面の深さ・角度など様々な要素をパラメトリックにプログラミングした後、実際に何通りか制作して最もユーザーからの評価がよかったものを採用した。
                      構造の面ではハニカム構造になるように紙を張り合わせて強度を確保したり、臀部の形状に沿うように座部を歪曲させたりと工夫を凝らした。
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

export default Sotsuron ;
