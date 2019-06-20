import React, { Component } from 'react'
import BlogContents from "./blogContents.jsx"
import articleList from "./article/articleList.jsx"
import './css/blog.css'
import TopImage from "../topImage/topImage.jsx"

class Blog extends Component {
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
        <div className="myBlog bg-white">
          <div className="width">
            <h2 className="flex flex-center"><span>Blogs</span></h2>
            <ul className="flex flex-wrap">
              {articleList.map((articleItem) => {
                return (
                  <BlogContents
                    content = {articleItem.content}
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
        </div>
      </React.Fragment>
    );
  }
}

export default Blog ;
