import React, { Component } from 'react';
import './css/about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <ul className="about__contents">
          <li className="about__content flex">
            <div>名前</div>
            <div>木林将也</div>
          </li>
          <li className="about__content flex">
            <div>メール</div>
            <div>treee333threee@gmail.com</div>
          </li>
          <li className="about__content flex">
            <div>高校</div>
            <div>大阪府立天王寺高校</div>
          </li>
          <li className="about__content flex">
            <div>大学</div>
            <div>京都工芸繊維大学 デザイン経営工学課程</div>
          </li>
          <li className="about__content flex">
            <div>大学院</div>
            <div>京都工芸繊維大学 デザイン学専攻</div>
          </li>
          <li className="about__content flex">
            <div>資格</div>
            <div>TOEIC 705　簿記2級</div>
          </li>
          <li className="about__content flex">
            <div>言語</div>
            <div>HTML CSS JavaScript Node.js React Python Git</div>
          </li>
          <li className="about__content flex">
            <div>ソフト</div>
            <div>Illustrator Photoshop Sketch Rhinoceros JWCAD ArchCAD Office</div>
          </li>
          <li className="about__content flex">
            <div>趣味</div>
            <div>旅・ロードバイク・カメラ・バレーボール・筋トレ・スイーツ巡り</div>
          </li>
          <li className="about__content flex">
            <div>座右の銘</div>
            <div>石橋を高速で叩いて渡る</div>
          </li>
          <li className="about__content flex">
            <div>その他</div>
            <div>京都工芸繊維大学バレーボール部副キャプテン<br />
              第３０回近畿高校ビーチバレーボール選手権大阪予選ベスト８<br />
              第１２回松原マラソン大会第６位入賞</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
