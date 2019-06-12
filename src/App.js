import React, { Component } from 'react'
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import './css/share.css'
import './css/reset.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main className="pt-20 pb-20">
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
