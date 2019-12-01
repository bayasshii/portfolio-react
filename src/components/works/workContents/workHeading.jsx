import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkHeading = styled.div`
  font-size: 2rem;
  line-height: 4.0rem;
  font-weight: 600;
  &::before {
    content:  '';
    width: 10px;
    height: 75px;
    background-color: ${color.baseconnectGreen};
    display:  block;
    position:  absolute;
    left:  0;
  }
`;

export default WorkHeading;
