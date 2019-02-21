"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("./Button"));

var _getSelectionCoords = _interopRequireDefault(require("./getSelectionCoords"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 6px 10px;\n  padding-right: 0;\n  margin: 0;\n  whiteSpace: nowrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  left: ", ";\n  position: relative;\n  transition: background-color 0.2s ease-in-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Open Sans, sans-serif;\n  color: #fff;\n  font-size: 1.125rem;\n  letter-spacing: -0.037rem;\n  line-height: 1.75rem;\n  height: 0;\n  position: relative;\n  z-index: 10;\n  transform: translateY(0);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      position: {
        left: -20,
        top: 0
      },
      toolbarLeft: '-20px'
    };
    _this.renderButton = _this.renderButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setBarPosition();
    }
  }, {
    key: "setBarPosition",
    value: function setBarPosition() {
      var selectionCoords = (0, _getSelectionCoords.default)(window);

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
    key: "renderButton",
    value: function renderButton(item) {
      var key = item.label;
      return _react.default.createElement(_Button.default, {
        key: key,
        item: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var position = this.state.position;
      var showToolbar = this.props.showToolbar;
      var toolbarStyle = {
        display: showToolbar ? 'block' : 'none'
      };

      if (position !== undefined) {
        toolbarStyle = Object.assign(position, toolbarStyle);
        toolbarStyle = _objectSpread({}, toolbarStyle);
      }

      return _react.default.createElement(ToolbarWrapper, {
        style: toolbarStyle
      }, _react.default.createElement(Toolbar, {
        toolbarLeft: this.state.toolbarLeft
      }, _react.default.createElement(ToolbarList, {
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
        }
      }, this.props.buttons.map(this.renderButton))));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

var ToolbarWrapper = _styledComponents.default.div(_templateObject());

var Toolbar = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.toolbarLeft;
});

var ToolbarList = _styledComponents.default.ul(_templateObject3());