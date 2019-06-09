import React, { Component } from 'react'
import Header from "./components/header/header.jsx"
import './css/share.css'
import './css/reset.css'

class App extends Component {
  render() {
    return (
      <div class="contents">
        <header>
          <Header />
        </header>
        <main className="mb-20">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
