"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Buttons/Facebook/Icon"));

var _Facebook = _interopRequireDefault(require("../Buttons/Facebook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Button renders correctly and matches snapshot', function () {
  var handleChange = jest.fn();
  var handleClick = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Button.default, {
    key: 0,
    item: {
      label: 'facebook',
      icon: _Icon.default,
      action: _Facebook.default
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button renders the correct elements and props', function () {
  var ITEM = {
    label: 'facebook',
    icon: _Icon.default,
    action: _Facebook.default
  };
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
    key: 0,
    item: ITEM
  }));
  expect(wrapper.instance().props.item).toEqual(ITEM);
  expect(wrapper.text()).toContain('facebook');
  {
    /* console.log(wrapper.debug()) */
  }
});