import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./photal.css"

class Photal extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./photal" onclick={strageScroll} className="myWork photal">
          <li style={{ padding: '0 0 20px 10%' }}>
            <div className="myWork__image">
              <img alt="photal" src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/photal.jpg" />
            </div>
            <div className="myWork__text">
              <div><h2>Office Design</h2></div>
              <div><h2>Work Shop</h2></div>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Photal ;
