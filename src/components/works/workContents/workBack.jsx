import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import { Link } from "react-router-dom";



const BackWrap = styled.div`
  position: relative;
  margin: auto;
  width: 300px;
  height: 200px;
  & a {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: block;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: #53678e;
    z-index: 1000
  }
`

class WorkBack extends Component {
  render() {
    return (
      <React.Fragment>
        <BackWrap>
          <Link to=""><i className="fa fa-arrow-left"/><span style={{padding:'0 0 0 15px'}} >Back</span></Link>
        </BackWrap>
      </React.Fragment>
    )
  }
}

export default WorkBack;
