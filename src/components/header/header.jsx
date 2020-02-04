import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import * as color from "../../css/color.js"

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

  render() {
    const Point1 = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height:1px;
    `;

    const Point2 = styled.div`
      position: absolute;
      top: 1800px;
      left: 0;
      width: 1px;
      height:1px;
    `;

    const Point3 = styled.div`
      position: absolute;
      top: 3600px;
      left: 0;
      width: 1px;
      height:1px;
    `;

    const Header = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      text-align: right;
      font-size: 2rem;
      color: ${color.baseText};
      font-weight: 600;
      padding: 40px 100px;
      z-index: 10000000000000000000;
    `;

    return (
      <React.Fragment>
        <Header>
          <AnchorLink href="#works" style={{padding:'0 30px 0 0'}}>Top</AnchorLink>
          <AnchorLink href="#about" style={{padding:'0 30px 0 0'}}>About</AnchorLink>
          <AnchorLink href="#photos">Photos</AnchorLink>
        </Header>
        <div id="overFlowScrollArea" style={{position:'relative'}}>
          <Point1 id="works"/>
          <Point2 id="about"/>
          <Point3 id="photos"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
