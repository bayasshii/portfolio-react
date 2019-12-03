import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const CoralContentsStakeholderWrap = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  display: flex;
`;

const CoralContentsStakeholderDoctor = styled.div`
  width: 300px;
`
const CoralContentsStakeholderParent = styled.div`
  width: 300px;
`

const CoralContentsStakeholderTitle = styled.div`
  font-size: 2rem;
  padding-top: 20px;
`

const CoralContentsStakeholderImage = styled.div`
  padding: 20px;
  border: 3px solid ${color.baseText__thin};
  border-radius: 10px;
`

const CoralContentsStakeholderPain = styled.div`
  border: 2px solid #ea5d67;
  border-radius: 10px;
  width: 100%;
  color: #ea5d67;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px 0;
  margin: 20px auto;
`

const CoralContentsStakeholderSolution = styled.div`
  background: ${color.coralGradient};
  border-radius: 10px;
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px 0;
  margin: 20px auto;
`

const CoralContentsStakeholderHeading = styled.div`
  padding: 40px;
`

const CoralContentsStakeholdertriangle = styled.div`
  width: 0;
  height: 0;
  margin: auto;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 20px solid ${color.baseText__thin};
`

class CoralContentsStakeholder extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsStakeholderWrap>

          <CoralContentsStakeholderParent style={{ margin: '0 60px 0 0' }} >
            <CoralContentsStakeholderImage>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/parent.png"
                style={{ width: '150px' }}
              />
              <CoralContentsStakeholderTitle>親</CoralContentsStakeholderTitle>
            </CoralContentsStakeholderImage>
            <CoralContentsStakeholderPain>子供の歯が心配...</CoralContentsStakeholderPain>
            <CoralContentsStakeholderPain>子供が歯科医を怖がる...</CoralContentsStakeholderPain>
            <CoralContentsStakeholderPain>仕事で歯科医に行く時間がない...</CoralContentsStakeholderPain>
            <CoralContentsStakeholdertriangle/>
            <CoralContentsStakeholderSolution>気軽に手軽に検診できるシステム</CoralContentsStakeholderSolution>
          </CoralContentsStakeholderParent>

          {/*
            一旦コメントアウト
          <CoralContentsStakeholderHeading>
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralLogo.png"
              style={{ width: '300px' }}
            />
          </CoralContentsStakeholderHeading>
          */}

          <CoralContentsStakeholderDoctor>
            <CoralContentsStakeholderImage>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/doctor.png"
                style={{ width: '150px' }}
              />
              <CoralContentsStakeholderTitle>歯科医</CoralContentsStakeholderTitle>
            </CoralContentsStakeholderImage>
            <CoralContentsStakeholderPain>かかりつけ医に選んでほしい...</CoralContentsStakeholderPain>
            <CoralContentsStakeholderPain>定期的に通院してほしい...</CoralContentsStakeholderPain>
            <CoralContentsStakeholderPain>田舎なので患者が少ない...</CoralContentsStakeholderPain>
            <CoralContentsStakeholdertriangle/>
            <CoralContentsStakeholderSolution>患者を定期的に呼べるシステム</CoralContentsStakeholderSolution>
          </CoralContentsStakeholderDoctor>




        </CoralContentsStakeholderWrap>
      </React.Fragment>
    )
  }
}

export default CoralContentsStakeholder;
