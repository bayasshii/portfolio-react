import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import '../css/swiper.css'

const SimpleSwiper = () => {
  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
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
  render() {
    return (
    <div className="blogArticle__Contents">
      React-id-swiperを使ってみたっていう回です。
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
    </div>
    );
  }
}

export default ReactSwiper ;
