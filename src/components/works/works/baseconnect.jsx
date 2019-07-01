import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Baseconnect extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "Baseconnect"
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
                    <li>インターンシップ</li>
                    <li>webデザイン</li>
                    <li>フロントエンド</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ URL</div>
                  <div>
                      <div className="baseconnect pb-20"><a href="http://company.baseconnect.in/" target="_blank">Baseconnect株式会社HP</a></div>
                      <div className="baseconnect pb-20"><a href="https://baseconnect.in/" target="_blank">企業検索エンジンBaseconnect</a></div>
                      <div className="baseconnect"><a href="https://sales.baseconnect.in/" target="_blank">BaseconnectLIST LP</a></div>
                  </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 期間</div>
                  <div>2018/10 ~ now</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>React / Sketch / Illustrator / PhotoShop</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 業務</div>
                  <div>上記サイトの一部のデザイン・コーディング</div>
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

export default Baseconnect ;
