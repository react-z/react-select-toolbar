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
import Button from '../Button'
import FacebookIcon from '../Buttons/Facebook/Icon'
import Facebook from '../Buttons/Facebook'

test('Button renders correctly and matches snapshot', () => {
  const handleChange = jest.fn()
  const handleClick = jest.fn()
  const component = renderer.create(
    <Button key={0} item={{label: 'facebook', icon: FacebookIcon, action: Facebook}} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button renders the correct elements and props', () => {
  const ITEM = {label: 'facebook', icon: FacebookIcon, action: Facebook};
  const wrapper = shallow(
    <Button key={0} item={ITEM} />
  )

  expect(wrapper.instance().props.item).toEqual(ITEM);

  expect(
    wrapper
      .text()
  ).toContain('facebook')

  {/* console.log(wrapper.debug()) */}
})
