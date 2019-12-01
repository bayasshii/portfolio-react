import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../../css/color.js"

const MenuWrap = styled.ul`
  width: 100%;
  padding: 20px 40px;
  margin: 20px 0 0;
  display: flex;
  border: 1px solid ${color.baseText__thin};
  border-radius: 5px;
`

const MenuContents = styled.li`
  width: 33%;
`

const MenuContentsHeader = styled.div`
  font-size: 1.5rem;
  padding-bottom: 10px;
  color: ${color.baseText__thin}
`

const MenuContentsMain = styled.div`
  font-size: 1.5rem;
`

class WorkMenuComponent extends Component {
  render() {
    const MenuLists = [
      ["Role",this.props.role],
      ["Duration",this.props.duration],
      ["URL",this.props.url],
    ]
    return (
      <MenuWrap>
        {
          MenuLists.map((value) => {
            return (
              <MenuContents>
                <MenuContentsHeader>
                  {value[0]}
                </MenuContentsHeader>
                <MenuContentsMain>
                  {value[0]==="URL" ?
                    <a href={value[1]} target="_blank">{value[1]}</a>
                    :
                    <span>{value[1]}</span>
                  }
                </MenuContentsMain>
              </MenuContents>
            )
          })
        }
      </MenuWrap>
    )
  }
}

export default WorkMenuComponent;
