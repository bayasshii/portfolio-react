import React, { Component } from 'react';
import Work from "./work.jsx";
import Baseconnect from "./baseconnect/baseconnect.jsx"
import Coral from "./coral/coral.jsx"
import Photal from "./photal/photal.jsx"
import Sugar from "./sugar/sugar.jsx"

import styled from 'styled-components'
import * as color from "../../css/color.js"

const WorksWrap = styled.div`
  margin: auto;
  width: 1000px;
`;

const WorksWrapTitle = styled.div`
  text-align: center;
  font-size: 5.0rem;
  color: ${color.baseText__thin};
`;

const WorksWrapTitleUnder = styled.div`
  margin: auto;
  width: 100px;
  height: 3px;
  margin-top: 30px;
  background: ${color.baseText__thin};
`;


class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <WorksWrap>
          <div style={{marginTop: '60px'}}>
            <WorksWrapTitle>Works</WorksWrapTitle>
            <WorksWrapTitleUnder/>
          </div>
          <div className="flex" style={{margin: '60px 0'}}>
            <div style={{marginRight: '60px'}}>
              <Work
                to="./baseconnect"
                childComponent={Baseconnect}
              />
            </div>
            <Work
              to="./coral"
              childComponent={Coral}
            />
          </div>
          <div className="flex" style={{margin: '0 0 60px'}}>
            <div style={{marginRight: '60px'}}>
              <Work
                to="./photal"
                childComponent={Photal}
              />
            </div>
            <Work
              to="./sugar"
              childComponent={Sugar}
            />
            {/*<Baseconnect/>
            <Photal/>
            <Sugar/>
            <Foltana/>
            <Others/>
            */}
          </div>
        </WorksWrap>
      </React.Fragment>
    );
  }
}

export default Works ;
