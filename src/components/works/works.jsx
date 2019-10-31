import React, { Component } from 'react';
import Work from "./work.jsx";
import "./css/work.css"

class Works extends Component {
  render() {
    const workList = [
      {
        name: 'Baseconnect',
        tag: 'Cording',
        utl: 'baseconnect',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg'
      },
      {
        name: 'Office Renewal PJ',
        tag: 'Research',
        utl: 'office',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg'
      },
      {
        name: 'Workshop with SUTD',
        tag: 'Scraping & Analysis',
        utl: 'sutd',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg'
      },
      {
        name: 'Hobby Blog',
        tag: 'Writting',
        utl: 'blog',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/baseconnect.jpg'
      }
    ]
    return (
      <React.Fragment>
        <div className="myWorks">
          {/*<h2 className="flex flex-center"><span>Works</span></h2>*/}
          <ul className="flex flex-wrap w-100">
            {workList.map((workItem) => {
              return (
                <Work
                  name = {workItem.name}
                  tag = {workItem.tag}
                  url = {workItem.utl}
                  imageURL = {workItem.imageURL}
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
