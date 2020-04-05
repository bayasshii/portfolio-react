import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkSubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: ${color.baseText__thin};
  @media screen and (max-width: 767px) {
  font-size: 1.2rem;
  }
`;

export default WorkSubTitle;
