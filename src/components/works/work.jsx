import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
        <li className="myWork w-100">
          {/*
          <Link to={"works/"+this.props.url} onclick={strageScroll}>
            <div className="myWork__image">
              <img alt={this.props.name} src={this.props.imageURL} />
            </div>
            <div className="myWork__title">
              {this.props.name}
            </div>
            <div className="myWork__day">
              {this.props.day}
            </div>
          </Link>
          */}
          <div className="w-100">
            <div>
              Baseconnect
            </div>
            <img src="https://bayashi.s3-ap-northeast-1.amazonaws.com/baseconnect_pc.png" />
          </div>
        </li>
    );
  }
}

export default Work ;
