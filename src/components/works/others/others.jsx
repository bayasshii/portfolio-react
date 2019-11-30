import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./others.css"

class Others extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./foltana" onclick={strageScroll} className="myWork others">
          <li>

          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Others ;
