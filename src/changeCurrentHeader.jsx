import React, { Children } from 'react'
import { Component } from 'react'
import { withRouter } from 'react-router'


class ChangeCurrentHeader extends Component {
  render() {
    const childrenWithProps = Children.map(
      this.props.children,
      (child) => {
        let newProps = { currentPage: window.location.href }
        switch (typeof child) {
          case 'string':
            return child
          case 'object':
            return React.cloneElement(child, newProps)
          default:
            return null
        }
      }
    )
    return(childrenWithProps)
  }
}

export default withRouter(ChangeCurrentHeader)
