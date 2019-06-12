import React, { Component } from 'react';
import './css/about.css';
import TopImage from "../topImage/topImage.jsx"
import SkillCharts from "./skillCharts.jsx"

class About extends Component {
  state={
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/newMyPhoto.jpg"
  }
  render() {
    return (
      <div className="about">
        <TopImage
          imageURL={this.state.imageURL}
        />
        <div className="flex">
          <ul className="about__contents mr-10">
            <li className="about__content flex">
              <div>名前</div>
              <div>木林将也</div>
            </li>
            <li className="about__content flex">
              <div>出身地</div>
              <div>大阪府 松原市</div>
            </li>
            <li className="about__content flex">
              <div>メール</div>
              <div>kibayashi.masaya@gmail.com</div>
            </li>
          </ul>
          <ul className="about__contents m-10">
            <li className="about__content flex">
              <div>高校</div>
              <div>大阪府立天王寺高校</div>
            </li>
            <li className="about__content flex">
              <div>大学</div>
              <div>京都工芸繊維大学 工芸科学部 デザイン経営工学課程</div>
            </li>
            <li className="about__content flex">
              <div>大学院</div>
              <div>京都工芸繊維大学大学院 工芸科学研究科 デザイン学専攻</div>
            </li>
          </ul>
        </div>
        <ul className="about__contents">
          <li className="about__content flex">
            <div>資格</div>
            <div>TOEIC 705</div>
          </li>
          <li className="about__content flex">
            <div>ソフト</div>
            <div>Illustrator Photoshop Sketch Rhinoceros Jw-cad ARCHICAD Office365</div>
          </li>
          <li className="about__content flex">
            <div>趣味</div>
            <div>旅・ロードバイク・カメラ・バレーボール・筋トレ・スイーツ巡り</div>
          </li>
          <li className="about__content flex">
            <div>その他</div>
            <div>京都工芸繊維大学バレーボール部副キャプテン<br />
              第３０回近畿高校ビーチバレーボール選手権大阪予選ベスト８<br />
              第１２回松原マラソン大会第６位入賞</div>
          </li>
        </ul>
        <SkillCharts />
      </div>
    );
  }
}

export default About;
