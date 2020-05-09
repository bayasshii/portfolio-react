import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Footer from "./components/footer/footer.jsx"
import './css/share.css'
import './css/reset.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title={'portfolio'}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { property: 'og:image', content: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/forTwitterCard.png' },
            { property: 'og:title', content: 'ポートフォリオ' },
            { property: 'og:description', content: 'きばやしの学生時代の作品集です' },
            { property: 'og:url', content: 'https://www.kibachan.com' }
          ]}
        />
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
