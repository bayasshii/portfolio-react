import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    return (
        <li className="myWork">
          <Link to={"works/"+this.props.url}>
            <div className="myWork__image">
              <img alt={this.props.name} src={this.props.imageURL} />
            </div>
            <div className="myWork__title">
              {this.props.name}
            </div>
            <div className="myWork__day">
              {this.props.day}
            </div>
          </Link>
        </li>
    );
  }
}

export default Work ;
