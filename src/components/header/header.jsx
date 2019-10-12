import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/style.css';

class Header extends Component {
  ChangeCurrentPage(){
    let currentUrl = this.props.currentPage

    const homeClass = document.getElementById("home")
    const aboutClass = document.getElementById("about")

    if( currentUrl.indexOf('about') !== -1 ) {
      aboutClass.classList.add( "currentPage" )
      homeClass.classList.remove( "currentPage" )
    }
    else {
      homeClass.classList.add( "currentPage" )
      aboutClass.classList.remove( "currentPage" )
    }
  }

  // TODO: ダーティな上にDidMount使ってる。要修正。
  componentDidMount(){
    this.ChangeCurrentPage()
  }
  componentDidUpdate(prevProps, prevState){
    this.ChangeCurrentPage()
  }

  render() {

    return (
      <div className="header flex">
        <ul className="header__menue--others flex">
          <li className="header__menue" id="home"><Link to="" className="home">home</Link></li>
          {/*<li className="header__menue" id="works"><Link to="/works" className="works">works</Link></li>*/}
          <li className="header__menue" id="about"><Link to="/about" className="about">about</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
