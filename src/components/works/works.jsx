import React, { Component } from 'react';
import Baseconnect from "./baseconnect/baseconnect.jsx";
import Workshop from "./workshop/workshop.jsx"
import Foltana from "./foltana/foltana.jsx"
import Others from "./others/others.jsx"

import "./css/work.css"

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="myWorks">
          <Baseconnect/>
          <Workshop/>
          <Foltana/>
          <Others/>
        </div>
      </React.Fragment>
    );
  }
}

export default Works ;
