'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Icon = require('./Buttons/Facebook/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Facebook = require('./Buttons/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Icon3 = require('./Buttons/Twitter/Icon');

var _Icon4 = _interopRequireDefault(_Icon3);

var _Twitter = require('./Buttons/Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, mvanlonden (https://github.com/mvanlonden/react-selection-popover)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showToolbar: false,
      buttons: [{ label: 'facebook', icon: _Icon2.default, action: _Facebook2.default }, { label: 'twitter', icon: _Icon4.default, action: _Twitter2.default }]
    }, _this.handleSelect = function () {
      _this.setState({
        showToolbar: true,
        selectedText: window.getSelection().toString()
      });
    }, _this.handleDeselect = function () {
      _this.setState({ showToolbar: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var props = {
        tooltipWrapper: document.querySelector('[data-selectable]'),
        maxLeftOffset: 150,
        buttons: this.state.buttons,
        showToolbar: this.state.showToolbar
      };

      return _react2.default.createElement(
        'div',
        { style: { position: 'absolute', top: 0, left: 0 } },
        _react2.default.createElement(_Select2.default, {
          onDeselect: this.handleDeselect,
          onSelect: this.handleSelect,
          showToolbar: this.state.showToolbar }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { id: 'tooltipWrapper', ref: 'tooltipWrapper' },
            _react2.default.createElement(_Toolbar2.default, props)
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;