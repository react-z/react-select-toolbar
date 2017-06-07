import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import SelectToolbar from '../src/'

test('SelectToolbar component', (t) => {
  setupJsdom()

  const wrapper = mount( <SelectToolbar /> )

  t.end()
});
