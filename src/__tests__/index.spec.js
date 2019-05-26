/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import SelectToolbar from '../'

test('SelectToolbar renders the correct elements and props', () => {
  const wrapper = shallow(
    <div>
      <div data-selectable>
        <p>Highlight the text to bring up the select toolbar.</p>
      </div>
      <SelectToolbar buttons={['facebook', 'twitter']} />
    </div>
  )

  // console.log(wrapper.debug())
})
