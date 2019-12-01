import React, { Component } from 'react';
import Work from "./work.jsx";
import Baseconnect from "./baseconnect/baseconnect.jsx"
import Coral from "./coral/coral.jsx"
import Photal from "./photal/photal.jsx"
/*
import Foltana from "./foltana/foltana.jsx"
import Others from "./others/others.jsx"
import Sugar from "./sugar/sugar.jsx"
import "./css/work.css"
*/

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <Work
          to="./baseconnect"
          childComponent={Baseconnect}
        />
        <Work
          to="./coral"
          childComponent={Coral}
        />
        <Work
          to="./photal"
          childComponent={Photal}
        />
        {/*<Baseconnect/>
        <Photal/>
        <Sugar/>
        <Foltana/>
        <Others/>
        */}
      </React.Fragment>
    );
  }
}

export default Works ;
