import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import WorkText from "../workContents/workText";
import WorkTextBold from "../workContents/workTextBold";
import WorkHeading from "../workContents/workHeading";

const CoralContentsUXWrap = styled.div`
  width: 100%;
`

const UXContetsWrap = styled.div`
  border-radius: 20px;
  background: #FFF;
  padding: 30px 40px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.05);
  margin: 0 20px;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

const TextWrap = styled.div`
  width: 100%;
  max-width: 480px;
`

const CoralContentsUXSubTitle = styled.div`
  font-size: 2.0rem;
  font-weight: 700;
  padding: 0 0 20px;
  @media screen and (max-width: 767px) {
    padding: 10px 0 20px;
  }
`

/* ターゲットコンポーネント */

const TaegetGraphWrap = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 300px;
  margin: auto;
  position: relative;
`

const TaegetGraphHori = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  height: 8px;
  margin: auto;
  background: ${color.coralGreen};
`

const TaegetGraphVert = styled.div`
  width: 8px;
  height: 300px;
  margin: auto;
  background: ${color.coralGreen};
`

const TaegetGraphTargetArea = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(50% - 4px);
  max-width: 197px;
  height: 146px;
  margin: auto;
  background: #DEEFEF;
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
  text-align: center;
  font-size: 2.0rem;
  font-weight: 600;
  margin-top: 60px;
`

const TargetInfoWrap = styled.div`
  & img {
    padding-left:10px
  }
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
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 8px;
    line-height: 1.5rem
  }
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
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`


const ProblemGraphItemRight = styled(ProblemGraphItem)`
  width: 100%;
  font-size: 1.5rem;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

const ProblemGraphItemRightBottom = styled(ProblemGraphItem)`
  font-size: 1.17rem;
  background: #EA629F;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

/* プロブレムコンポーネント */

/* ユーザーストーリーコンポーネント */

const UserStoryWrap = styled.div`
  width: 100%;
`

const UserStoryItem = styled.div`
  max-width: 400px;
  background: ${color.coralGreen};
  position: relative;
  margin: 20px auto;
`

const UserStoryItemText = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: #fff;
  text-align: center;
  margin: -20px 10px 20px;
`

/* ユーザーストーリーコンポーネント */

/* UX詳細コンポーネント */

const UXDetailWrap = styled.div`
  width: 100%;
`

const UXDetailItem = styled.div`
  max-width: 270px;
  background: ${color.coralGreen};
  margin: 0 3px 10px;
`

const UXDetailItemText = styled.div`
  width: 270px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 3px;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 0;
  }
`

const UXDetailItemTextTitle = styled.div`
  color: ${color.mainBlue__thin};
  padding: 0 0 3px;
`

const UXDetailItemTextContents = styled.span`
  font-size: 1.8rem
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

const UXDetailItemTextBlue = styled(UXDetailItemText)`
  padding: 20px 0;
  background: #EDF7F7;
  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
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
  line-height: 3.0rem;
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

const UIItemTextWrap = styled.div`
  min-width: 130px;
  width: 21%;
  margin-bottom: 20px;
`

const UIItemText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${color.coralGreen};
  padding-bottom: 10px;
`

const UIItemTextContents = styled.div`
  font-size: 1.5rem
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`

const UIlItemTextBlue = styled(UIItemText)`
  padding: 20px 0;
  background: #EDF7F7;
`

const UIItemTextHeader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: ${color.coralGreen};
  padding: 20px 0 10px 0;
`
const UIItemTextHeaderWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
  margin: auto;
`

const KodawariWrap = styled.div`
  margin: 50px 0 30px 10px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    margin: 0 0 20px;
  }
`
const KodawariTitle = styled.div`
  font-size: 2.5rem;
  line-height: 2.5rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const KodawariSubTitle = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  padding: 10px 0 0;
  color: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    padding: 0;
    font-size: 1.3rem;
  }
`



/* UIコンポーネント */

