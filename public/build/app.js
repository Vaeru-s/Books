(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _styles_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/bootstrap.css */ "./assets/styles/bootstrap.css");
/* harmony import */ var _styles_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap/dist/js/bootstrap.js */ "./assets/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var _bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

var Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

global.Popper = global.Popper = Popper; // any CSS you import will output into a single css file (app.css in this case)





window.Vue = vue__WEBPACK_IMPORTED_MODULE_3__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/bootstrap/dist/js/bootstrap.js":
/*!***********************************************!*\
  !*** ./assets/bootstrap/dist/js/bootstrap.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.2';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.5.2';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName !== 'LABEL' || inputBtn && inputBtn.type !== 'checkbox') {
        Button._jQueryInterface.call($(button), 'toggle');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.2';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $(this).data());

        if (_typeof(config) === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.2';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $this.data(), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.2';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.2';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._element).off(Util.TRANSITION_END);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $(_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $(this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.2): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.2';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.2';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.2';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.2';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.5.2';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $(this._element).data(), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/bootstrap.css":
/*!*************************************!*\
  !*** ./assets/styles/bootstrap.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2FsZXJ0LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29scy9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC5jc3MiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJQb3BwZXIiLCJ3aW5kb3ciLCJWdWUiLCJUUkFOU0lUSU9OX0VORCIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsIm9iaiIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiZXZlbnQiLCJjYWxsZWQiLCJVdGlsIiwic2V0VGltZW91dCIsImdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZG9jdW1lbnQiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50Iiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaHJlZkF0dHIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwicmVmbG93IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50IiwidHlwZUNoZWNrQ29uZmlnIiwiT2JqZWN0IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJ0b1R5cGUiLCJjb21wb25lbnROYW1lIiwiZmluZFNoYWRvd1Jvb3QiLCJyb290IiwialF1ZXJ5RGV0ZWN0aW9uIiwidmVyc2lvbiIsIm1pbk1ham9yIiwibHRNYWpvciIsIm1pbk1pbm9yIiwibWluUGF0Y2giLCJtYXhNYWpvciIsInNldFRyYW5zaXRpb25FbmRTdXBwb3J0IiwiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIlNFTEVDVE9SX0RJU01JU1MiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9BTEVSVCIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfQlVUVE9OIiwiQ0xBU1NfTkFNRV9GT0NVUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJTRUxFQ1RPUl9JTlBVVCIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0JVVFRPTiIsIkVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkiLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbml0aWFsQnV0dG9uIiwiaW5wdXRCdG4iLCJidXR0b25zIiwiaSIsImxlbiIsIkFSUk9XX0xFRlRfS0VZQ09ERSIsIkFSUk9XX1JJR0hUX0tFWUNPREUiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJESVJFQ1RJT05fTkVYVCIsIkRJUkVDVElPTl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIkVWRU5UX0RSQUdfU1RBUlQiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfUklHSFQiLCJDTEFTU19OQU1FX0xFRlQiLCJDTEFTU19OQU1FX05FWFQiLCJDTEFTU19OQU1FX1BSRVYiLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9JVEVNX0lNRyIsIlNFTEVDVE9SX05FWFRfUFJFViIsIlNFTEVDVE9SX0lORElDQVRPUlMiLCJTRUxFQ1RPUl9EQVRBX1NMSURFIiwiU0VMRUNUT1JfREFUQV9SSURFIiwiUG9pbnRlclR5cGUiLCJUT1VDSCIsIlBFTiIsIkNhcm91c2VsIiwibmF2aWdhdG9yIiwibmV4dCIsIm5leHRXaGVuVmlzaWJsZSIsInByZXYiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJpbmRleCIsImRpcmVjdGlvbiIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsImUiLCJfa2V5ZG93biIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0SXRlbUJ5RGlyZWN0aW9uIiwiaXNOZXh0RGlyZWN0aW9uIiwiaXNQcmV2RGlyZWN0aW9uIiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJpbmRpY2F0b3JzIiwibmV4dEluZGljYXRvciIsIl9zbGlkZSIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJldmVudERpcmVjdGlvbk5hbWUiLCJzbGlkRXZlbnQiLCJuZXh0RWxlbWVudEludGVydmFsIiwicGFyc2VJbnQiLCJfY29uZmlnIiwiYWN0aW9uIiwiX2RhdGFBcGlDbGlja0hhbmRsZXIiLCJ0YXJnZXQiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiJGNhcm91c2VsIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkRJTUVOU0lPTl9XSURUSCIsIkRJTUVOU0lPTl9IRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwiQ29sbGFwc2UiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwic3RhcnRFdmVudCIsImRpbWVuc2lvbiIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzY3JvbGxTaXplIiwiaGlkZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsInRyaWdnZXIiLCIkZWxlbSIsInNldFRyYW5zaXRpb25pbmciLCJfZ2V0RGltZW5zaW9uIiwiaGFzV2lkdGgiLCJfZ2V0UGFyZW50IiwiY2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaXNPcGVuIiwidHJpZ2dlckFycmF5IiwiX2dldFRhcmdldEZyb21FbGVtZW50IiwiJHRoaXMiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9ESVNBQkxFRCIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QUklHSFQiLCJDTEFTU19OQU1FX0RST1BMRUZUIiwiQ0xBU1NfTkFNRV9NRU5VUklHSFQiLCJDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyIsIlNFTEVDVE9SX0ZPUk1fQ0hJTEQiLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJpc0FjdGl2ZSIsInVzZVBvcHBlciIsIl9lbGVtZW50Iiwic2hvd0V2ZW50IiwicmVmZXJlbmNlRWxlbWVudCIsImhpZGVFdmVudCIsInVwZGF0ZSIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCIkcGFyZW50RHJvcGRvd24iLCJwbGFjZW1lbnQiLCJfZGV0ZWN0TmF2YmFyIiwiX2dldE9mZnNldCIsIl9nZXRQb3BwZXJDb25maWciLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJfY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiX2dldFBhcmVudEZyb21FbGVtZW50IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiYmFja2Ryb3AiLCJmb2N1cyIsIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9NT1VTRVVQX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfU0NST0xMQUJMRSIsIkNMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsIlNFTEVDVE9SX0RBVEFfRElTTUlTUyIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsIndoaXRlbGlzdEtleXMiLCJlbCIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJ3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMiLCJ3aGl0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlIiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIkhPVkVSX1NUQVRFX1NIT1ciLCJIT1ZFUl9TVEFURV9PVVQiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJJTlNFUlRFRCIsIkNMSUNLIiwiRk9DVVNJTiIsIkZPQ1VTT1VUIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfQVJST1ciLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsIlRvb2x0aXAiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsInRpcCIsInRpcElkIiwiYXR0YWNobWVudCIsInByZXZIb3ZlclN0YXRlIiwiaXNXaXRoQ29udGVudCIsImFkZEF0dGFjaG1lbnRDbGFzcyIsImdldFRpcEVsZW1lbnQiLCJzZXRDb250ZW50Iiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50Iiwic2FuaXRpemVIdG1sIiwiZ2V0VGl0bGUiLCJkZWZhdWx0QnNDb25maWciLCJiZWhhdmlvciIsImFycm93Iiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIl9nZXRDb250YWluZXIiLCJfZ2V0QXR0YWNobWVudCIsIl9zZXRMaXN0ZW5lcnMiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsIl9lbnRlciIsIl9sZWF2ZSIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiZGF0YUF0dHJpYnV0ZXMiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJfY2xlYW5UaXBDbGFzcyIsIiR0aXAiLCJ0YWJDbGFzcyIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJwb3BwZXJEYXRhIiwiX2ZpeFRyYW5zaXRpb24iLCJpbml0Q29uZmlnQW5pbWF0aW9uIiwiU0VMRUNUT1JfVElUTEUiLCJTRUxFQ1RPUl9DT05URU5UIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwibWV0aG9kIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9TQ1JPTEwiLCJDTEFTU19OQU1FX0RST1BET1dOX0lURU0iLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJNRVRIT0RfT0ZGU0VUIiwiTUVUSE9EX1BPU0lUSU9OIiwiU2Nyb2xsU3B5IiwicmVmcmVzaCIsImF1dG9NZXRob2QiLCJvZmZzZXRNZXRob2QiLCJvZmZzZXRCYXNlIiwidGFyZ2V0cyIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaXRlbSIsImlkIiwiX2dldFNjcm9sbFRvcCIsIl9nZXRTY3JvbGxIZWlnaHQiLCJfZ2V0T2Zmc2V0SGVpZ2h0IiwiX3Byb2Nlc3MiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJtYXhTY3JvbGwiLCJpc0FjdGl2ZVRhcmdldCIsIl9hY3RpdmF0ZSIsInF1ZXJpZXMiLCIkbGluayIsIl9jbGVhciIsIm5vZGUiLCJzY3JvbGxTcHlzIiwic2Nyb2xsU3B5c0xlbmd0aCIsIiRzcHkiLCJDTEFTU19OQU1FX0RST1BET1dOX01FTlUiLCJTRUxFQ1RPUl9BQ1RJVkVfVUwiLCJTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQiLCJUYWIiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsInByZXZpb3VzIiwiaGlkZGVuRXZlbnQiLCJhY3RpdmVFbGVtZW50cyIsImFjdGl2ZSIsImlzVHJhbnNpdGlvbmluZyIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd25Ub2dnbGVMaXN0IiwiQ0xBU1NfTkFNRV9ISURFIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiYXV0b2hpZGUiLCJUb2FzdCIsIl9jbG9zZSIsIl9jbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBQyxN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QUFNMkgsT0FBTyxHQUFJLGdDQUFqQjs7QUFFQSxZQUFJLENBQUosTUFBVztBQUNUMUgsY0FBSSxHQUFHLGdCQUFQQSxPQUFPLENBQVBBO0FBQ0FELGtCQUFRLENBQVJBO0FBQ0Q7O0FBRUQsWUFBSSxrQkFBSixVQUFnQztBQUM5QixjQUFJLE9BQU9DLElBQUksQ0FBWCxNQUFXLENBQVgsS0FBSixhQUF5QztBQUN2QyxrQkFBTSw4Q0FBTixJQUFNLENBQU47QUFDRDs7QUFFREEsY0FBSSxDQUFKQSxNQUFJLENBQUpBO0FBQ0Q7QUFoQkgsT0FBTyxDQUFQO0FBa0JELEs7Ozs7MEJBdEpvQjtBQUNuQjtBQUNEOzs7MEJBRXdCO0FBQ3ZCO0FBQ0Q7OzswQkFFb0I7QUFDbkI7QUFDRDs7OztHQXBCRzZkLEU7QUFtS047Ozs7Ozs7QUFNQWhqQixHQUFDLENBQURBLGFBQXlCZ2pCLEtBQUssQ0FBOUJoakI7QUFDQUEsR0FBQyxDQUFEQTs7QUFDQUEsR0FBQyxDQUFEQSx3QkFBeUIsWUFBTTtBQUM3QkEsS0FBQyxDQUFEQTtBQUNBLFdBQU9nakIsS0FBSyxDQUFaO0FBRkZoakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcbmNvbnN0IFBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xuZ2xvYmFsLlBvcHBlciA9IGdsb2JhbC5Qb3BwZXIgPSBQb3BwZXI7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCAnLi9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbndpbmRvdy5WdWUgPSBWdWU7XG5cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5mdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gYCR7b2JqfWBcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcbiAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICByZXR1cm4gcHJlZml4XG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJ1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgIGxldCB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpXG5cbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG4gIH0sXG5cbiAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSxcblxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIC8vIFRPRE86IFJlbW92ZSBpbiB2NVxuICBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcbiAgfSxcblxuICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlICAgICAgICAgPSBjb25maWdbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG4gIH0sXG5cbiAgalF1ZXJ5RGV0ZWN0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJylcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpXG4gICAgY29uc3QgbWluTWFqb3IgPSAxXG4gICAgY29uc3QgbHRNYWpvciA9IDJcbiAgICBjb25zdCBtaW5NaW5vciA9IDlcbiAgICBjb25zdCBtaW5QYXRjaCA9IDFcbiAgICBjb25zdCBtYXhNYWpvciA9IDRcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKVxuICAgIH1cbiAgfVxufVxuXG5VdGlsLmpRdWVyeURldGVjdGlvbigpXG5zZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYWxlcnQnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgICAgICAgICAgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgICAgICAgICA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSAgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgPSAnc2hvdydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgbGV0IHJvb3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIGxldCBwYXJlbnQgICAgID0gZmFsc2VcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX0FMRVJUfWApWzBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gJC5FdmVudChFVkVOVF9DTE9TRSlcblxuICAgICQoZWxlbWVudCkudHJpZ2dlcihjbG9zZUV2ZW50KVxuICAgIHJldHVybiBjbG9zZUV2ZW50XG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICQoZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpXG4gICAgICAuZGV0YWNoKClcbiAgICAgIC50cmlnZ2VyKEVWRU5UX0NMT1NFRClcbiAgICAgIC5yZW1vdmUoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oXG4gIEVWRU5UX0NMSUNLX0RBVEFfQVBJLFxuICBTRUxFQ1RPUl9ESVNNSVNTLFxuICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbilcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjIpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYnV0dG9uJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjUuMidcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfQlVUVE9OID0gJ2J0bidcbmNvbnN0IENMQVNTX05BTUVfRk9DVVMgID0gJ2ZvY3VzJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QgICA9ICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVTICAgICAgICAgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgICAgICAgID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvblwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFU19CVVRUT05TID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gLmJ0bidcbmNvbnN0IFNFTEVDVE9SX0lOUFVUICAgICAgICAgICAgICAgID0gJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgICAgICAgICAgICAgICA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQlVUVE9OICAgICAgICAgICAgICAgPSAnLmJ0bidcblxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgICAgICA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkgPSBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSAgICAgICA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBTRUxFQ1RPUl9EQVRBX1RPR0dMRVNcbiAgICApWzBdXG5cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGRvbid0IGFkZCBhIHBvaW50bGVzcy9pbnZhbGlkIGNoZWNrZWQgcHJvcGVydHkgdG8gdGhlIGlucHV0XG4gICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICAgICB9XG4gICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2VsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLFxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBpbml0aWFsQnV0dG9uID0gYnV0dG9uXG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDTEFTU19OQU1FX0JVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTilbMF1cbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5wdXRCdG4gPSBidXR0b24ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9JTlBVVClcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5pdGlhbEJ1dHRvbi50YWdOYW1lICE9PSAnTEFCRUwnIHx8IGlucHV0QnRuICYmIGlucHV0QnRuLnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgLm9uKEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0ZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKVxuICB9KVxuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAvLyBlbnN1cmUgY29ycmVjdCBhY3RpdmUgY2xhc3MgaXMgc2V0IHRvIG1hdGNoIHRoZSBjb250cm9scycgYWN0dWFsIHZhbHVlcy9zdGF0ZXNcblxuICAvLyBmaW5kIGFsbCBjaGVja2JveGVzL3JlYWRpbyBidXR0b25zIGluc2lkZSBkYXRhLXRvZ2dsZSBncm91cHNcbiAgbGV0IGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuICAgIGlmIChpbnB1dC5jaGVja2VkIHx8IGlucHV0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhbGwgYnV0dG9uIHRvZ2dsZXNcbiAgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMik6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgID0gJ2Nhcm91c2VsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICA9ICc0LjUuMidcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEFSUk9XX0xFRlRfS0VZQ09ERSAgICAgPSAzNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuY29uc3QgQVJST1dfUklHSFRfS0VZQ09ERSAgICA9IDM5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCAgICAgICAgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbCA6IDUwMDAsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgc2xpZGUgICAgOiBmYWxzZSxcbiAgcGF1c2UgICAgOiAnaG92ZXInLFxuICB3cmFwICAgICA6IHRydWUsXG4gIHRvdWNoICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWwgOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBzbGlkZSAgICA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2UgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXAgICAgIDogJ2Jvb2xlYW4nLFxuICB0b3VjaCAgICA6ICdib29sZWFuJ1xufVxuXG5jb25zdCBESVJFQ1RJT05fTkVYVCAgICAgPSAnbmV4dCdcbmNvbnN0IERJUkVDVElPTl9QUkVWICAgICA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgICAgID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgICAgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFICAgICAgICAgID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCAgICAgICAgICAgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gICAgICAgID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSICAgICA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSAgICAgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgICAgID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgICAgICA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCAgICAgICA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOICAgID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQICAgICAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCAgICAgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSAgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMICAgICAgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSAgICAgICAgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSAgICAgICAgID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9SSUdIVCAgICAgICAgID0gJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0xFRlQgICAgICAgICAgPSAnY2Fyb3VzZWwtaXRlbS1sZWZ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUICAgICAgICAgID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViAgICAgICAgICA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFICAgICAgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gICAgICAgID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgICAgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfTkVYVF9QUkVWICAgPSAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSAgPSAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgICA9ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSCA6ICd0b3VjaCcsXG4gIFBFTiAgIDogJ3Blbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ICAgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCAgICA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYICAgID0gMFxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lORElDQVRPUlMpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgICAgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCAgICAgID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX05FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiZcbiAgICAgICgkKHRoaXMuX2VsZW1lbnQpLmlzKCc6dmlzaWJsZScpICYmICQodGhpcy5fZWxlbWVudCkuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTkVYVF9QUkVWKSkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQUNUSVZFX0lURU0pXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGluZGV4ID4gYWN0aXZlSW5kZXhcbiAgICAgID8gRElSRUNUSU9OX05FWFRcbiAgICAgIDogRElSRUNUSU9OX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5faXRlbXMgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCAgICAgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIC8vIHN3aXBlIGxlZnRcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5wcmV2KClcbiAgICB9XG5cbiAgICAvLyBzd2lwZSByaWdodFxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0tFWURPV04sIChldmVudCkgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRVZFTlRfTU9VU0VFTlRFUiwgKGV2ZW50KSA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgICAgLm9uKEVWRU5UX01PVVNFTEVBVkUsIChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0lURU1fSU1HKSlcbiAgICAgIC5vbihFVkVOVF9EUkFHX1NUQVJULCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9QT0lOVEVSRE9XTiwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJVUCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNIU1RBUlQsIChldmVudCkgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9UT1VDSE1PVkUsIChldmVudCkgPT4gbW92ZShldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNIRU5ELCAoZXZlbnQpID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMucHJldigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgPyBbXS5zbGljZS5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0lURU0pKVxuICAgICAgOiBbXVxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX05FWFRcbiAgICBjb25zdCBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggICAgID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCAgID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgICA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleFxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhICAgICA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1BSRVYgPyAtMSA6IDFcbiAgICBjb25zdCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xXG4gICAgICA/IHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkVfSVRFTSkpXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudClcblxuICAgIHJldHVybiBzbGlkZUV2ZW50XG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0FDVElWRSkpXG4gICAgICAkKGluZGljYXRvcnMpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBuZXh0SW5kaWNhdG9yID0gdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQuY2hpbGRyZW5bXG4gICAgICAgIHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KVxuICAgICAgXVxuXG4gICAgICBpZiAobmV4dEluZGljYXRvcikge1xuICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ICAgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgbGV0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lXG4gICAgbGV0IG9yZGVyQ2xhc3NOYW1lXG4gICAgbGV0IGV2ZW50RGlyZWN0aW9uTmFtZVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX05FWFQpIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9MRUZUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfTkVYVFxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX0xFRlRcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDTEFTU19OQU1FX1JJR0hUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfUFJFVlxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCBzbGlkRXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NMSUQsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgIH0pXG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIFV0aWwucmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChuZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApXG4gICAgICBpZiAobmV4dEVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmVFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgICQobmV4dEVsZW1lbnQpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYCR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9ICR7b3JkZXJDbGFzc05hbWV9YClcbiAgICAgICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoYCR7Q0xBU1NfTkFNRV9BQ1RJVkV9ICR7b3JkZXJDbGFzc05hbWV9ICR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9YClcblxuICAgICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpLCAwKVxuICAgICAgICB9KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIF9jb25maWcgPSB7XG4gICAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2FjdGlvbl0oKVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9SSURFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoY2Fyb3VzZWxzW2ldKVxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjIpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC41LjInXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZSA6IHRydWUsXG4gIHBhcmVudCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gIHBhcmVudCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgICA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gICAgICAgICAgPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFICAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICAgPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgICAgICA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSAgID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCAgPSAnY29sbGFwc2VkJ1xuXG5jb25zdCBESU1FTlNJT05fV0lEVEggID0gJ3dpZHRoJ1xuY29uc3QgRElNRU5TSU9OX0hFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgICAgID0gJy5zaG93LCAuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJHtlbGVtZW50LmlkfVwiXWBcbiAgICApKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0b2dnbGVMaXN0W2ldXG4gICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgICAgIC5maWx0ZXIoKGZvdW5kRWxlbSkgPT4gZm91bmRFbGVtID09PSBlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfQUNUSVZFUykpXG4gICAgICAgIC5maWx0ZXIoKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKVxuICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKGAke0NMQVNTX05BTUVfQ09MTEFQU0V9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfQ09MTEFQU0V9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSlcbiAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERJTUVOU0lPTl9XSURUSClcbiAgICByZXR1cm4gaGFzV2lkdGggPyBESU1FTlNJT05fV0lEVEggOiBESU1FTlNJT05fSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCBwYXJlbnRcblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgICAkKGNoaWxkcmVuKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgW2VsZW1lbnRdXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgY29uc3QgaXNPcGVuID0gJChlbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbiAgfVxuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJHRoaXMuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0cmlnZ2VyID0gJCh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvcnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICQoc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgY29uZmlnICA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKVxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFICAgICAgICAgICAgPSAzMiAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcbmNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5jb25zdCBBUlJPV19ET1dOX0tFWUNPREUgICAgICAgPSA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbmNvbnN0IFJFR0VYUF9LRVlET1dOICAgICAgICAgICA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICAgICA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgICAgID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiAgICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgICAgICAgICAgICA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJICAgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSAgID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEICAgICAgICA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgICAgICAgICAgID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCAgICAgICAgICA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BSSUdIVCAgICAgICA9ICdkcm9wcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BMRUZUICAgICAgICA9ICdkcm9wbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfTUVOVVJJR0hUICAgICAgID0gJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyA9ICdwb3NpdGlvbi1zdGF0aWMnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9GT1JNX0NISUxEICAgID0gJy5kcm9wZG93biBmb3JtJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSAgICAgICAgICA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgICAgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QICAgICAgID0gJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgICAgPSAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gICAgPSAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUICAgICA9ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUICAgICAgPSAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0ICAgICAgIDogMCxcbiAgZmxpcCAgICAgICAgIDogdHJ1ZSxcbiAgYm91bmRhcnkgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHJlZmVyZW5jZSAgICA6ICd0b2dnbGUnLFxuICBkaXNwbGF5ICAgICAgOiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZyA6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwICAgICAgICAgOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5ICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5ICAgICAgOiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnIDogJyhudWxsfG9iamVjdCknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgID0gZWxlbWVudFxuICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ICAgICA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KHRydWUpXG4gIH1cblxuICBzaG93KHVzZVBvcHBlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERpc2FibGUgdG90YWxseSBQb3BwZXIuanMgZm9yIERyb3Bkb3duIGluIE5hdmJhclxuICAgIGlmICghdGhpcy5faW5OYXZiYXIgJiYgdXNlUG9wcGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgJChwYXJlbnQpLmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fbWVudSA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9NRU5VKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVudVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBsZXQgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTVxuXG4gICAgLy8gSGFuZGxlIGRyb3B1cFxuICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICBwbGFjZW1lbnQgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKVxuICAgICAgICA/IFBMQUNFTUVOVF9UT1BFTkRcbiAgICAgICAgOiBQTEFDRU1FTlRfVE9QXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfUklHSFRcbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0xFRlRcbiAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9NRU5VUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NRU5EXG4gICAgfVxuICAgIHJldHVybiBwbGFjZW1lbnRcbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5fZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlci5qcyBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBvcHBlckNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmXG4gICAgICAgICAgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgc3RhdGljIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgICA/IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSAmJlxuICAgICAgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHxcbiAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICQocGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfREFUQV9UT0dHTEUpKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMpKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gJChpdGVtKS5pcygnOnZpc2libGUnKSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19VUF9LRVlDT0RFICYmIGluZGV4ID4gMCkgeyAvLyBVcFxuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkgeyAvLyBEb3duXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihgJHtFVkVOVF9DTElDS19EQVRBX0FQSX0gJHtFVkVOVF9LRVlVUF9EQVRBX0FQSX1gLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuICAub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0ZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdtb2RhbCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjUuMidcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcCA6IHRydWUsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgZm9jdXMgICAgOiB0cnVlLFxuICBzaG93ICAgICA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wIDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gIHNob3cgICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEVWRU5UX0hJREUgICAgICAgICAgICAgID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCAgICA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICAgICAgPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyAgICAgICAgICAgICAgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOICAgICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiAgICAgICAgICAgPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSAgICAgICAgICAgID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgICAgID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgICA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgICA9IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJICAgID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NDUk9MTEFCTEUgICAgICAgICA9ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSdcbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCAgICAgICAgICAgPSAnbW9kYWwtYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX09QRU4gICAgICAgICAgICAgICA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFICAgICAgICAgICAgICAgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgICAgICAgICAgICAgID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyAgICAgICAgICAgICA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyAgICAgICAgID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZICAgICA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgID0gJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTICAgPSAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCAgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfRElBTE9HKVxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKClcbiAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgRVZFTlRfQ0xJQ0tfRElTTUlTUyxcbiAgICAgIFNFTEVDVE9SX0RBVEFfRElTTUlTUyxcbiAgICAgIChldmVudCkgPT4gdGhpcy5oaWRlKGV2ZW50KVxuICAgIClcblxuICAgICQodGhpcy5fZGlhbG9nKS5vbihFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFVkVOVF9NT1VTRURPV05fRElTTUlTUylcblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goKGh0bWxFbGVtZW50KSA9PiAkKGh0bWxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKSlcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFVkVOVF9GT0NVU0lOYCBhbmQgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgICQoZG9jdW1lbnQpLm9mZihFVkVOVF9GT0NVU0lOKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBudWxsXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSBudWxsXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFVkVOVF9ISURFX1BSRVZFTlRFRClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudFByZXZlbnRlZClcbiAgICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuXG4gICAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoVXRpbC5UUkFOU0lUSU9OX0VORClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IHRoaXMuX2RpYWxvZyA/IHRoaXMuX2RpYWxvZy5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX01PREFMX0JPRFkpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuXG4gICAgaWYgKCQodGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NDUk9MTEFCTEUpICYmIG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1dOLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcblxuICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoRVZFTlRfRk9DVVNJTikgLy8gR3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oRVZFTlRfRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQod2luZG93KS5vbihFVkVOVF9SRVNJWkUsIChldmVudCkgPT4gdGhpcy5oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHdpbmRvdykub2ZmKEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgICA/IENMQVNTX05BTUVfRkFERSA6ICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfSlcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgfVxuXG4gIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpXG4gICAgICBjb25zdCBzdGlja3lDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKSlcblxuICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3Qgc3RpY2t5IGNvbnRlbnQgbWFyZ2luXG4gICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbilcbiAgICAgICAgICAuY3NzKCdtYXJnaW4tcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgfVxuXG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpXG4gICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke1NFTEVDVE9SX1NUSUNLWV9DT05URU5UfWApKVxuICAgICQoZWxlbWVudHMpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtYXJnaW4gPSAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpXG4gICAgPyAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFVkVOVF9TSE9XLCAoc2hvd0V2ZW50KSA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjIpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl1cblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvZ2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcigoYXR0clJlZ2V4KSA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdFeHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3Qgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQod2hpdGVMaXN0WycqJ10gfHwgW10sIHdoaXRlTGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjIpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgRGVmYXVsdFdoaXRlbGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdG9vbHMvc2FuaXRpemVyJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICA9ICd0b29sdGlwJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYICAgICAgICAgID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggICAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ11cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZSAgICAgICAgICA6ICdzdHJpbmcnLFxuICB0aXRsZSAgICAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlciAgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbCAgICAgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yICAgICAgICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldCAgICAgICAgICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lciAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHNhbml0aXplICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuICAgICAgICA6ICcobnVsbHxmdW5jdGlvbiknLFxuICB3aGl0ZUxpc3QgICAgICAgICA6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWcgICAgICA6ICcobnVsbHxvYmplY3QpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPICAgOiAnYXV0bycsXG4gIFRPUCAgICA6ICd0b3AnLFxuICBSSUdIVCAgOiAncmlnaHQnLFxuICBCT1RUT00gOiAnYm90dG9tJyxcbiAgTEVGVCAgIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogdHJ1ZSxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAwLFxuICBodG1sICAgICAgICAgICAgICA6IGZhbHNlLFxuICBzZWxlY3RvciAgICAgICAgICA6IGZhbHNlLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICd0b3AnLFxuICBvZmZzZXQgICAgICAgICAgICA6IDAsXG4gIGNvbnRhaW5lciAgICAgICAgIDogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJ2ZsaXAnLFxuICBib3VuZGFyeSAgICAgICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICBzYW5pdGl6ZSAgICAgICAgICA6IHRydWUsXG4gIHNhbml0aXplRm4gICAgICAgIDogbnVsbCxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiBEZWZhdWx0V2hpdGVsaXN0LFxuICBwb3BwZXJDb25maWcgICAgICA6IG51bGxcbn1cblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUICA9ICdvdXQnXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5jb25zdCBTRUxFQ1RPUl9BUlJPVyAgICAgICAgID0gJy5hcnJvdydcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiAgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTICA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgIH1cblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgICAgID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSAgICA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyICAgICAgICA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbmZpZyAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwICAgICA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICAgIClcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyAgPSBudWxsXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KVxuICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgIHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgIClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGlwICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgY29uc3QgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnRcblxuICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG5cbiAgICAgICQodGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKVxuXG4gICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCB0aXAgICAgICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhPVkVSX1NUQVRFX1NIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcClcblxuICAgICAgJCh0aXApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICB9XG5cbiAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhgJHtDTEFTU19QUkVGSVh9LSR7YXR0YWNobWVudH1gKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0ZBREV9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcud2hpdGVMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50LnRleHQoY29udGVudClcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICB9LFxuICAgICAgICBhcnJvdzoge1xuICAgICAgICAgIGVsZW1lbnQ6IFNFTEVDVE9SX0FSUk9XXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25DcmVhdGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IChkYXRhKSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzQ29uZmlnLFxuICAgICAgLi4udGhpcy5jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5lbGVtZW50KSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gICAgfVxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICByZXR1cm4gJChkb2N1bWVudCkuZmluZCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5vbihcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLFxuICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgIChldmVudCkgPT4gdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUlxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUlxuICAgICAgICAgID8gdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFXG4gICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgLm9uKGV2ZW50SW4sIHRoaXMuY29uZmlnLnNlbGVjdG9yLCAoZXZlbnQpID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgICAub24oZXZlbnRPdXQsIHRoaXMuY29uZmlnLnNlbGVjdG9yLCAoZXZlbnQpID0+IHRoaXMuX2xlYXZlKGV2ZW50KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJydcbiAgICAgIClcblxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9PVVRcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9ICQodGhpcy5lbGVtZW50KS5kYXRhKClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKVxuICAgICAgLmZvckVhY2goKGRhdGFBdHRyKSA9PiB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIHRoaXMudGlwID0gcG9wcGVyRGF0YS5pbnN0YW5jZS5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHBvcHBlckRhdGEucGxhY2VtZW50KSlcbiAgfVxuXG4gIF9maXhUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvblxuXG4gICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGlwKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmhpZGUoKVxuICAgIHRoaXMuc2hvdygpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvblxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMik6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAncG9wb3ZlcidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC41LjInXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudCA6ICdyaWdodCcsXG4gIHRyaWdnZXIgICA6ICdjbGljaycsXG4gIGNvbnRlbnQgICA6ICcnLFxuICB0ZW1wbGF0ZSAgOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudCA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSAgID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgIC8vIFdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTRUxFQ1RPUl9USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgfVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNFTEVDVE9SX0NPTlRFTlQpLCBjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0ZBREV9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8XG4gICAgICB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQb3BvdmVyXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMik6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3Njcm9sbHNweSdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjUuMidcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0IDogMTAsXG4gIG1ldGhvZCA6ICdhdXRvJyxcbiAgdGFyZ2V0IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCA6ICdudW1iZXInLFxuICBtZXRob2QgOiAnc3RyaW5nJyxcbiAgdGFyZ2V0IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFICAgICAgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgICAgICAgID0gYHNjcm9sbCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSAgICAgICAgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSAgICAgICAgPSAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTICAgICAgID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyAgICAgICA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TICAgICAgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOICAgICAgICA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyAgPSAnLmRyb3Bkb3duLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgTUVUSE9EX09GRlNFVCAgID0gJ29mZnNldCdcbmNvbnN0IE1FVEhPRF9QT1NJVElPTiA9ICdwb3NpdGlvbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTElTVF9JVEVNU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfRFJPUERPV05fSVRFTVN9YFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRVZFTlRfU0NST0xMLCAoZXZlbnQpID0+IHRoaXMuX3Byb2Nlc3MoZXZlbnQpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3dcbiAgICAgID8gTUVUSE9EX09GRlNFVCA6IE1FVEhPRF9QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nXG4gICAgICA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT05cbiAgICAgID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cblxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcblxuICAgIHRhcmdldHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgVXRpbC5pc0VsZW1lbnQoY29uZmlnLnRhcmdldCkpIHtcbiAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUpXG4gICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgIH1cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3JcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAubWFwKChzZWxlY3RvcikgPT4gYCR7c2VsZWN0b3J9W2RhdGEtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgJGxpbmsgPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKVxuXG4gICAgaWYgKCRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICRsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pXG4gICAgICAgIC5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSlcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICRsaW5rLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAkbGluay5wYXJlbnRzKFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAucHJldihgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAkbGluay5wYXJlbnRzKFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAucHJldihTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgIC5jaGlsZHJlbihTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9XG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLnRyaWdnZXIoRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxTcHlzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfU1BZKSlcbiAgY29uc3Qgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHNweSwgJHNweS5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4yKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAndGFiJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFVkVOVF9ISURFICAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICAgPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyAgICAgICAgICAgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgICAgICAgID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRElTQUJMRUQgICAgICA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSAgICAgICAgICA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XICAgICAgICAgID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOICAgICAgICAgICAgICA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCAgICAgICAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgICAgICAgICAgICAgICAgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCAgICAgICAgICAgICA9ICc+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgICAgICAgICA9ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgICAgICAgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB0YXJnZXRcbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClbMF1cbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxuICAgICAgICBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQsXG4gICAgICBsaXN0RWxlbWVudFxuICAgIClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcblxuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKVxuICAgICAgPyAkKGNvbnRhaW5lcikuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwpXG4gICAgICA6ICQoY29udGFpbmVyKS5jaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2FsbGJhY2tcbiAgICApXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG5cbiAgICAgICQoYWN0aXZlKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChcbiAgICAgICAgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEXG4gICAgICApWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUpKVxuXG4gICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjIpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RvYXN0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNS4yJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgICAgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSAgICA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XICAgID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiA6ICdib29sZWFuJyxcbiAgYXV0b2hpZGUgIDogJ2Jvb2xlYW4nLFxuICBkZWxheSAgICAgOiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gOiB0cnVlLFxuICBhdXRvaGlkZSAgOiB0cnVlLFxuICBkZWxheSAgICAgOiA1MDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFVkVOVF9TSE9XTilcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpXG4gICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2Nsb3NlKClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0NMSUNLX0RJU01JU1MpXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgICA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnICA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb2FzdCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdICAgICAgICAgICAgID0gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvYXN0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9