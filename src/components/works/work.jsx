import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <Link to="/" onclick={strageScroll} className="myWork">
        <li>
          <div className="myWork__image">
            <img alt={this.props.name} src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/beseconnect_logo.png" />
            <img alt={this.props.name} src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect_pc.png" />
          </div>
          <div className="myWork__text">
            <h1>Baseconnect<br/>Internship</h1>
            <h2>{this.props.tag}</h2>
          </div>
        </li>
      </Link>
    );
  }
}

export default Work ;
