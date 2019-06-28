import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Foltana extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
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
                  <div>担当範囲</div>
                  <div>企画 / 撮影 / 模型作成 / プログラミング</div>
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
