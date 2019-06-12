import React, { Component } from 'react';
import pen from './image/pen.svg';
import mouse from './image/mouse.svg';
import keyboard from './image/keyboard.svg';

class Skills extends Component {
  render() {
    return (
      <div className="mySkills">
        <h2 className="flex flex-center"><span>Skills</span></h2>
        <ul className="flex flex-wrap">
          <li className="mySkill designSkill">
            <div className="mySkill__title">Spatial Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={mouse} /></div>
            <div className="mySkill__text">住宅、オフィス、公共建築、リノベーション、椅子、棚、照明、掛時計など。</div>
          </li>
          <li className="mySkill designSkill">
            <div className="mySkill__title">Web Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={mouse} /></div>
            <div className="mySkill__text">web系自社開発企業でのインターンシップを通して学びました。</div>
          </li>
          <li className="mySkill directionSkill">
            <div className="mySkill__title">Direction</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={pen} /></div>
            <div className="mySkill__text">市場調査や観察調査、ワークショップ、アンケート、ヒアリング（ちゃんと調べる）などの様々な調査の経験があります。潜在的なクライアントの要望を最大限に引き出して、根本的な問題解決ができるように常にメタ思考で考えることを心がけています。</div>
          </li>
          <li className="mySkill programmingSkill">
            <div className="mySkill__title">Programming</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={keyboard} /></div>
            <div className="mySkill__text">Pythonを用いたスクレイピングやデータ分析、RhionocerosをPythonで動作させるのが得意です。他にもProcessingを用いてアルゴリズミックなデザインを創作できます。</div>
          </li>
          <li className="mySkill programmingSkill">
            <div className="mySkill__title">Coding</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={keyboard} /></div>
            <div className="mySkill__text">HTMLやCSS、JavaScriptを用いたWEBサイトのコーディングが得意です。このポートフォリオはAtomicDesignを念頭に置きながら、Reactを用いて設計しました。第三者でも迷わず読めるコードを書くことに注力しています。</div>
          </li>
          <li className="mySkill curiositySkill">
            <div className="mySkill__title">Curiosity</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={pen} /></div>
            <div className="mySkill__text">好奇心が旺盛です。</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills ;
