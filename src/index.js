import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop.jsx"
import ChangeCurrentHeader from "./changeCurrentHeader.jsx"
import About from "./components/about/about.jsx";

import WorksList from "./components/works/worksList.jsx";
import Baseconnect from "./components/works/works/baseconnect.jsx";


import Home from "./components/home/home.jsx";
import App from './App.js';

// react-routerの使い方　"https://qiita.com/TsutomuNakamura/items/34a7339a05bb5fd697f2"

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <ScrollToTop>
      <ChangeCurrentHeader>
        <App>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>

          <Route exact path="/works" component={WorksList}></Route>
          {/*ワークのURL*/}
          <Route
            path="/works/baseconnect"
            component={Baseconnect}
          >
          </Route>
          {/*ワークのURLここまで*/}
        </App>
      </ChangeCurrentHeader>
    </ScrollToTop>
  </Router>
  ,root);
