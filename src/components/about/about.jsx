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
                      1997年、大阪府の田舎で生まれる。小・中学校では放課後に野球やサッカー、バスケに明け暮れる活発的に日々を過ごす。
                      2012年、大阪府立天王寺高校に入学。
                      バレーボール部に入部し、部活中心の高校生活を送る。高校３年生の時にはビーチバレーでの近畿大会出場を果たす。
                      高校２年生の頃から建築デザインに興味が湧き、１年半ほどの間、毎日美術室に通ってデッサンや設計に取り組み始める。
                      <br/>
                      　2015年、京都工芸繊維大学デザイン経営工学課程に入学。大学でも体育会のバレー部に所属し、副キャプテンを１年間務める。体育会リーグでは全勝で５部昇格を果たす。
                      勉学の面では、デザインとビジネス、エンジニアリングなどの幅広い分野を体系的に学ぶ。
                      ３年生から環境デザイン経営研究室に配属。オフィスデザインや働き方のデザインについて、実践を通して学ぶ。４回生の秋からBaseconnect.incでのデザイナーインターンを開始。
                      webデザインやフロントエンドの実務について基礎から学ぶ。
                      <br/>
                      　2019年、京都工芸繊維大学大学院デザイン学専攻に入学。入学式の直後に日本を出発して、マダガスカルに1ヶ月間滞在。腹痛と嘔吐の時間を過ごす。
                      言語が通じないプリミティブな環境の中でも生きられる自信を手に入れる。
                      帰国後、このポートフォリオを制作。
                      現在、オフィスデザインについて研究・実践を行い、Baseconnect.incでのインターンシップ活動も続けながら、国際プロジェクトME310/SUGARに参加してより広いデザインの分野を学んでいる。
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
