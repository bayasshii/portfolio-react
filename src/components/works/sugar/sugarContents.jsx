import React, { Component } from 'react'

class SugarContents extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="workContents sugarContents">
          <div className="workContents__header flex">
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png" />
          </div>
          <div className="workContents__wrap">
            <h1>ME310 / SUGAR</h1>
            <div className="workContents__text">
              スタンフォード大学のDesign Schoolを中心とした国際的な産学提携プロジェクトです。2019年10月から2020年7月まで活動予定。
            </div>
            <div className="workContents__text">
              日本の学生4人と海外の学生4人で1チームを組んで
            </div>
            <div className="workContents__title">
              <div>Case 1.　</div>
              <h2>Inteview for Needfinding</h2>
            </div>
            <div className="workContents__text">
              こんなことしたよって写真交えながら
            </div>
            <div className="workContents__title">
              <div>Case 2.　</div>
              <h2>Prototyping</h2>
            </div>
            <div className="workContents__text">
              こんなことしたよって写真交えながら
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SugarContents ;
