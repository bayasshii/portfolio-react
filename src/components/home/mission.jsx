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
  font-size: 4.0rem;
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
        <MissionBackground style={{padding:'50px 0 50px'}}>
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
              <span>相手を尊重する</span>
            </MissionTitle>
            <MissionText style={{padding:'0 0 0px'}}>
              チームのメンバーが団結して仕事できると、仕事することが楽しくなるし、必ず良いプロダクトが生まれると信じています。
              <br/>
              そのためには相手の思考のバックグラウンドを知り、相手の価値観や意見を尊重することが必要だと思います。
            </MissionText>

          </MissionWrap>
        </MissionBackground>
      </React.Fragment>
    );
  }
}

export default Mission ;
