import React, { Component } from 'react'
import './css/style.css'
import './css/mobile.css'
import Works from "../works/works.jsx"
import Mission from "./mission.jsx"
import TopImage from "../topImage/homeTop.jsx"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <TopImage/>
          <Works />
        </div>
      </React.Fragment>
    );
  }
}

export default Home ;
