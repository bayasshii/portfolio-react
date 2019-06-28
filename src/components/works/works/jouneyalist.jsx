import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


class Jouneyalist extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "Jouneyalist 名刺"
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
                    <li>名刺デザイン</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li className="w-50 meishi">
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/meishi.jpg" />
                  </li>
                  <li className="w-50 meishi">
                    <img alt="foltana" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/maishi21.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--main">
                  <div className="work__contents--background">
                    <div className="pb-20">○ 制作期間</div>
                    <div>2019/04 (1day)</div>
                  </div>
                  <div className="work__contents--background">
                    <div className="pb-20">○ 使用ツール</div>
                    <div>Illustrator / PhotoShop</div>
                  </div>
                  <div className="work__contents--background">
                    <div className="pb-20">○ 制作背景と意図</div>
                    <div>
                      <p className="pb-10">
                        　高校時代の友人に名刺の制作を依頼された。
                        納期が当日と急で無茶な依頼だったが、私は彼に恩がたくさんあった。
                        「東京までママチャリで行こうぜ！」「マダガスカルで1ヶ月暮らそうぜ！」といった私の無茶な要求に対してもいつも驚くべきフットワークの軽さで快く付き合ってくれる。
                        そのことに私は日頃から非常に感謝していた。
                        そんな彼が「Jouneyalist」という未知の職業への挑戦を始めようとしている。
                        なら私は彼の活躍を最大限サポートできるようにベストを尽くそう、と強く思ってデザインを開始した。
                      </p>
                      <p className="pb-10">
                　        Jouneyalistという未知の職業に対するワクワク感を名刺の受取手に与えたい、という想いからコンセプトは「綺麗な写真と現代的なデザイン」とした。
                        色使いや透過、薄い影といった要素で現代感を表現して、背面に大きく１枚彼の撮影した写真を使用することで綺麗な写真が取れる人物であることを強調した。
                      </p>
                      <p className="pb-20">
                        　彼は海外の旅の道中に知り合った人に名刺を渡しているそうで、その時によく「 Wow!! 」と笑顔で言われるらしい。
                        それはワクワク感を受取手に与えられているということなのかな？？と思って、私はすごく嬉しい。
                      </p>
                    </div>
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

export default Jouneyalist ;
