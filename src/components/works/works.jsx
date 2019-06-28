import React, { Component } from 'react';
import Work from "./work.jsx";
import "./css/work.css"
import TopImage from "../topImage/topImage.jsx"

class Works extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround--work.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg"
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
        day: '2018/05 ~4days~',
        imageURL: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/sutd__workshop-01.svg'
      },
      {
        name: 'Undulight',
        url: 'undulight',
        day: '2017/11~2017/12',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/undolight092.jpg'
      },
      {
        name: 'Trivet',
        url: 'trivet',
        day: '2017/10~2017/11',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/S__729092.jpg'
      },
      {
        name: 'ConnectionOffice',
        url: 'office',
        day: '2017/06~2017/07',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/office1.jpg'
      },
      {
        name: '卒業論文',
        url: 'sotsuron',
        day: '2018/10~2019/02',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudaku-gaisou.jpg'
      },
      {
        name: '"近江焼肉すだく" LP',
        url: 'sudaku-lp',
        day: '2018/12 ~3days~',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudakuWebImage.jpg'
      },
      {
        name: '"近江焼肉すだく" 外装',
        url: 'sudaku-gaisou',
        day: '2019/2 ~1week~',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/sudaku-gaisou.jpg'
      },
      {
        name: 'Portfolio',
        url: 'portfolio',
        day: '2019/05~',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/portfolio.png'
      },
      {
        name: '"Jouneyalist" 名刺',
        url: 'jouneyalist',
        day: '2019/04 ~1day~',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/maishi21.jpg'
      },
      {
        name: '高飛びチャレンジ大運動会',
        url: 'takatobi',
        day: '2018/06~2018/07',
        imageURL: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/maishi21.jpg'
      }
    ]
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="myWorks bg-white">
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
