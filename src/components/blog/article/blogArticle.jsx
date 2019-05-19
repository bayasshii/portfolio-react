import React, { Component } from 'react'

class BlogArticles extends Component {
  pushToEachBlog = () => {
    this.props.setTest('some-other-articles')
  }
  render() {
    return (
    <div className="blogContents">
      {/* idを渡して記事を読み込む */}
      いえい
    </div>
    );
  }
}

export default BlogArticles ;
