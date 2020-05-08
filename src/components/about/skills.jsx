import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"

import AboutHeading from "./aboutHeading.jsx"
import AboutHeadingUnderline from "./aboutHeadingUnderline.jsx"

const WorksWrapTitle = styled.div`
  text-align: left;
  font-size: 3.0rem;
  color: ${color.mainYellow};
  font-weight: 600;
  padding: 0 0 0 20px;
`;

const WorksWrapTitleUnder = styled.div`
  width: 60px;
  height: 3px;
  background: ${color.mainYellow};
  margin: 20px 0 0 30px;
`;

class Skills extends Component {
  render() {
    return (
      <div className="mySkills">
        <WorksWrapTitle style={{margin: '0 0 0 10px'}}>Skills</WorksWrapTitle>
        <WorksWrapTitleUnder/>
        <ul className="flex flex-wrap" style={{padding:'50px 0 0',justifyContent: 'space-between'}}>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Web Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/display.svg" /></div>
            <div className="mySkill__text">　SketchやAdobeXDを使ってwebデザインすることができます。本やwebサイトを使って独学で学んだのちに、web系スタートアップ企業での長期インターンシップでの実践を通して知識と経験を深めました。</div>
          </li>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Spatial Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/home.svg" /></div>
            <div className="mySkill__text">　個人住宅、集合住宅、オフィス、公共建築、リノベーション、椅子、棚、照明などの空間デザインを授業での演習や研究室の活動を通して学びました。中でも、現在も私の専攻にしているのはオフィスのデザインです。</div>
          </li>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Algorithmic Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/boronoi.svg" /></div>
            <div className="mySkill__text">　現在の私の専攻です。RhionocerosをPythonで動かしたり、Processingを用いたりしてデザインを行います。プログラミングによって、より合理的で有機的なデザインができるように勉強しています。</div>
          </li>
          <li className="mySkill programmingSkill">
            <div className="mySkill__title">Coding</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/keyboard.svg" /></div>
            <div className="mySkill__text">　HTMLやCSSを用いたwebサイトのマークアップが得意です。ReactやVueでのフロントエンドや、Laravelでのバックエンドも勉強中です。AtomicDesignやstyled-componentsなどの設計手法にも興味があります。</div>
          </li>
          <li className="mySkill directionSkill">
            <div className="mySkill__title">Research</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/pen.svg" /></div>
            <div className="mySkill__text">　エスノグラフィー、インタビュー、アンケート、ワークショップなどの様々な調査を研究室の活動や課外活動を通して経験しました。市場調査やSWOT分析などのマーケティング目線の分析手法にも興味があります。</div>
          </li>
          <li className="mySkill curiositySkill">
            <div className="mySkill__title">Curiosity</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/heart.svg" /></div>
            <div className="mySkill__text">　好奇心が非常に旺盛で、常に動き回っているタイプです。デザインの他にも、会社経営、経済学、プロジェクトマネジメント、スポーツ、筋肉、栄養学、日本食やワインなどの幅広い分野に興味があるので、本を読んで勉強しています。</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills ;
