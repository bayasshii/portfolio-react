import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./baseconnect.css";

class BaseconnectContents extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <div className="baseconnectContents">
          <div className="baseconnectContents__header flex">
            <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png" />
          </div>
          <div className="baseconnectContents__main">
            <h1>Baseconnect InternShip</h1>
            <div>
              2018年10月~現在まで勤務しているBaseconnect incでの活動を紹介します。
            </div>
            <Link to="./" onclick={strageScroll} className="myWork baseconnect">
              aa
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BaseconnectContents ;
