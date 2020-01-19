import React, { Component } from 'react'
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import './css/share.css'
import './css/reset.css'
import * as color from "./css/color.js"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header
            currentPage={this.props.currentPage}
          />
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
