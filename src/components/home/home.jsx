import React, { Component } from 'react'
import Introduce from "./contents/introduce.jsx"
import Skills from "./contents/skills.jsx"
import './css/style.css'
import TopImage from "../topImage/topImage.jsx"
import { Link } from "react-router-dom";

class Home extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="bg-white">
          <div className="width">
            <Introduce />
          </div>
        </div>
        <div className="bg-gray">
          <div className="width">
            <Skills />
          </div>
        </div>
        <div className="bg-white">
          <div className="width flex">
            <li className="backToTop f-18 m-25 mbt-50"><Link to="/works">work</Link></li>
            <li className="backToTop f-18 m-25 mbt-50"><Link to="/blog">blog</Link></li>
            <li className="backToTop f-18 m-25 mbt-50"><Link to="/about">about</Link></li>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home ;
