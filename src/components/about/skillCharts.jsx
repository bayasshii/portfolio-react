import React, { Component } from 'react';
import './css/about.css';
import SkillChart from "./skillChart.jsx"

class SkillCharts extends Component {
  render() {
    const skillChartList = [
      {
        title: "HTML",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-01.svg"
      },
      {
        title: "Sass",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-02.svg"
      },
      {
        title: "React",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-03.svg"
      },
      {
        title: "Ruby",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-04.svg"
      },{
        title: "Python",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-05.svg"
      },
      {
        title: "Git",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-06.svg"
      },
      {
        title: "Processing",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-07.svg"
      },
      {
        title: "Rails",
        percent: "★★★★☆",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-08.svg"
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
