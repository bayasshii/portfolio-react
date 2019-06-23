import React, { Component } from 'react'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";

class Article extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    blogTitle: "ブログ始めました。"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="bg-white">
          <div className="width">
            <div className="blogArticle__Contents">
              <div className="blogArticle__title">
                {this.state.blogTitle}
              </div>
              <p>
                初めまして。木林です。
                <br />
                ふとブログを書き始めました。
                <br />
                これからできるだけ毎週くらいの頻度で更新していきたいのですが、まず最初に今回はこのブログを書く目的について書こうと思います。
                目的をまとめて、言語化して、今後の指針としていこうと思います。
                <br />
                <br />
                さて、今後ブログの執筆を続けていく目的としては、大きく分けて３つあります。
                <br />
                <br />
                1つ目、勉強したことをまとめる・復習するため
                <br />
                2つ目、読書感想文を書くため
                <br />
                3つ目、過去の自分の技術や思想を残すため
                <br />
                <br />
                特にインターンシップでは作りっぱなしで、学んだことを振り返る機会がないのでブログなどの媒体でまとめる必要があるなと思っていました。
                フロントエンド周りの技術的なところや、社員さんから頂いたフィードバックなどを備忘録がてら書いていきます。
                <br />
                <br />
                あと僕は昔から読書が好きで小学生の頃から小説をよく読んでいました。
                今でも小説はよく読むのですが、最近ではデザインの本やフロントエンドの技術書、あとは経営の本など専門者を読む機会が増えてきました。
                梅沢さんのアウトプット大全にもあるように、本を読んで知識をインプットするだけの人と、それをアウトプットまでする人とでは大きな差があると思います。
                と言っても、人に話すにもなかなか聞いてくれる人もいないし、自分で黙々と感想をノートに書いても続かないだろうなぁと思いました。
                そこで、ブログという第3者の目にも止まる媒体で書くことによって、持ちうベーションも上がるし、アウトプットを継続できるのでは？と考えたことがきっかけです。
                <br />
                <br />
                さて、これはインターンに行ってる企業のCEOがよく言ってる言葉なのですけど、
                <br />
                「一年前の自分よりも100倍成長する」
                <br />
                100倍？？成長を尺度で現せれないだろ！ってツッコミもあると思いますが、僕はポジティブで意欲溢れるこの言葉がすごく好きで、
                この言葉を指針にして日々学習や研究に取り組んでいます。
                <br />
                このブログを書く3つ目の目的。「過去の自分の技術や思想を残すため」
                <br />
                1年後に見返したときに、『この頃こんなんやったなぁ！この頃よりも絶対100倍成長できたぞ！』ということができるようにその都度の自分のレベルを記録していきます。
                なので、書く内容は必ず等身大のことを書きます。できもしない、理解できないコードの丸写し・写経などは極力しないつもりです。
                <br />
                <br />
                ここまで読んでくださってありがとうございます。わかりやくすくライティングできるようには勤めますが、あくまで自分のために書くので読みづらかったらごめんなさい。
                ライティング技術やプログラミング技術についても、1,2年後見たときに大爆笑できるくらい成長していきたいと思っているので、温かく見守ってください！
              </p>
              <div className="backToTop"><Link to="/works">back</Link></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Article ;
