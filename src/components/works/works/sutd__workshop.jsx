import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"

class SUTD__workshop extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "Workshop with SUTD"
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
                    <li>ワークショップ</li>
                    <li>グローバル</li>
                    <li>スクレイピング</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="sutd__workshop" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-01.svg" />
                  </li>
                  <li>
                    <img alt="sutd__workshop" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-02.svg" />
                  </li>
                  <li>
                    <img alt="sutd__workshop" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-03.svg" />
                  </li>
                  <li>
                    <img alt="sutd__workshop" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-04.svg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  {/* 制作背景とか描きたいな */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SUTD__workshop ;
