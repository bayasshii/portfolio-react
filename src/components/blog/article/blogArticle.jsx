import React, { Component } from 'react'

class BlogArticle extends Component {
  render() {
    return (
    <div>
      ほげ<br/>
      {this.props.content}
      <br/>ほげ
    </div>
    );
  }
}

export default BlogArticle ;
