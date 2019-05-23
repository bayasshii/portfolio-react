import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/about/about.jsx";
import Works from "./components/works/works.jsx";
import Foltana from "./components/works/works/foltana.jsx";

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
        path="/works/foltana"
        component={Foltana}
        >
      </Route>
      <Route
        path="/works/react.swiper"
        component={ReactSwiper}
        >
      </Route>
      <Route
        path="/works/article3"
        component={Article3}
        >
      </Route>
      {/*ワークのURLここまで*/}
    </App>
  </Router>
  ,root);
