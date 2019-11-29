import React, { Component } from 'react';
import Baseconnect from "./baseconnect/baseconnect.jsx";
import Photal from "./photal/photal.jsx"
import Foltana from "./foltana/foltana.jsx"
import Others from "./others/others.jsx"
import Sugar from "./sugar/sugar.jsx"

import "./css/work.css"

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="myWorks">
          <Baseconnect/>
          <Photal/>
          <Sugar/>
          <Foltana/>
          <Others/>
        </div>
      </React.Fragment>
    );
  }
}

export default Works ;
