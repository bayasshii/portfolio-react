import React, { Component } from 'react';
import './css/about.css';
import SkillChart from "./skillChart.jsx"

class SkillCharts extends Component {

  render() {

    const ShuffleAry = (ary) => {
      var i = ary.length;
      while(i){
        var j = Math.floor(Math.random()*i);
        var t = ary[--i];
        ary[i] = ary[j];
        ary[j] = t;
      }
      return ary;
    }

    const skillChartList = [
      {
        title: "HTML",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-01.svg"
      },
      {
        title: "Sass",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-02.svg"
      },
      {
        title: "React",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-03.svg"
      },
      {
        title: "Ruby",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-04.svg"
      },{
        title: "Python",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-05.svg"
      },
      {
        title: "Git",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-06.svg"
      },
      {
        title: "Processing",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-07.svg"
      },
      {
        title: "Rails",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChart-08.svg"
      },
      {
        title: "Illustrator",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-01.svg"
      },
      {
        title: "Photoshop",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-02.svg"
      },
      {
        title: "Sketch",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-03.svg"
      },
      {
        title: "Rhinoceros",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-04.svg"
      },
      {
        title: "Jw-cad",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-05.svg"
      },
      {
        title: "ARCHICAD",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-06.svg"
      },
      {
        title: "Office365",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-07.svg"
      },
      {
        title: "Road Bike",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-08.svg"
      },
      {
        title: "Volleyball",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-09.svg"
      },
      {
        title: "Muscle Training",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-10.svg"
      },
      {
        title: "Camera",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-11.svg"
      },
      {
        title: "Shogi",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-12.svg"
      },
      {
        title: "TOEIC",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-15.svg"
      },
      {
        title: "Sweets",
        image: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/skillChartFunny-14.svg"
      }
    ]

    const shuffleSkillChartList = ShuffleAry(skillChartList)

    return (
      <div className="skillChart__container">
        <ul className="flex flex-wrap">
          {
            shuffleSkillChartList.map((skillChartItem) => {
            return (
                <SkillChart
                  title = {skillChartItem.title}
                  percent = {skillChartItem.percent}
                  image = {skillChartItem.image}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default SkillCharts;
