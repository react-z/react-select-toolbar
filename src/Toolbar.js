/*
 * Copyright (c) 2017, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import styled from 'styled-components'
import Button from './Button'
import getSelectionCoords from './getSelectionCoords'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      position: { left: -20, top: 0 },
      toolbarLeft: '-20px'
    }
    this.renderButton = this.renderButton.bind(this)
  }

  componentDidUpdate () {
    this.setBarPosition()
  }

  setBarPosition () {
    const selectionCoords = getSelectionCoords(window)
    if (!selectionCoords) { return }

    if (selectionCoords &&
        !this.state.position ||
        this.state.position.left !== selectionCoords.x
      ) {
      this.setState({
        position: {
          top: selectionCoords.y - 50,
          left: selectionCoords.x
        }
      })
    }
  }

  renderButton (item) {
    let key = item.label

    return (
      <Button key={key} item={item} />
    )
  }

  render () {
    const { position } = this.state
    const { showToolbar } = this.props

    let toolbarStyle = { display: showToolbar ? 'block' : 'none' }
    if (position !== undefined) {
      toolbarStyle = Object.assign(position, toolbarStyle)
      toolbarStyle = {...toolbarStyle}
    }

    return (
      <ToolbarWrapper style={toolbarStyle}>
        <Toolbar toolbarLeft={this.state.toolbarLeft}>
          <ToolbarList onMouseDown={(e) => { e.preventDefault() }}>
            {this.props.buttons.map(this.renderButton)}
          </ToolbarList>
        </Toolbar>
      </ToolbarWrapper>
    )
  }
}

const ToolbarWrapper = styled.div`
  font-family: Open Sans, sans-serif;
  color: #fff;
  font-size: 1.125rem;
  letter-spacing: -0.037rem;
  line-height: 1.75rem;
  height: 0;
  position: relative;
  z-index: 10;
  transform: translateY(0);
`

const Toolbar = styled.div`
  background: #fff;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  left: ${props => props.toolbarLeft};
  position: relative;
  transition: background-color 0.2s ease-in-out;
`

const ToolbarList = styled.ul`
  padding: 6px 10px;
  padding-right: 0;
  margin: 0;
  whiteSpace: nowrap;
`
