import React, { Component } from 'react';
import Work from "./work.jsx";
import "./css/work.css"

class Works extends Component {
  render() {
    const workList = [
      {
        name: 'folta',
        url: 'foltana',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg'
      },
      {
        name: 'foltana',
        url: 'foltana',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg'
      },
      {
        name: 'foltana',
        url: 'foltana',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg'
      },
      {
        name: 'foltana',
        url: 'foltana',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg'
      }
    ]
    return (
      <div className="myWorks">
        <h2 className="flex flex-center"><span>Works</span></h2>
        <ul className="flex flex-wrap">
          {workList.map((workItem) => {
            return (
              <Work
                name = {workItem.name}
                url = {workItem.url}
                imageURL = {workItem.imageURL}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Works ;
