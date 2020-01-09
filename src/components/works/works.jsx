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
  width: 1000px;
`;

const WorksWrapTitle = styled.div`
  text-align: left;
  font-size: 4.0rem;
  color: ${color.baseText__thin};
`;

const WorksWrapTitleUnder = styled.div`
  width: 100px;
  height: 3px;
  margin-top: 30px;
  background: ${color.baseText__thin};
`;


class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <WorkBackground>
          <WorksWrap style={{padding:'50px 0 0'}}>
            <WorksWrapTitle>Works</WorksWrapTitle>
            <WorksWrapTitleUnder/>
            <div className="flex" style={{padding: '60px 0'}}>
              <div style={{marginRight: '60px'}}>
                <Work
                  to="./coral"
                  childComponent={Coral}
                />
              </div>
              <Work
                to="./baseconnect"
                childComponent={Baseconnect}
              />
            </div>
            <div className="flex">
              <div style={{marginRight: '60px'}}>
                <Work
                  to="./photal"
                  childComponent={Photal}
                />
              </div>
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
