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
            { property: 'og:image', content: 'https://treeethreee.s3-ap-northeast-1.amazonaws.com/IMG_3260.PNG' },
            { property: 'og:title', content: 'きばやしのポートフォリオ' },
            { property: 'og:description', content: '学生時代に作った作品を掲載しています' },
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
