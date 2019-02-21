import SelectToolbar from '../lib/' // 'react-select-toolbar'
import ReactDOM from 'react-dom'
import React from 'react'

const TestComponent = () => (
	<div>
    <div data-selectable>
      <p>Highlight the text to bring up the select toolbar.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <SelectToolbar buttons={['facebook', 'twitter']} />
  </div>
)

ReactDOM.render( <TestComponent />, document.getElementById('root') )
