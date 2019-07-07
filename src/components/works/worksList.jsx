import React, { Component } from 'react';
import Works from "./works.jsx";
import "./css/work.css"
import TopImage from "../topImage/topImage.jsx"

class WorksList extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
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
            <Works />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorksList ;
