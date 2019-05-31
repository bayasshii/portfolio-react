import React, { Component } from 'react'
import Introduce from "./contents/introduce.jsx"
import Skills from "./contents/skills.jsx"
import './css/style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Introduce />
        <Skills />
      </div>
    );
  }
}

export default Home ;
