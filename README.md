# react-select-toolbar

[![npm version](https://badge.fury.io/js/react-select-toolbar.svg)](https://badge.fury.io/js/react-select-toolbar)

![](https://raw.githubusercontent.com/StevenIseki/react-select-toolbar/master/example/screenshot.gif)

A select toolbar for sharing text highlights similar to medium

## Installation

`yarn add react-select-toolbar`

## Usage

```jsx
import SelectToolbar from 'react-select-toolbar'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

const TestComponent = () => (
	<div>
    <div data-selectable>
      <p>Highlight the text to bring up the select toolbar.</p>
    </div>
    <SelectToolbar buttons={['facebook', 'twitter']} />
  </div>
)

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-select-toolbar uses uses styled-components 💅 for the base styling.

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
