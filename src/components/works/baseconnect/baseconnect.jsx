import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./baseconnect.css";

class Baseconnect extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./baseconnect" onclick={strageScroll} className="myWork baseconnect">
          <li>
            <div className="myWork__image">
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png" />
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect_pc.png" />
            </div>
            <div className="myWork__text">
              <h1>Baseconnect<br/>Internship</h1>
              <h2>Cording</h2>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Baseconnect ;
