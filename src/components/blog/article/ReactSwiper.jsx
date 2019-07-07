import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import '../css/swiper.css'
import TopImage from "../../topImage/topImage.jsx"
import { Link } from "react-router-dom";


const SimpleSwiper = () => {
  const params = {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      }
  }

  return(
      <Swiper {...params}>
        <div className="swiper--contents">Slide 1</div>
        <div className="swiper--contents">Slide 2</div>
        <div className="swiper--contents">Slide 3</div>
        <div className="swiper--contents">Slide 4</div>
        <div className="swiper--contents">Slide 5</div>
      </Swiper>
  )
}

class ReactSwiper extends Component {
  state={
    backImageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/backGround__works.svg",
    imageURL: "https://treeethreee.s3-ap-northeast-1.amazonaws.com/myNameLong.svg",
    blogTitle: "React-id-swiperを試してみた"
  }
  render() {
    return (
      <React.Fragment>
        <TopImage
          imageURL={this.state.imageURL}
          backImageURL={this.state.backImageURL}
        />
        <div className="bg-white">
          <div className="width">
            <div className="blogArticle__Contents">
              <div className="blogArticle__title">
                {this.state.blogTitle}
              </div>
            <p>
              React-id-swiperを使ってみた!っていう回です。
              <br />
              今回試そうと思ったきっかけは、インターンに行ってる会社のサイトに使用されていて、
              その周りを触っていると予期せぬ動作が起きたからです。
              １時間くらいコンソールと公式リファレンスをにらめっこしましたが一向に改善しそうになかったので、一度違う環境で試してみるか〜と思いました。
              それではレッツインポートreact-id-swiper！
              <br />
              <SimpleSwiper />
              けど本当はこうしたい！
              <br />
              <img className="swiper-img" alt="react-id-swiper" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2019-05-22+21.39.34.png" />
              (http://kidjp85.github.io/react-id-swiper/より引用)
            </p>
            <div className="backToTop"><Link to="/works">back</Link></div>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default ReactSwiper ;
