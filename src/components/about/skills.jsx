import React, { Component } from 'react';

import AboutHeading from "./aboutHeading.jsx"
import AboutHeadingUnderline from "./aboutHeadingUnderline.jsx"

class Skills extends Component {
  render() {
    return (
      <div className="mySkills">
        <AboutHeading>Skills</AboutHeading>
        <AboutHeadingUnderline/>
        <ul className="flex flex-wrap">
          <li className="mySkill designSkill">
            <div className="mySkill__title">Web Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/display.svg" /></div>
            <div className="mySkill__text">　SketchやPhotoshopを使ってデザインすることができます。web系ベンチャー企業でのインターンシップを通して学びました。その他、個人的に依頼して頂いた団体のWebサイトを製作もしています。</div>
          </li>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Spatial Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/home.svg" /></div>
            <div className="mySkill__text">　学部時代の私の専攻です。住宅、オフィス、公共建築、リノベーション、椅子、棚、照明などの空間デザインを演習や研究室でのPJを通して学びました。</div>
          </li>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Algorithmic Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/boronoi.svg" /></div>
            <div className="mySkill__text">　現在の私の専攻です。RhionocerosをPythonで動かしたり、Processingを用いたりしてデザインを行います。Pythonを用いたスクレイピング・データ分析とデザインといった領域にも興味があり、現在取り組んでいます。</div>
          </li>
          <li className="mySkill programmingSkill">
            <div className="mySkill__title">Coding</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/keyboard.svg" /></div>
            <div className="mySkill__text">　HTMLやCSS、JavaScriptを用いたフロントエンドのコーディングができます。AtomicDesignやstyled-componentsなどの設計手法にも興味があります。１年後の自分でも迷わずに読めるコードを書くことに注力しています。</div>
          </li>
          <li className="mySkill directionSkill">
            <div className="mySkill__title">Research</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/pen.svg" /></div>
            <div className="mySkill__text">　市場調査やSWOT分析、観察調査、ワークショップ、アンケート、ヒアリングなどの様々な分析や調査を研究室の活動を通して経験しました。根本的な問題解決ができるように常にメタ思考で考えることを心がけています。</div>
          </li>
          <li className="mySkill curiositySkill">
            <div className="mySkill__title">Curiosity</div>
            <div className="mySkill__image"><img alt="MySkillImage" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/heart.svg" /></div>
            <div className="mySkill__text">　好奇心が非常に旺盛で、常に動き回っているタイプです。会社経営、経済学、プロジェクトマネジメント、心理学、スポーツ、筋肉、栄養学、日本食やワインなど、幅広い分野に興味があって勉強しています。</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills ;
