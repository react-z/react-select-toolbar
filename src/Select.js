/* eslint no-unused-vars: 0 */

/*
 * Copyright (c) 2017, mvanlonden (https://github.com/mvanlonden/react-selection-popover)
 * Copyright (c) 2017, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, { Component, PropTypes } from 'react'

function selectionExists () {
  const selection = window.getSelection()
  return (
    selection &&
    selection.rangeCount > 0 &&
    selection.getRangeAt(0) &&
    !selection.getRangeAt(0).collapsed &&
    selection.getRangeAt(0).getBoundingClientRect().width > 0 &&
    selection.getRangeAt(0).getBoundingClientRect().height > 0
  )
}

function clearSelection () {
  if (window.getSelection) {
    window.getSelection().removeAllRanges()
  } else if (document.selection) {
    document.selection.empty()
  }
}

export default class extends Component {
  componentWillReceiveProps (nextProps) {
    if (this.props.showToolbar === true && nextProps.showToolbar === false) {
      clearSelection()
    }
  }

  componentDidMount () {
    const target = document.querySelector('[data-selectable]')
    target.addEventListener('mouseup', this.handleMouseUp)
  }

  componentWillUnmount () {
    const target = document.querySelector('[data-selectable]')
    target.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseUp = () => {
    if (selectionExists()) {
      this.props.onSelect()
      return
    }
    this.props.onDeselect()
  }

  render () {
    return null
  }
}
