import React, { Component } from 'react'
import BlogContents from "./blogContents.jsx"
import articleList from "./article/articleList.jsx"
import './css/blog.css'
import TopImage from "../topImage/topImage.jsx"

class Blog extends Component {
  state={
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/blog--top.jpg"
  }
  render() {
    return (
    <div className="myBlog">
      <TopImage
        imageURL={this.state.imageURL}
      />
      <div className="bg-gray">
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
    </div>
    );
  }
}

export default Blog ;
