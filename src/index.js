import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/about/about.jsx";
import Works from "./components/works/works.jsx";
import Blog from "./components/blog/blog.jsx";
import BlogArticles from "./components/blog/article/blogArticle.jsx";
import Home from "./components/home/home.jsx";
import App from './App.js';

//　react-routerの使い方　"https://qiita.com/TsutomuNakamura/items/34a7339a05bb5fd697f2"

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route path="/blog/:article" component={BlogArticles}></Route>
      <Route path="/works" component={Works}></Route>
    </App>
  </Router>,
root);
