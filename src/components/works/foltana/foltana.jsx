import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./foltana.css"

class Foltana extends Component {
  render() {
    const strageScroll =()=>{
      var scrollPos= document.scrollTop();
      localStorage.setItem('key',scrollPos);
    }
    return (
      <React.Fragment>
        <Link to="./foltana" onclick={strageScroll} className="myWork foltana">
          <li>
            <div className="myWork__image">
              <img alt={this.props.name} src="https://treeethreee.s3-ap-northeast-1.amazonaws.com/fortana.jpg" />
            </div>
            <div className="myWork__text">
              <h1>foltana(全面画像で覆う？)</h1>
              <div><h2>Archtecture</h2></div>
              <div><h2>Programming</h2></div>
            </div>
          </li>
        </Link>
      </React.Fragment>
    );
  }
}

export default Foltana ;
