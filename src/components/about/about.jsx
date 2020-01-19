import React, { Component } from 'react';
import './css/about.css';
import SkillCharts from "./skillCharts.jsx"
import Skills from "./skills.jsx"
import TopImage from "./homeTop.jsx"
import styled from 'styled-components'
import * as color from "../../css/color.js"

const AboutText = styled.div`
  font-size: 1.5rem;
  line-height: 3.5rem;
  font-weight: 400;
`;

const WorksWrapTitle = styled.div`
  text-align: left;
  font-size: 4.0rem;
  color: ${color.baseText__thin};
`;

const WorksWrapTitleUnder = styled.div`
  width: 100px;
  height: 3px;
  margin-top: 20px;
  background: ${color.baseText__thin};
`;


const HomeProfileWrap = styled.div`
  position: relative;
`

const HomeProfileTextWrap = styled.div`
  background: rgba(229, 217, 142, 0.4);
  width: 90%;
  padding: 50px 50px 30px;
`

const HomeProfileTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${color.mainBlue};
  opacity: 0.5
`

const HomeProfileImg = styled.div`
  position: absolute;
  right: 50px;
  top: 0px;
  z-index: 1
`


class About extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__about.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg"
  }

  render() {
    return (
      <React.Fragment>
        <div style={{position: 'relative', zIndex: '-10',background: '#fafafa'}}>
          <TopImage/ >
          <div style={{width:'1100px', margin:'80px auto 0'}}>

            <WorksWrapTitle>Profile</WorksWrapTitle>
            <WorksWrapTitleUnder style={{margin:'0 0 70px'}}/>

            <HomeProfileWrap className="flex" style={{padding:'0 0 0', position:'relative'}}>
              <HomeProfileTextWrap  style={{width:'850px', background:'#C5E6E7'}}>
                <HomeProfileTitle>~ MiddleSchool</HomeProfileTitle>
                <AboutText style={{padding:'30px 0 0', width:'370px'}}>
                  　1997年、大阪府に生まれました。
                  小学校では放課後に野球やサッカー、バスケに明け暮れていました。
                  この頃から何かを創作するのが好きで、新聞紙で剣を作ったり、おじいちゃんの畑の隅にダンボールで秘密基地を作っていました。
                  中学では野球部に入部して、地域の大会で100チーム中のベスト8に入るなど、まずまずの戦績で、個人としても副キャプテンとしてチームに貢献しました。
                </AboutText>
              </HomeProfileTextWrap>
              <HomeProfileImg style={{top: '80px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '600px',
                    height:'400px',
                  }}
                />
              </HomeProfileImg>
            </HomeProfileWrap>

            <HomeProfileWrap className="flex" style={{padding:'30px 0 0'}}>
              <HomeProfileImg style={{left:'50px', top:'150px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '400px',
                    height:'300px',
                    padding:'0 30px 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{marginLeft:'auto', paddingTop:'80px', width:'750px'}}>
                <div style={{marginLeft:'auto', width:'590px'}}>
                  <HomeProfileTitle>Highschool</HomeProfileTitle>
                  <AboutText style={{padding:'30px 0 0'}}>
                    　2012年、大阪府立天王寺高校に入学しました。
                    バレー部に入部して、監督のいない中、自分たちで練習を組み立てて、
                    高校３年生の時にはビーチバレーでの近畿大会出場を果たしました。「ビーチバレーってww」とよく言われますが、(自分で言うのも何ですが) ビーチバレーで近畿大会に出るのは結構難関です。笑
                    <br/>
                    　そして大学のことを考え始めて、建築デザインに興味が湧いたのが高校２年生の頃です。それから１年半ほどの間、部活終わりに美術室に通い続けてデッサンや設計に取り組みました。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>

            <HomeProfileWrap className="flex" style={{padding:'0 0 0'}}>
              <HomeProfileImg style={{top:'0'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '500px',
                    height:'400px',
                    padding:'0 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{width:'700px', marginTop:'30px', background:'#C5E6E7'}}>
                <div style={{width:'470px'}}>
                  <AboutText style={{padding:'0 0 0'}}>
                    　2015年3月、京都工芸繊維大学デザイン経営工学課程に合格しました。
                    そして合格の翌日から、大阪から東京まで、ママチャリで自転車旅に出かけました。
                    大阪を出て4日目くらいに東京に到着しましたが、特に目的はなかったので観光だけして帰りました。
                    <br/>
                    　この旅の記憶は今でも鮮明に覚えています。
                    新しい経験をしたい、誰も知らないものを知りたい、とより強く思うようになったきっかけだと思います。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>

            <HomeProfileWrap className="flex" style={{padding:'30px 0 0'}}>
              <HomeProfileImg style={{left:'50px', top:'100px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '600px',
                    height:'450px',
                    padding:'0 30px 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{marginLeft:'auto', paddingTop:'80px', width:'800px'}}>
                <div style={{marginLeft:'auto', width:'390px', padding:' 0 0 100px 0'}}>
                  <HomeProfileTitle>College</HomeProfileTitle>
                  <AboutText style={{padding:'30px 0 0'}}>
                    東京ママチャリ旅から帰ってきて、京都工芸繊維大学デザイン経営工学課程に入学しました。
                    学部1.2年の頃はデザインと経営と工学の三分野を広く浅く学びました。
                    学科の友達とは今でもすごく仲が良いですが、大学の授業ではグループワークの演習が多かったので、意見が衝突して口論になることは日常茶飯事でした。
                    友達との衝突の日々を通して身につけた、批評するときもされる時も決して感情的にならずに、他人の意見も自分の意見も尊重するべきだという価値観は、今でも僕の価値観の中心にあります。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>


            <HomeProfileWrap className="flex" style={{padding:'0 0 0'}}>
              <HomeProfileImg style={{right: '-50px', top:'-50px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '600px',
                    height:'400px',
                    padding:'0 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{width:'700px', marginTop:'100px', background:'#C5E6E7'}}>
                <div style={{width:'470px'}}>
                  <AboutText style={{padding:'0 0 100px'}}>
                    　高校に引き続き、バレーボールは熱心に練習していました。大学の体育会バレー部と京大のバレーサークルと社会人バレーチームの３つのチームを兼部して、それぞれの練習や試合にはほぼ皆勤で出席していました。
                    今思えば、学業とアルバイトとバレーボールをどうやって両立していたのかすごく不思議です。(多分睡眠時間を削っていた)
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>

            <HomeProfileWrap className="flex" style={{padding:'0 0 0'}}>
              <HomeProfileImg style={{left:'50px', top:'-70px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '600px',
                    height:'450px',
                    padding:'0 30px 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{margin:'50px 0 0 auto', paddingTop:'40px', width:'800px'}}>
                <div style={{marginLeft:'auto', width:'390px', padding:' 0 0 10px'}}>
                  <AboutText style={{padding:'0 0 0'}}>
                    　学部３年生の時にワークプレイスデザインの研究室に配属されました。
                    より効率よく働くためにはどうすれば良いのか、空間デザインの側面からアプローチする分野の研究です。
                    <br/>
                    　この研究室で学んだ、働くことに対する問題意識は、今も僕の就活の軸として自分の中の深い価値観となっています。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>

            <HomeProfileWrap className="flex" style={{padding:'0 0 0'}}>
              <HomeProfileImg style={{top:'0px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '500px',
                    height:'350px',
                    padding:'0 30px 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{margin:'50px 0 0', paddingTop:'40px', width:'800px', background:'#C5E6E7'}}>
                <div style={{width:'390px', padding:' 0 0 10px'}}>
                  <AboutText style={{padding:'0 0 0'}}>
                    　本格的に自転車にハマったのが学部２年生の冬ごろです。
                    ロードバイクを購入して、東京や九州や四国などいろんなところを旅しました。
                    自転車について語ると長くなるので近々別リンクを用意したいです。笑
                    <br/>
                    　学生のうちにしたいことのうちの一つは、北海道をキャンプしながら自転車で一周することです。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>


            <HomeProfileWrap className="flex" style={{padding:'0 0 0'}}>
              <HomeProfileImg style={{left:'50px', top:'70px'}}>
                <img
                  alt="my_photo"
                  src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zidori.jpg"
                  style={{
                    objectFit: 'cover',
                    width: '450px',
                    height:'350px',
                    padding:'0 0 0'
                  }}
                />
              </HomeProfileImg>
              <HomeProfileTextWrap style={{marginLeft:'auto',width:'700px', marginTop:'20px'}}>
                <div style={{marginLeft:'auto',width:'500px'}}>
                  <AboutText style={{padding:'100px 0 100px'}}>
                    　4回生の10月ごろに転機がありました。
                    Baseconnect株式会社で長期インターンシップ生として働き始めたことです。
                    これも話すと長くなるので別リンクを用意しなければいけませんが、インターンを通してウェブのデザインにやりがいを感じて、それがウェブデザインの道に進みたいと思うきっかけになりました。
                  </AboutText>
                </div>
              </HomeProfileTextWrap>
            </HomeProfileWrap>





            <AboutText style={{padding:'50px 0 0'}}>
              　1997年、大阪府に生まれる。小・中学校では放課後に野球やサッカー、バスケに明け暮れる活発的に日々を過ごす。
              2012年、大阪府立天王寺高校に入学。
              バレー部に入部し、高校３年生の時にはビーチバレーでの近畿大会出場を果たす。
              高校２年生の頃から建築デザインに興味が湧き、１年半ほどの間、放課後に美術室に通ってデッサンや設計に取り組む。
              <br/><br/>
              　2015年、京都工芸繊維大学デザイン経営工学課程に入学。大学でも体育会のバレー部に入部して、副キャプテンを１年間務める。体育会リーグでは全勝で５部昇格を果たす。
              勉学の面では、デザインとビジネス、エンジニアリングなどの幅広い分野を体系的に学ぶ。
              ３年次から環境デザイン経営研究室に配属。オフィスデザインや働き方のデザインについて、実践を通して学ぶ。４回生の秋からBaseconnect.incでのデザイナーインターンを開始。
              webデザインやフロントエンドの実務について基礎から学ぶ。
              <br/><br/>
              　2019年、京都工芸繊維大学大学院デザイン学専攻に入学。入学式の直後に日本を出発して、マダガスカルに1ヶ月間滞在。腹痛と嘔吐の時間を過ごす。
              言語が通じないプリミティブな環境の中でも生きられる自信を手に入れる。
              帰国後、このポートフォリオを制作。
              現在、オフィスデザインについて研究・実践、Baseconnect.incでのインターンシップ活動も続けながら、国際プロジェクトME310/SUGARに参加してより広いデザインの分野を学んでいる。
            </AboutText>

            <div className="flex" style={{padding: '100px 0 50px'}}>
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
        </div>
      </React.Fragment>
    );
  }
}

export default About;
