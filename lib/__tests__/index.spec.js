"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require("../"));

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
test('SelectToolbar renders the correct elements and props', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement("div", null, _react.default.createElement("div", {
    "data-selectable": true
  }, _react.default.createElement("p", null, "Highlight the text to bring up the select toolbar.")), _react.default.createElement(_.default, {
    buttons: ['facebook', 'twitter']
  }))); // console.log(wrapper.debug())
});