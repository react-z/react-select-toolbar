'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Open Sans, sans-serif;\n  color: #fff;\n  font-size: 1.125rem;\n  letter-spacing: -0.037rem;\n  line-height: 1.75rem;\n  height: 0;\n  position: relative;\n  z-index: 10;\n  transform: translateY(0);\n'], ['\n  font-family: Open Sans, sans-serif;\n  color: #fff;\n  font-size: 1.125rem;\n  letter-spacing: -0.037rem;\n  line-height: 1.75rem;\n  height: 0;\n  position: relative;\n  z-index: 10;\n  transform: translateY(0);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #fff;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  left: ', ';\n  position: relative;\n  transition: background-color 0.2s ease-in-out;\n'], ['\n  background: #fff;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  left: ', ';\n  position: relative;\n  transition: background-color 0.2s ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 6px 10px;\n  padding-right: 0;\n  margin: 0;\n  whiteSpace: nowrap;\n'], ['\n  padding: 6px 10px;\n  padding-right: 0;\n  margin: 0;\n  whiteSpace: nowrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _getSelectionCoords = require('./getSelectionCoords');

var _getSelectionCoords2 = _interopRequireDefault(_getSelectionCoords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      position: { left: -20, top: 0 },
      toolbarLeft: '-20px'
    };
    _this.renderButton = _this.renderButton.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setBarPosition();
    }
  }, {
    key: 'setBarPosition',
    value: function setBarPosition() {
      var selectionCoords = (0, _getSelectionCoords2.default)(window);
      if (!selectionCoords) {
        return;
      }

      if (selectionCoords && !this.state.position || this.state.position.left !== selectionCoords.x) {
        this.setState({
          position: {
            top: selectionCoords.y - 50,
            left: selectionCoords.x
          }
        });
      }
    }
  }, {
    key: 'renderButton',
    value: function renderButton(item) {
      var key = item.label;

      return _react2.default.createElement(_Button2.default, { key: key, item: item });
    }
  }, {
    key: 'render',
    value: function render() {
      var position = this.state.position;
      var showToolbar = this.props.showToolbar;


      var toolbarStyle = { display: showToolbar ? 'block' : 'none' };
      if (position !== undefined) {
        toolbarStyle = Object.assign(position, toolbarStyle);
        toolbarStyle = _extends({}, toolbarStyle);
      }

      return _react2.default.createElement(
        ToolbarWrapper,
        { style: toolbarStyle },
        _react2.default.createElement(
          Toolbar,
          { toolbarLeft: this.state.toolbarLeft },
          _react2.default.createElement(
            ToolbarList,
            { onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              } },
            this.props.buttons.map(this.renderButton)
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


var ToolbarWrapper = _styledComponents2.default.div(_templateObject);

var Toolbar = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.toolbarLeft;
});

var ToolbarList = _styledComponents2.default.ul(_templateObject3);