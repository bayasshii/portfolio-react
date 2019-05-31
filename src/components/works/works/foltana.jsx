import React, { Component } from 'react'
import FortanaSwiper from "./fortanaSwiper.jsx"

class Foltana extends Component {
  render() {
    return (
      <div className="foltana">
        <div className="foltana__text">
          fortanaの説明(デザイン考えやな)
        </div>
        <div className="foltana__img">
          <FortanaSwiper />
        </div>
      </div>
    );
  }
}

export default Foltana ;
