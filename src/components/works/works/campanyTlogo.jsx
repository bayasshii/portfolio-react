import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";

class CampanyTlogo extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    workTitle: "T社 オフィスリニューアルPJ ロゴデザイン"
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
              <div>
                <div className="work__contents--kinds">
                  <ul className="flex">
                    <li>研究室PJ</li>
                    <li>ロゴデザイン</li>
                  </ul>
                </div>
              </div>
              <div className="work__contents--img">
                <ul>
                  <li>
                    <img alt="onecomfort" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/logo%26cap.jpg" />
                  </li>
                  <li>
                    <img alt="onecomfort" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/LogoIDEAS.jpg" />
                  </li>
                </ul>
              </div>
              <div className="work__contents--main">
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作期間</div>
                  <div>2018/03 (1week)</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 担当範囲</div>
                  <div>コンセプト設計 / デザイン</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 使用ツール</div>
                  <div>Illustrator</div>
                </div>
                <div className="work__contents--background">
                  <div className="pb-20">○ 制作背景と意図</div>
                  <div>
                    <p className="pb-10">
                      　関東にある空調メーカーT社のオフィスリニューアルプロジェクト。コンサルティング会社2社と仲研究室の、3つの団体でリサーチから設計までを行った。
                      プロジェクト名である「onecomfort」のロゴのコンセプト設計・デザインを行った。
                      リサーチをおこなうためのワークショップで一体感を出すために帽子を作ろうとなり、その帽子のデザイン・発注も兼ねている。
                      「T社が空調メーカーであること」「3団体による共同プロジェクトであること」から、3つの団体によって新しい風を吹き込むようなデザインにした。
                    </p>
                    <p className="pb-10">
                      　この帽子が意外と好評で我ながら驚いた。
                      全員で同じユニフォームを被ることで、何か新しいことが起きそうな、ワクワクするような団結感が生まれていたと思う。
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

export default CampanyTlogo ;
