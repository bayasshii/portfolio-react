import React, { Component } from 'react'
import Introduce from "./contents/introduce.jsx"
import Skills from "./contents/skills.jsx"
import './css/style.css'
import TopImage from "../topImage/topImage.jsx"

class Home extends Component {
  state={
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/topImage.jpg"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
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
      </React.Fragment>
    );
  }
}

export default Home ;
