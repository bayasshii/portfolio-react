import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './css/style.css';

class Header extends Component {
  constructor(props) {
   super(props);
   this.handleToAboutPage = this.handleToAboutPage.bind(this);
   this.handleToHomePage = this.handleToHomePage.bind(this);
   this.handleToBlogPage = this.handleToBlogPage.bind(this);
   this.handleToWorksPage = this.handleToWorksPage.bind(this);
  }

  handleToAboutPage(){
    this.props.setTest('about')
  }
  handleToHomePage(){
    this.props.setTest('home')
  }
  handleToBlogPage(){
    this.props.setTest('blog')
  }
  handleToWorksPage(){
    this.props.setTest('works')
  }

  render() {
    return (
      <div className="header">
        <div className="header__title">
          Masaya Kibayashi
        </div>
        <div>
          <ul className="header__menues flex flex-end">
            <li className="header__menue" onClick={()=>{this.handleToHomePage()}}><Link to="">home</Link></li>
            <li className="header__menue" onClick={()=>{this.handleToWorksPage()}}><Link to="works">works</Link></li>
            <li className="header__menue" onClick={()=>{this.handleToBlogPage()}}><Link to="blog">blog</Link></li>
            <li className="header__menue" onClick={()=>{this.handleToAboutPage()}}><Link to="about">about</Link></li>
          </ul>
        </div>
        <img alt="header" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/top-image.svg" />
      </div>
    );
  }
}

export default Header;
