import React, { Component } from 'react'
import './css/style.css'
import './css/mobile.css'

import styled from 'styled-components'
import * as color from "../../css/color.js"

const MissionBackground = styled.div`
  z-index: 1;
  position: relative;
  padding: 0 0 100px;
  background: #fff
`;


const MissionWrap = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const MissionWrapTitle = styled.div`
  text-align: left;
  font-size: 3.0rem;
  color: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    font-size: 3rem;
  }
`;

const MissionWrapTitleUnder = styled.div`
  width: 70px;
  height: 3px;
  margin-top: 20px;
  background: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    margin-left: 20px
  }
`;

const VisionWrapTitleUnder = styled.div`
  width: 50px;
  height: 3px;
  margin-top: 30px;
  background: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    margin-left: 20px
  }
`;

const MissionTitle = styled.div`
  font-size: 2.2rem;
  line-height: 3.5rem;
  font-weight: 400;
  letter-spacing: 2px
  & span {
    font-size: 2.7rem;
    font-weight: 600;
  }
`;

const MissionText = styled.div`
  font-size: 1.5rem;
  line-height: 3.5rem;
  font-weight: 400;
  color: ${color.baseText__thin};
`;


class Mission extends Component {
  render() {
    return (
      <React.Fragment>
        <MissionBackground style={{padding:'100px 0 100px'}}>
          <MissionWrap>
            <MissionWrapTitle>Mission</MissionWrapTitle>
            <MissionWrapTitleUnder/>
            <MissionTitle style={{padding:'40px 0 0'}}>
              <span>働くをもっともっと楽しく</span>
            </MissionTitle>
            <MissionText style={{padding:'20px 0 100px'}}>
              僕の知らないところで働く人も、僕の周りで働く人も、僕自身も、みんなが今よりも楽しく働けるような世界にしたいです。
            </MissionText>

            <MissionWrapTitle>Value</MissionWrapTitle>
            <VisionWrapTitleUnder/>

            <MissionTitle style={{padding:'40px 0 20px'}}>
              <span>自ら楽しむ</span>
            </MissionTitle>
            <MissionText style={{padding:'0 0 0px'}}>
              楽しんで働いている人の周りで働いていると、自然と周りの人も楽しくなります。
              <br/>
              また楽しく働くことで生産性が上がり、結果としてより多くの人の「働く」を楽しくできます。
            </MissionText>

            <MissionTitle style={{padding:'40px 0 20px'}}>
              <span>価値観を尊重する</span>
            </MissionTitle>
            <MissionText style={{padding:'0 0 0px'}}>
              相手の思考のバックグラウンドを知り、相手の価値観を尊重することで、チームの団結を促進するデザイナーになりたいです。
              <br/>
              チームのメンバーが職種の垣根を超えて団結できると、仕事が楽しくなるし、必ず良いプロダクトが生まれると信じています。
            </MissionText>

            <MissionTitle style={{padding:'40px 0 20px'}}>
              <span>まずやってみる</span>
            </MissionTitle>
            <MissionText style={{padding:'0 0 0px'}}>
              日々に変化を起こしてこそ、新しい刺激を得られて楽しく働くことができます。
              <br/>
              また、じっとしていても世界を変えることはできません。
            </MissionText>


          </MissionWrap>
        </MissionBackground>
      </React.Fragment>
    );
  }
}

export default Mission ;
