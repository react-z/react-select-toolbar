# react-select-toolbar

[![npm version](https://badge.fury.io/js/react-select-toolbar.svg)](https://badge.fury.io/js/react-select-toolbar)

A select toolbar for sharing text highlights similar to medium

## Installation

`yarn add react-select-toolbar`

## Usage

```javascript
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

react-select-toolbar uses styled-components. So you will need this added to your dependencies. You can port it over to another css in js library fairly easily.

## Development

    yarn install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
