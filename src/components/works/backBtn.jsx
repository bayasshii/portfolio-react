import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BackBtn extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 1000) // 一番上まで戻す
    }
  }
  render() {
    const backToTop = () => {
      var pos = localStorage.getItem('key');
      window.animate({ scrollTo: pos }, 'slow');
      localStorage.clear();
    }
    return (
        <div className="backToTop">
          <Link to="" onClick={backToTop}>
            back
          </Link>
        </div>
    );
  }
}

export default BackBtn ;
