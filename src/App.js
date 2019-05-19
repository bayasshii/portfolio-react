import React, { Component } from 'react';
import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Home from "./components/home/home.jsx";
import Works from "./components/works/works.jsx";
import Blog from "./components/blog/blog.jsx";
import './css/share.css';
import './css/reset.css';

class App extends Component {
  render() {
    return (
      <div class="contents">
        <header>
          <Header setTest={this.setTest}/>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
