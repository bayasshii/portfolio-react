import React, { Component } from 'react'
import './css/style.css'
import './css/mobile.css'
import Works from "../works/works.jsx"
import Mission from "./mission.jsx"
import TopImage from "../topImage/homeTop.jsx"
import About from "../about/about.jsx"
import Header from "../header/header.jsx"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TopImage/>
        <Works />
        <About />
      </React.Fragment>
    );
  }
}

export default Home ;
