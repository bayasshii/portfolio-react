import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop.jsx"
import ChangeCurrentHeader from "./changeCurrentHeader.jsx"
import About from "./components/about/about.jsx";
import BaseconnectContents from "./components/works/baseconnect/baseconnectContents.jsx";
import CoralContents from "./components/works/coral/coralContents.jsx";
import PhotalContents from "./components/works/photal/photalContents.jsx";
/*
import FoltanaContents from "./components/works/foltana/foltanaContents.jsx";
import SugarContents from "./components/works/sugar/sugarContents.jsx";
import PhotalContents from "./components/works/photal/photalContents.jsx";
*/
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
          {/*ワークのURL*/}
          <Route
            path="/baseconnect"
            component={BaseconnectContents}
          >
          </Route>
          <Route
            path="/coral"
            component={CoralContents}
          >
          </Route>
          <Route
            path="/photal"
            component={PhotalContents}
          >
          </Route>
          {/*
          <Route
            path="/sugar"
            component={SugarContents}
          >
          </Route>
          */}
          {/*ワークのURLここまで*/}
        </App>
      </ChangeCurrentHeader>
    </ScrollToTop>
  </Router>
  ,root);
