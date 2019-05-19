import React, { Component } from 'react'
import blogContents from "./blogContents.jsx"
import './css/blog.css'

class Blog extends Component {
  render() {
    return (
    <div>
      <ul>
        <blogContents />
      </ul>
    </div>
    );
  }
}

export default Blog ;
