import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./sugar.css"

class Sugar extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./sugar" onclick={strageScroll} className="myWork sugar">
          <li>
            <div className="myWork__image">
              aa
            </div>
            <div className="myWork__text">
              <h1>ME310 / SUGAR</h1>
              <div><h2>Needfinding</h2></div>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Sugar ;
