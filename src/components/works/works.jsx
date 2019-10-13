import React, { Component } from 'react';
import Work from "./work.jsx";
import "./css/work.css"

class Works extends Component {
  render() {
    const workList = [
      {
        name: 'Baseconnectインターン',
        url: 'baseconnect',
        day: '2018/10 ~ now',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg'
      }
    ]
    return (
      <React.Fragment>
        <div className="myWorks w-100">
          {/*<h2 className="flex flex-center"><span>Works</span></h2>*/}
          <ul className="flex flex-wrap w-100">
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
      </React.Fragment>
    );
  }
}

export default Works ;
