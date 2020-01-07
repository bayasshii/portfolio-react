import React, { Component } from 'react';
import './css/about.css';
import SkillCharts from "./skillCharts.jsx"
import Skills from "./skills.jsx"
import TopImage from "../topImage/homeTop.jsx"

import AboutHeading from "./aboutHeading.jsx"
import AboutHeadingUnderline from "./aboutHeadingUnderline.jsx"


class About extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__about.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage/ >
        <div className="about bg-white">
          <div className="flex">_
            <div className="width">
              <div className="mb-40">
                <AboutHeading>About</AboutHeading>
                <AboutHeadingUnderline/>
                <div>
                  <div style={{fontSize: '1.5rem'}}>
                    <span class="colorUnderline f-22" style={{fontSize: '2.0rem', fontWeight: '600'}}>木林 将也 / Kibayashi Masaya</span>
                    <p className="mt-30">
                      ▶︎1997年~2014年<br/>
                        毎日、外で野球やサッカー、バスケをして活発に日々を過ごす。<br/>
                        高校ではバレーボール部に入部する。<br/>
                        センター試験の会場にバレーボールを持ち込んで手荷物検査に引っかかる。<br/>
                        <br/>
                        ▶︎ 2015年<br/>
                        京都工芸繊維大学 デザイン経営工学課程に入学。<br/>
                        デザイン、マネジメント、エンジニアリングの三分野を広く学ぶ。<br/>
                        体育会系バレー部と京大のバレーサークルと社会人バレーチームを兼部。<br/>
                        <br/>
                        ▶︎2016年<br/>
                        上記の三分野の中からデザインとマネジメントを専攻。<br/>
                        プロダクトデザインや建築デザイン、リサーチや市場調査などのマーケティングの手法をグループワークの演習を通じて学ぶ。<br/>
                        <br/>
                        ▶︎2017年<br/>
                        ワークプレイスデザインの研究室に配属。<br/>
                        ワークショップやヒアリングなどの調査をもとにしたオフィスのデザインを企業との共同プロジェクトを通して学ぶ。<br/>
                        <br/>
                        ▶︎2018年<br/>
                        ワークプレイスデザインと兼任でコンピュテーショナルデザインの研究室にも配属され、プログラングにハマる。<br/>
                        10月からBaseconnect株式会社での長期インターンシップを開始。<br/>
                        webのUIデザインや、JavaScriptでのコーディングを実務を通して学ぶ。<br/>
                        <br/>
                        ▶︎2019年<br/>
                        京都工芸繊維大学大学院 デザイン学専攻に入学。<br/>
                        入学式の翌日、マダガスカルに向けて旅立ち、約１ヶ月間現地で生活する。<br/>
                        <br/>
                        ▶︎2020年<br/>
                        1月現在、コンピュテーショナルデザインの研究とBaseconnect株式会社でのインターンシップを継続しつつ、国際プロジェクトME310/SUGARに参加して、より広いデザインの分野を学んでいる。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray" style={{padding: '0 0 50px'}}>
            <div className="width pb-40">
              <Skills />
            </div>
          </div>
          {/*
          <div className="flex bg-gray">
            <div className="width pb-40">
              <div className="f-30 pt-40 pb-10">
                My Confidence of Skills<span className="hideText">   ~超主観的評価です~   </span>
              </div>
              <SkillCharts />
            </div>
          </div>
        */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
