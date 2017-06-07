'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 0 !important;\n  color: ', ';\n  &:hover {\n    color: ', ';\n    span {\n      opacity: 1;\n    }\n  }\n  &:active {\n    color: #ccc;\n  }\n'], ['\n  display: inline-block;\n  margin: 0 !important;\n  color: ', ';\n  &:hover {\n    color: ', ';\n    span {\n      opacity: 1;\n    }\n  }\n  &:active {\n    color: #ccc;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: transparent;\n  margin-top: 0.4rem;\n  margin-bottom: -1rem;\n'], ['\n  padding: 0;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: transparent;\n  margin-top: 0.4rem;\n  margin-bottom: -1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  position: fixed;\n  overflow: hidden;\n  font-size: 12px;\n  margin-top: -3.3rem;\n  text-transform: uppercase;\n  opacity: 0;\n  color: black !important;\n  transition: opacity 0.5s ease-in-out;\n  z-index: 100;\n  padding: 0.2rem 0.5rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n'], ['\n  display: block;\n  position: fixed;\n  overflow: hidden;\n  font-size: 12px;\n  margin-top: -3.3rem;\n  text-transform: uppercase;\n  opacity: 0;\n  color: black !important;\n  transition: opacity 0.5s ease-in-out;\n  z-index: 100;\n  padding: 0.2rem 0.5rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Button = this.props.item.icon;
      var action = this.props.item.action;


      return _react2.default.createElement(
        ToolbarButtonWrapper,
        null,
        _react2.default.createElement(
          Label,
          null,
          this.props.item.label
        ),
        _react2.default.createElement(
          ToolbarButton,
          { onClick: function onClick() {
              return action(_this2.props);
            } },
          _react2.default.createElement(Button, null)
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


var ToolbarButtonWrapper = _styledComponents2.default.li(_templateObject, function (props) {
  return props.active ? '#f00' : '#000';
}, function (props) {
  return props.active ? '#fcc' : '#ccc';
});

var ToolbarButton = _styledComponents2.default.div(_templateObject2);

var Label = _styledComponents2.default.span(_templateObject3);