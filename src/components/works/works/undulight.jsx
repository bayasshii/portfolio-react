import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";

class Undulight extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "UnduLight"
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
                    <li>照明</li>
                    <li>コンピュテーショナルデザイン</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="undulight" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/undolight092.jpg" />
                  </li>
                  <li>
                    <img alt="undulight" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/undolight01.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2017/11 ~ 2017/12 (1month)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Rhinoceros / RhinoPython / Illustrator / PhotoShop</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-20">
                      　テーマは『プログラミングとデジタルファブリケーションを使用した照明』。<br/>
                      「人の頭では計算できない複雑なデザインであること」と「低コストで何パターンも形状をデザインできること」をコンセプトに設計した。
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

export default Undulight  ;
