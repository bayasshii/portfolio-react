import React, { Component } from 'react'
import { Link } from "react-router-dom"

class BlogContents extends Component {
  render() {
    return (
    <div className="blogContents">
      <div className="blogContents__photo">
        <Link to={"blog/"+this.props.url}>
          <img alt="header" src={this.props.image} />
        </Link>
        <div className="blogContents__type">
          {this.props.type}
        </div>
      </div>
      <div className="blogContents__body">
        <Link to={"blog/"+this.props.url}>
          <h2 className="blogContents__title">
            {this.props.title}
          </h2>
        </Link>
        <p className="blogContents__time">
          {this.props.time}
        </p>
      </div>
    </div>
    );
  }
}

export default BlogContents ;
