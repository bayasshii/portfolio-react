import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./workshop.css"

class Workshop extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./foltana" onclick={strageScroll} className="myWork workshop">
          <li style={{ padding: '0 0 20px 10%' }}>
            <div className="myWork__image">
              <img alt="baseconnect" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/officecards.jpg" />
            </div>
            <div className="myWork__text">
              <h1>Office<br/>Renewal<br/>Projects</h1>
              <div><h2>Office Design</h2></div>
              <div><h2>Work Shop</h2></div>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Workshop ;
