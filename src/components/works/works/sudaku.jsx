import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Sudaku extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "近江焼肉すだくLP"
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
                    <li>webデザイン</li>
                    <li>スマホサイト</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakuWebImage.jpg" />
                  </li>
                  <li className="w-50">
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudaku1.png" />
                  </li>
                  <li className="w-50">
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudaku2.png" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  {/* 制作背景とか描きたいな */}
                  <a href="http://sudaku.crap.jp">http://sudaku.crap.jp</a>
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

export default Sudaku ;
