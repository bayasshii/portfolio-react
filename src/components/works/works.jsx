import React, { Component } from 'react';
import Work from "./work.jsx";
import "./css/work.css"
import TopImage from "../topImage/topImage.jsx"

class Works extends Component {
  state={
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/topImage.jpg"
  }
  render() {
    const workList = [
      {
        name: 'fortana',
        url: 'fortana',
        day: '2018/01~2018/02',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana1.svg'
      },
      {
        name: 'Workshop with SUTD',
        url: 'sutd__workshop',
        day: '2018/05',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-01.svg'
      },
      {
        name: 'Undulight',
        url: 'undulight',
        day: '2017/11~2017/12',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/undulight-02.svg'
      },
      {
        name: 'foltana',
        url: 'foltana',
        day: '2018/01~2018/02',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg'
      }
    ]
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
        />
        <div className="myWorks bg-gray">
          <div className="width">
            <h2 className="flex flex-center"><span>Work</span></h2>
            <ul className="flex flex-wrap">
              {workList.map((workItem) => {
                return (
                    <Work
                      name = {workItem.name}
                      url = {workItem.url}
                      imageURL = {workItem.imageURL}
                      day = {workItem.day}
                    />
                )
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Works ;
