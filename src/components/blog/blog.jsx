import React, { Component } from 'react'
import BlogContents from "./blogContents.jsx"
import articleList from "./article/articleList.jsx"
import './css/blog.css'

class Blog extends Component {
  render() {
    return (
    <div>
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
    );
  }
}

export default Blog ;
