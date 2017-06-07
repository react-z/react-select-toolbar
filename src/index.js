/*
 * Copyright (c) 2017, mvanlonden (https://github.com/mvanlonden/react-selection-popover)
 * Copyright (c) 2017, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import Toolbar from './Toolbar'
import Select from './Select'

import FacebookIcon from './Buttons/Facebook/Icon'
import Facebook from './Buttons/Facebook'

import TwitterIcon from './Buttons/Twitter/Icon'
import Twitter from './Buttons/Twitter'

export default class extends Component {
  state = {
    showToolbar: false,
    buttons: [
      {label: 'facebook', icon: FacebookIcon, action: Facebook},
      {label: 'twitter', icon: TwitterIcon, action: Twitter}
    ]
  }

  handleSelect = () => {
    this.setState({
      showToolbar: true,
      selectedText: window.getSelection().toString()
    })
  }

  handleDeselect = () => {
    this.setState({ showToolbar: false })
  }

  render () {
    let props = {
      tooltipWrapper: document.querySelector('[data-selectable]'),
      maxLeftOffset: 150,
      buttons: this.state.buttons,
      showToolbar: this.state.showToolbar
    }

    return (
      <div style={{position: 'absolute', top: 0, left: 0}}>
        <Select
          onDeselect={this.handleDeselect}
          onSelect={this.handleSelect}
          showToolbar={this.state.showToolbar} />

        <div>
          <div id='tooltipWrapper' ref='tooltipWrapper'>
            <Toolbar {...props} />
          </div>
          { /* <p>current selection: {this.state.selectedText}</p> */ }
        </div>

      </div>
    )
  }
}
