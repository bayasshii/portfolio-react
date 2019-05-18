import React, { Component } from 'react';
import Header from "./components/header/header.js";
import About from "./components/about/about.js";
import Home from "./components/home/home.js";
import Works from "./components/works/works.js";
import Blog from "./components/blog/blog.js";
import './css/share.css';
import './css/reset.css';

class App extends Component {
  constructor(props) {
   super(props);
   // ページ偏移の参考 "https://teratail.com/questions/112564"
   // 要修正〜リロードするとうまいこといかん〜
   this.state = {currentPage: "home"};
   this.setTest = this.setTest.bind(this)
  }
  //子要素のpropsからcurrentPageを変更
  setTest(value){
    this.setState({
      currentPage: value
    })
  }
  render() {
    //Contentの表示の切り替え
    let Content = (() => {
      switch(this.state.currentPage) {
        case "about":
          return <About/>;
        case "blog":
          return <Blog/>;
        case "works":
          return <Works/>;
        case "home":
          return <Home/>;
        default:
          return null;
        }
    })

    return (
      <div class="contents">
        <header>
          <Header setTest={this.setTest}/>
        </header>
        <main>
          <Content />
        </main>
      </div>
    );
  }
}

export default App;
