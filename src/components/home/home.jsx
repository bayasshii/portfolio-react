import React, { Component } from 'react'
import Introduce from "./contents/introduce.jsx"
import Skills from "./contents/skills.jsx"
import './css/style.css'
import TopImage from "../topImage/topImage.jsx"

class Home extends Component {
  state={
    imageURL: "https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
        />
        <Introduce />
        <Skills />
      </React.Fragment>
    );
  }
}

export default Home ;
