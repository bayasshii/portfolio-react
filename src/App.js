import React, { Component } from 'react'
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import './css/share.css'
import './css/reset.css'
import TopImage from "./topImage.jsx"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header
            currentPage={this.props.currentPage}
          />
        </header>
        <TopImage/>
        <main class="pt-70">
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
