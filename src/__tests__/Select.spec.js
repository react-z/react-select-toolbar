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
import Select from '../Select'

test('Select renders the correct elements and props', () => {
  const handleDeselect = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = shallow(
    <div data-selectable>
      <Select
        onDeselect={handleDeselect}
        onSelect={handleSelect}
        showToolbar={true} />
    </div>
  )

  // expect(wrapper.instance().props.showToolbar).toEqual(true)
  // expect(wrapper.instance().props.onDeselect).toEqual(handleDeselect)
  // expect(wrapper.instance().props.onSelect).toEqual(handleSelect)

  // console.log(wrapper.debug())
})
