import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Baseconnect extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-white">
          <div className="work__topImage">
            topImage
          </div>
          <div className="width">
            <div className="work__contents--main">
              <div className="work__contents--background">
                <div className="pb-20">○ 期間</div>
                <div>2018/10 ~ now</div>
              </div>
              <div className="work__contents--background">
                <div className="pb-20">○ URL</div>
                <div>
                  <div className="baseconnect pb-20"><a href="http://company.baseconnect.in/" target="_blank">Baseconnect株式会社HP</a></div>
                  <div className="baseconnect pb-20"><a href="https://baseconnect.in/" target="_blank">企業検索エンジンBaseconnect</a></div>
                  <div className="baseconnect"><a href="https://sales.baseconnect.in/" target="_blank">BaseconnectLIST LP</a></div>
                </div>
              </div>
              <div className="work__contents--background">
                <div className="pb-20">○ 背景</div>
                <div>
                  上記サイトの
                </div>
              </div>
              <div className="backToTop"><Link to="/">back</Link></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Baseconnect ;
