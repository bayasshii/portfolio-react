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
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakuopen1.jpg" />
                  </li>
                  <li>
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakuopen2.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ サイトURL</div>
                  <div>
                    <a href="http://sudaku.crap.jp" target="_blank">http://sudaku.crap.jp</a>
                  </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/12 (3days)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>企画 / 情報設計 / デザイン / コーディング </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>HTML / CSS / PhotoShop</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　友人からの紹介で、2019年1月に滋賀にオープンする焼肉屋のLPのデザイン・コーディングの依頼を受けた。
                      納期が３日間と非常に急ではあったが、WEBデザインほぼ初心者だった私にとって非常に有難い貴重なチャンスだったので当時なりの全力で取り組んだ。
                      ツイッターからの流入がメインな上、納期の都合もあったので、スマホ表示のみに絞ってデザインした。
                    </p>
                    <p className="pb-10">
                      　最終的には「フォローするだけで１万円相当の試食会が抽選で当たる！」という企画に落ち着いたが、そもそもどういう企画にするかというところから３日間がスタートした。
                      当初の企画では応募の条件は「リツイート&フォロー」だった。
                      しかしメインターゲットは30代の家族連れであることから、学生ならともかく、プライベートでTwitterを利用している大人はプライドもあるしリツイートを躊躇うのでは？ということが危惧されたので、あえて条件をフォローだけにすることでメインターゲットの層でも気軽に応募できる仕組みを作った。
                      実際、試食会に当選した人は地元の家族連れの方が多かったので、成功であったと言えるであろう。
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

export default Sudaku ;
