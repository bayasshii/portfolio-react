import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Introduce extends Component {
  render() {
    return (
    <div className="myIntroduce">
      <h2 className="flex flex-center"><span>Introduce</span></h2>
      <p className="f-15">
        　はじめまして。
        京都工芸繊維大学大学院 デザイン学専攻 修士1回生の<span className="bold">木林将也</span>です。まず僕の大学生活でどんな勉強をしてきたかについて手短にお話します。
        <br/><br/>
        　学部時代の４年間は、<span className="bold">デザイン経営工学課程</span>という少し珍しい学科に所属していました。
        デザインとマネジメント、エンジニアリングという<span className="bold">ものづくりの上流から下流までを広く学んで、</span>それぞれの領域のマインドを身につけることができました。
        それらのマインドは、今でも僕の価値観のベースになっています。
        <br/><br/>
        　2019年、大学院に進学して、研究室ではオフィスのデザインである<span className="bold">ワークプレイスデザイン</span>と、プログラミングを駆使して最適解を導く<span className="bold">コンピュテーショナルデザイン</span>の２つを専攻しています。
        企業とのプロジェクトベースで活動することが多く、実務を通してその道のプロからフィードバックが得られるので非常に良い経験になっていると思います。
        <br/><br/>
        　個人では<span className="baseconnect"><a href="http://company.baseconnect.in/" target="_blank">Baseconnect株式会社</a></span>の長期インターンシップに、デザイナーとして参加しています。2019年7月現在で9ヶ月目になります。
        最近では<span className="bold">フロントエンド</span>を担当することが多いです。最初はHTMLすらサッパリでしたが少しづつ使えるようになり、今ではこうして自身のサイトも作れるようになったので成長を実感しています。
        こちらも企業の社員さんがコードのレビューを毎日して下さるので、有難い機会だなぁとひしひし感じながら現在も勤務を続けています。
        <br/><br/>
         　最後に、少し長くなりますが、<span className="bold">私の将来の目標</span>をお話しします。
         私の目標は、自分の専門領域に捕らわれずに様々な分野を繫いでコラボレーションを促進することのできる人、もっと抽象的に言うと<span className="enpha">『人と人を繋ぐ人』</span>になることです。
         異なった価値観を持つ人たちが多数参加するプロジェクトにおいて、<span className="bold">どの価値観にも固執することなく、しかしどの価値観にも考慮された</span>判断を下すことができて初めて『人と人を繋ぐ』ということであり、それは凄く難しいことだろうなと私は考えています。
         私がそれを実現するにはまだまだ知識も経験も及びませんが、<span className="bold">どの分野にも固執せず、ベストを模索する</span>ということが、学部の４年間で様々な分野を学ぶことで自然に身についた、<span className="bold">私の根底にある唯一の価値観</span>です。
         そうした価値観を基に、<span className="bold">『人と人を繋ぐ人』</span>になることが私のキャリアの最終目標です。
      </p>
    </div>
    );
  }
}

export default Introduce ;
