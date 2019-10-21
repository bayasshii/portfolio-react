import React, { Component } from 'react'
import HomeTop from "./contents/homeTop.jsx"
import './css/style.css'
import './css/mobile.css'
import Works from "../works/works.jsx"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <HomeTop />
        <div className="bg-white">
          <Works />
        </div>
      </React.Fragment>
    );
  }
}

export default Home ;
