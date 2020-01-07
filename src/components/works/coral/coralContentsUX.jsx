import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";

const CoralContentsUXWrap = styled.div`
  width: 100%;
`

const UXContetsWrap = styled.div`
  border-radius: 20px;
  background: #FFF;
  padding: 40px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
`

const TextWrap = styled.div`
  width: 500px;
`

const CoralContentsUXSubTitle = styled.div`
  font-size: 2.0rem;
  font-weight: 600;
`

/* ターゲットコンポーネント */

const TaegetGraphWrap = styled.div`
  width: 400px;
  height: 300px;
  margin: auto;
  position: relative;
`

const TaegetGraphHori = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 7px;
  margin: auto;
  background: ${color.coralGreen};
`

const TaegetGraphVert = styled.div`
  width: 7px;
  height: 300px;
  margin: auto;
  background: ${color.coralGreen};
`

const TaegetGraphTargetArea = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 197px;
  height: 147px;
  margin: auto;
  background: ${color.coralGreen};
  opacity: 0.3;
`

const TaegetGraphTextTop = styled.div`
  position: absolute;
  top: 10px;
  left: 210px;
  font-size: 1.0rem
`
const TaegetGraphTextRight = styled.div`
  position: absolute;
  top: 130px;
  right: 0;
  font-size: 1.0rem
`

const TaegetGraphTextBottom = styled.div`
  position: absolute;
  bottom: 10px;
  left: 210px;
  font-size: 1.0rem;
`

const TaegetGraphTextLeft = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  font-size: 1.0rem
`

const TaegetGraphMainText = styled.div`
  position: absolute;
  bottom: 66px;
  right: 50px;
  font-size: 2.0rem;
  font-weight: 600;
`

/* ターゲットコンポーネント */

/* プロブレムコンポーネント */

const ProblemGraphWrap = styled.div`
  width: 100%;
`

const ProblemGraphItem = styled.div`
  background: ${color.coralGreen};
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 15px 16px;
  border-radius: 10px;
  position: relative;
  margin: 0 0 30px 0;
`
const ProblemGraphItemTop = styled.div`
  position: absolute;
  Top: -30px;
  left: 0;
  right: 0;
  margin: auto;
  background: #ddd;
  height: 30px;
  width: 10px;
`

const ProblemGraphItemLeft = styled(ProblemGraphItem)`
  width: 310px;
  font-size: 1.5rem;
`

const ProblemGraphItemRight = styled(ProblemGraphItem)`
  width: 100%;
  font-size: 1.5rem;
  margin-left: 10px;
`

const ProblemGraphItemRightBottom = styled(ProblemGraphItem)`
  font-size: 1.17rem;
  background: #EA629F;
  margin-bottom: 0;
`

/* プロブレムコンポーネント */

/* ユーザーストーリーコンポーネント */

const UserStoryWrap = styled.div`
  width: 100%;
`

const UserStoryItem = styled.div`
  width: 370px;
  height: 370px
  background: ${color.coralGreen};
  position: relative;
`

const UserStoryItemText = styled.div`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
`

/* ユーザーストーリーコンポーネント */

/* UX詳細コンポーネント */

const UXDetailWrap = styled.div`
  width: 100%;
`

const UXDetailItem = styled.div`
  width: 270px;
  height: 270px;
  background: ${color.coralGreen};
`

const UXDetailItemText = styled.div`
  width: 270px;
  text-align: center;
  font-size: 1.5rem;
`

const UXDetailItemTextTitle = styled.div`
  color: ${color.mainBlue__thin};
  padding-bottom: 10px;
`

const UXDetailItemTextContents = styled.span`
  font-size: 1.8rem
`

const UXDetailItemTextBlue = styled(UXDetailItemText)`
  padding: 20px 0;
  background: #EDF7F7;
`

/* UX詳細コンポーネント */

/* UIコンポーネント */

const UIWrap = styled.span`
  font-size: 1.8rem
