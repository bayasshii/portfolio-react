import React, { Component } from 'react';
import './css/about.css';

class SkillChart extends Component {
  render() {
    return (
      <li className="skillChart">
        <div>
          <div className="skillChart--image"><img alt="skill" src={this.props.image} /></div>
          <div className="skillChart--title">{this.props.title}</div>
        </div>
      </li>
    )
  }
}

export default SkillChart;
