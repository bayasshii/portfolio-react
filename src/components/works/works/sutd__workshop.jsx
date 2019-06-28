import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";

class SUTD__workshop extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
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
                    <li>グループワーク</li>
                    <li>グローバル</li>
                    <li>スクレイピング</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul className="SUTD__workshop--image">
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
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/05 (4days)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>プロジェクトマネジメント / 企画 / プログラミング / パワポ情報設計 </div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Python / Anaconda / Illustrator / PhotoShop / PowerPoint / English</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　シンガポール国立工科大学との共同ワークショップ。
                      「PythonによってスクレイピングされたTwitterのツイートを元に、何か面白いことをしよう！」という自由度高めなテーマだった。
                      英語が飛び交うプロジェクトにおいてリーダーを務めた良い経験となった。
                    </p>
                    <p className="pb-10">
                      　私たちの班はまず京都市内で呟かれたツイートを３日分スクレイピングして、その位置情報をプロットしたものと、ヒートマップのように位置情報の密度で色を変化させたものと、２つの地図を作成した。
                      そこから得られる示唆は「銀閣や金閣には人(ツイート)が集まる」「大きな通り上に線ができる」など比較的単調なものが多かった。
                      そこで、日本人観光客と外国人観光客のツイートを比較してみてはどうだろう？という新たな切り口が挙げられた。
                      実際にそれらをPythonで抽出して比較したところ、私たちも知らないような京都に関する様々な知見が得られた。
                    </p>
                    <p className="pb-10">
                      「　日本人は知らないけど外国人は知っている京都　」<br/>
                      「　外国人は知っているけど日本人は知らない京都　」
                    </p>
                    <p className="pb-20">
                    　  新しい京都の一面を探すようなワークショップとなったので、本ワークショップのコンセプトを「Hidden Kyoto」と名付けた。
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

export default SUTD__workshop ;
