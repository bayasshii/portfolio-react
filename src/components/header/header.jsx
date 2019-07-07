import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/style.css';

class Header extends Component {
  CurrentPage() {
    const home = document.getElementById("home")
    const works = document.getElementById("works")
    const about = document.getElementById("about")
    let currentUrl = window.location.href
    if ( currentUrl.indexOf('works') !== -1 ) {
      works.classList.add( "currentPage" )
      home.classList.remove( "currentPage" )
      about.classList.remove( "currentPage" )
    }
    else if( currentUrl.indexOf('about') !== -1 ) {
      about.classList.add( "currentPage" )
      home.classList.remove( "currentPage" )
      works.classList.remove( "currentPage" )
    }
    else {
      home.classList.add( "currentPage" ) ;
      works.classList.remove( "currentPage" )
      about.classList.remove( "currentPage" )
    }
  }

  render() {
    return (
      <div className="header flex">
        <ul className="header__menue--others flex">
          <li className="header__menue currentPage" id="home" onClick={this.CurrentPage}><Link to="" className="home">home</Link></li>
          <li className="header__menue" id="works" onClick={this.CurrentPage}><Link to="/works" className="works">works</Link></li>
          <li className="header__menue" id="about" onClick={this.CurrentPage}><Link to="/about" className="about">about</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
