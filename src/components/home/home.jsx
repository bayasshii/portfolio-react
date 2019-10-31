import React, { Component } from 'react'
import './css/style.css'
import './css/mobile.css'
import Works from "../works/works.jsx"
import TopImage from "../topImage/homeTop.jsx"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <TopImage/>
        <div className="bg-white">
          <Works />
        </div>
      </React.Fragment>
    );
  }
}

export default Home ;
