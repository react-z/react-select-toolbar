import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import SelectToolbar from '../src/'

test('SelectToolbar component', (t) => {
  const wrapper = mount( <SelectToolbar /> )

  t.end()
});
