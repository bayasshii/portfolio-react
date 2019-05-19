import React, { Component } from 'react'
import BlogContents from "./blogContents.jsx"
import './css/blog.css'

class Blog extends Component {
  render() {
    return (
    <div>
      <ul className="flex flex-wrap">
        <BlogContents />
        <BlogContents />
        <BlogContents />
        <BlogContents />
        <BlogContents />
        <BlogContents />
        <BlogContents />
        <BlogContents />
      </ul>
    </div>
    );
  }
}

export default Blog ;
