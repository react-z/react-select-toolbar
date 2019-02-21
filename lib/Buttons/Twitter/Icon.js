"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        height: "24",
        width: "24",
        fill: "currentColor",
        viewBox: "0 0 430.117 430.117"
      }, _react.default.createElement("path", {
        d: "M381.384 198.64c24.157-1.994 40.543-12.976 46.85-27.877-8.715 5.353-35.765 11.19-50.704 5.63-.732-3.51-1.55-6.843-2.353-9.853-11.383-41.798-50.357-75.472-91.194-71.404 3.304-1.334 6.655-2.576 9.996-3.69 4.494-1.61 30.867-5.902 26.714-15.21-3.5-8.19-35.722 6.187-41.79 8.066 8.01-3.012 21.255-8.193 22.674-17.396-12.27 1.683-24.315 7.484-33.622 15.92 3.36-3.618 5.91-8.026 6.45-12.77C241.68 90.963 222.563 133.113 207.092 174c-12.148-11.773-22.915-21.044-32.574-26.192-27.097-14.53-59.496-29.692-110.355-48.572-1.56 16.827 8.322 39.2 36.8 54.08-6.17-.826-17.453 1.017-26.477 3.178 3.675 19.277 15.677 35.16 48.17 42.84-14.85.98-22.524 4.358-29.48 11.64 6.764 13.408 23.267 29.187 52.954 25.948-33.006 14.226-13.458 40.57 13.4 36.642C113.712 320.887 41.48 317.41 0 277.828c108.3 147.572 343.716 87.274 378.8-54.866 26.284.224 41.736-9.105 51.317-19.39-15.144 2.57-37.094-.086-48.733-4.933z"
      }));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;