import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"
import { Link } from "react-router-dom";

const BackWrap = styled.div`
  position: relative;
  margin: auto;
  width: 400px;
  height: 70px;
  border-radius: 20px;
  background: #53678e;
  box-shadow: 0px 0px 24px rgba(0,0,0,0.05);
  & a {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: block;
    text-align: center;
    line-height: 70px;
    font-size: 2rem;
    color: #fff;
    z-index: 1000
  }
`

class WorkBack extends Component {
  render() {
    return (
      <React.Fragment>
        <BackWrap>
          <Link to="">作品一覧へ</Link>
        </BackWrap>
      </React.Fragment>
    )
  }
}

export default WorkBack;
