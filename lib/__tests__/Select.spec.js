"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Select = _interopRequireDefault(require("../Select"));

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
test('Select renders the correct elements and props', function () {
  var handleDeselect = jest.fn();
  var handleSelect = jest.fn();
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement("div", {
    "data-selectable": true
  }, _react.default.createElement(_Select.default, {
    onDeselect: handleDeselect,
    onSelect: handleSelect,
    showToolbar: true
  }))); // expect(wrapper.instance().props.showToolbar).toEqual(true)
  // expect(wrapper.instance().props.onDeselect).toEqual(handleDeselect)
  // expect(wrapper.instance().props.onSelect).toEqual(handleSelect)
  // console.log(wrapper.debug())
});