import React, { Component } from 'react';
import pen from './image/pen.svg';
import mouse from './image/mouse.svg';
import keyboard from './image/keyboard.svg';

class Skills extends Component {
  render() {
    return (
      <div className="mySkills">
        <h2 className="flex flex-center"><span>Skills</span></h2>
        <ul className="flex">
          <li className="mySkill">
            <div className="mySkill__title">Design</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={mouse} /></div>
            <div className="mySkill__text">住宅、オフィス、公共建築、リノベーション、椅子、本棚、照明、掛時計、webサイト、webサービス、さらに帽子、衣服、ステッカー、名刺など。学びたいものが見つかる度に独学で技術をキャッチアップして、授業や研究室、インターンシップ、個人制作などの場でアウトプットを重ねてきました。</div>
          </li>
          <li className="mySkill">
            <div className="mySkill__title">Programming</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={keyboard} /></div>
            <div className="mySkill__text">このサイトはReactを用いてSPIで制作しました。Gitにコードをあげているのでぜひ査読してください。他にもPythonを用いたスクレイピングやデータ分析、RhionocerosをPythonで動作させたりが得意です。他のエンジニアや１年後の自分が見ても迷わず読めるような丁寧なコードを目標にしています。</div>
          </li>
          <li className="mySkill">
            <div className="mySkill__title">Direction</div>
            <div className="mySkill__image"><img alt="MySkillImage" src={pen} /></div>
            <div className="mySkill__text">市場調査や観察調査、ワークショップ、アンケート、ヒアリング（ちゃんと調べる）などの様々な調査の経験があります。潜在的なクライアントの要望を最大限に引き出して、根本的な問題解決ができるように常にメタ思考で考えることを心がけています。</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills ;
