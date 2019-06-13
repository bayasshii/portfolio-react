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
        <div className="flex bg-white">
          <div className="width flex">
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
            <ul className="about__contents">
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
        </div>
        <div className="flex bg-gray">
          <div className="width pb-30">
            <div className="f-30 pt-30 pb-10">
              My Confidence of Skill
            </div>
            <SkillCharts />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
