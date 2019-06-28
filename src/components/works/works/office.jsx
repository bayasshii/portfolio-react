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
                  <div className="pb-20">○ 制作期間</div>
                  <div>2017/06 ~ 2017/07 (2month)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>JWCAD / Illustrator / PhotoShop</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      『老舗オフィス家具メーカーの新オフィスの設計』というテーマ。なかなかイノベーティブな商品が開発できないという問題を抱えているという設定。
                    </p>
                    <p className="pb-10">
　                      まず私は「老舗メーカーで働いている社員には少なからず安定思考なところがあって挑戦を避ける傾向がある。だからイノベーションがなかなか起こせないのではないだろうか」という仮説を立てた。
                      そんな社員とは対照的な「新しいことにどんどん挑戦していく会社になるんだ！」という経営陣の熱い想いを具体化した、強いメッセージ性のある新オフィスにしたいと考え、ステップフロア、スロープ、吹き抜け、ガラス張り、屋上スペースといった現代の流行りのオフィスの要素を盛り込んだ。
                      これによって社員の考えの変化を促すことができたなら大成功である。
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

export default Office ;
