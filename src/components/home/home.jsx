import React, { Component } from 'react';
import Introduce from "./contents/introduce.jsx";
import Skills from "./contents/skills.jsx";
import Works from "./contents/works.jsx";
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
