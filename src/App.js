import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import './css/share.css'
import './css/reset.css'
import * as color from "./css/color.js"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title={'きばやしのポートフォリオ'}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { property: 'og:image', content: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/portfolioForTwitter.jpg' },
            { property: 'og:title', content: 'きばやしのポートフォリオ' },
            { property: 'og:description', '学生時代に作った作品を載せています' },
            { property: 'og:url', content: 'https://kibachan.com' }
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
