import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop.jsx"
import About from "./components/about/about.jsx";

import Works from "./components/works/works.jsx";
import Foltana from "./components/works/works/foltana.jsx";
import SUTD__workshop from "./components/works/works/sutd__workshop.jsx";
import Undulight from "./components/works/works/undulight.jsx";

import Blog from "./components/blog/blog.jsx";
import Article from "./components/blog/article/article1.jsx";
import ReactSwiper from "./components/blog/article/ReactSwiper.jsx";
import Article3 from "./components/blog/article/article3.jsx";

import Home from "./components/home/home.jsx";
import App from './App.js';

// react-routerの使い方　"https://qiita.com/TsutomuNakamura/items/34a7339a05bb5fd697f2"

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <ScrollToTop>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>

      <Route exact path="/blog" component={Blog}></Route>
      {/*ブログのURL*/}
      <Route
        path="/blog/article1"
        component={Article}
        >
      </Route>
      <Route
        path="/blog/react.swiper"
        component={ReactSwiper}
        >
      </Route>
      <Route
        path="/blog/article3"
        component={Article3}
        >
      </Route>
      {/*ブログのURLここまで*/}

      <Route exact path="/works" component={Works}></Route>
      {/*ワークのURL*/}
      <Route
        path="/works/fortana"
        component={Foltana}
        >
      </Route>
      <Route
        path="/works/sutd__workshop"
        component={SUTD__workshop}
        >
      </Route>
      <Route
        path="/works/undulight"
        component={Undulight}
        >
      </Route>
      {/*ワークのURLここまで*/}
    </App>
  </ScrollToTop>
  </Router>
  ,root);
