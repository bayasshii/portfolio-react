import styled from 'styled-components'
import * as color from "../../../css/color.js"

const WorkPoint = styled.span`
  font-weight: 600;
  font-size: 1.7rem;
  background: linear-gradient(transparent 50%, ${color.accentYellow} 50%);
  @media screen and (max-width: 767px) {
    font-size: 1.5rem
  }
`

export default WorkPoint;
