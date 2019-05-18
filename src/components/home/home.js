import React, { Component } from 'react';
import Introduce from "./contents/introduce.js";
import Skills from "./contents/skills.js";
import Works from "./contents/works.js";
import './css/style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Introduce />
        <Skills />
        <Works />
      </div>
    );
  }
}

export default Home ;