`

const CoralContentsBusinnesModelArrowToRight = styled.div`
  position: relative;
  opacity: 0.5;
  &::before {
    content: "";
    position: absolute;
    top: 170px;
    right: -10px;
    border-left: 15px solid ${color.coralBlue};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`

const WorkHeadingCoral = styled.div`
  font-size: 1.5rem;
  line-height:3.0rem;
  font-weight: 600;
  &::before {
    content:  '';
    width: 10px;
    height: 28px;
    background: ${color.coralGradientVertical};
    display:  block;
    position:  absolute;
    left: 40px;
  }
`;

const UIItemText = styled.div`
  width: 21%;
  text-align: center;
  font-size: 1.5rem;
  color: ${color.coralGreen}
`

const UIItemTextContents = styled.div`
  font-size: 1.5rem
`

const UIlItemTextBlue = styled(UIItemText)`
  padding: 20px 0;
  background: #EDF7F7;
`

const UIItemTextHeader = styled.div`
  width: 40%;
  text-align: center;
  font-size: 1.5rem;
  color: ${color.coralGreen}
`

/* UIコンポーネント */

class CoralContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsUXWrap style={{padding: '0 0 50px 0'}}>

          <UXContetsWrap style={{display: 'flex'}}>
            <TextWrap>
              <WorkText style={{padding: '0 20px 0 0'}}>
                <CoralContentsUXSubTitle style={{padding: '0 0 20px'}}>１.　Target</CoralContentsUXSubTitle>
                今回ターゲットにしたのは、歯の重要性は理解しているが定期的に歯医者に行かない人です。
                公益社団法人日本歯科医師会の2016年の調査によると、日本人のうち、31%の人が年に一度以上、歯の定期検診を受けるようです。
                一方で、歯の重要性を理解していて、歯に対して今まで以上にお金をかけたいと思っている人の割合は61%と、実際に定期検診を受けている人の割合よりも高い数値を示しています。
                歯の重要性を理解しているにも関わらず、歯が痛くなる限界まで歯医者に行かないことには、何か問題があるのではないかと考えて、今回のデザインに挑戦しました。
              </WorkText>
            </TextWrap>
            <div style={{paddingTop: '60px'}}>
              <TaegetGraphWrap>
                <TaegetGraphHori/>
                <TaegetGraphVert/>
                <TaegetGraphTargetArea/>
                <TaegetGraphTextTop>定期的に歯医者に行く</TaegetGraphTextTop>
                <TaegetGraphTextBottom>定期的に歯医者に行かない</TaegetGraphTextBottom>
                <TaegetGraphTextRight>歯の重要性を理解している</TaegetGraphTextRight>
                <TaegetGraphTextLeft>歯の重要性を理解していない</TaegetGraphTextLeft>
                <TaegetGraphMainText>ターゲット</TaegetGraphMainText>
              </TaegetGraphWrap>
            </div>
          </UXContetsWrap>


          <UXContetsWrap style={{marginTop: '50px'}}>
            <WorkText style={{padding: '0 0 30px'}}>
              <CoralContentsUXSubTitle style={{padding: '0 0 30px'}}>２.　Problems</CoralContentsUXSubTitle>
              また今回は、デザイナーである私自身がこのターゲット層でもあるので、自分の意見も頼りにしてデザインを進めました。
              『なぜ歯の重要度は理解しているのに、定期的に歯医者に行かないのか』その理由を自分の考えをもとに掘り下げた結果、以下のものが得られました。
            </WorkText>
            <ProblemGraphWrap>
              <ProblemGraphItem>歯の重要性は理解しているのに、定期的に歯医者に行かない</ProblemGraphItem>
              <div className="flex">
                <ProblemGraphItemLeft>歯医者に行く時間がないから<ProblemGraphItemTop/></ProblemGraphItemLeft>
                <ProblemGraphItemRight>歯医者に行くのが億劫だから<ProblemGraphItemTop/></ProblemGraphItemRight>
              </div>
              <div className="flex flex-end">
                <ProblemGraphItemRightBottom style={{marginRight: '10px'}}>歯を削られるのが怖いから<ProblemGraphItemTop/></ProblemGraphItemRightBottom>
                <ProblemGraphItemRightBottom style={{marginRight: '10px'}}>お金がかかるから<ProblemGraphItemTop/></ProblemGraphItemRightBottom>
                <ProblemGraphItemRightBottom style={{marginRight: '10px'}}>どの歯医者がいいか分からないから<ProblemGraphItemTop/></ProblemGraphItemRightBottom>
                <ProblemGraphItemRightBottom>予約が面倒だから<ProblemGraphItemTop/></ProblemGraphItemRightBottom>
              </div>
            </ProblemGraphWrap>
          </UXContetsWrap>


          <UXContetsWrap style={{marginTop: '50px'}}>
            <WorkText style={{padding: '0 0 30px'}}>
              <CoralContentsUXSubTitle style={{padding: '0 0 30px'}}>３.　Concept</CoralContentsUXSubTitle>
              上記の根本の原因に共通する問題は、『歯医者に行くのが億劫になっている』ことだと思います。
              逆に言えば、上記の根本の問題を解決すれば、億劫ならずに『気軽に』歯科検診を受けられるようになると思います。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              歯を削らないから『気軽』で。
              <br/>
              お金があまりかかないから『気軽』で。
              <br/>
              いい歯医者がすぐ分かるから『気軽』で。
              <br/>
              予約が楽だから『気軽』で。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              そんな『気軽な歯科検診』を追求したサービスが、今の日本の歯科検診の低さを解決するためには必要だと考えました。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              以上より、UXデザインのコンセプトを『歯科検診を気軽にできるサービス』と定めました。
            </WorkText>

            <WorkText style={{padding: '0 0 30px'}}>
              このコンセプトに基づいたアイデアとして、『ユーザーと歯医者をマッチングして、スマホで歯科検診ができるアプリ』を考えました。
              以下で簡易なユーザーストーリーで紹介します。
            </WorkText>

            <UserStoryWrap>
              <div className="flex" style={{ margin: '0 0 20px'}}>
                <UserStoryItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/SADwoman.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    １. 歯科検診行くの億劫だなぁ...けど行かなきゃ...
                  </UserStoryItemText>
                </UserStoryItem>
                <UserStoryItem style={{ margin: '0 0 0 20px'}}>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral%E7%99%BB%E5%A0%B4.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    ２. 歯科検診ができるアプリ発見！試してみよう！
                  </UserStoryItemText>
                </UserStoryItem>
              </div>
              <div className="flex" style={{ margin: '0 0 20px'}}>
                <UserStoryItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zido.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    ３.　口内の写真を撮影して、歯医者さんに送信！
                  </UserStoryItemText>
                </UserStoryItem>
                <UserStoryItem style={{ margin: '0 0 0 20px'}}>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/last.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    ４.　検診の結果が返ってきた！大丈夫でよかった！
                  </UserStoryItemText>
                </UserStoryItem>
              </div>
            </UserStoryWrap>
          </UXContetsWrap>

          <UXContetsWrap style={{marginTop: '50px'}}>
            <WorkText style={{padding: '0 0 10px'}}>
              <CoralContentsUXSubTitle style={{padding: '0 0 30px'}}>４.　UX Detail</CoralContentsUXSubTitle>
              アプリのユーザー体験の詳細を考える上で悩んだことは『アプリ内で、ユーザーは歯医者からどのようにして検診のフィードバックを受けるのか』という点です。
              そのアイデアとして以下の３案を考え、それぞれの特徴を分類しました。
            </WorkText>
            <UXDetailWrap style={{padding: '0 0 0px'}}>
              <div className="flex" style={{justifyContent: 'space-between', padding: '30px 0 0'}}>
                <UXDetailItemText><UXDetailItemTextTitle>A案</UXDetailItemTextTitle></UXDetailItemText>
                <UXDetailItemText><UXDetailItemTextTitle>B案</UXDetailItemTextTitle></UXDetailItemText>
                <UXDetailItemText><UXDetailItemTextTitle>C案</UXDetailItemTextTitle></UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '5px 0 20px'}}>
                <UXDetailItemText>『リアルタイムでオンライン検診』</UXDetailItemText>
                <UXDetailItemText>『検診結果を後日に動画で確認』</UXDetailItemText>
                <UXDetailItemText>『検診結果を後日に文章で確認』</UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between' , margin: '0 0 20px'}}>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__realtime.jpg"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__movie.jpg"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__text.jpg"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
              </div>
              <div className="flex" style={{justifyContent: 'space-between'}}>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>予約の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>予約の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>予約の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>料金の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>料金の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>○</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>料金の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between'}}>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>検診の気軽さ(ユーザー)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>○</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>検診の気軽さ(ユーザー)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>検診の気軽さ(ユーザー)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>検診の気軽さ(歯医者)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>検診の気軽さ(歯医者)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>○</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>検診の気軽さ(歯医者)</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between'}}>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>○</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
              </div>
            </UXDetailWrap>
            <WorkText style={{padding: '30px 0 30px'}}>
              A案では検診のクオリティ良さそうですが、時間通りに通信する必要があるので、ユーザーにとって大きな手間になることが危惧されます。
              C案ではテキストベースで診断を受け取るので便利ではあるが、テキストだけでは歯医者の評価をしづらく気軽に歯医者を選べなくなることが危惧されます。
              またテキストだけで、満足感のある検診ができるのか不安が残るのではないかとも考えました。
              B案では歯医者の手間こそ増えるものの、ユーザー側の問題はほとんど解決できているので、B案を採用することにしました。
            </WorkText>

          </UXContetsWrap>

          <UXContetsWrap style={{margin: '50px 0 0'}}>
            <WorkText style={{padding: '0 0 70px'}}>
              <CoralContentsUXSubTitle style={{padding: '0 0 30px'}}>５.　UI Design</CoralContentsUXSubTitle>
              ユーザー側の画面に絞って、ユーザーが検診を終えるまでに必要な最低限の機能をまとめて、UIデザインを行いました。
            </WorkText>

            <UIWrap>
              <div className="flex" style={{justifyContent: 'space-between', padding: '5px 0 10px'}}>
                <UIItemText>ホーム画面</UIItemText>
                <UIItemText>検索条件</UIItemText>
                <UIItemText>検索結果</UIItemText>
                <UIItemText>歯医者詳細</UIItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '0 0 40px'}}>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E3%83%9B%E3%83%BC%E3%83%A0%E7%94%BB%E9%9D%A2.jpg"
                  style={{ width: '21%', border: '1px solid #ddd'}}
                />
                <CoralContentsBusinnesModelArrowToRight/>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E6%A4%9C%E7%B4%A2_%E3%83%A2%E3%83%BC%E3%82%BF%E3%82%99%E3%83%AB.png"
                  style={{ width: '21%', border: '1px solid #ddd'}}
                />
                <CoralContentsBusinnesModelArrowToRight/>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Slice+3.jpg"
                  style={{ width: '21%', border: '1px solid #ddd'}}
                />
                <CoralContentsBusinnesModelArrowToRight/>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Slice+4.jpg"
                  style={{ width: '21%', border: '1px solid #ddd'}}
                />
              </div>

              <WorkHeadingCoral style={{margin: '50px 0 30px 20px'}}>
                こだわり １. 　<span style={{fontSize: '1.7rem'}}>header</span>の検索機能
              </WorkHeadingCoral>

              <WorkText style={{padding: '0 0 30px'}}>
                まず既存の予約サービスのhome画面によく見られるheaderの検索機能を、下の３つのように分類しました。
              </WorkText>

              <div className="flex" style={{justifyContent: 'space-between', padding: '5px 0 20px'}}>
                <UXDetailItemText>A. 検索モーダルへの導線</UXDetailItemText>
                <UXDetailItemText>B. その場で打ち込んで検索</UXDetailItemText>
                <UXDetailItemText>C. AとBのハイブリット型</UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', margin: '0 0 20px'}}>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Mobile_sample1.png"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Mobile_sample2.png"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/header_Mobile3.png"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
              </div>
              <div className="flex" style={{justifyContent: 'space-between'}}>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・面積をとらない</UIItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・画面遷移が少ない</UIItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・比較的面積をとらない</UIItemTextContents>
                  <br/>
                  <UIItemTextContents>・入力する情報量が減る</UIItemTextContents>
                </UXDetailItemTextBlue>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・画面遷移がある</UIItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・面積をとる</UIItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>・画面遷移がある</UIItemTextContents>
                </UXDetailItemText>
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                そもそも本サービスにおいて、理想のユーザー体験は「検索しなくても、良い歯医者に検診してもらえること」だと考えました。それが「予約の気軽さ」に繋がるからです。
                本サービスにおける理想と、上記の検索機能を考慮して、下の２つのデザインをしました。
              </WorkText>

              <div className="flex" style={{margin: '0 0 20px'}}>
                <UIItemTextHeader style={{margin: '0 30px 0 0'}}>
                  ボツ案
                </UIItemTextHeader>
                <UIItemTextHeader>
                  採用した案
                </UIItemTextHeader>
              </div>

              <div className="flex" style={{margin: '0 0 20px'}}>
                <UIItemTextHeader style={{margin: '0 30px 0 0'}}>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/header_search2.png"
                    style={{ width: '100%' }}
                  />
                </UIItemTextHeader>
                <UIItemTextHeader>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/header_search.png"
                    style={{ width: '100%' }}
                  />
                </UIItemTextHeader>
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                今回のサービスにおいて、ユーザーは最寄りの歯医者に検診してもらいたいと考えるのではにかと仮説を立てて、自宅や職場周辺に限って歯医者の検索ができるようにしました。
                またアカウント作成時にあらかじめ地域を選ばせておくことで、『あなたにおすすめの歯医者』の精度も格段に向上して、
                「検索しなくても、良い歯医者に検診してもらえる」という理想のユーザー体験に近づきます。
              </WorkText>

            </UIWrap>
          </UXContetsWrap>

        </CoralContentsUXWrap>
      </React.Fragment>
    )
  }
}

export default CoralContentsUX;
