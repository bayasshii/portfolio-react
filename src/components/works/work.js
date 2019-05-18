import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Work extends Component {
  render() {
    return (
        <li className="myWork">
          <Link>
            <div className="myWork__title">{this.props.name}</div>
            <div className="myWork__image"><img alt={this.props.image} src={this.props.image} /></div>
          </Link>
        </li>
    );
  }
}

export default Work ;
