import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

import WorkTitle from "../workContents/workTitle";
import WorkSubTitle from "../workContents/workSubTitle";
import WorkWrap from "../workContents/workWrap";
import WorkText from "../workContents/workText";
import WorkHeading from "../workContents/workHeading";
import WorkMenuComponent from "../workContents/workMenuComponent";
import WorkUnderLine from "../workContents/workUnderLine";
import WorkPoint from "../workContents/workPoint";


const CoralContentsBusinnesModelImageWrap = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  padding: 30px 0;
`

const CoralContentsBusinnesModelDoctor = styled.div`
`

const CoralContentsBusinnesModelCoral = styled.div`
  padding-top: 25px;
  padding-right: 30px;
`

const CoralContentsBusinnesModelParent = styled.div`
  padding-right: 30px;
`

const CoralContentsBusinnesModelImage = styled.div`
`

const CoralContentsBusinnesModelArrowWrap = styled.div`
  position: relative;
  width: 230px;
`

const CoralContentsBusinnesModelArrowToRight = styled.div`
  position: relative;
  width: 130px;
  height: 10px;
  background: ${color.coralGradient};
  margin: 0 40px 40px;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -20px;
    border-left: 20px solid ${color.coralBlue};
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
`

const CoralContentsBusinnesModelArrowToLeft = styled(CoralContentsBusinnesModelArrowToRight)`
  margin: 0 60px 0 40px;
  &::before {
    left: -20px;
    right: auto;
    border-left: none;
    border-right: 20px solid ${color.coralGreen};
  }
`

const CoralContentsBusinnesModelText = styled.div`
  position: absolute;
  font-size: 1.7rem;
  font-weight: 400;
`

const CoralContentsBusinnesModelLT = styled(CoralContentsBusinnesModelText)`
  top: -10px;
  left: 40px;
`

const CoralContentsBusinnesModelLB = styled(CoralContentsBusinnesModelText)`
  bottom: -15px;
  left: 60px;
`

const CoralContentsBusinnesModelRT = styled(CoralContentsBusinnesModelText)`
  top: -10px;
  left: 30px;
`

const CoralContentsBusinnesModelRB = styled(CoralContentsBusinnesModelText)`
  bottom: -15px;
  left: 30px;
`

class CoralContentsBusinnesModel extends Component {
  render() {
    return (
      <React.Fragment>
        <CoralContentsBusinnesModelImageWrap>

          <CoralContentsBusinnesModelParent>
            <CoralContentsBusinnesModelImage>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/parent.png"
                style={{ width: '100px' }}
              />
            </CoralContentsBusinnesModelImage>
          </CoralContentsBusinnesModelParent>

          <CoralContentsBusinnesModelArrowWrap>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '-20px'
            }}
              >
              <CoralContentsBusinnesModelArrowToRight/>
            </div>
            <div style={{
              position: 'absolute',
              top: '80px',
            }}
              >
                <CoralContentsBusinnesModelArrowToLeft/>
              </div>
              <CoralContentsBusinnesModelLT>予約・支払い</CoralContentsBusinnesModelLT>
              <CoralContentsBusinnesModelLB>診断結果</CoralContentsBusinnesModelLB>
          </CoralContentsBusinnesModelArrowWrap>

          <CoralContentsBusinnesModelCoral>
            <CoralContentsBusinnesModelImage>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/coralLogo.png"
                style={{ width: '200px' }}
              />
            </CoralContentsBusinnesModelImage>
          </CoralContentsBusinnesModelCoral>

          <CoralContentsBusinnesModelArrowWrap>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '-20px'
            }}
              >
                <CoralContentsBusinnesModelArrowToRight/>
              </div>
              <div style={{
                position: 'absolute',
                top: '80px',
              }}
              >
                <CoralContentsBusinnesModelArrowToLeft/>
              </div>
              <CoralContentsBusinnesModelRT>予約管理・報酬</CoralContentsBusinnesModelRT>
              <CoralContentsBusinnesModelRB>診断結果・手数料</CoralContentsBusinnesModelRB>
          </CoralContentsBusinnesModelArrowWrap>

          <CoralContentsBusinnesModelDoctor>
            <CoralContentsBusinnesModelImage>
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/doctor.png"
                style={{ width: '100px' }}
              />
            </CoralContentsBusinnesModelImage>
          </CoralContentsBusinnesModelDoctor>
        </CoralContentsBusinnesModelImageWrap>
        <WorkText style={{padding: '30px 0 0'}}>
          オンライン診断アプリCoralのビジネスモデルを考えました。メルカリなどの商品の仲介によって利益を上げている会社を参考にしました。
          1回の診断で手数料として料金の10%を歯科医から徴収するので、1回の診断当たり約150円の収入が上がります。
        </WorkText>
      </React.Fragment>
    )
  }
}

export default CoralContentsBusinnesModel;
