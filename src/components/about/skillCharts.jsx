import React, { Component } from 'react';
import './css/about.css';
import SkillChart from "./skillChart.jsx"

class SkillCharts extends Component {
  render() {
    const skillChartList = [
      {
        title: "HTML",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },
      {
        title: "Sass",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },
      {
        title: "React",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },
      {
        title: "Ruby",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },{
        title: "Python",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },
      {
        title: "Git",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      },{
        title: "Processing(Java)",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/HTML5_logo.png"
      }

    ]
    return (
      <div className="skillChart__container">
        <ul className="flex flex-wrap">
          {skillChartList.map((skillChartItem) => {
            return (
                <SkillChart
                  title = {skillChartItem.title}
                  percent = {skillChartItem.percent}
                  image = {skillChartItem.image}
                />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SkillCharts;
