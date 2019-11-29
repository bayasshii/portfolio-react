import React, { Component } from 'react';
import './homeTop.css'

class TopImage extends Component {
  render() {
    return (
    <div className="homeTop">
      <div class="homeTop__mainText">
        <h1 className="colorUnderline">I'm <span>Masaya Kibayashi</span>,</h1>
        <br/>
        <h2 className="colorUnderline">Designer<span>,</span> MarkupEngineer<span>,</span> & More !</h2>
      </div>
    </div>
    );
  }
}

export default TopImage ;
