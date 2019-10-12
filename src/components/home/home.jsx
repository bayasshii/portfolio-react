import React, { Component } from 'react'
import Introduce from "./contents/introduce.jsx"
import './css/style.css'
import './css/mobile.css'
import Works from "../works/works.jsx"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-white">
          <div className="width">
            <Works/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home ;
