import React, { Component } from 'react'
import BlogContents from "./blogContents.jsx"
import './css/blog.css'

class Blog extends Component {
  render() {
    const articleList = [
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      },
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      },
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      },
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      },
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      },
      {
        title: 'hogehoge~~',
        time: '2019/05/19',
        type: '備忘録',
        image: 'https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg',
        url: 'foltana4'
      }
    ]
    return (
    <div>
      <ul className="flex flex-wrap">
        {articleList.map((articleItem) => {
          return (
            <BlogContents
              time = {articleItem.time}
              title = {articleItem.title}
              type = {articleItem.type}
              url = {articleItem.url}
              image = {articleItem.image}
            />
          )
        })}
      </ul>
    </div>
    );
  }
}

export default Blog ;
