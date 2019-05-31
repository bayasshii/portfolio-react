import React, { Component } from 'react'
import Header from "./components/header/header.jsx"
import TopImage from "./components/topImage/topImage.jsx";
import './css/share.css'
import './css/reset.css'

class App extends Component {
  render() {
    return (
      <div class="contents">
        <header>
          <Header />
        </header>
        <TopImage />
        <main className="mb-20">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
