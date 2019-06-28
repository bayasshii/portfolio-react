import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class SudakuGaisou extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "近江焼肉すだく外装"
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
                    <li>自主制作物</li>
                    <li>空間デザイン</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="sudaku" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudaku-gaisou.jpg" />
                  </li>
                  <li>
                    <img alt="sudaku" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakukanban1.jpg" />
                  </li>
                  <li>
                    <img alt="sudaku" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakukanban2.jpg" />
                  </li>
                  <li>
                    <img alt="sudaku" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakukanban3.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2019/02 (1week)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>情報設計 / デザイン</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Illustrator</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　以前LPのデザイン・コーディングを担当した焼肉屋の２号店ができることになったので、その店舗の外装を任された。
                      私が担当したのは上部の看板であり、より情報が伝わりやすくてインパクトのある言葉選びとデザインを心がけた。
                      聞いたところによると、１号店同様こちらの店舗も繁盛しているそうで、少しでも開店に携わった身としては嬉しい限りである。
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

export default SudakuGaisou ;
