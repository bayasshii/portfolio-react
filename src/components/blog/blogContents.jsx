import React, { Component } from 'react'
import { withRouter } from 'react-router';

class BlogContents extends Component {
  pushToEachBlog = () => {
    this.props.setTest('some-other-articles')
  }
  render() {
    return (
    <div className="blogContents">
      <div className="blogContents__photo" onClick={this.pushToEachBlog}>
        <img alt="header" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg" />
        <div className="blogContents__type">
          備忘録
        </div>
      </div>
      <div className="blogContents__body" onClick={this.pushToEachBlog}>
        <h2 className="blogContents__title">タイトルダミータイトルダミータイトルダミータイトルダミー</h2>
        <p className="blogContents__time">2019/05/19</p>
      </div>
    </div>
    );
  }
}

export default withRouter(BlogContents) ;