class CoralContentsUX extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsUXWrap style={{padding: '0 0 30px 0'}}>

          <UXContetsWrap>
            <div className='flex flex-wrap'>
              <TextWrap>
                <WorkText style={{padding: '0 20px 0 0'}}>
                  <CoralContentsUXSubTitle>１.　Target</CoralContentsUXSubTitle>
                  　今回ターゲットにしたのは、<WorkTextBold>歯に対して今以上にお金をかけたいと思っているが定期的に歯医者に行かない人</WorkTextBold>です。<br/>
                  　公益社団法人日本歯科医師会の2016年の調査によると、日本人のうち、31%の人が年に一度以上、歯の定期検診を受けるようです。
                  一方で、歯の重要性を理解していて、歯に対して今以上にお金をかけたいと思っている人の割合は61%と、実際に定期検診を受けている人の割合よりも高い数値を示しています。
                  歯の重要性を理解しているにも関わらず、歯が痛くなる限界まで歯医者に行かないことには、何か問題があるのではないかと考えて、今回のデザインに挑戦しました。
                </WorkText>
              </TextWrap>
              <TaegetGraphWrap>
                <TaegetGraphHori/>
                <TaegetGraphVert/>
                <TaegetGraphTargetArea>
                  <TaegetGraphMainText>ターゲット</TaegetGraphMainText>
                </TaegetGraphTargetArea>
                <TaegetGraphTextTop>定期的に歯医者に行く</TaegetGraphTextTop>
                <TaegetGraphTextBottom>定期的に歯医者に行かない</TaegetGraphTextBottom>
                <TaegetGraphTextRight>歯に対してお金をかけたい</TaegetGraphTextRight>
                <TaegetGraphTextLeft>歯に対してお金をかけたくない</TaegetGraphTextLeft>
              </TaegetGraphWrap>
            </div>
          </UXContetsWrap>

          <UXContetsWrap style={{marginTop: '50px'}}>
            <WorkText style={{padding: '0 0 30px'}}>
              <CoralContentsUXSubTitle>２.　Problems</CoralContentsUXSubTitle>
              また今回は、デザイナーである私自身がこのターゲット層でもあるので、自分の意見も頼りにしてデザインを進めました。
              <WorkTextBold>なぜ歯に対して今以上にお金をかけたいと思っているのに定期的に歯医者に行かないのか、</WorkTextBold>その理由を自分の考えをもとに掘り下げた結果、以下のものが得られました。
            </WorkText>
            <ProblemGraphWrap>
              <ProblemGraphItem>歯に対してお金をかけたいのに、定期的に歯医者に行かない</ProblemGraphItem>
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
              <CoralContentsUXSubTitle>３.　Concept</CoralContentsUXSubTitle>
              上記の根本の原因に共通する問題は、<WorkTextBold>歯医者に行くのが億劫になっている</WorkTextBold>ことだと思います。
              逆に、定期的に歯医者に行くための理想的な状態は、歯医者に行くことが億劫ではない状態です。さらにそれを言い換えると、理想は、<WorkTextBold>歯医者に行くのが気軽である</WorkTextBold>状態だと考えました。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              歯を削らないから<WorkTextBold>気軽</WorkTextBold>で。
              <br/>
              お金があまりかかないから<WorkTextBold>気軽</WorkTextBold>で。
              <br/>
              いい歯医者がすぐ分かるから<WorkTextBold>気軽</WorkTextBold>で。
              <br/>
              予約が楽だから<WorkTextBold>気軽</WorkTextBold>で。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              そんな<WorkTextBold>気軽な定期検診</WorkTextBold>を追求したサービスが、今の日本の定期検診の低さを解決するためには必要だと考えました。
            </WorkText>
            <WorkText style={{padding: '0 0 30px'}}>
              以上より、UXデザインのコンセプトを<WorkTextBold>定期検診を気軽にできるサービス</WorkTextBold>と定めました。
            </WorkText>

            <WorkText style={{padding: '0 0 30px'}}>
              さらにこのコンセプトに基づいたアイデアとして、『ユーザーと歯医者をマッチングして、スマホで歯科検診ができるアプリ』を考えました。
              以下で簡易なユーザーストーリーで紹介します。
            </WorkText>

            <UserStoryWrap>
              <div className="flex flex-center flex-wrap" style={{ margin: '0 0 20px'}}>
                <UserStoryItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/SADwoman.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    １. 歯科検診行きたいけど、いろいろ億劫だなぁ...
                  </UserStoryItemText>
                </UserStoryItem>
                <UserStoryItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral%E7%99%BB%E5%A0%B4.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    ２. 歯科検診ができるアプリ発見！試してみよう！
                  </UserStoryItemText>
                </UserStoryItem>
                <UserStoryItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/zido.jpg"
                    style={{ width: '100%' }}
                  />
                  <UserStoryItemText>
                    ３.　口内を撮影して、歯医者に送信！めちゃ気軽！
                  </UserStoryItemText>
                </UserStoryItem>
                <UserStoryItem>
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
              <CoralContentsUXSubTitle>４.　UX Detail</CoralContentsUXSubTitle>
              アプリのユーザー体験の詳細を考える上で悩んだことは、<WorkTextBold>ユーザーはどのようにして歯医者から検診のフィードバックを受けるのか</WorkTextBold>です。
              そのアイデアとして以下の３案を考えてそれぞれの特徴を分類した上で、どのアイデアを採用するかを決めました。
            </WorkText>
            <UXDetailWrap style={{padding: '0 0 0px'}}>
              <div className="flex" style={{justifyContent: 'space-between', padding: '30px 0 0'}}>
                <UXDetailItemText><UXDetailItemTextTitle>A案</UXDetailItemTextTitle></UXDetailItemText>
                <UXDetailItemText><UXDetailItemTextTitle>B案</UXDetailItemTextTitle></UXDetailItemText>
                <UXDetailItemText><UXDetailItemTextTitle>C案</UXDetailItemTextTitle></UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '5px 0 10px'}}>
                <UXDetailItemText>リアルタイムでオンライン検診</UXDetailItemText>
                <UXDetailItemText>検診結果を後日に動画で確認</UXDetailItemText>
                <UXDetailItemText>検診結果を後日に文章で確認</UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between' , margin: '0 0 10px'}}>
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
                  <UXDetailItemTextTitle>検診の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>検診の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>検診の気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemTextBlue>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>◎</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>○</UXDetailItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>歯医者を選ぶ気軽さ</UXDetailItemTextTitle>
                  <UXDetailItemTextContents>△</UXDetailItemTextContents>
                </UXDetailItemText>
              </div>
            </UXDetailWrap>
            <WorkText style={{padding: '30px 0 10px'}}>
              リアルタイムで検診を受けるA案では歯医者での通常の検診に近いですが、時間通りに通信する必要があるので、予約や検診において億劫の原因になることが危惧されます。
              また歯医者にとっても手間になるので料金が上がることも予想されます。
            </WorkText>
            <WorkText style={{padding: '10px 0 10px'}}>
              次にC案ではテキストベースで検診を受け取るので、ユーザーは検診自体に時間の制約がない分気軽ではありますが、<WorkTextBold>テキストだけでは歯医者の評価をしづらく、検診の評価が適正でなくなる可能性</WorkTextBold>があります。
              評価が適正でないと、<WorkTextBold>ユーザーが気軽に歯医者を選びづらくなる</WorkTextBold>ことが危惧されるので大きな問題です。
              またテキストだけでユーザーにとって満足感のある検診ができるのか、という不安も残ります。
            </WorkText>
            <WorkText style={{padding: '10px 0 0px'}}>
              B案ではC案に比べて歯医者の手間が増えるので、それに伴って料金も割増になることが予想されます。
              しかし今回のケースでは、<WorkTextBold>ユーザーは今まで以上に歯にお金をかけたいと思っているので、</WorkTextBold>料金は大きな問題ではないと判断しました。
              よって、ほとんどの問題をカバーできているB案を採用することにしました。
            </WorkText>

          </UXContetsWrap>

          <UXContetsWrap style={{margin: '50px 20px 20px'}}>
            <WorkText style={{padding: '0 0 50px'}}>
              <CoralContentsUXSubTitle>５.　Mockup</CoralContentsUXSubTitle>
              今回はユーザー側の画面に絞ってモックアップのデザインを行いました。<WorkTextBold>ユーザーが検診を終えるまでに必要な最低限の機能のみ</WorkTextBold>を考えています。
            </WorkText>

            <UIWrap>
              <div className="flex flex-wrap" style={{justifyContent: 'space-between', padding: '5px 0 10px'}}>
                <UIItemTextWrap>
                  <UIItemText>ホーム画面</UIItemText>
                    <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__kensaku.jpg"
                      style={{ width: '100%'}}
                    />
                </UIItemTextWrap>
                <CoralContentsBusinnesModelArrowToRight/>
                <UIItemTextWrap>
                  <UIItemText>検索条件</UIItemText>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E6%A4%9C%E7%B4%A2_%E3%83%A2%E3%83%BC%E3%82%BF%E3%82%99%E3%83%AB.png"
                    style={{ width: '100%'}}
                  />
                </UIItemTextWrap>
                <CoralContentsBusinnesModelArrowToRight/>
                <UIItemTextWrap>
                  <UIItemText>検索結果</UIItemText>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__kensakukekka.jpg"
                    style={{ width: '100%'}}
                  />
                </UIItemTextWrap>
                <CoralContentsBusinnesModelArrowToRight/>
                <UIItemTextWrap>
                  <UIItemText>歯医者詳細</UIItemText>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/Slice+4.jpg"
                    style={{ width: '100%'}}
                  />
                </UIItemTextWrap>
              </div>

              <WorkText style={{padding: '10px 0 0'}}>
                デザインする上で特に悩んでこだわった点が２つあるので、以下にまとめました。
              </WorkText>


              <div className="flex flex-wrap" style={{border: '2px solid #8AC7CA',margin: '50px 0 30px 0', padding: '30px'}}>
                <KodawariWrap>
                  こだわり １.
                  <div style={{padding: '20px 0 0'}}>
                    <KodawariTitle>ホーム画面</KodawariTitle>
                    <KodawariSubTitle>- headerの検索機能 -</KodawariSubTitle>
                  </div>
                </KodawariWrap>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E6%A4%9C%E7%B4%A2.png"
                  style={{ maxWidth: '400px', width: '100%', marginLeft:'auto' }}
                />
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                まずそもそも本サービスのホーム画面において、理想のユーザー体験について考えました。
                そして理想のユーザー体験は、<WorkTextBold>検索しなくても、良い歯医者をすぐに見つけられること</WorkTextBold>だと定義しました。
                良い歯医者がすぐに見つかれば、それが<WorkTextBold>予約の気軽さ</WorkTextBold>に繋がるからです。
              </WorkText>

              <WorkText style={{padding: '0 0 30px'}}>
                その理想のユーザー体験を踏まえて、
                『あなたにおすすめの歯医者』や『過去に検診を受けたことのある歯医者』をホーム画面にレイアウトして、検索しなくても歯医者を選択できるようにすることを考えました。
              </WorkText>

              <WorkText style={{padding: '0 0 30px'}}>
                検索しないのが理想のユーザー体験だからと言って、検索したいというニーズを無視するわけにもいかないので、
                <WorkTextBold>既存の予約サービスのホーム画面</WorkTextBold>によく見られる検索機能を調査して、下の３つのように分類しました。
              </WorkText>

              <div className="flex" style={{justifyContent: 'space-between', padding: '5px 0 20px'}}>
                <UXDetailItemText>A. 検索モーダルへの導線</UXDetailItemText>
                <UXDetailItemText>B. その場で打ち込んで検索</UXDetailItemText>
                <UXDetailItemText>C. AとBのハイブリット型</UXDetailItemText>
              </div>
              <div className="flex" style={{justifyContent: 'space-between'}}>
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
                  <UIItemTextContents>面積をとらない</UIItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>画面遷移が少ない</UIItemTextContents>
                  <br/>
                  <UIItemTextContents>迷いが少ない</UIItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>比較的面積をとらない</UIItemTextContents>
                  <br/>
                  <UIItemTextContents>入力する情報量が減る</UIItemTextContents>
                </UXDetailItemTextBlue>
              </div>
              <div className="flex" style={{justifyContent: 'space-between', padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>画面遷移がある</UIItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>面積をとる</UIItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>画面遷移がある</UIItemTextContents>
                </UXDetailItemText>
              </div>

              <WorkText style={{padding: '30px 0 10px'}}>
                以上３つのデザインのうち、どのデザインが一番良いというものは一概になく、サービスにおける理想のユーザー体験に応じて、デザインする必要があると感じたので、一案一案検討していきました。
              </WorkText>

              <WorkText style={{padding: '10px 0 30px'}}>
                まず、B案では、画面を大きく占領するので、<WorkTextBold>まずheaderから検索しないといけない</WorkTextBold>ということをユーザーに強く意識させてしまいます。
                そうなると、<WorkTextBold>検索しなくても、良い歯医者をすぐに見つけられる</WorkTextBold>という理想のユーザー体験から遠ざかってしまうので、まずB案はボツとしました。
              </WorkText>

              <WorkText style={{padding: '10px 0 30px'}}>
                次に、A案とC案について考えました。
              </WorkText>

              <div className="flex flex-center flex-wrap" style={{margin: '0 0 20px'}}>
              <UIItemTextHeaderWrap>
                <UIItemTextHeader>
                  A案
                </UIItemTextHeader>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/header_search2.png"
                  style={{ width: '100%' }}
                />
              </UIItemTextHeaderWrap>

              <UIItemTextHeaderWrap>
                <UIItemTextHeader>
                  C案
                </UIItemTextHeader>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/header_search.png"
                  style={{ width: '100%' }}
                />
              </UIItemTextHeaderWrap>
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                まず、今回のサービスにおいて、ユーザーは<WorkTextBold>できれば最寄りの歯医者に検診してもらいたい。通院が必要になれば、オンライン検診してもらった歯医者に見てもらいたい</WorkTextBold>と考えるのではないかという仮説を立てました。
                また歯医者側からしても<WorkTextBold>オンライン検診だけではなく、オンライン検診後に実際に自分の病院に通院して欲しい</WorkTextBold>というニーズは確実にあるはずです。
              </WorkText>
              <WorkText style={{padding: '0 0 30px'}}>
                以上の両者のニーズを叶えるために、<WorkTextBold>アカウント作成時にあらかじめ地域を選ばせておくことで、自宅周辺に絞って歯医者の検索をするように誘導する</WorkTextBold>C案のデザインを採用しました。
                また、地域をあらかじめ選択しておくことで、『あなたにおすすめの歯医者』の精度も格段に向上して、「検索しなくても、良い歯医者をすぐに見つけられる」という理想のユーザー体験に近づきます。
              </WorkText>

              <div className="flex flex-wrap" style={{border: '2px solid #8AC7CA',margin: '50px 0 30px 0', padding: '30px'}}>
                <KodawariWrap>
                  こだわり２.
                  <div style={{padding: '20px 0 0'}}>
                    <KodawariTitle>検索結果画面</KodawariTitle>
                    <KodawariSubTitle>- 歯医者のプロフィール -</KodawariSubTitle>
                  </div>
                </KodawariWrap>
                <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/%E6%A4%9C%E7%B4%A2_%E8%A9%B3%E7%B4%B0%E7%94%BB%E9%9D%A2.jpg"
                  style={{ maxWidth: '400px', width: '100%', marginLeft:'auto' }}
                />
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                検索結果画面以降のユーザーの行動のプロセスは、<WorkTextBold>良いと思う歯医者を探す→歯医者を決定して予約する</WorkTextBold>の２つであると考えました。
                それを踏まえて、既存予約サービスの検索結果画面を研究した結果、
                <WorkTextBold>A. 検索結果画面から歯医者を探して、そのまま予約ができる</WorkTextBold>と、<WorkTextBold>B. 検索結果画面から医者を探して、詳細画面に画面遷移してから歯医者を決定して予約する</WorkTextBold>の２つが本サービスのユーザー体験の候補として挙げられました。
                どちらの体験が適しているかを以下で検証しました。
              </WorkText>

              <div className="flex flex-center" style={{padding: '5px 0 10px', margin:'auto'}}>
                <UXDetailItemText style={{margin: '0 30px 0 0 '}}>A. 検索結果画面から予約ができる</UXDetailItemText>
                <UXDetailItemText>B. 検索結果画面から予約はできない</UXDetailItemText>
              </div>

              <div className="flex flex-center" style={{padding: '5px 0 10px', color: '#aaa'}}>
                <UXDetailItemText style={{margin: '0 30px 0 0 '}}>(詳細画面は補助的)</UXDetailItemText>
                <UXDetailItemText>(詳細画面は必須)</UXDetailItemText>
              </div>

              <div className="flex flex-center">
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__searched1.png"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
                <UXDetailItem>
                  <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__searched2.png"
                    style={{ width: '100%' }}
                  />
                </UXDetailItem>
              </div>
              <div className="flex flex-center" style={{}}>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>画面遷移が少ない</UIItemTextContents>
                </UXDetailItemTextBlue>
                <UXDetailItemTextBlue>
                  <UXDetailItemTextTitle>メリット</UXDetailItemTextTitle>
                  <UIItemTextContents>面積をとらない</UIItemTextContents>
                </UXDetailItemTextBlue>
              </div>

              <div className="flex flex-center" style={{padding: '20px 0'}}>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>面積をとる</UIItemTextContents>
                </UXDetailItemText>
                <UXDetailItemText>
                  <UXDetailItemTextTitle>デメリット</UXDetailItemTextTitle>
                  <UIItemTextContents>画面遷移がある</UIItemTextContents>
                </UXDetailItemText>
              </div>

              <WorkText style={{padding: '30px 0 30px'}}>
                A案とB案は、<WorkTextBold>A. 検索結果画面で予約が完結できるように十分な情報量を表示する</WorkTextBold>と、<WorkTextBold>『B. 詳細画面で予約することを前提とした必要最低限の情報量にする</WorkTextBold>と言い換えることができます。
                A案とB案を選ぶ上で問題になるのは、<WorkTextBold>A案を採用するなら十分な情報を表示すると情報量が膨大になって検索結果を一覧する上で視認性を損ねないかどうか</WorkTextBold>だと思います。
                今回のアプリでは、ユーザーが歯医者を選ぶ上で必要な情報はさほど多くないので、私はA案を採用しました。
              </WorkText>

              <WorkText style={{padding: '0 0 30px'}}>
                またA案の場合、詳細画面に遷移することがあっても、検索結果画面で十分な情報を見てから遷移しているので、
                詳細画面は情報を確認する程度の用途になり<WorkTextBold>検索結果画面への出戻りは少ない</WorkTextBold>と予想されます。
                なのでA案では結果として何度も画面遷移しないことにも繋がり、より気軽に歯医者を予約できます。
              </WorkText>

              <WorkText style={{padding: '0 0 30px'}}>
                以上の理由から<WorkTextBold>歯医者を探して、そのまま予約ができる</WorkTextBold>ことを検索結果画面の理想のユーザー体験に定めました。
              </WorkText>

              <WorkText style={{padding: '0 0 30px'}}>
                次に歯医者を探して、そのまま予約ができるために必要な情報を列挙して、<WorkTextBold>その目的のために必要な情報か</WorkTextBold>という視点で重要度を評価しました。
                そして重要度の高い情報がユーザーにより届きやすくなるように歯医者のプロフィールをUIデザインした結果が以下になります。
              </WorkText>

              <img alt="coral" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coral__searched__doctor.jpg"
                style={{ width: '100%' }}
              />

              <WorkText style={{padding: '0 0 30px'}}>
                重要度が高い情報は、<WorkTextBold>濃い色で大きいフォントサイズ</WorkTextBold>で表示しました。
                また予約ボタン以外に塗りつぶしを使わないことで、予約ボタンを目立たせて、<WorkTextBold>検索結果画面から予約できることがはっきりとわかる</WorkTextBold>ようにデザインしました。
              </WorkText>

            </UIWrap>
          </UXContetsWrap>

        </CoralContentsUXWrap>
      </React.Fragment>
    )
  }
}

export default CoralContentsUX;
