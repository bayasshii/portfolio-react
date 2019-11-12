import React, { Component } from 'react';
import Works from "./works.jsx";
import "./css/work.css"

class WorksList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-white">
          <Works />
        </div>
      </React.Fragment>
    );
  }
}

export default WorksList ;
