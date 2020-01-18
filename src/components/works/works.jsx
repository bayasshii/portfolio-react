import React, { Component } from 'react';
import Work from "./work.jsx";
import Baseconnect from "./baseconnect/baseconnect.jsx"
import Coral from "./coral/coral.jsx"
import Photal from "./photal/photal.jsx"
import Others from "./others/others.jsx"

import styled from 'styled-components'
import * as color from "../../css/color.js"


const WorkBackground = styled.div`
  z-index: 1;
  position: relative;
  background: ${color.background}
  padding: 0 0 100px;
`;


const WorksWrap = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const WorksWrapTitle = styled.div`
  text-align: left;
  font-size: 4.0rem;
  color: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    margin-left: 20px
  }
`;

const WorksWrapTitleUnder = styled.div`
  width: 100px;
  height: 3px;
  margin-top: 30px;
  background: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
    margin-left: 20px
  }
`;


class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkBackground>
          <WorksWrap style={{padding:'50px 0 0'}}>
            <WorksWrapTitle>Works</WorksWrapTitle>
            <WorksWrapTitleUnder/>
            <div className="flex flex-wrap" style={{justifyContent: 'space-between', padding: '60px 0'}}>
              <Work
                to="./coral"
                childComponent={Coral}
              />
              <Work
                to="./baseconnect"
                childComponent={Baseconnect}
              />
              <Work
                to="./photal"
                childComponent={Photal}
              />
              <Work
                to="./others"
                childComponent={Others}
              />
            </div>
          </WorksWrap>
        </WorkBackground>
      </React.Fragment>
    );
  }
}

export default Works ;
