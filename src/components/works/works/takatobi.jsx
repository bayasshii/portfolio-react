import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Takatobi extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "高飛びチャレンジ大運動会"
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
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li className="w-50">
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobi.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobi1.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/takatobi3.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/06 ~ 2018/07 (1month)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>企画 / 設置 </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Excel</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　大学の1号館の四階の廊下や階段を使って面白いことをしよう！という自由度に溢れた課題。
                      「皆エレベータを使うから階段を使う人がなかなかいない。階段を使えば節電にもなるし運動にもなるのに。」という着眼点から、階段をより意識してもらうために何か階段でイベントを行うという方針に定まった。
                      ブレストの結果「踊り場で高飛び大会を開く」という企画に落ち着いた。階段１段１段の延長線上にテープを貼ることで視覚的にも面白く、自分の跳んだ高さも分かりやすくなった。
                      アンケートによる調査の結果、予想以上の数の学生が参加してくれた上に個人の満足度も高かった。
                      また、観察調査による階段の利用者の計測では、設置後の方が階段の利用者も増えていたので、本企画は大成功であったと言える。
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

export default Takatobi ;
