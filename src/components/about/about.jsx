import React, { Component } from 'react';
import './css/about.css';
import TopImage from "../topImage/topImage.jsx"
import SkillCharts from "./skillCharts.jsx"

class About extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="about bg-white">
          <div className="flex">
            <div className="width">
              <div className="mb-40">
                <h2 className="flex flex-center"><span>About</span></h2>
                <div>
                  <div>
                    <span class="colorUnderline f-22">木林将也 / KibayashiMasaya</span>
                    <p className="mt-30">
                      　1997年生まれ、大阪府松原市在住。小学校中学校時代は放課後に野球やサッカー、バスケに明け暮れる活発的に日々を過ごす。2012年、大阪府立天王寺高校に入学。
                      バレー部に入部して、バレー経験のある監督が不在の中、学生たちで練習メニューを改善しながら日々の練習に打ち込む。そして高校３年生の時にビーチバレーでの近畿大会出場を果たす。
                      また高校２年生の頃から建築デザインに興味が湧き、１年半ほどの間、毎日美術室に通ってデッサンや設計にチャレンジし始める。
                      <br/>
                      　2015年、京都工芸繊維大学デザイン経営工学課程に入学。大学でも体育会のバレー部に所属し、副キャプテンを１年間務める。体育会リーグでは全勝で５部昇格を果たす。
                      勉学の面では、デザインとビジネス、エンジニアリングについて幅広い勉強して、視野を広げるように努力を続ける。
                      ３回生から環境デザイン経営研究室に配属。働き方のデザインについて実践をベースにして学ぶ。４回生の秋からweb系自社開発企業でのインターンシップを開始。フロントエンドの実務について基礎から学ぶ。
                      卒業製作では、簡単に持ち運びができて安定して座ることのできる紙でできた椅子を設計する。
                      <br/>
                      　2019年、京都工芸繊維大学大学院デザイン学専攻に入学。入学式の直後に日本を出発して、マダガスカルに1ヶ月間滞在。腹痛と嘔吐の時間を過ごす。
                      言語が通じないプリミティブな環境の中でも生きられる自信を手に入れる。
                      帰国後、このポートフォリオを制作。現在、オフィスデザインとアルゴリズミックデザインについて研究・実践を行いながら、web系企業でのインターンシップ活動中。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray">
            <div className="width pb-40">
              <div className="f-30 pt-40 pb-10">
                My Confidence of Skills<span className="hideText">   ~超主観的評価です~   </span>
              </div>
              <SkillCharts />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
