import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Office extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "ConnectionOffice"
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
                    <li>空間デザイン</li>
                    <li>オフィス</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul className="SUTD__workshop--image">
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/office1.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/office2.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/office3.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  {/* 制作背景とか描きたいな */}
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

export default Office ;
