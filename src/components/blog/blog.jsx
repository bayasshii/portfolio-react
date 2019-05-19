import React, { Component } from 'react'
import blogContents from "./contents/blogContents.jsx"

class Blog extends Component {
  render() {
    return (
    <div>
      ブログ
      <blogContents />
    </div>
    );
  }
}

export default Blog ;
