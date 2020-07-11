/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(35);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(44)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(40);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(41);

var assertThisInitialized = __webpack_require__(9);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"title\":\"Nike Air Force 1 Low By You\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f07701e3-6343-4ff2-bdc6-9103aa7ec9b6/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-sdWCtF.jpg\",\"gallery\":[],\"price\":110,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"top\",\"key\":\"11\"},{\"id\":\"2\",\"title\":\"Nike Air Max 95\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e8e940f5-e1df-450f-b156-6c37f80b3ad5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-PmHJhh.jpg\",\"gallery\":[],\"price\":20,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"new\",\"key\":\"22\"},{\"id\":\"3\",\"title\":\"Nike Court Vintage Premium\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":100,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"sale\",\"key\":\"33\"},{\"id\":\"4\",\"title\":\"Nike Benassi JDI\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e8e940f5-e1df-450f-b156-6c37f80b3ad5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-PmHJhh.jpg\"],\"price\":31,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"top\",\"key\":\"44\"},{\"id\":\"5\",\"title\":\"Nike Benassi JDI\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":150,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"new\",\"key\":\"55\"},{\"id\":\"6\",\"title\":\"Nike Benassi JDI\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":1000,\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"status\":\"sale\",\"key\":\"66\"}]");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(36);
} else {}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(51));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(56));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(28));

var _Transition = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(16);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(47);
} else {}


/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"title\":\"Неплохие\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f07701e3-6343-4ff2-bdc6-9103aa7ec9b6/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-sdWCtF.jpg\",\"gallery\":[],\"price\":\"1234\",\"status\":\"top\",\"description\":\"text\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"1\"},{\"id\":\"2\",\"title\":\"Кашерные\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e8e940f5-e1df-450f-b156-6c37f80b3ad5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-PmHJhh.jpg\",\"gallery\":[],\"price\":\"1234\",\"description\":\"text\",\"status\":\"new\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"2\"},{\"id\":\"3\",\"title\":\"Для фраеров\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":\"1234\",\"description\":\"text\",\"status\":\"sale\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"3\"},{\"id\":\"4\",\"title\":\"Для фраеров\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":\"1234\",\"description\":\"text\",\"status\":\"top\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"4\"},{\"id\":\"5\",\"title\":\"Для фраеров\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":\"1234\",\"description\":\"text\",\"status\":\"new\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"5\"},{\"id\":\"6\",\"title\":\"Для фраеров\",\"src\":\"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-air-zoom-superrep-premium-x6Kv5r.jpg\",\"gallery\":[],\"price\":\"1234\",\"description\":\"text\",\"status\":\"sale\",\"caption\":\"Just for you\",\"header\":\"Неплохие\",\"altText\":\"New model\",\"key\":\"6\"}]");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(46)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24), __webpack_require__(50)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(13));

var _reactLifecyclesCompat = __webpack_require__(26);

var _PropTypes = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactLifecyclesCompat = __webpack_require__(26);

var _ChildMapping = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Home\",\"url\":\"/react/\",\"img\":\"https://i7.pngguru.com/preview/127/82/324/computer-icons-house-home-clip-art-cabin.jpg\"},{\"title\":\"Catalog\",\"url\":\"/catalog/\",\"img\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvqQy7nBPZJff0I2wX5FA4mxB0LAf7wyy-iA&usqp=CAU\"},{\"title\":\"Basket\",\"url\":\"/basket/\",\"img\":\"https://c7.hotpng.com/preview/833/426/329/5bbe6867ae693-thumbnail.jpg\"},{\"title\":\"Enter\",\"url\":\"/auth\",\"img\":\"https://cdn.imgbin.com/6/11/6/imgbin-avatar-user-profile-male-logo-profile-icon-hPsxpFsdzMBQwFaQ2jp2u117a.jpg\"}]");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(64);

var iterableToArray = __webpack_require__(65);

var unsupportedIterableToArray = __webpack_require__(66);

var nonIterableSpread = __webpack_require__(67);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(23),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(23),r=__webpack_require__(37);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(38);
} else {}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(45);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _addClass = _interopRequireDefault(__webpack_require__(52));

var _removeClass = _interopRequireDefault(__webpack_require__(55));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Transition = _interopRequireDefault(__webpack_require__(25));

var _PropTypes = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(53);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(54));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = __webpack_require__(13);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(30);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(30);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(13);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/less/app.less
var app = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(9);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(11);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/reactstrap/es/utils.js
 // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func, DOMElement, prop_types_default.a.shape({
  current: prop_types_default.a.any
})]);
var tagPropType = prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.shape({
  $$typeof: prop_types_default.a.symbol,
  render: prop_types_default.a.func
}), prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.shape({
  $$typeof: prop_types_default.a.symbol,
  render: prop_types_default.a.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Col.js






var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);
var columnProps = prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.shape({
  size: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number, prop_types_default.a.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  widths: prop_types_default.a.array
};
var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Col_Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames_default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames_default()(className, colClasses), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Col_Col.propTypes = propTypes;
Col_Col.defaultProps = defaultProps;
/* harmony default export */ var es_Col = (Col_Col);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Row.js






var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var rowColsPropType = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);
var Row_propTypes = {
  tag: tagPropType,
  noGutters: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  form: prop_types_default.a.bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};
var Row_defaultProps = {
  tag: 'div',
  widths: rowColWidths
};

var Row_Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form", "widths"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classnames_default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row_Row.propTypes = Row_propTypes;
Row_Row.defaultProps = Row_defaultProps;
/* harmony default export */ var es_Row = (Row_Row);
// EXTERNAL MODULE: ./src/components/includes/menu.json
var menu = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/thumb/index.js

function Thumb(props) {
  var url = props.url,
      styleClass = props.styleClass;
  return /*#__PURE__*/react_default.a.createElement("span", null, url != undefined ? /*#__PURE__*/react_default.a.createElement("img", {
    src: url,
    className: "img-thumbnail ".concat(styleClass)
  }) : /*#__PURE__*/react_default.a.createElement("img", {
    src: "https://www.bailaho.de/images/noimg.jpg",
    className: "img-thumbnail ".concat(styleClass)
  }));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var history_canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !history_canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !history_canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js
var esm = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(20);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(15);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
react_router_createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react_default.a.createElement(react_router_context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react_default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? react_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(react_default.a.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : tiny_invariant_esm(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react_default.a.createElement(react_router_Router, _extends({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      return react_default.a.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = react_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(react_router_context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react_default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var react_router_dom_forwardRef = react_default.a.forwardRef;

if (typeof react_router_dom_forwardRef === "undefined") {
  react_router_dom_forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = react_router_dom_forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== react_router_dom_forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react_default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = react_router_dom_forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== react_router_dom_forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// CONCATENATED MODULE: ./src/images/logo.png
/* harmony default export */ var logo = ("./../images/logo.png");
// EXTERNAL MODULE: ./src/components/includes/style/logo.style.less
var logo_style = __webpack_require__(42);

// EXTERNAL MODULE: ./src/components/includes/style/main.menu.style.less
var main_menu_style = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/includes/header.js








function Header(props) {
  return /*#__PURE__*/react_default.a.createElement(es_Col, {
    lg: "12",
    className: "header"
  }, /*#__PURE__*/react_default.a.createElement(es_Row, {
    className: "menu"
  }, /*#__PURE__*/react_default.a.createElement(es_Col, {
    lg: 3,
    md: 3,
    className: "logoDiv"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: logo,
    className: "logotype"
  }), /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "Company Name"), " "), /*#__PURE__*/react_default.a.createElement(es_Col, {
    lg: 9,
    md: 9,
    className: "menuList"
  }, /*#__PURE__*/react_default.a.createElement("ul", null, menu.map(function (item, i) {
    if (!props.auth) {
      return /*#__PURE__*/react_default.a.createElement("li", {
        key: i
      }, /*#__PURE__*/react_default.a.createElement(Thumb, {
        url: item.img
      }), /*#__PURE__*/react_default.a.createElement(Link, {
        to: item.url
      }, item.title));
    } else if (props.auth && item.title != "Enter") {
      return /*#__PURE__*/react_default.a.createElement("li", {
        key: i
      }, /*#__PURE__*/react_default.a.createElement(Thumb, {
        url: item.img
      }), /*#__PURE__*/react_default.a.createElement(Link, {
        to: item.url
      }, item.title));
    }
  })))));
}
// EXTERNAL MODULE: ./src/components/includes/style/footer.style.less
var footer_style = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/reactstrap/es/Container.js






var Container_propTypes = {
  tag: tagPropType,
  fluid: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var Container_defaultProps = {
  tag: 'div'
};

var Container_Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classnames_default()(className, containerClass), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container_Container.propTypes = Container_propTypes;
Container_Container.defaultProps = Container_defaultProps;
/* harmony default export */ var es_Container = (Container_Container);
// CONCATENATED MODULE: ./src/components/includes/footer.js




function Footer() {
  return /*#__PURE__*/react_default.a.createElement(es_Container, {
    fluid: true,
    className: "footer"
  }, /*#__PURE__*/react_default.a.createElement(es_Row, {
    className: "footBack justify-content-md-center"
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h3", null, "\u041E \u043D\u0430\u0441"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u0410\u0434\u0440\u0435\u0441")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u041C\u0435\u0441\u0442\u043E\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u0410\u0447\u0438\u0432\u043A\u0438")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u041F\u043E\u0431\u0435\u0434\u044B")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h3", null, "\u041E \u043D\u0430\u0441"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")), /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "aaa")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "rightFoot"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, "+375-29-000-00-00"), /*#__PURE__*/react_default.a.createElement("li", null, "+375-29-000-00-00")))), /*#__PURE__*/react_default.a.createElement(es_Row, {
    className: "rights"
  }, /*#__PURE__*/react_default.a.createElement(es_Col, {
    lg: 7,
    style: {
      paddingLeft: "0px"
    }
  }, "\xA9 All rights reserved"), /*#__PURE__*/react_default.a.createElement(es_Col, {
    lg: {
      offset: 2
    }
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: "#"
  }, "notSoMad.com"), " ")));
}
// EXTERNAL MODULE: ./src/pages/index/styles/index.style.less
var index_style = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext =
/*#__PURE__*/
react_default.a.createContext(null);

if (false) {}

/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return react_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (false) { var customStoreWarningMessage; }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(react_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react["useRef"])();
      var lastWrapperProps = Object(react["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react["useRef"])();
      var renderIsScheduled = Object(react["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react["useMemo"])(function () {
        return react_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react_default.a.createElement(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function redux_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      redux_ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      redux_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject_isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject_isPlainObject(value)) {
    warning_warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning_warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function connect_match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = connect_match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = connect_match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = connect_match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (/*#__PURE__*/createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(react["useContext"])(ReactReduxContext);

  if (false) {}

  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore =
/*#__PURE__*/
createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react["useRef"])();
  var latestSelector = Object(react["useRef"])();
  var latestSelectedState = Object(react["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {}

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js










setBatch(react_dom["unstable_batchedUpdates"]);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty_defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/reactstrap/es/CarouselItem.js











var CarouselItem_CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props.in,
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

    return react_default.a.createElement(react_transition_group["Transition"], _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classnames_default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return react_default.a.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(react_default.a.Component);

CarouselItem_CarouselItem.propTypes = _objectSpread({}, react_transition_group["Transition"].propTypes, {
  tag: tagPropType,
  in: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  slide: prop_types_default.a.bool,
  className: prop_types_default.a.string
});
CarouselItem_CarouselItem.defaultProps = _objectSpread({}, react_transition_group["Transition"].defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem_CarouselItem.contextTypes = {
  direction: prop_types_default.a.string
};
/* harmony default export */ var es_CarouselItem = (CarouselItem_CarouselItem);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Carousel.js







var SWIPE_THRESHOLD = 40;

var Carousel_Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'right';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'left';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'left' : 'right';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'right' : 'left';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return react_default.a.createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return react_default.a.cloneElement(item, {
        in: isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className;
    var outerClasses = mapToCssModules(classnames_default()(className, 'carousel', slide && 'slide'), cssModule);
    var innerClasses = mapToCssModules(classnames_default()('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === es_CarouselItem;
    }); // Rendering only slides

    if (slidesOnly) {
      return react_default.a.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(children, innerClasses));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return react_default.a.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = react_default.a.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return react_default.a.createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
  };

  return Carousel;
}(react_default.a.Component);

Carousel_Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: prop_types_default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: prop_types_default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: prop_types_default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: prop_types_default.a.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types_default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types_default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string, prop_types_default.a.bool]),
  children: prop_types_default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: prop_types_default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: prop_types_default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  className: prop_types_default.a.string,
  enableTouch: prop_types_default.a.bool
};
Carousel_Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true
};
Carousel_Carousel.childContextTypes = {
  direction: prop_types_default.a.string
};
/* harmony default export */ var es_Carousel = (Carousel_Carousel);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/CarouselControl.js





var CarouselControl_CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classnames_default()(className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classnames_default()("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classnames_default()('sr-only'), cssModule);
  return react_default.a.createElement("a", {
    className: anchorClasses,
    style: {
      cursor: "pointer"
    },
    role: "button",
    tabIndex: "0",
    onClick: function onClick(e) {
      e.preventDefault();
      onClickHandler();
    }
  }, react_default.a.createElement("span", {
    className: iconClasses,
    "aria-hidden": "true"
  }), react_default.a.createElement("span", {
    className: screenReaderClasses
  }, directionText || direction));
};

CarouselControl_CarouselControl.propTypes = {
  direction: prop_types_default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: prop_types_default.a.func.isRequired,
  cssModule: prop_types_default.a.object,
  directionText: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var es_CarouselControl = (CarouselControl_CarouselControl);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/CarouselIndicators.js





var CarouselIndicators_CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classnames_default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames_default()({
      active: activeIndex === idx
    }), cssModule);
    return react_default.a.createElement("li", {
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return react_default.a.createElement("ol", {
    className: listClasses
  }, indicators);
};

CarouselIndicators_CarouselIndicators.propTypes = {
  items: prop_types_default.a.array.isRequired,
  activeIndex: prop_types_default.a.number.isRequired,
  cssModule: prop_types_default.a.object,
  onClickHandler: prop_types_default.a.func.isRequired,
  className: prop_types_default.a.string
};
/* harmony default export */ var es_CarouselIndicators = (CarouselIndicators_CarouselIndicators);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/CarouselCaption.js





var CarouselCaption_CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classnames_default()(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return react_default.a.createElement("div", {
    className: classes
  }, react_default.a.createElement("h3", null, captionHeader), react_default.a.createElement("p", null, captionText));
};

CarouselCaption_CarouselCaption.propTypes = {
  captionHeader: prop_types_default.a.node,
  captionText: prop_types_default.a.node.isRequired,
  cssModule: prop_types_default.a.object,
  className: prop_types_default.a.string
};
/* harmony default export */ var es_CarouselCaption = (CarouselCaption_CarouselCaption);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/UncontrolledCarousel.js











var UncontrolledCarousel_propTypes = {
  items: prop_types_default.a.array.isRequired,
  indicators: prop_types_default.a.bool,
  controls: prop_types_default.a.bool,
  autoPlay: prop_types_default.a.bool,
  defaultActiveIndex: prop_types_default.a.number,
  activeIndex: prop_types_default.a.number,
  next: prop_types_default.a.func,
  previous: prop_types_default.a.func,
  goToIndex: prop_types_default.a.func
};

var UncontrolledCarousel_UncontrolledCarousel =
/*#__PURE__*/
function (_Component) {
  Object(inheritsLoose["a" /* default */])(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.previous = function previous() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        defaultActiveIndex = _this$props.defaultActiveIndex,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return react_default.a.createElement(es_CarouselItem, {
        onExiting: _this2.onExiting,
        onExited: _this2.onExited,
        key: key
      }, react_default.a.createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), react_default.a.createElement(es_CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return react_default.a.createElement(es_Carousel, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && react_default.a.createElement(es_CarouselIndicators, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && react_default.a.createElement(es_CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && react_default.a.createElement(es_CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(react["Component"]);

UncontrolledCarousel_UncontrolledCarousel.propTypes = UncontrolledCarousel_propTypes;
UncontrolledCarousel_UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
/* harmony default export */ var es_UncontrolledCarousel = (UncontrolledCarousel_UncontrolledCarousel);
// CONCATENATED MODULE: ./src/pages/index/Carousel.js



var index_Carousel_Carousel = function Carousel() {
  return /*#__PURE__*/react_default.a.createElement(es_UncontrolledCarousel, {
    items: topItems
  });
};

/* harmony default export */ var index_Carousel = (index_Carousel_Carousel);

var Carousel_items = __webpack_require__(18);

var topItems = [];
Carousel_items.map(function (item) {
  item.status === "top" ? topItems.push(item) : null;
});
// EXTERNAL MODULE: ./src/pages/index/styles/carousel.style.less
var carousel_style = __webpack_require__(58);

// EXTERNAL MODULE: ./src/pages/index/items.json
var index_items = __webpack_require__(18);

// CONCATENATED MODULE: ./src/pages/index/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var index_Index = /*#__PURE__*/function (_Component) {
  inherits_default()(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    classCallCheck_default()(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      items: {}
    };
    return _this;
  }

  createClass_default()(Index, [{
    key: "render",
    value: function render() {
      console.log("------------------", index_items);
      console.log("------------------", this.props);
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "cont"
      }, /*#__PURE__*/react_default.a.createElement(es_Row, {
        className: "carouselContain"
      }, /*#__PURE__*/react_default.a.createElement(index_Carousel, {
        className: "carousel"
      })), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: {
          size: 6,
          offset: 3
        },
        className: "descript"
      }, "\u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E \u0442\u043E\u043C \u0447\u0442\u043E \u0442\u0432\u043E\u0440\u0438\u0442\u0441\u044F, \u043F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F, \u0441\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F, \u0438 \u0431\u043B\u0430\u0431\u043B\u0430\u0431\u043B\u0430. \u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E \u0442\u043E\u043C \u0447\u0442\u043E \u0442\u0432\u043E\u0440\u0438\u0442\u0441\u044F, \u043F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F, \u0441\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F, \u0438 \u0431\u043B\u0430\u0431\u043B\u0430\u0431\u043B\u0430. \u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E \u0442\u043E\u043C \u0447\u0442\u043E \u0442\u0432\u043E\u0440\u0438\u0442\u0441\u044F, \u043F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F, \u0441\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F, \u0438 \u0431\u043B\u0430\u0431\u043B\u0430\u0431\u043B\u0430. \u0417\u0434\u0435\u0441\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E \u0442\u043E\u043C \u0447\u0442\u043E \u0442\u0432\u043E\u0440\u0438\u0442\u0441\u044F, \u043F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F, \u0441\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F, \u0438 \u0431\u043B\u0430\u0431\u043B\u0430\u0431\u043B\u0430.")));
    }
  }]);

  return Index;
}(react["Component"]);

var mapStateFromProps = function mapStateFromProps(state) {
  return {};
};

/* harmony default export */ var pages_index = (connect_connect(mapStateFromProps)(index_Index));
// EXTERNAL MODULE: ./src/pages/basket/styles/index.style.less
var styles_index_style = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/reactstrap/es/Card.js






var Card_propTypes = {
  tag: tagPropType,
  inverse: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  body: prop_types_default.a.bool,
  outline: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var Card_defaultProps = {
  tag: 'div'
};

var Card_Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

  var classes = mapToCssModules(classnames_default()(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card_Card.propTypes = Card_propTypes;
Card_Card.defaultProps = Card_defaultProps;
/* harmony default export */ var es_Card = (Card_Card);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/CardImg.js






var CardImg_propTypes = {
  tag: tagPropType,
  top: prop_types_default.a.bool,
  bottom: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var CardImg_defaultProps = {
  tag: 'img'
};

var CardImg_CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "top", "bottom", "tag"]);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classnames_default()(className, cardImgClassName), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardImg_CardImg.propTypes = CardImg_propTypes;
CardImg_CardImg.defaultProps = CardImg_defaultProps;
/* harmony default export */ var es_CardImg = (CardImg_CardImg);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/CardBody.js






var CardBody_propTypes = {
  tag: tagPropType,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var CardBody_defaultProps = {
  tag: 'div'
};

var CardBody_CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

  var classes = mapToCssModules(classnames_default()(className, 'card-body'), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody_CardBody.propTypes = CardBody_propTypes;
CardBody_CardBody.defaultProps = CardBody_defaultProps;
/* harmony default export */ var es_CardBody = (CardBody_CardBody);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Button.js








var Button_propTypes = {
  active: prop_types_default.a.bool,
  'aria-label': prop_types_default.a.string,
  block: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  outline: prop_types_default.a.bool,
  tag: tagPropType,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  close: prop_types_default.a.bool
};
var Button_defaultProps = {
  color: 'secondary',
  tag: 'button'
};

var Button_Button =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = react_default.a.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classnames_default()(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return react_default.a.createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(react_default.a.Component);

Button_Button.propTypes = Button_propTypes;
Button_Button.defaultProps = Button_defaultProps;
/* harmony default export */ var es_Button = (Button_Button);
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [{
  "id": "fa",
  "name": "Font Awesome",
  "projectUrl": "https://fontawesome.com/",
  "license": "CC BY 4.0 License",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}, {
  "id": "io",
  "name": "Ionicons",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "md",
  "name": "Material Design icons",
  "projectUrl": "http://google.github.io/material-design-icons/",
  "license": "Apache License Version 2.0",
  "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
  "id": "ti",
  "name": "Typicons",
  "projectUrl": "http://s-ings.com/typicons/",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  "id": "go",
  "name": "Github Octicons icons",
  "projectUrl": "https://octicons.github.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
  "id": "fi",
  "name": "Feather",
  "projectUrl": "https://feathericons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
  "id": "gi",
  "name": "Game Icons",
  "projectUrl": "https://game-icons.net/",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
}, {
  "id": "wi",
  "name": "Weather Icons",
  "projectUrl": "https://erikflowers.github.io/weather-icons/",
  "license": "SIL OFL 1.1",
  "licenseUrl": "http://scripts.sil.org/OFL"
}, {
  "id": "di",
  "name": "Devicons",
  "projectUrl": "https://vorillaz.github.io/devicons/",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ai",
  "name": "Ant Design Icons",
  "projectUrl": "https://github.com/ant-design/ant-design-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "bs",
  "name": "Bootstrap Icons",
  "projectUrl": "https://github.com/twbs/icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ri",
  "name": "Remix Icon",
  "projectUrl": "https://github.com/Remix-Design/RemixIcon",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "fc",
  "name": "Flat Color Icons",
  "projectUrl": "https://github.com/icons8/flat-color-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "gr",
  "name": "Grommet-Icons",
  "projectUrl": "https://github.com/grommet/grommet-icons",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}];
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react["createContext"] && react["createContext"](DefaultContext);
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react["createElement"](node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react["createElement"](IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return react["createElement"]("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react["createElement"]("title", null, title), props.children);
  };

  return IconContext !== undefined ? react["createElement"](IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js



// CONCATENATED MODULE: ./node_modules/react-icons/gr/index.esm.js
// THIS FILE IS AUTO GENERATED

var GrAccessibility = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4,8 L11,8 L11,14 L7,21 M20,8 L13,8 L13,14 L17,21 M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z M11,8 L13,8 L13,13 L11,13 L11,8 Z"}}]})(props);
};
GrAccessibility.displayName = "GrAccessibility";
var GrAchievement = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10.3248685,14.7630919 C7.82620532,14.038202 6,11.7325889 6,9 L6,1 L18,1 L18,10 M6,3 L1,3 L1,7 C1,9.509 2.791,11 5,11 L6,11 M20.0335555,10.884915 C21.7416567,10.4908882 23,9.10306372 23,7 L23,3 L18,3 M10,19 L5,19 L5,23 L16.5,23 M16.5,10 C12.9101429,10 10,12.9101429 10,16.5 C10,20.0898571 12.9101429,23 16.5,23 C20.0898571,23 23,20.0898571 23,16.5 C23,12.9101429 20.0898571,10 16.5,10 L16.5,10 Z M20,14 L15.5,18.5 L13,16 M10.2056405,15.4240751 C8.89754812,16.0817472 8,17.4360568 8,19"}}]})(props);
};
GrAchievement.displayName = "GrAchievement";
var GrAction = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L4,20 L1,23 Z M20,4 L23,1 L20,4 Z M9,11 L12,8 L9,11 Z M13,15 L16,12 L13,15 Z M10,5 L19,14 L20,13 C22,11 24.0533047,8.00000006 20,4 C15.9466953,-5.91784286e-08 13,2 11,4 L10,5 Z M4,11 L5,10 L14,19 L13,20 C11.0000005,22 7.9999999,24.0873857 4,20 C9.84858655e-08,15.9126143 2,13 4,11 Z"}}]})(props);
};
GrAction.displayName = "GrAction";
var GrActions = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,17.5 C15.0375661,17.5 17.5,15.0375661 17.5,12 C17.5,8.96243388 15.0375661,6.5 12,6.5 C8.96243388,6.5 6.5,8.96243388 6.5,12 C6.5,15.0375661 8.96243388,17.5 12,17.5 Z M12,6.5 L12,1 M12,23 L12,17.5 M1,12 L6.5,12 M17.5,12 L23,12 M4.4375,4.4375 L8.5625,8.5625 M15.4375,15.4375 L19.5625,19.5625 M19.5625,4.4375 L15.4375,8.5625 M8.5625,15.4375 L4.4375,19.5625"}}]})(props);
};
GrActions.displayName = "GrActions";
var GrAd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10,10 L14,10 L14,14 L10,14 L10,10 Z M14,18 L10,18 C7.790861,18 6,16.209139 6,14 L6,10 C6,7.790861 7.790861,6 10,6 L10,6 L14,6 C16.209139,6 18,7.790861 18,10 L18,14 M14,22 L10,22 C5.581722,22 2,18.418278 2,14 L2,10 C2,5.581722 5.581722,2 10,2 L10,2 L14,2 C18.418278,2 22,5.581722 22,10 L22,14"}}]})(props);
};
GrAd.displayName = "GrAd";
var GrAddCircle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"}}]})(props);
};
GrAddCircle.displayName = "GrAddCircle";
var GrAdd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 L12,2 M2,12 L22,12"}}]})(props);
};
GrAdd.displayName = "GrAdd";
var GrAed = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,8.4 C2,4 5,3 7,3 C9,3 11,5 12,6.5 C13,5 15,3 17,3 C19,3 22,4 22,8.4 C22,15 12,21 12,21 C12,21 2,15 2,8.4 Z M12,6 C11.5,5.5 10,10 10,10 L12,10 L12,12.5 L14,9 L12,9 C12,9 13,3 17,3 C13,3 12,6 12,6 Z"}}]})(props);
};
GrAed.displayName = "GrAed";
var GrAggregate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,9 L9,9 L9,16 L9,16 C9,19.8659932 12.1340068,23 16,23 L16,23 C19.8659932,23 23,19.8659932 23,16 C23,12.1340068 19.8659932,9 16,9 L16,9 Z M8,15 L15,15 L15,8 L15,8 C15,4.13400675 11.8659932,1 8,1 L8,1 C4.13400675,1 1,4.13400675 1,8 C1,11.8659932 4.13400675,15 8,15 L8,15 Z","transform":"rotate(180 12 12)"}}]})(props);
};
GrAggregate.displayName = "GrAggregate";
var GrAidOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,9 L12,19 L12,9 Z M17,14 L7,14 L17,14 Z M1,6.99508929 C1,5.8932319 1.88967395,5 2.991155,5 L21.008845,5 C22.1085295,5 23,5.8926228 23,6.99508929 L23,21.0049107 C23,22.1067681 22.1103261,23 21.008845,23 L2.991155,23 C1.89147046,23 1,22.1073772 1,21.0049107 L1,6.99508929 Z M7,5 L7,2.0093689 C7,1.45190985 7.4556644,1 7.99539757,1 L16.0046024,1 C16.5543453,1 17,1.44335318 17,2.0093689 L17,5"}}]})(props);
};
GrAidOption.displayName = "GrAidOption";
var GrAid = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,22 L23,22 L23,6 L1,6 L1,22 Z M8,6 L16,6 L16,2 L8,2 L8,6 Z M8,14 L16,14 M12,10 L12,18"}}]})(props);
};
GrAid.displayName = "GrAid";
var GrAlarm = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M21,13 C21,17.971 16.971,22 12,22 C7.029,22 3,17.971 3,13 C3,8.029 7.029,4 12,4 C16.971,4 21,8.029 21,13 L21,13 Z M5.5,19.5 L2,23 L5.5,19.5 Z M18.5,19.5 L22,23 L18.5,19.5 Z M9,4 C8.29078014,2.90780142 6.88179669,2 5,2 C2.90070922,2 1,3.90070922 1,6 C1,7.88179669 1.90780142,9.29078014 3,10 M21,10 C22.0921986,9.29078014 23,7.88179669 23,6 C23,3.90070922 21.0992908,2 19,2 C17.1182033,2 15.7092199,2.90780142 15,4 M12,8 L12,13 L15,16"}}]})(props);
};
GrAlarm.displayName = "GrAlarm";
var GrAlert = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,17 L12,19 M12,10 L12,16 M12,3 L2,22 L22,22 L12,3 Z"}}]})(props);
};
GrAlert.displayName = "GrAlert";
var GrAmazon = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.9924596,23.9397465 C8.83711397,23.9185077 6.03567124,22.8789612 3.53203329,20.9850151 C2.63838806,20.3088366 1.82646601,19.5437784 1.08564773,18.7032301 C1.0593301,18.6732188 1.01408224,18.6445926 1.01108111,18.6122727 C0.999538287,18.4963828 1.00253942,18.3793386 1,18.2627561 C1.10019169,18.278916 1.21815932,18.2662189 1.29780479,18.3156222 C1.96751928,18.7327798 2.61183957,19.1935692 3.29817573,19.5802537 C5.2872347,20.7005999 7.41480753,21.4266434 9.67581537,21.7720046 C10.8557226,21.9520726 12.0409395,22.0114027 13.2256946,21.9426075 C15.4894728,21.8114811 17.6530592,21.2481914 19.7120677,20.2936001 C20.0373444,20.1428508 20.3561571,19.9780193 20.6756624,19.8152656 C20.8303362,19.7363127 20.9829323,19.7039928 21.1142896,19.8425066 C21.2530343,19.9886387 21.247032,20.165013 21.1503032,20.3279977 C21.0948977,20.4217254 21.0106351,20.5020634 20.9279885,20.5757066 C19.0869085,22.2092467 16.9334797,23.2123179 14.5316495,23.6788787 C13.7001046,23.8404782 12.8480135,23.8958838 12.0051567,24 C12.0010013,23.9799155 11.996615,23.959831 11.9924596,23.9397465 M20.882048,18.8454608 C20.4263375,18.8890927 19.9207619,18.9387268 19.4149554,18.9848981 C19.3041444,18.9950558 19.1914864,19.0015197 19.0806753,18.9948249 C18.9532426,18.9872066 18.9329272,18.9087155 19.0026459,18.8159112 C19.0442,18.7605056 19.1065313,18.718028 19.1653996,18.6783207 C19.7005248,18.3191081 20.3062921,18.1618949 20.9339907,18.0787866 C21.5298312,17.9998337 22.124979,18.0183022 22.7074298,18.1743612 C23.1005783,18.2796317 23.186226,18.3269573 23.1569073,18.7845147 C23.0793395,19.9902778 22.691039,21.086615 21.8167857,21.9673322 C21.7719996,22.0125801 21.7297528,22.0707559 21.6743473,22.0926873 C21.6004732,22.1217752 21.5148255,22.1213135 21.4342566,22.1335489 C21.4361035,22.0601365 21.4208669,21.9809528 21.4427983,21.9142353 C21.6512617,21.2800727 21.8689593,20.6489112 22.0762683,20.0145177 C22.1178225,19.8873158 22.1335207,19.750418 22.1494498,19.6165213 C22.2002382,19.1887443 22.0291736,18.9735861 21.575079,18.9070995 C21.3631528,18.8761647 21.1479946,18.8683156 20.882048,18.8454608 M13.9965473,9.42010077 C13.1377614,9.41525279 12.3166051,9.45242067 11.5310007,9.71582785 C11.142931,9.84603088 10.7495517,10.0110932 10.4155024,10.2426422 C9.49276931,10.8818837 9.25267863,11.8334739 9.32863039,12.8935666 C9.36879941,13.4550094 9.53755546,13.9746672 9.95171189,14.381898 C10.5401649,14.9604242 11.5307698,15.0363759 12.3260702,14.5663522 C13.0193321,14.1565821 13.4325651,13.5242663 13.7008203,12.7873726 C14.0960465,11.7021166 13.9716148,10.5713818 13.9965473,9.42010077 M14.6290939,15.7725771 C14.3204389,16.0535293 14.0353312,16.3183217 13.744683,16.5768809 C12.627107,17.5707178 11.3066083,18.0146547 9.82427914,18.0444352 C9.01951364,18.0605951 8.22929209,17.9998799 7.47600757,17.7023059 C6.13427002,17.1720287 5.2787161,16.1915815 4.93173889,14.8002098 C4.5009608,13.0722494 4.64640035,11.4084672 5.66886346,9.89797358 C6.4246874,8.7815519 7.51779258,8.11783967 8.77988467,7.71153236 C9.86283216,7.36293915 10.983871,7.2101122 12.1092961,7.08406459 C12.726837,7.01480766 13.3450705,6.953169 13.9928536,6.88506635 C13.9734617,6.11169732 14.0833494,5.33578887 13.8116313,4.5880449 C13.5708481,3.92571782 13.0622714,3.58520459 12.3976357,3.43283935 C11.3913326,3.20221378 10.250671,3.57758633 9.70977435,4.37103986 C9.52624349,4.64044931 9.41404727,4.9684963 9.31547158,5.28407703 C9.17649601,5.72870651 8.97195721,5.87345349 8.51024436,5.81850966 C7.60782659,5.71162313 6.70333111,5.62297427 5.80091334,5.51747288 C5.35328272,5.46483761 5.17575413,5.20997212 5.26301786,4.77503861 C5.65986006,2.79567561 6.80629307,1.4123839 8.67207471,0.684262729 C10.8742142,-0.174984891 13.1252952,-0.241702398 15.3569843,0.578992199 C17.2063751,1.25909523 18.2221434,2.61445331 18.3574252,4.59243118 C18.402904,5.26006796 18.4093679,5.9311676 18.4121382,6.60088209 C18.4192948,8.33299786 18.4276056,10.0651136 18.4093679,11.7969985 C18.3992103,12.7615167 18.6667729,13.6175323 19.2531482,14.3791277 C19.3939706,14.5624277 19.5366399,14.7461894 19.6559926,14.9433408 C19.8538366,15.2702335 19.8009705,15.5181733 19.5149394,15.7649588 C18.7780456,16.4007374 18.0425371,17.0383629 17.3074902,17.67645 C16.9027989,18.0275826 16.6223083,18.0227347 16.2153085,17.6799129 C15.679029,17.2281268 15.2385549,16.6964645 14.8583344,16.1110126 C14.7890775,16.0043569 14.715896,15.9002407 14.6290939,15.7725771"}}]})(props);
};
GrAmazon.displayName = "GrAmazon";
var GrAmex = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.31351102,11.9651322 L3.49408345,9.96838176 L2.67933919,11.9651322 L4.31351102,11.9651322 Z M12.1730058,14.1264026 L12.1684736,10.2036046 L10.4324776,14.1264026 L9.38130189,14.1264026 L7.64077369,10.2001299 L7.64077369,14.1264026 L5.20575645,14.1264026 L4.74573489,13.0092074 L2.25300723,13.0092074 L1.78830236,14.1264026 L0.488004966,14.1264026 L2.63190183,9.11768179 L4.41065186,9.11768179 L6.44683267,13.8599073 L6.44683267,9.11768179 L8.40082901,9.11768179 L9.96762165,12.5154962 L11.4069075,9.11768179 L13.4001832,9.11768179 L13.4001832,14.1264026 L12.1730058,14.1264026 Z M15.3055732,13.1015049 L15.3055732,12.104716 L17.9339657,12.104716 L17.9339657,11.0825466 L15.3055732,11.0825466 L15.3055732,10.171719 L18.3071194,10.171719 L19.6166324,11.6317021 L18.2491069,13.1015049 L15.3055732,13.1015049 Z M23.4171068,14.1455801 L21.8614469,14.1455801 L20.3872629,12.4870853 L18.8552174,14.1455801 L14.1129918,14.1455801 L14.1129918,9.13565077 L18.9281863,9.13565077 L20.4011617,10.7778295 L21.9239917,9.13565077 L23.488005,9.13565077 L21.1613628,11.6406155 L23.4171068,14.1455801 Z"}}]})(props);
};
GrAmex.displayName = "GrAmex";
var GrAnalytics = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,7 C21.25,8.67 22,10.75 22,13 C22,18.52 17.52,23 12,23 C6.48,23 2,18.52 2,13 C2,7.48 6.48,3 12,3 M12,1 L12,13 L21.6,5.8 C19.41,2.89 15.92,1 12,1 L12,1 Z"}}]})(props);
};
GrAnalytics.displayName = "GrAnalytics";
var GrAnchor = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M20,17 C20.5522847,17 21,16.5522847 21,16 C21,15.4477153 20.5522847,15 20,15 C19.4477153,15 19,15.4477153 19,16 C19,16.5522847 19.4477153,17 20,17 Z M4,17 C4.55228475,17 5,16.5522847 5,16 C5,15.4477153 4.55228475,15 4,15 C3.44771525,15 3,15.4477153 3,16 C3,16.5522847 3.44771525,17 4,17 Z M12,6 L12,21 L12,21 M4,15.9733241 C6.19364176,19.3244414 8.86035276,21 12.000133,21 C15.1399132,21 17.8065356,19.3244414 20,15.9733241 M16,10 L8,10"}}]})(props);
};
GrAnchor.displayName = "GrAnchor";
var GrAndroid = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.68524564,7.91390616 L18.4032637,7.91390616 L18.4032637,18.2777185 C18.4032637,18.8934049 17.9041016,19.392567 17.2891666,19.392567 L16.0152889,19.392567 L16.0152889,22.54887 C16.0152889,23.3504036 15.3759782,24 14.5867968,24 C13.7955958,24 13.1572245,23.3504036 13.1572245,22.54887 L13.1572245,19.392567 L10.9323651,19.392567 L10.9323651,22.54887 C10.9323651,23.3504036 10.2917863,24 9.50265183,24 C8.71365828,24 8.07312646,23.3504036 8.07312646,22.54887 L8.07312646,19.392567 L6.80037593,19.392567 C6.18530006,19.392567 5.68519867,18.8934049 5.68519867,18.2777185 L5.68519867,7.91390616 L5.68524564,7.91390616 Z M3.19295784,7.82931914 C2.39574512,7.82931914 1.75,8.48511514 1.75,9.2946801 L1.75,15.0216583 C1.75,15.8302839 2.39574512,16.4872071 3.19295784,16.4872071 C3.99031146,16.4872071 4.63591568,15.8302839 4.63591568,15.0216583 L4.63591568,9.2946801 C4.63591568,8.48511514 3.99031146,7.82931914 3.19295784,7.82931914 L3.19295784,7.82931914 Z M18.4033106,6.86955468 L5.68524564,6.86955468 C5.84220834,5.05767343 7.01754994,3.49847301 8.70952521,2.59567916 L7.50032062,0.820150132 C7.33725225,0.580713909 7.39877862,0.254013563 7.63868451,0.0909921564 C7.8783086,-0.07202925 8.20435141,-0.0100332096 8.36821822,0.229215147 L9.68615071,2.16574601 C10.4168586,1.91306518 11.2100322,1.76798505 12.0442547,1.76798505 C12.8794634,1.76798505 13.672684,1.91306518 14.4033449,2.16607478 L15.7212774,0.229919647 C15.8831246,-0.00998624287 16.2102007,-0.0719822833 16.4498248,0.0910391231 C16.6897307,0.25406053 16.7512571,0.580760876 16.5881887,0.820197099 L15.3799704,2.59572613 C17.0718987,3.49795638 18.2464419,5.0571568 18.4033106,6.86955468 L18.4033106,6.86955468 Z M10.0653129,4.40760737 C10.0653129,4.01905189 9.75068296,3.70390535 9.36226837,3.70390535 C8.97286748,3.70390535 8.65823758,4.01905189 8.65823758,4.40760737 C8.65823758,4.79597499 8.97390075,5.11098063 9.36226837,5.11098063 C9.75063599,5.11098063 10.0653129,4.79597499 10.0653129,4.40760737 L10.0653129,4.40760737 Z M15.5194145,4.40760737 C15.5194145,4.01905189 15.2037044,3.70390535 14.8153837,3.70390535 C14.4259828,3.70390535 14.1122923,4.01905189 14.1122923,4.40760737 C14.1122923,4.79597499 14.4259828,5.11098063 14.8153837,5.11098063 C15.2037514,5.11098063 15.5194145,4.79597499 15.5194145,4.40760737 L15.5194145,4.40760737 Z M20.8965378,7.82729957 C20.1001704,7.82729957 19.4525936,8.48408187 19.4525936,9.2936938 L19.4525936,15.0226915 C19.4525936,15.8323035 20.1001704,16.4892736 20.8965378,16.4892736 C21.6939384,16.4892736 22.3384623,15.8323504 22.3384623,15.0226915 L22.3384623,9.2936938 C22.3385093,8.48408187 21.6939384,7.82729957 20.8965378,7.82729957 L20.8965378,7.82729957 Z"}}]})(props);
};
GrAndroid.displayName = "GrAndroid";
var GrAnnounce = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"}}]})(props);
};
GrAnnounce.displayName = "GrAnnounce";
var GrAppleAppStore = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3,17 C2.44771525,17 2,16.5522847 2,16 C2,15.4477153 2.44771525,15 3,15 L13.5,15 C14.5,15 15.5,17 15,17 L3,17 Z M17,17 C16.4477153,17 16,16.5522847 16,16 C16,15.4477153 16.4477153,15 17,15 L21,15 C21.5522847,15 22,15.4477153 22,16 C22,16.5522847 21.5522847,17 21,17 L17,17 Z M12.6333775,3.50103556 C12.908948,3.02241319 13.5203421,2.85780709 13.9989644,3.13337754 C14.4775868,3.408948 14.6421929,4.02034208 14.3666225,4.49896444 L7.45953351,16.4954873 C7.18396306,16.9741097 6.57256898,17.1387158 6.09394661,16.8631454 C5.61532424,16.5875749 5.45071815,15.9761808 5.7262886,15.4975585 L12.6333775,3.50103556 Z M4,18.5 C4.5,17.5 7.5,16.5 6.5,18.2208385 C6.32221095,18.5267848 5.77775177,19.4528267 4.86662246,20.9989644 C4.591052,21.4775868 3.97965792,21.6421929 3.50103556,21.3666225 C3.02241319,21.091052 2.85780709,20.4796579 3.13337754,20.0010356 L4,18.5 Z M9.13337754,4.49896444 C8.85780709,4.02034208 9.02241319,3.408948 9.50103556,3.13337754 C9.97965792,2.85780709 10.591052,3.02241319 10.8666225,3.50103556 L12.6104584,6.52980328 C12.8860289,7.00842564 12.7214228,7.61981972 12.2428004,7.89539018 C11.764178,8.17096063 11.152784,8.00635453 10.8772135,7.52773217 L9.13337754,4.49896444 Z M13,11.5 C12.1018662,10 13,7 13.7163439,8.49589818 L20.3666225,20.0010356 C20.6421929,20.4796579 20.4775868,21.091052 19.9989644,21.3666225 C19.5203421,21.6421929 18.908948,21.4775868 18.6333775,20.9989644 L13,11.5 Z"}}]})(props);
};
GrAppleAppStore.displayName = "GrAppleAppStore";
var GrApple = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.3007013,3.832 C16.1387013,2.818 16.7027013,1.405 16.5487013,0 C15.3407013,0.049 13.8797013,0.805 13.0137013,1.819 C12.2367013,2.717 11.5567013,4.154 11.7407013,5.531 C13.0867013,5.636 14.4627013,4.847 15.3007013,3.832 M18.3207013,12.75 C18.3547013,16.382 21.5067013,17.591 21.5417013,17.607 C21.5157013,17.692 21.0387013,19.329 19.8807013,21.02 C18.8807013,22.482 17.8427013,23.939 16.2067013,23.969 C14.5997013,23.998 14.0837013,23.016 12.2457013,23.016 C10.4097013,23.016 9.83570131,23.939 8.31370131,23.998 C6.73570131,24.058 5.53370131,22.417 4.52470131,20.961 C2.46370131,17.981 0.888701307,12.541 3.00370131,8.869 C4.05470131,7.045 5.93170131,5.89 7.96970131,5.861 C9.51970131,5.831 10.9827013,6.904 11.9307013,6.904 C12.8777013,6.904 14.6557013,5.614 16.5247013,5.803 C17.3077013,5.836 19.5037013,6.119 20.9147013,8.184 C20.8007013,8.254 18.2937013,9.714 18.3207013,12.75"}}]})(props);
};
GrApple.displayName = "GrApple";
var GrApps = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,5 L21,5 L21,3 L19,3 L19,5 Z M11,5 L13,5 L13,3 L11,3 L11,5 Z M3,5 L5,5 L5,3 L3,3 L3,5 Z M19,13 L21,13 L21,11 L19,11 L19,13 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M3,13 L5,13 L5,11 L3,11 L3,13 Z M19,21 L21,21 L21,19 L19,19 L19,21 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M3,21 L5,21 L5,19 L3,19 L3,21 Z"}}]})(props);
};
GrApps.displayName = "GrApps";
var GrArchive = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,23 L21,23 L21,6 L3,6 L3,23 Z M9,14 L15,14 L15,10 L9,10 L9,14 Z M1,6 L23,6 L23,1 L1,1 L1,6 Z"}}]})(props);
};
GrArchive.displayName = "GrArchive";
var GrArchlinux = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.995499,0 C10.9272763,2.61898783 10.2829772,4.33212022 9.09364861,6.87325951 C9.82285899,7.64621596 10.7179267,8.54636058 12.1714997,9.56299285 C10.6087581,8.91993273 9.54277553,8.27431817 8.74615646,7.60436135 C7.22404876,10.7804724 4.83934636,15.3047005 0,24 C3.8035621,21.8041428 6.75200705,20.4503725 9.49981901,19.9338097 C9.38183641,19.4263273 9.31474077,18.8773854 9.31929729,18.3046251 L9.32381903,18.1827747 C9.38418076,15.7459387 10.6518189,13.8720119 12.1534614,13.9992474 C13.6551031,14.1264836 14.8223099,16.2062608 14.7619552,18.6430989 C14.7506091,19.1016345 14.6988943,19.5427398 14.6085152,19.9518612 C17.3264906,20.483546 20.2434156,21.8338506 23.9955134,24 C23.2556658,22.6379048 22.5952972,21.4100753 21.9646676,20.2406911 C20.9713321,19.4707837 19.9352208,18.4687462 17.8217601,17.3839783 C19.2744348,17.7614433 20.3145182,18.1969375 21.1252451,18.6837145 C14.7134752,6.74608943 14.1942543,5.15982659 11.995499,0 L11.995499,0 Z"}}]})(props);
};
GrArchlinux.displayName = "GrArchlinux";
var GrArticle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,7 L19,7 L19,11 L16,11 L16,7 Z M9,15 L20,15 M9,11 L13,11 M9,7 L13,7 M6,18.5 C6,19.8807119 4.88071187,21 3.5,21 C2.11928813,21 1,19.8807119 1,18.5 L1,7 L6.02493781,7 M6,18.5 L6,3 L23,3 L23,18.5 C23,19.8807119 21.8807119,21 20.5,21 L3.5,21"}}]})(props);
};
GrArticle.displayName = "GrArticle";
var GrAruba = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.1099561,17.3015551 C9.03598293,17.3015551 6.50849391,14.8423766 6.50849391,11.836714 C6.50849391,8.83105139 9.03598293,6.37187289 12.1099561,6.37187289 C15.1839292,6.37187289 17.7114182,8.83105139 17.7114182,11.836714 C17.7114182,14.8423766 15.1839292,17.3015551 12.1099561,17.3015551 L12.1099561,17.3015551 Z M12.1099561,2 C6.50849391,2 2,6.4401834 2,11.836714 C2,17.3015551 6.50849391,21.673428 12.1099561,21.673428 C14.4325135,21.673428 16.5501395,20.9220123 18.2579023,19.6241126 C19.28256,21.3318754 22.2199121,21.673428 22.2199121,21.673428 L22.2199121,11.836714 C22.2199121,6.4401834 17.7114182,2 12.1099561,2 L12.1099561,2 Z"}}]})(props);
};
GrAruba.displayName = "GrAruba";
var GrAscend = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,8 L8,2 L14,8 M11,21 L22,21 M11,17 L19,17 M11,13 L16,13 M8,2 L8,22"}}]})(props);
};
GrAscend.displayName = "GrAscend";
var GrAssistListening = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11,21 C11.7572165,21.6666667 12.4238831,22 13,22 C15,22 16,21 16,19 C16,17.6666667 16.6666667,16.3333333 18,15 C19.2667508,13.7332492 20,11.9329966 20,10 C20,6.13400675 16.8659932,3 13,3 C9.13400675,3 6,6.13400675 6,10 M17,10 C17,7.790861 15.209139,6 13,6 C10.790861,6 9,7.790861 9,10 M3,20 L8,14 L9,18 L14,12"}}]})(props);
};
GrAssistListening.displayName = "GrAssistListening";
var GrAtm = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,10 L1,10 L1,6 L23,6 L23,10 L20,10 M6,6 L18,6 L18,20.0059397 C18,21.1072288 17.0980496,22 15.9914698,22 L8.0085302,22 C6.8992496,22 6,21.1054862 6,20.0059397 L6,6 Z M13,18 L16,18 M13,15 L16,15 M13,12 L16,12 M10,22 L10,6 M3,2 L6,2 M8,2 L11,2 M13,2 L16,2 M18,2 L21,2"}}]})(props);
};
GrAtm.displayName = "GrAtm";
var GrAttachment = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M22,12 C22,12 19.0000009,15.0000004 13.0000004,21.0000004 C6.99999996,27.0000004 -2.00000007,18.0000004 3.99999994,12.0000004 C9.99999996,6.00000037 9,7.00000011 13,3.00000008 C17,-0.999999955 23,4.99999994 19,9.00000005 C15,13.0000002 12.0000004,16.0000007 9.99999995,18.0000004 C7.99999952,20 5,17 6.99999995,15.0000004 C8.99999991,13.0000007 16,6 16,6"}}]})(props);
};
GrAttachment.displayName = "GrAttachment";
var GrAttraction = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M13,2 L14.5,2.5 L13,3 L13,2 Z M14,18 L15,23 L13,23 L14,18 Z M14,16.5 L16,23 L12,23 L14,16.5 Z M12,6 L21,11 L21,13 L3,13 L3,11 L12,6 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z"}}]})(props);
};
GrAttraction.displayName = "GrAttraction";
var GrBaby = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10,15 L14,15 C14,15 13,16.5 12,16.5 C11,16.5 10,15 10,15 Z M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z M18,12 L14,9 M14,15 L17,17.5 L14.5,20 M6,12 L10,9 M10,15 L7.5,17.75 L10,20 M10,9 L14,9 L14,12 L10,12 L10,9 Z"}}]})(props);
};
GrBaby.displayName = "GrBaby";
var GrBackTen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3.11111111,7.55555556 C4.66955145,4.26701301 8.0700311,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 L12,22 C6.4771525,22 2,17.5228475 2,12 M2,4 L2,8 L6,8 M9,16 L9,9 L7,9.53333333 M17,12 C17,10 15.9999999,8.5 14.5,8.5 C13.0000001,8.5 12,10 12,12 C12,14 13,15.5000001 14.5,15.5 C16,15.4999999 17,14 17,12 Z M14.5,8.5 C16.9253741,8.5 17,11 17,12 C17,13 17,15.5 14.5,15.5 C12,15.5 12,13 12,12 C12,11 12.059,8.5 14.5,8.5 Z"}}]})(props);
};
GrBackTen.displayName = "GrBackTen";
var GrBarChart = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M0,22 L24,22 M22,2 L18,2 L18,18 L22,18 L22,2 Z M6,6 L2,6 L2,18 L6,18 L6,6 Z M14,18 L10,18 L10,10 L14,10 L14,18 Z"}}]})(props);
};
GrBarChart.displayName = "GrBarChart";
var GrBar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,5 L23,5 L23,23 L7,23 L7,5 Z M7,5 L23,5 L23,3 C23,1.8954305 22.1054862,1 21.0059397,1 L8.99406028,1 C7.8927712,1 7,1.88772964 7,3 L7,5 Z M1,8.0085302 C1,6.8992496 1.89826062,6 2.99791312,6 L7,6 L7,18 L2.99791312,18 C1.89449617,18 1,17.0980496 1,15.9914698 L1,8.0085302 Z M11,8 L11,18 M15,8 L15,18 M19,8 L19,18"}}]})(props);
};
GrBar.displayName = "GrBar";
var GrBasket = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20"}}]})(props);
};
GrBasket.displayName = "GrBasket";
var GrBike = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,19 C7.209139,19 9,17.209139 9,15 C9,12.790861 7.209139,11 5,11 C2.790861,11 1,12.790861 1,15 C1,17.209139 2.790861,19 5,19 Z M19,19 C21.209139,19 23,17.209139 23,15 C23,12.790861 21.209139,11 19,11 C16.790861,11 15,12.790861 15,15 C15,17.209139 16.790861,19 19,19 Z M5,6 L10,6 M19,15 L16,5 L13,5 M9,9 L5,15 L12,15 C12,12 14,9 17,9 L16,9 L9,9 Z M9,9 L7,6"}}]})(props);
};
GrBike.displayName = "GrBike";
var GrBitcoin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.6408156,14.9046858 C22.0378949,21.3339956 15.5260763,25.2467873 9.09601649,23.6434916 C2.66858193,22.0405708 -1.24420981,15.5283772 0.359460996,9.09944253 C1.96163164,2.66938268 8.47345019,-1.24378409 14.9016348,0.359136628 C21.3313196,1.96205735 25.2437363,8.47500102 23.6408156,14.9046858 L23.6408156,14.9046858 Z M17.2913894,10.2916945 C17.5302898,8.69477443 16.3144103,7.83630799 14.6518582,7.263622 L15.1911657,5.1003916 L13.8744004,4.77223165 L13.3493445,6.87845598 C13.0031826,6.79219679 12.6476448,6.71081312 12.2943571,6.63017953 L12.8231635,4.51007873 L11.5071483,4.18191878 L10.9674658,6.3443991 C10.6809353,6.27914215 10.3996553,6.21463528 10.1266263,6.14675305 L10.1281264,6.14000233 L8.31218301,5.68657903 L7.9618957,7.09297883 C7.9618957,7.09297883 8.93887476,7.31687767 8.91824756,7.33075415 C9.45155436,7.46389333 9.54793963,7.81680592 9.53181291,8.09658572 L8.91749748,10.5609732 C8.9542514,10.5703492 9.00188147,10.5838506 9.05438706,10.6048529 C9.01050739,10.5939767 8.96362739,10.5819754 8.91524724,10.5703492 L8.05415553,14.0225919 C7.98889858,14.1846091 7.82350596,14.427635 7.45071626,14.3353752 C7.46384266,14.3545022 6.49361432,14.0964747 6.49361432,14.0964747 L5.8399197,15.6037603 L7.5534772,16.0309308 C7.87226116,16.1108143 8.18466943,16.1944482 8.49220218,16.2732066 L7.94726915,18.4611896 L9.26253423,18.7893496 L9.80221671,16.624619 C10.161505,16.7221294 10.5102921,16.812139 10.8515785,16.896898 L10.3137712,19.0515025 L11.6305364,19.3796624 L12.1754695,17.1958048 C14.4208336,17.6207251 16.1092634,17.4493318 16.8199641,15.4184905 C17.3926501,13.7833164 16.7914611,12.8400909 15.6100853,12.2250254 C16.4704269,12.0266293 17.1184959,11.460694 17.2913894,10.2916945 L17.2913894,10.2916945 Z M14.2828189,14.5105188 C13.8759006,16.145693 11.1227324,15.2617238 10.2301373,15.0400752 L10.9532143,12.1413915 C11.8458094,12.3641652 14.7081142,12.8052122 14.2828189,14.5105188 L14.2828189,14.5105188 Z M14.6901123,10.268067 C14.3188228,11.7554754 12.0273287,10.9997699 11.2839995,10.8145002 L11.9395694,8.18547018 C12.6828985,8.37073991 15.0767785,8.71652674 14.6901123,10.268067 L14.6901123,10.268067 Z"}}]})(props);
};
GrBitcoin.displayName = "GrBitcoin";
var GrBlockQuote = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z"}},{"tag":"path","attr":{"d":"M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z"}}]})(props);
};
GrBlockQuote.displayName = "GrBlockQuote";
var GrBlog = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,16 C3.343,16 2,17.343 2,19 C2,20.657 3.343,22 5,22 C6.657,22 8,20.657 8,19 C8,17.343 6.657,16 5,16 L5,16 L5,16 Z M5,1 C14.925,1 23,9.075 23,19 L23,19 M18,19 C18,11.832 12.168,6 5,6 M13,19 C13,14.589 9.411,11 5,11 M2,11 L2,19 L2,19"}}]})(props);
};
GrBlog.displayName = "GrBlog";
var GrBluetooth = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"7 7 17 16 12 20 12 4 17 8 7 16"}}]})(props);
};
GrBluetooth.displayName = "GrBluetooth";
var GrBold = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14,11.57a7.93,7.93,0,0,1,3.11,1.25,3.32,3.32,0,0,1,1.28,2.71A3.58,3.58,0,0,1,17,18.42a7.9,7.9,0,0,1-5,1.39H4.07v-.42a3.57,3.57,0,0,0,1.46-.2,1.17,1.17,0,0,0,.54-.52,4.75,4.75,0,0,0,.15-1.58V7A4.81,4.81,0,0,0,6.07,5.4a1.13,1.13,0,0,0-.54-.52,3.67,3.67,0,0,0-1.46-.2V4.26h7.45a10.57,10.57,0,0,1,3.78.48,3.94,3.94,0,0,1,1.75,1.42,3.52,3.52,0,0,1,.64,2,2.86,2.86,0,0,1-.81,2A5.84,5.84,0,0,1,14,11.57Zm-4.17.58v5.56a1.27,1.27,0,0,0,.32.93,1.27,1.27,0,0,0,.93.31,3.57,3.57,0,0,0,1.69-.41A2.79,2.79,0,0,0,14,17.37a3.61,3.61,0,0,0,.41-1.73,3.81,3.81,0,0,0-.5-2,2.72,2.72,0,0,0-1.39-1.21A7.52,7.52,0,0,0,9.85,12.15Zm0-.89a5.92,5.92,0,0,0,2.4-.37,2.73,2.73,0,0,0,1.19-1,3.17,3.17,0,0,0,.41-1.7,3.18,3.18,0,0,0-.41-1.69,2.59,2.59,0,0,0-1.16-1,6.2,6.2,0,0,0-2.43-.33Z"}}]})(props);
};
GrBold.displayName = "GrBold";
var GrBook = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,1 L10,11 L13,9 L16,11 L16,1 M5.5,18 C4.11928813,18 3,19.1192881 3,20.5 C3,21.8807119 4.11928813,23 5.5,23 L22,23 M3,20.5 L3,3.5 C3,2.11928813 4.11928813,1 5.5,1 L21,1 L21,18.0073514 L5.49217286,18.0073514 M20.5,18 C19.1192881,18 18,19.1192881 18,20.5 C18,21.8807119 19.1192881,23 20.5,23 L20.5,23"}}]})(props);
};
GrBook.displayName = "GrBook";
var GrBookmark = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"5 1 5 22 12 17 19 22 19 1"}}]})(props);
};
GrBookmark.displayName = "GrBookmark";
var GrBottomCorner = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"8 20 20 20 20 8"}}]})(props);
};
GrBottomCorner.displayName = "GrBottomCorner";
var GrBraille = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd","stroke":"#000","strokeWidth":"2"},"child":[{"tag":"path","attr":{"d":"M7 10C8.65685425 10 10 8.65685425 10 7 10 5.34314575 8.65685425 4 7 4 5.34314575 4 4 5.34314575 4 7 4 8.65685425 5.34314575 10 7 10zM17 20C18.6568542 20 20 18.6568542 20 17 20 15.3431458 18.6568542 14 17 14 15.3431458 14 14 15.3431458 14 17 14 18.6568542 15.3431458 20 17 20zM7 8C7.55228475 8 8 7.55228475 8 7 8 6.44771525 7.55228475 6 7 6 6.44771525 6 6 6.44771525 6 7 6 7.55228475 6.44771525 8 7 8zM17 18C17.5522847 18 18 17.5522847 18 17 18 16.4477153 17.5522847 16 17 16 16.4477153 16 16 16.4477153 16 17 16 17.5522847 16.4477153 18 17 18zM7 20C5.34314575 20 4 18.6568542 4 17 4 15.3431458 5.34314575 14 7 14 8.65685425 14 10 15.3431458 10 17 10 18.6568542 8.65685425 20 7 20zM17 10C15.3431458 10 14 8.65685425 14 7 14 5.34314575 15.3431458 4 17 4 18.6568542 4 20 5.34314575 20 7 20 8.65685425 18.6568542 10 17 10z"}}]}]})(props);
};
GrBraille.displayName = "GrBraille";
var GrBriefcase = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,6 L23,6 L23,21 L1,21 L1,6 Z M6,6 L6,21 M18,6 L18,21 M8,6 L8,3 L16,3 L16,6"}}]})(props);
};
GrBriefcase.displayName = "GrBriefcase";
var GrBrush = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10.4350288,13.8510725 C8.66912406,14.6226292 7.43502884,16.3847098 7.43502884,18.4350288 C7.43502884,21.1964526 12.4350288,25.4350288 12.4350288,25.4350288 C12.4350288,25.4350288 17.4350288,21.1964526 17.4350288,18.4350288 C17.4350288,16.3847098 16.2009336,14.6226292 14.4350288,13.8510725 L14.4350288,-0.564864977 C14.4350288,-1.67491274 13.5395983,-2.56497116 12.4350288,-2.56497116 C11.3227585,-2.56497116 10.4350288,-1.66949312 10.4350288,-0.564864977 L10.4350288,13.8510725 Z M10,12 L12.6000977,12 L15,12","transform":"rotate(45 12.435 11.435)"}}]})(props);
};
GrBrush.displayName = "GrBrush";
var GrBug = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,20 C21.62,17.91 20,17 19,17 M5,17 C4,17 2.38,17.91 1,20 M19,9 C22,9 23,6 23,6 M1,6 C1,6 2,9 5,9 M19,13 L24,13 L19,13 Z M5,13 L0,13 L5,13 Z M12,23 L12,12 L12,23 L12,23 Z M12,23 C8,22.9999998 5,20.0000002 5,16 L5,9 C5,9 8,6.988 12,7 C16,7.012 19,9 19,9 C19,9 19,11.9999998 19,16 C19,20.0000002 16,23.0000002 12,23 L12,23 Z M7,8 L7,6 C7,3.24 9.24,1 12,1 C14.76,1 17,3.24 17,6 L17,8"}}]})(props);
};
GrBug.displayName = "GrBug";
var GrBundle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,14 L7,14 L17,14 Z M17,3 L23,3 L23,13 L17,13 M1,13 L1,17 L7,17 M17,17 L23,17 L23,13 M1,17 L1,21 L7,21 M23,17 L23,21 L17,21 M7,22 L17,22 L17,2 L7,2 L7,22 Z M7,13 L1,13 L1,3 L7,3"}}]})(props);
};
GrBundle.displayName = "GrBundle";
var GrBus = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,12 L21,12 L21,20 L3,20 L3,12 Z M3,3.99961498 C3,2.89525812 3.8926228,2 4.99508929,2 L19.0049107,2 C20.1067681,2 21,2.88743329 21,3.99961498 L21,12 L3,12 L3,3.99961498 Z M3,20 L6,20 L6,22.0010434 C6,22.5527519 5.55733967,23 5.00104344,23 L3.99895656,23 C3.44724809,23 3,22.5573397 3,22.0010434 L3,20 Z M18,20 L21,20 L21,22.0010434 C21,22.5527519 20.5573397,23 20.0010434,23 L18.9989566,23 C18.4472481,23 18,22.5573397 18,22.0010434 L18,20 Z M7,17 C7.55228475,17 8,16.5522847 8,16 C8,15.4477153 7.55228475,15 7,15 C6.44771525,15 6,15.4477153 6,16 C6,16.5522847 6.44771525,17 7,17 Z M17,17 C17.5522847,17 18,16.5522847 18,16 C18,15.4477153 17.5522847,15 17,15 C16.4477153,15 16,15.4477153 16,16 C16,16.5522847 16.4477153,17 17,17 Z M12,6 L12,12 M1,5 L1,13 M23,5 L23,13 M10,16 L14,16 M3,5.99975586 L21,6"}}]})(props);
};
GrBus.displayName = "GrBus";
var GrBusinessService = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,23 L1,23 L1,5 L1,5 L23,5 L23,23 L16,23 M8,5 L8,1 L8,1 L16,1 L16,5 M9,16 C11.209139,16 13,14.209139 13,12 C13,9.790861 11.209139,8 9,8 C6.790861,8 5,9.790861 5,12 C5,14.209139 6.790861,16 9,16 Z M14.0084967,17.8761594 C14.3255566,17.9570186 14.6577589,18 15,18 C17.209139,18 19,16.209139 19,14 C19,11.790861 17.209139,10 15,10 C14.1717747,10 13.4023412,10.2517171 12.7640287,10.6828219 M7.70199467,15.7255728 C6.67265121,16.4493031 6,17.6460985 6,19 C6,21.209139 7.790861,23 10,23 L10,23 C12.209139,23 14,21.209139 14,19 C14,17.2838286 12.9192205,15.8200868 11.4011657,15.2522789"}}]})(props);
};
GrBusinessService.displayName = "GrBusinessService";
var GrCafeteria = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,1 L12,7.99967027 C12,9.65670662 10.6526091,11 9.00313032,11 L5.99686968,11 C4.34174426,11 3,9.6513555 3,7.99967027 L3,1 M6,7 C6,7 6,6.54902482 6,6.00922203 L6,1 M9,7 C9,7 9,6.54902482 9,6.00922203 L9,1 M6,11 L6,21.5044548 C6,22.3304216 6.66579723,23 7.5,23 L7.5,23 C8.32842712,23 9,22.3204455 9,21.5044548 L9,11 M15,18 L15,21.4998351 C15,22.3283533 15.6657972,23 16.5,23 L16.5,23 C17.3284271,23 18,22.3316845 18,21.4952612 L18,15 C18,15 21,15 21,12 C21,9 21,10 21,7 C21,4 19,2 15,2 C15,2 15,9.99456145 15,18 L15,18 Z"}}]})(props);
};
GrCafeteria.displayName = "GrCafeteria";
var GrCalculator = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M22,23 L2,23 L2,1 L22,1 L22,23 Z M16,17 L18,17 L18,19 L16,19 L16,17 Z M11,17 L13,17 L13,19 L11,19 L11,17 Z M16,12 L18,12 L18,14 L16,14 L16,12 Z M11,12 L13,12 L13,14 L11,14 L11,12 Z M6,17 L8,17 L8,19 L6,19 L6,17 Z M6,12 L8,12 L8,14 L6,14 L6,12 Z M18,9 L6,9 L6,5 L18,5 L18,9 Z"}}]})(props);
};
GrCalculator.displayName = "GrCalculator";
var GrCalendar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,5 L22,5 L22,22 L2,22 L2,5 Z M18,5 L18,1 M6,5 L6,1 M2,10 L22,10"}}]})(props);
};
GrCalendar.displayName = "GrCalendar";
var GrCamera = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,21 L1,7 L6,7 L8,3 L16,3 L18,7 L23,7 L23,21 L1,21 Z M12,18 C14.7614237,18 17,15.7614237 17,13 C17,10.2385763 14.7614237,8 12,8 C9.23857625,8 7,10.2385763 7,13 C7,15.7614237 9.23857625,18 12,18 Z"}}]})(props);
};
GrCamera.displayName = "GrCamera";
var GrCapacity = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M1,19 L23,19 L23,5 L1,5 L1,19 Z M4,16 L7,16 L7,8 L4,8 L4,16 Z M10,16 L13,16 L13,8 L10,8 L10,16 Z"}}]})(props);
};
GrCapacity.displayName = "GrCapacity";
var GrCar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,10.9970301 C1,10.4463856 1.43945834,10 2.00246167,10 L21.9975383,10 C22.5511826,10 23,10.4530363 23,10.9970301 L23,17.0029699 C23,17.5536144 22.5605417,18 21.9975383,18 L2.00246167,18 C1.44881738,18 1,17.5469637 1,17.0029699 L1,10.9970301 Z M6,2 L18,2 L22,10 L2,10 L6,2 Z M12,10.5 L15,5 M3,18 L6,18 L6,20.9906311 C6,21.5480902 5.55733967,22 5.00104344,22 L3.99895656,22 C3.44724809,22 3,21.5566468 3,20.9906311 L3,18 Z M18,18 L21,18 L21,20.9906311 C21,21.5480902 20.5573397,22 20.0010434,22 L18.9989566,22 C18.4472481,22 18,21.5566468 18,20.9906311 L18,18 Z M5,15 C5.55228475,15 6,14.5522847 6,14 C6,13.4477153 5.55228475,13 5,13 C4.44771525,13 4,13.4477153 4,14 C4,14.5522847 4.44771525,15 5,15 Z M19,15 C19.5522847,15 20,14.5522847 20,14 C20,13.4477153 19.5522847,13 19,13 C18.4477153,13 18,13.4477153 18,14 C18,14.5522847 18.4477153,15 19,15 Z M12,13 L12,15 M14,13 L14,15 M10,13 L10,15"}}]})(props);
};
GrCar.displayName = "GrCar";
var GrCaretDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"22 8 12 20 2 8"}}]})(props);
};
GrCaretDown.displayName = "GrCaretDown";
var GrCaretNext = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 2 18 12 6 22"}}]})(props);
};
GrCaretNext.displayName = "GrCaretNext";
var GrCaretPrevious = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 2 18 12 6 22","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrCaretPrevious.displayName = "GrCaretPrevious";
var GrCaretUp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"22 4 12 16 2 4","transform":"matrix(1 0 0 -1 0 20)"}}]})(props);
};
GrCaretUp.displayName = "GrCaretUp";
var GrCart = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"}}]})(props);
};
GrCart.displayName = "GrCart";
var GrCatalogOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5.5,18 C4.11928813,18 3,19.1192881 3,20.5 C3,21.8807119 4.11928813,23 5.5,23 L22,23 M3,20.5 L3,3.5 C3,2.11928813 4.11928813,1 5.5,1 L21,1 L21,18.0073514 L5.49217286,18.0073514 M20.5,18 C19.1192881,18 18,19.1192881 18,20.5 C18,21.8807119 19.1192881,23 20.5,23 L20.5,23"}}]})(props);
};
GrCatalogOption.displayName = "GrCatalogOption";
var GrCatalog = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,6 L1,4.5 L1,18.443038 L12,23 L23,18.443038 L23,4 L19,6 M5,16 L5,2 L12,5 L19,2 L19,16 L12,19 L5,16 Z M11.95,5 L11.95,19"}}]})(props);
};
GrCatalog.displayName = "GrCatalog";
var GrCentos = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.1609863,6.25070841 L3.24873581,8.1633816 L3.24873581,3.22722505 L8.18367123,3.22722505 L6.23953033,5.17169472 L6.093182,5.31809002 L6.23953033,5.46453229 L10.7544892,9.98066536 L10.7544892,10.7189824 L9.92411742,10.7189824 L5.45678278,6.25066145 L5.30719374,6.10102544 L5.1609863,6.25070841 L5.1609863,6.25070841 Z M10.7545362,9.39193738 L10.7545362,3.22722505 L8.77239922,3.22722505 L6.68190998,5.31813699 L10.7545362,9.39193738 L10.7545362,9.39193738 Z M5.30728767,6.6930411 L3.24873581,8.75225049 L3.24873581,10.7190294 L9.33224266,10.7190294 L5.30728767,6.6930411 L5.30728767,6.6930411 Z M13.2714364,9.36319374 L17.3154599,5.31809002 L15.1964149,3.19848141 L13.2714364,3.19848141 L13.2714364,9.36319374 L13.2714364,9.36319374 Z M17.9071937,5.31809002 L17.7576047,5.46453229 L13.2713894,9.95516243 L13.2713894,10.7189824 L14.0572368,10.7189824 L18.5340117,6.24108023 L18.680454,6.09463796 L18.8299022,6.24108023 L20.7899648,8.20147162 L20.7899648,3.19852838 L15.785002,3.19852838 L17.7576047,5.17174168 L17.9071937,5.31809002 L17.9071937,5.31809002 Z M11.1714129,2.80720157 L11.1714129,3.01723679 L11.1714129,9.80886106 L11.998638,10.636274 L12.8545127,9.78011742 L12.8545127,2.99168689 L12.8545127,2.78155773 L13.064454,2.78155773 L14.7794912,2.78155773 L11.998638,-1.77635684e-15 L9.19223483,2.80720157 L10.9613777,2.80720157 L11.1714129,2.80720157 L11.1714129,2.80720157 Z M14.6490176,10.7190294 L20.7900587,10.7190294 L20.7900587,8.79358121 L18.6805479,6.68355382 L14.6490176,10.7190294 L14.6490176,10.7190294 Z M10.6241096,12.011225 L9.75231311,11.1391468 L3.03870059,11.1391468 L2.83190607,11.1391468 L2.83190607,10.9291115 L2.83190607,9.16917417 L0,12.0015499 L2.8318591,14.8342544 L2.8318591,13.0167358 L2.8318591,12.8101292 L3.03865362,12.8101292 L9.82539335,12.8101292 L10.6241096,12.011225 L10.6241096,12.011225 Z M13.2714364,14.6909589 L13.2714364,20.747225 L15.2345049,20.747225 L17.2803757,18.7008376 L13.2714364,14.6909589 L13.2714364,14.6909589 Z M5.31691585,17.3197808 L9.40861057,13.226865 L3.24873581,13.226865 L3.24873581,15.2508493 L5.31691585,17.3197808 L5.31691585,17.3197808 Z M18.6805479,17.3197808 L20.7900587,15.2098474 L20.7900587,13.226865 L14.5918121,13.226865 L18.6805479,17.3197808 L18.6805479,17.3197808 Z M21.2099413,14.789589 L23.9970881,12.0015969 L21.2099413,9.21365166 L21.2099413,10.9291585 L21.2099413,11.1391937 L20.9997652,11.1391937 L14.229135,11.1391937 L13.3667319,12.0015969 L14.1750294,12.8101761 L20.9998121,12.8101761 L21.2099883,12.8101761 L21.2099883,13.0167828 L21.2099883,14.789589 L21.2099413,14.789589 Z M18.6805479,17.9083679 L18.5341057,17.7623014 L14.0000783,13.2269119 L13.2714364,13.2269119 L13.2714364,14.1022309 L17.7226614,18.5543953 L17.8689159,18.7008845 L17.7226614,18.8504736 L15.8261918,20.747319 L20.7900117,20.747319 L20.7900117,15.8015342 L18.8299491,17.7622544 L18.6805479,17.9083679 L18.6805479,17.9083679 Z M12.8545127,21.1643836 L12.8545127,20.9542544 L12.8545127,14.2738004 L11.9827162,13.4020509 L11.184,14.2005793 L11.184,20.9542544 L11.184,21.1643836 L10.9741526,21.1643836 L9.14461057,21.1643836 L11.9827162,24 L14.8177221,21.1643836 L13.064407,21.1643836 L12.8545127,21.1643836 L12.8545127,21.1643836 Z M6.09322896,18.7008376 L6.2395773,18.5543483 L10.7672642,14.0256282 L10.7672642,13.226865 L9.99733855,13.226865 L5.46321722,17.7622544 L5.31691585,17.9083209 L5.17047358,17.7622544 L3.24873581,15.8398121 L3.24873581,20.7471781 L8.13590607,20.7471781 L6.2395773,18.8503327 L6.09322896,18.7008376 L6.09322896,18.7008376 Z M10.7672642,14.6176908 L6.68190998,18.7008376 L8.72768689,20.747225 L10.7672642,20.747225 L10.7672642,14.6176908 L10.7672642,14.6176908 Z"}}]})(props);
};
GrCentos.displayName = "GrCentos";
var GrChannel = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,9 L22,9 L22,22 L2,22 L2,9 Z M21,2 L13,9 L11,9 L3,2"}}]})(props);
};
GrChannel.displayName = "GrChannel";
var GrChapterAdd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,14 L5,5 L19,5 L19,20 L11,20 M19,16 L23,16 L23,1 L9,1 L9,5 M5,16 L5,24 M9,20 L1,20"}}]})(props);
};
GrChapterAdd.displayName = "GrChapterAdd";
var GrChapterNext = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,3.5 L1,20 L10,14 L10,20 L21,12 L10,4 L10,10 L1,3.5 Z M22,2 L22,22 L22,2 Z"}}]})(props);
};
GrChapterNext.displayName = "GrChapterNext";
var GrChapterPrevious = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,3.5 L23,20 L14,14 L14,20 L3,12 L14,4 L14,10 L23,3.5 Z M2,2 L2,22 L2,2 Z"}}]})(props);
};
GrChapterPrevious.displayName = "GrChapterPrevious";
var GrChatOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,7 L9,1 L23,1 L23,11 L20,11 L20,16 L15,12 M1,7 L15,7 L15,18 L9,18 L4,22 L4,18 L1,18 L1,7 Z"}}]})(props);
};
GrChatOption.displayName = "GrChatOption";
var GrChat = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000000","strokeWidth":"2","d":"M5,1 L19,1 L19,1 C21.209139,1 23,2.790861 23,5 L23,13 L23,13 C23,15.209139 21.209139,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.790861 2.790861,1 5,1 Z M5,7 L18,7 M5,11 L14,11","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrChat.displayName = "GrChat";
var GrCheckboxSelected = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"}}]})(props);
};
GrCheckboxSelected.displayName = "GrCheckboxSelected";
var GrCheckbox = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"width":"20","height":"20","x":"2","y":"2","fill":"none","stroke":"#000","strokeWidth":"2"}}]})(props);
};
GrCheckbox.displayName = "GrCheckbox";
var GrCheckmark = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"2 14 9 20 22 4"}}]})(props);
};
GrCheckmark.displayName = "GrCheckmark";
var GrChrome = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M11.9733005,16.4144516 C9.59429509,16.4144516 7.65884342,14.4788121 7.65884342,12.0999945 C7.65884342,9.72075429 9.59429509,7.78530262 11.9733005,7.78530262 C14.3523059,7.78530262 16.2879454,9.72075429 16.2879454,12.0999945 C16.2879924,14.4788121 14.3523529,16.4144516 11.9733005,16.4144516 L11.9733005,16.4144516 Z"}},{"tag":"path","attr":{"d":"M13.7910066,17.1810894 C13.1872494,17.4007528 12.5549364,17.5116882 11.9068426,17.5116882 C10.6352186,17.5116882 9.39370022,17.0652225 8.41129728,16.2548117 C7.61431896,15.5972306 7.02033082,14.7318218 6.69297277,13.7500294 L6.691235,13.7442055 L1.93641793,5.50854377 C0.228238232,8.1357683 -0.377867323,11.2684017 0.230163868,14.3493248 C0.849467072,17.4870306 2.65331799,20.1955546 5.30970885,21.9764857 C6.69353637,22.9040785 8.22657716,23.5227711 9.86735961,23.8160783 L13.7910066,17.1810894 L13.7910066,17.1810894 Z"}},{"tag":"path","attr":{"d":"M22.7599128,6.70666487 C19.7903479,0.731840215 12.5393434,-1.70437065 6.56465968,1.26519432 C5.01832731,2.03375777 3.65958002,3.12347966 2.57441389,4.45616042 L6.59105498,11.413435 C6.85172029,9.39264477 8.25048322,7.60626547 10.3219975,6.95469613 C10.8217704,6.79763941 11.341739,6.71403864 11.865371,6.70666487 L22.7599128,6.70666487 Z"}},{"tag":"path","attr":{"d":"M11.9264747,24 C14.936431,24 17.8171819,22.8712018 20.0368292,20.8218558 C22.2681243,18.7619893 23.6231612,15.9588274 23.8523118,12.9290041 C23.983349,11.1937716 23.7261592,9.41711443 23.1082181,7.78530262 L15.2520944,7.78530262 C16.5738788,8.83162726 17.3494403,10.4306093 17.3416908,12.1250278 C17.3360548,13.3449884 16.9177692,14.5439079 16.1598672,15.5064909 L11.1518525,23.9751076 C11.4097938,23.9916399 11.6696606,24 11.926052,24 L11.9264747,24 L11.9264747,24 Z"}}]}]})(props);
};
GrChrome.displayName = "GrChrome";
var GrCircleInformation = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8"}}]})(props);
};
GrCircleInformation.displayName = "GrCircleInformation";
var GrCirclePlay = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M9.5,15.5 L15.5,12 L9.5,8.5 L9.5,15.5 Z M10.5,13.5 L12.5,12 L10.5,10.5 L10.5,13.5 Z"}}]})(props);
};
GrCirclePlay.displayName = "GrCirclePlay";
var GrCircleQuestion = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"}}]})(props);
};
GrCircleQuestion.displayName = "GrCircleQuestion";
var GrClearOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,4 C10,2.8954305 10.8954305,2 12,2 C13.1045695,2 14,2.8954305 14,4 L14,10 L20,10 L20,14 L4,14 L4,10 L10,10 L10,4 Z M4,14 L20,14 L20,22 L12,22 L4,22 L4,14 Z M16,22 L16,16.3646005 M8,22 L8,16.3646005 M12,22 L12,16.3646005"}}]})(props);
};
GrClearOption.displayName = "GrClearOption";
var GrClear = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19"}}]})(props);
};
GrClear.displayName = "GrClear";
var GrCli = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L23,1 L23,23 L1,23 L1,1 Z M1,5 L23,5 M5,1 L5,5 M11,16 L19,16 M5,10 L8,13 L5,16"}}]})(props);
};
GrCli.displayName = "GrCli";
var GrClipboard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,3 L21,3 L21,23 L3,23 L3,3 L3,3 L8,3 M8,1 L16,1 L16,6 L8,6 L8,1 Z"}}]})(props);
};
GrClipboard.displayName = "GrClipboard";
var GrClock = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,5 L12,12 L17,12"}}]})(props);
};
GrClock.displayName = "GrClock";
var GrClone = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,23 L23,23 L23,7 L7,7 L7,23 Z M17,3.9997 L17,0.9997 L14,0.9997 M1,13.9997 L1,16.9997 L4,16.9997 M1,11.9997 L1,5.9997 L1,11.9997 Z M4,0.9997 L1,0.9997 L1,3.9997 M6,0.9997 L12,0.9997 L6,0.9997 Z"}}]})(props);
};
GrClone.displayName = "GrClone";
var GrClose = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,3 L21,21 M3,21 L21,3"}}]})(props);
};
GrClose.displayName = "GrClose";
var GrClosedCaption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,12 C1,5 2.5,4 12,4 C21.5,4 23,5 23,12 C23,19 21.5,20 12,20 C2.5,20 1,19 1,12 Z M5.25,14 C5.25,15.5 6,16 7.75,16 C9.5,16 10.25,15.5 10.25,14 L9.97861679,14 C9.97861671,15.25 8.97905547,16 7.75,16 C6.52094453,16 5.52138329,15.25 5.52138321,14 L5.52138321,10 C5.5,8.75 6.5,8 7.75,8 C9,8 10,8.75 9.97861679,10 L10.25,10 C10.25,8.75 9.2286998,8 7.75,8 C6.2713002,8 5.25,8.75 5.25,10 L5.25,14 Z M13.25,14 C13.25,15.5 14,16 15.75,16 C17.5,16 18.25,15.5 18.25,14 L17.9786168,14 C17.9786167,15.25 16.9790555,16 15.75,16 C14.5209445,16 13.5213833,15.25 13.5213832,14 L13.5213832,10 C13.5,8.75 14.5,8 15.75,8 C17,8 18,8.75 17.9786168,10 L18.25,10 C18.25,8.75 17.2286998,8 15.75,8 C14.2713002,8 13.25,8.75 13.25,10 L13.25,14 Z"}}]})(props);
};
GrClosedCaption.displayName = "GrClosedCaption";
var GrCloudComputer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z"}}]})(props);
};
GrCloudComputer.displayName = "GrCloudComputer";
var GrCloudDownload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,17 C3.23857625,17 1,14.7614237 1,12 C1,9.23857625 3.23857625,7 6,7 L12,7 M6,7 L6,6 C6,3 8,2 11,2 L13,2 C16,2 18,3 18,6 L18,7 C20.7614237,7 23,9.23857625 23,12 C23,14.7614237 20.7614237,17 18,17 M12,12 L12,21 M8,17 L12,21 L16,17"}}]})(props);
};
GrCloudDownload.displayName = "GrCloudDownload";
var GrCloudSoftware = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,23 L16,23 L16,12 L8,12 L8,23 Z M8,16 L16,16 M12,12 L12,16 M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16"}}]})(props);
};
GrCloudSoftware.displayName = "GrCloudSoftware";
var GrCloudUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,17 C3.23857625,17 1,14.7614237 1,12 C1,9.23857625 3.23857625,7 6,7 L12,7 M6,7 L6,6 C6,3 8,2 11,2 L13,2 C16,2 18,3 18,6 L18,7 C20.7614237,7 23,9.23857625 23,12 C23,14.7614237 20.7614237,17 18,17 M12,13 L12,22 M8,16.0000004 L11.9653427,11.9653429 L16,16.0000002"}}]})(props);
};
GrCloudUpload.displayName = "GrCloudUpload";
var GrCloud = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18,17 L18,18 C18,21 16,22 13,22 L11,22 C8,22 6,21 6,18 L6,17 C3.23857625,17 1,14.7614237 1,12 C1,9.23857625 3.23857625,7 6,7 L12,7 M6,7 L6,6 C6,3 8,2 11,2 L13,2 C16,2 18,3 18,6 L18,7 C20.7614237,7 23,9.23857625 23,12 C23,14.7614237 20.7614237,17 18,17 L12,17"}}]})(props);
};
GrCloud.displayName = "GrCloud";
var GrCloudlinux = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.0684356,5.79034617 C14.1171022,5.83554613 14.1629688,5.88247942 14.2099021,5.92887939 C14.5235019,6.25221246 14.818835,6.60341217 15.0909681,6.98367853 C15.0913681,6.98407853 15.0919014,6.98487853 15.0923014,6.98527852 C15.3575012,7.36634488 15.601101,7.77674455 15.8359008,8.21887752 C15.8816341,6.72327874 15.5928343,5.40847981 14.9224349,4.18328081 C14.6147018,3.61968127 14.3036354,3.04168174 13.7816358,2.65061539 C13.0331031,2.08901585 12.1863038,1.70701616 11.2797712,1.46634969 C10.8748382,1.35914978 10.4656385,1.28181651 10.0377722,1.23701654 C6.91657474,0.808616892 3.77031064,2.36541562 2.09297867,5.47701309 C2.28097852,5.52674638 2.36111178,5.36594651 2.4687117,5.27861325 C5.99870882,2.40754892 10.8748382,2.70048202 14.0080356,5.73047955 C14.0285689,5.75007953 14.0473689,5.77061285 14.0684356,5.79034617 L14.0684356,5.79034617 Z M10.5404385,16.6888706 C9.96470559,16.3543376 9.44097268,15.9496712 8.90203979,15.5039382 C9.44683934,17.0628703 11.539371,18.9363355 13.3229695,19.4235351 C13.2501696,19.3640684 13.1824363,19.2966018 13.1037697,19.2462019 C12.1952371,18.661269 11.4491044,17.9083363 10.8137716,17.039937 C10.725505,16.9196704 10.659505,16.7579372 10.5404385,16.6888706 L10.5404385,16.6888706 Z M23.5932278,9.59820973 C23.6076278,9.53420978 23.6110945,9.47607649 23.5250945,9.46247651 C23.5210945,9.5082098 23.5160279,9.5543431 23.5120279,9.59994306 C23.5028279,9.70900964 23.4937612,9.81780955 23.4842946,9.92674279 C22.999495,15.3279384 17.8578992,18.9307355 12.6175034,17.5406033 C12.4443036,17.49447 12.271637,17.4443367 12.0989705,17.3963367 C13.2500362,18.6898023 14.6673684,19.466735 16.3432337,19.7827348 C16.9057666,19.889268 17.4509662,19.8734014 18.005099,19.7220681 C20.0790973,19.1556686 21.710696,17.9739362 22.8168284,16.1399377 C24.0517608,14.0920727 24.3364272,11.8972745 23.5932278,9.59820973 L23.5932278,9.59820973 Z M14.4687019,20.5306008 C11.6479042,20.0162012 9.61323921,18.3820692 8.21937368,15.8934046 C8.15030707,17.4810033 8.53657342,18.9334021 9.37977273,20.260201 C9.63537252,20.6626007 9.87683899,21.092467 10.286972,21.3592668 C12.9656365,23.1032654 15.7536342,23.2813986 18.6061652,21.8432664 C20.097364,21.092067 21.1962964,19.9155347 21.9305625,18.4039359 C19.7645643,20.2555344 17.2865663,21.0442004 14.4687019,20.5306008 L14.4687019,20.5306008 Z M9.76577242,0.501683809 C15.4967011,1.01008339 19.0562982,6.22261248 17.4562995,11.762608 C17.4377662,11.8264746 17.3944329,11.8899412 17.5026994,11.9311412 C18.811365,10.6480755 19.6242977,9.11274346 19.8604309,7.28074495 C19.9009642,6.96447854 19.8916308,6.65661213 19.8198976,6.34554571 C19.2596313,3.91008103 17.8805658,2.07994919 15.6775009,0.921950133 C13.7555025,-0.0879157105 11.7263042,-0.27724889 9.63990585,0.398883893 C9.57470591,0.387283902 9.51323929,0.382483906 9.50257263,0.472750499 C9.54990593,0.477017162 9.59710589,0.481683825 9.64417252,0.485950488 C9.68457248,0.491550484 9.72510578,0.498217145 9.76577242,0.501683809 L9.76577242,0.501683809 Z M16.7349667,11.7272747 C16.7345667,11.7143413 16.7336334,11.7019413 16.7331001,11.689408 C16.7325667,11.6836747 16.7316334,11.6783414 16.7313667,11.6728747 C16.7288334,11.6780747 16.7268334,11.6835414 16.7245667,11.688608 C16.7280334,11.701808 16.7316334,11.714208 16.7349667,11.7272747 L16.7349667,11.7272747 Z M20.5508303,9.56420976 C20.0362974,12.3826075 18.3973654,14.4124725 15.8035008,15.8174047 C17.3804329,15.8550046 18.7462984,15.5355382 20.0061641,14.8024722 C20.513897,14.5070057 21.0434966,14.219406 21.3880296,13.726473 C24.159494,9.76794292 22.7444285,4.21368078 18.398432,2.06848253 C20.2738972,4.2370141 21.0689632,6.72927873 20.5508303,9.56420976 L20.5508303,9.56420976 Z M19.4572312,10.7603421 C19.3869646,10.7772754 19.3341646,10.8144754 19.3016313,10.8648754 C18.6622985,11.8550079 17.8510992,12.6742072 16.8687,13.3250067 C16.8020333,13.3692733 16.7323001,13.4259399 16.6949668,13.4938066 C16.3799004,14.0710061 15.963634,14.5762057 15.5736343,15.1023386 C17.4404328,14.1660727 18.7374984,12.7223405 19.4572312,10.7603421 L19.4572312,10.7603421 Z M16.3596337,5.66701293 C16.2429671,5.76541285 16.3189671,5.84594612 16.3360337,5.9144794 C16.5713669,6.85367863 16.6712335,7.81794451 16.4891003,8.75834375 C16.2929671,9.77220959 16.6508335,10.7030088 16.7313667,11.6728747 C16.9784332,11.1238085 17.0598998,10.5355423 17.1194998,9.94634278 C17.2697663,8.45394399 17.0036332,7.03394515 16.3596337,5.66701293 L16.3596337,5.66701293 Z M14.5243019,16.3692709 C14.4153686,16.3479376 14.310702,16.3484709 14.2012355,16.3782042 C13.6208359,16.5352707 13.0252364,16.6068707 12.4288369,16.671804 C12.3929703,16.6548706 12.352037,16.641804 12.3429703,16.6934039 C12.340437,16.7066039 12.3952369,16.7299372 12.4237703,16.7487372 C14.4160353,17.39167 16.3536337,17.2172702 18.2773655,16.3792709 C18.2242989,16.3431376 18.2036322,16.3178043 18.1813656,16.3158043 C18.1412323,16.3115376 18.0993656,16.3174043 18.059899,16.3263376 C16.8842999,16.5972707 15.7055009,16.6047374 14.5243019,16.3692709 L14.5243019,16.3692709 Z M8.87430648,15.5143382 C8.86243982,15.5076716 8.8511065,15.5012716 8.8395065,15.4944716 C8.84897316,15.5032716 8.85830649,15.5114049 8.86750648,15.5202049 L8.87430648,15.5143382 Z M8.38790687,8.95341025 C8.42537351,8.9399436 8.46377348,8.91994361 8.43364017,8.87701032 C8.42617351,8.86607699 8.37084022,8.88847697 8.33737358,8.8954103 C8.3523069,8.91621028 8.36924022,8.93567694 8.38790687,8.95341025 L8.38790687,8.95341025 Z M5.49564256,21.8493997 C5.53044254,21.9048664 5.56937584,21.9484663 5.63937578,21.8973997 C5.6101758,21.8619331 5.58097583,21.8261998 5.55164252,21.7907331 C5.53124253,21.8085998 5.51257588,21.8280664 5.49564256,21.8493997 L5.49564256,21.8493997 Z M10.6501717,4.51008054 C11.6171042,5.12061338 12.4753702,5.86181277 13.0968364,6.81714533 C13.4443028,7.35114489 13.8263024,7.41181151 14.3977686,7.21701167 C13.3940361,5.92421272 12.1791038,4.99848014 10.6501717,4.51008054 L10.6501717,4.51008054 Z M8.33737358,8.8954103 C6.47404177,9.84940952 5.22724278,11.342875 4.45951007,13.29554 C4.52271002,13.2838067 4.55471,13.2871401 4.57230998,13.2723401 C4.60337662,13.2472734 4.6289766,13.2134068 4.65057659,13.1792735 C5.29017606,12.156341 6.11844206,11.317675 7.12044124,10.6487422 C7.21270783,10.5868756 7.2860411,10.512609 7.34244106,10.4142091 C7.64177415,9.89274282 8.01230718,9.42074321 8.38790687,8.95341025 C8.36924022,8.93567694 8.3523069,8.91621028 8.33737358,8.8954103 L8.33737358,8.8954103 Z M7.59857418,18.1031361 C7.63617415,18.0415362 7.64710748,17.9778029 7.63457415,17.9192696 C7.38657436,16.7668706 7.38084103,15.6142048 7.6151075,14.4595391 C7.63084082,14.3810058 7.64057415,14.2915392 7.6187075,14.2168726 C7.43337432,13.5863398 7.37057437,12.934607 7.27444111,12.2867409 C6.61577498,14.2688726 6.71990823,16.2067377 7.59857418,18.1031361 L7.59857418,18.1031361 Z M6.09044208,7.61007802 C7.14644122,7.38141154 8.20657369,7.3864782 9.26990615,7.55074473 C9.41723937,7.57354471 9.57817257,7.64114466 9.71123913,7.60594469 C10.3548386,7.43514482 11.0113714,7.35114489 11.7076375,7.28527828 C10.2203054,6.56794553 7.41577433,6.72301207 5.81017564,7.64007799 C5.90364223,7.630478 5.99937549,7.63034467 6.09044208,7.61007802 L6.09044208,7.61007802 Z M5.55164252,21.7907331 C5.48124258,21.7072665 5.4103093,21.6240666 5.34017602,21.5400667 C1.86364552,17.3782034 2.9519113,11.1947418 7.64044082,8.47221065 C7.79537402,8.38221072 7.95297389,8.29567746 8.10937377,8.20781086 C6.38030851,8.10701094 4.82870977,8.55981057 3.42044425,9.52127646 C2.94751131,9.84394286 2.57311161,10.2408759 2.28831184,10.7392755 C1.22244605,12.6063406 0.903912972,14.5956723 1.41871255,16.6748706 C1.99351208,18.9960687 3.34431098,20.749134 5.49564256,21.8493997 C5.51257588,21.8280664 5.53124253,21.8085998 5.55164252,21.7907331 L5.55164252,21.7907331 Z M7.67084079,19.7224681 C6.04190878,17.3651367 5.76524234,14.7710055 6.60604166,11.9434078 C5.46470926,13.0320736 4.72470986,14.2236726 4.35217683,15.6330048 C4.20191028,16.2007377 4.03097709,16.7784705 4.13564367,17.3708701 C4.97497632,22.1296662 9.90310564,25.0569971 14.4929686,23.5001984 C11.6336376,23.2932652 9.30910612,22.0932662 7.67084079,19.7224681 L7.67084079,19.7224681 Z M0.444580013,14.4472724 C-0.105152872,12.8590071 -0.159819494,11.250075 0.363246746,9.66447634 C1.3635126,6.63074548 3.46084422,4.78501365 6.58804167,4.12408086 C7.06657462,4.02288094 7.54150756,4.15621416 8.00670718,4.25981408 C9.54083927,4.6018138 10.8412382,5.35567985 11.9152373,6.5268789 C9.16990624,5.75301286 6.57550835,6.0360793 4.21751027,7.6670113 C1.86151219,9.29634331 0.666979832,11.6062081 0.444580013,14.4472724 L0.444580013,14.4472724 Z"}}]})(props);
};
GrCloudlinux.displayName = "GrCloudlinux";
var GrCluster = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,9 L16,9 L16,1 L8,1 L8,9 Z M1,23 L9,23 L9,15 L1,15 L1,23 Z M15,23 L23,23 L23,15 L15,15 L15,23 Z M5,15 L8,9 L5,15 Z M10,19 L14,19 L10,19 Z M16,9 L19,15 L16,9 Z"}}]})(props);
};
GrCluster.displayName = "GrCluster";
var GrCoatCheck = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12,11 L22.1551134,17.4623449 C22.6217314,17.7592836 23,18.4433532 23,19.0093689 L23,20.9906311 C23,21.5480902 22.5605417,22 21.9975383,22 L2.00246167,22 C1.44881738,22 1,21.5566468 1,20.9906311 L1,19.0093689 C1,18.4519098 1.3786449,17.7590442 1.84488659,17.4623449 L12,11 Z M15,5 C15,3.34314575 13.6568542,2 12,2 C10.3431458,2 9,3.34314575 9,5 C9,5.93157601 9.41137234,6.80169553 10.0908534,7.31422922 C11,8 12,8 12,9.5 L12,11"}}]})(props);
};
GrCoatCheck.displayName = "GrCoatCheck";
var GrCodeSandbox = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#444","strokeWidth":"2","d":"M12,1.5 L3,6.5 L3,17.5 L12,22.5 L21,17.5 L21,6.5 L12,1.5 Z M12,22.5 L12,11.5 M21,6.5 L12,11.5 M12,11.5 L3,6.5 M21,17.5 L21,12 L16.5,14.5 L16.5,20 L21,17.5 Z M3,17.5 L3,12 L7.5,14.5 L7.5,20 L3,17.5 Z M12,1.5 L7.5,4 L12,6.5 L16.5,4 L12,1.5 Z"}}]})(props);
};
GrCodeSandbox.displayName = "GrCodeSandbox";
var GrCode = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"}}]})(props);
};
GrCode.displayName = "GrCode";
var GrCodepen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.0001023,22.0293246 C6.46990155,22.0293246 1.97088004,17.5301496 1.97088004,12.0001023 C1.97088004,6.4701062 6.46990155,1.97088004 12.0001023,1.97088004 C17.5300984,1.97088004 22.02912,6.4701062 22.02912,12.0001023 C22.02912,17.5301496 17.5300984,22.0293246 12.0001023,22.0293246 M12.0001023,0 C5.37246693,0 0,5.37251809 0,12.0001023 C0,18.6277377 5.37246693,24.0000512 12.0001023,24.0000512 C18.6275331,24.0000512 24,18.6277377 24,12.0001023 C24,5.37251809 18.6275331,0 12.0001023,0 M18.1444674,13.0672488 L16.5492221,12.0001023 L18.1444674,10.933007 L18.1444674,13.0672488 Z M12.6376991,17.5906236 L12.6376991,14.6163967 L15.4022622,12.767488 L17.6339173,14.2599991 L12.6376991,17.5906236 Z M12.0001126,13.5086784 L9.74466695,12.0001023 L12.0001126,10.4915262 L14.2553535,12.0001023 L12.0001126,13.5086784 Z M11.3623214,17.5906236 L6.36605201,14.2599991 L8.59791172,12.767488 L11.3623214,14.6163967 L11.3623214,17.5906236 Z M5.85555304,10.933007 L7.45095183,12.0001023 L5.85555304,13.0672488 L5.85555304,10.933007 Z M11.3623214,6.40958102 L11.3623214,9.38380794 L8.59791172,11.233126 L6.36605201,9.74015443 L11.3623214,6.40958102 Z M12.6376991,6.40958102 L17.6339173,9.74015443 L15.4022622,11.233126 L12.6376991,9.38380794 L12.6376991,6.40958102 Z M19.414166,9.656248 C19.4128358,9.64688527 19.4104823,9.63793184 19.4089475,9.62856911 C19.4057754,9.61055993 19.402501,9.59260191 19.397794,9.57505319 C19.3950313,9.56451372 19.3911429,9.55438356 19.3878685,9.54425339 C19.3827523,9.52859768 19.3776872,9.51299313 19.3714454,9.49779788 C19.3670966,9.48725842 19.3620827,9.47671895 19.3572222,9.46658879 C19.3505199,9.45210981 19.3435618,9.43804014 19.3355293,9.42443092 C19.3296968,9.4142496 19.323455,9.40447757 19.3174178,9.3947567 C19.3088225,9.38145446 19.3000226,9.36856152 19.2904041,9.35607789 C19.283446,9.34671516 19.2760274,9.33735243 19.2686089,9.32834784 C19.2584275,9.3166828 19.2478881,9.3049666 19.2367858,9.29401783 C19.2284463,9.2854737 19.220158,9.27687841 19.2114092,9.26905055 C19.199693,9.25851109 19.1876187,9.24832976 19.1752885,9.23860889 C19.1657723,9.23119034 19.1563584,9.22377178 19.1464329,9.21676253 C19.1426981,9.21440905 19.1394237,9.21128814 19.1358934,9.20893467 L12.3536963,4.687504 C12.1394791,4.54465843 11.8605414,4.54465843 11.646273,4.687504 L4.86412702,9.20893467 C4.86059681,9.21128814 4.85727125,9.21440905 4.85358755,9.21676253 C4.84361088,9.22377178 4.83424815,9.23119034 4.82488542,9.23860889 C4.81240178,9.24832976 4.80027628,9.25851109 4.78881589,9.26905055 C4.7798113,9.27687841 4.7716253,9.2854737 4.76323466,9.29401783 C4.75213241,9.3049666 4.74159294,9.3166828 4.73161626,9.32834784 C4.72399306,9.33735243 4.7165745,9.34671516 4.70956525,9.35607789 C4.70020252,9.36856152 4.69119793,9.38145446 4.68280728,9.3947567 C4.67636081,9.40447757 4.67032365,9.4142496 4.66449113,9.42443092 C4.65666327,9.43804014 4.64965401,9.45210981 4.64279825,9.46658879 C4.63793781,9.47671895 4.63287273,9.48725842 4.62857508,9.49779788 C4.62233326,9.51299313 4.61726818,9.52859768 4.61215194,9.54425339 C4.60882638,9.55438356 4.60514268,9.56451372 4.60222642,9.57505319 C4.59751947,9.59260191 4.59439856,9.61055993 4.591073,9.62856911 C4.58953813,9.63793184 4.58718466,9.64688527 4.58600792,9.656248 C4.58227306,9.68356875 4.5801754,9.7112988 4.5801754,9.73938699 L4.5801754,14.2608177 C4.5801754,14.2889058 4.58227306,14.3166359 4.58600792,14.3443659 C4.58718466,14.3533705 4.58953813,14.3626821 4.591073,14.3716355 C4.59439856,14.3896447 4.59751947,14.4075516 4.60222642,14.4251515 C4.60514268,14.4356909 4.60882638,14.4458211 4.61215194,14.4560024 C4.61726818,14.4715558 4.62233326,14.4872115 4.62857508,14.5028161 C4.63287273,14.5134067 4.63793781,14.5235369 4.64279825,14.533667 C4.64965401,14.5480437 4.65666327,14.5621134 4.66449113,14.576183 C4.67032365,14.5860062 4.67636081,14.5956759 4.68280728,14.6054479 C4.69119793,14.6187502 4.70020252,14.6316431 4.70956525,14.6441268 C4.7165745,14.6538988 4.72399306,14.6628522 4.73161626,14.6718057 C4.74159294,14.6835219 4.75213241,14.6952381 4.76323466,14.7061868 C4.7716253,14.7147309 4.7798113,14.7233262 4.78881589,14.7311029 C4.80027628,14.7417447 4.81240178,14.7518749 4.82488542,14.7615958 C4.83424815,14.7690655 4.84361088,14.7764329 4.85358755,14.7834421 C4.85727125,14.7857956 4.86059681,14.7889165 4.86412702,14.7912188 L11.646273,19.3127007 C11.7534072,19.3841234 11.8767599,19.4200395 12.0001126,19.4200395 C12.1232606,19.4200395 12.2465621,19.3841234 12.3536963,19.3127007 L19.1358934,14.7912188 C19.1394237,14.7889165 19.1426981,14.7857956 19.1464329,14.7834421 C19.1563584,14.7764329 19.1657723,14.7690655 19.1752885,14.7615958 C19.1876187,14.7518749 19.199693,14.7417447 19.2114092,14.7311029 C19.220158,14.7233262 19.2284463,14.7147309 19.2367858,14.7061868 C19.2478881,14.6952381 19.2584275,14.6835219 19.2686089,14.6718057 C19.2760274,14.6628522 19.283446,14.6538988 19.2904041,14.6441268 C19.3000226,14.6316431 19.3088225,14.6187502 19.3174178,14.6054479 C19.323455,14.5956759 19.3296968,14.5860062 19.3355293,14.576183 C19.3435618,14.5621134 19.3505199,14.5480437 19.3572222,14.533667 C19.3620827,14.5235369 19.3670966,14.5134067 19.3714454,14.5028161 C19.3776872,14.4872115 19.3827523,14.4715558 19.3878685,14.4560024 C19.3911429,14.4458211 19.3950313,14.4356909 19.397794,14.4251515 C19.402501,14.4075516 19.4057754,14.3896447 19.4089475,14.3716355 C19.4104823,14.3626821 19.4128358,14.3533705 19.414166,14.3443659 C19.4176962,14.3166359 19.4198962,14.2889058 19.4198962,14.2608177 L19.4198962,9.73938699 C19.4198962,9.7112988 19.4176962,9.68356875 19.414166,9.656248 L19.414166,9.656248 Z"}}]})(props);
};
GrCodepen.displayName = "GrCodepen";
var GrCoffee = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd","transform":"rotate(35 6.328 18.929)"},"child":[{"tag":"path","attr":{"stroke":"#000","strokeWidth":"2","d":"M7,20 C12,20 14,15 14,10 C14,5 12,0 7,0 C2,8.74747714e-16 0,5 0,10 C2.1431319e-16,15 2,20 7,20 Z"}},{"tag":"path","attr":{"d":"M7,2 C6,3 4,7 6,10 C8,13 7.5,17 7,18 C8.5,17 10,13 8,10 C6,7 6.5,3 7,2 Z"}}]}]})(props);
};
GrCoffee.displayName = "GrCoffee";
var GrColumns = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,2 L17,22 L17,2 Z M12,2 L12,22 L12,2 Z M7,2 L7,22 L7,2 Z M2,22 L22,22 L22,2 L2,2 L2,22 Z"}}]})(props);
};
GrColumns.displayName = "GrColumns";
var GrCommand = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,9 C9,9 6.83333333,9 5.5,9 C3.5,9 2,7.5 2,5.5 C2,3.5 3.5,2 5.5,2 C7.5,2 9,3.5 9,5.5 C9,6.83333333 9,9 9,12 C9,15 9,17.1666667 9,18.5 C9,20.5 7.5,22 5.5,22 C3.5,22 2,20.5 2,18.5 C2,16.5 3.5,15 5.5,15 C6.83333333,15 9,15 12,15 C15,15 17.1666667,15 18.5,15 C20.5,15 22,16.5 22,18.5 C22,20.5 20.5,22 18.5,22 C16.5,22 15,20.5 15,18.5 C15,17.1666667 15,15 15,12 L15,5.5 C15,3.5 16.5,2 18.5,2 C20.5,2 22,3.5 22,5.5 C22,7.5 20.5,9 18.5,9 L12,9 Z"}}]})(props);
};
GrCommand.displayName = "GrCommand";
var GrCompare = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11,7 L1,7 L1,17 L7,17 L7,8 M10.9997,5 L10.9997,9 L12.9997,7 L10.9997,5 Z M10.9999,16.99965 L12.9999,18.9994 L12.9999,14.9994 L10.9999,16.99965 Z M13,17 L23,17 L23,7 L17,7 L17,16"}}]})(props);
};
GrCompare.displayName = "GrCompare";
var GrCompass = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M10,10 L15,9 L14,14 L9,15 L10,10 Z M12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 Z"}}]})(props);
};
GrCompass.displayName = "GrCompass";
var GrCompliance = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#231F20","strokeWidth":"2","d":"M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11"}}]})(props);
};
GrCompliance.displayName = "GrCompliance";
var GrConfigure = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,15 C20.0089021,14.9354541 23,11.9673591 23,8 C23,4.98813056 22.0029673,5.9851632 21,7 C20.0089021,7.97922849 18,10 18,10 L14,6 C14,6 16.0207715,3.99109792 17,3 C18.0148368,1.99703264 18.0148368,1 16,1 C12.0326409,0.999999999 9.05307486,3.99109792 9,8 C9.04154304,8.97626113 9,11 9,11 C7.11486635,12.8970031 4.65923194,15.3526375 3,17 C0.0682492584,19.9436202 4.05637975,23.9317507 7,21 C8.65052042,19.3376102 11.1126942,16.8754364 13,15 C13,15 15.0237389,14.958457 16,15 Z"}}]})(props);
};
GrConfigure.displayName = "GrConfigure";
var GrConnect = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,21 C7.50000053,23.5 5.00000002,23 3,21 C0.999999977,19 0.500000114,16.5 3.00000004,14 C5.49999997,11.5 5.99999998,11 5.99999998,11 L13.0000005,18 C13.0000005,18 12.4999995,18.5 10,21 Z M14.0003207,3 C16.5,0.499999776 19,0.999999776 21.001068,3 C23.002136,5.00000022 23.5,7.49999978 21.001068,10 C18.5021359,12.5000002 18.0007478,13 18.0007478,13 L11,6 C11,6 11.5006414,5.50000022 14.0003207,3 Z M11,9.9999 L8.5,12.4999999 L11,9.9999 Z M14,13 L11.5,15.5 L14,13 Z"}}]})(props);
};
GrConnect.displayName = "GrConnect";
var GrConnectivity = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M6,8 L6,12 L9,15 L15,9 L11,5 L5,5 L2.5,3 M17,7 L20,10 L20,17 M13,11 L16,14 M11,13 L14,16 M7,17 L10,20 L20,20"}}]})(props);
};
GrConnectivity.displayName = "GrConnectivity";
var GrContactInfo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"}}]})(props);
};
GrContactInfo.displayName = "GrContactInfo";
var GrContact = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"}}]})(props);
};
GrContact.displayName = "GrContact";
var GrContract = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,14 L10,14 L10,22 M1,23 L10,14 M23,1 L14,10 M22,10 L14,10 L14,2"}}]})(props);
};
GrContract.displayName = "GrContract";
var GrCopy = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,15 L17,15 L9,15 Z M9,11 L19,11 L9,11 Z M9,7 L13,7 L9,7 Z M16,1 L16,7 L22,7 M6,5 L2,5 L2,23 L18,23 L18,19 M22,19 L6,19 L6,1 L17,1 L22,6 L22,19 L22,19 Z"}}]})(props);
};
GrCopy.displayName = "GrCopy";
var GrCreativeCommons = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.9836946,0 C8.691525,0 5.7944764,1.21835303 3.55571004,3.48973014 C1.25096379,5.82708715 0,8.85609556 0,12.0163054 C0,15.2098843 1.21797384,18.1729128 3.52272009,20.4772799 C5.82746635,22.7820262 8.82310561,24.03299 11.9836946,24.03299 C15.1439044,24.03299 18.2059028,22.7820262 20.5762498,20.4446692 C22.8150161,18.2388928 24,15.3088542 24,12.0163054 C24,8.7571257 22.8150161,5.7944764 20.5432598,3.52272009 C18.2388928,1.21797384 15.2758642,0 11.9836946,0 L11.9836946,0 Z M12.0163054,2.17278645 C14.7161727,2.17278645 17.1195096,3.19319977 18.9957657,5.07021425 C20.839411,6.91348038 21.8268344,9.34980724 21.8268344,12.0163054 C21.8268344,14.7157935 20.8720217,17.0865196 19.0287556,18.897175 C17.0861404,20.806421 14.5842129,21.8272135 12.0163054,21.8272135 C9.41578715,21.8272135 6.97946028,20.8068002 5.102825,18.9297858 C3.22618972,17.0531505 2.17278645,14.5842129 2.17278645,12.0163054 C2.17278645,9.41578715 3.22618972,6.94684952 5.102825,5.0368451 C6.94647033,3.16058902 9.31681729,2.17278645 12.0163054,2.17278645 L12.0163054,2.17278645 Z M11.8615939,10.0194653 C11.1828351,8.78177337 10.0247741,8.28919927 8.68052834,8.28919927 C6.72388296,8.28919927 5.16652974,9.67326044 5.16652974,12.0159262 C5.16652974,14.3984074 6.63060102,15.7430323 8.74688744,15.7430323 C10.1047842,15.7430323 11.2628452,14.9975352 11.9014093,13.866397 L10.4107944,13.1076281 C10.0778613,13.9058333 9.57201542,14.1458636 8.93345131,14.1458636 C7.82847753,14.1458636 7.32263161,13.2274537 7.32263161,12.0159262 C7.32263161,10.805157 7.74884662,9.88636795 8.93345131,9.88636795 C9.25273336,9.88636795 9.89167667,10.0592808 10.2644252,10.8582443 L11.8615939,10.0194653 L11.8615939,10.0194653 Z M18.7936548,10.0194653 C18.114896,8.78177337 16.956835,8.28919927 15.6125893,8.28919927 C13.6559439,8.28919927 12.0985907,9.67326044 12.0985907,12.0159262 C12.0985907,14.3984074 13.5626619,15.7430323 15.6789484,15.7430323 C17.0368451,15.7430323 18.1949061,14.9975352 18.8334703,13.866397 L17.3428553,13.1076281 C17.0099223,13.9058333 16.5040763,14.1458636 15.8655122,14.1458636 C14.7605385,14.1458636 14.2546925,13.2274537 14.2546925,12.0159262 C14.2546925,10.805157 14.6809075,9.88636795 15.8655122,9.88636795 C16.1847943,9.88636795 16.8237376,10.0592808 17.1964861,10.8582443 L18.7936548,10.0194653 L18.7936548,10.0194653 Z"}}]})(props);
};
GrCreativeCommons.displayName = "GrCreativeCommons";
var GrCreditCard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,5.00087166 C1,4.4481055 1.43945834,4 2.00246167,4 L21.9975383,4 C22.5511826,4 23,4.44463086 23,5.00087166 L23,18.9991283 C23,19.5518945 22.5605417,20 21.9975383,20 L2.00246167,20 C1.44881738,20 1,19.5553691 1,18.9991283 L1,5.00087166 Z M1,8 L23,8 L23,10 L1,10 L1,8 Z M5,15 L7,15 L7,15.5 L5,15.5 L5,15 Z M10,15 L16,15 L16,15.5 L10,15.5 L10,15 Z"}}]})(props);
};
GrCreditCard.displayName = "GrCreditCard";
var GrCss3 = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7,3 L21,3 L18,18 L10,22 L3,18 L4,14 M5,9 L19,9"}}]})(props);
};
GrCss3.displayName = "GrCss3";
var GrCube = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 L12,2 Z M2,7 L12,12 L22,7 M12,12 L12,21.9999998 L12,12 Z"}}]})(props);
};
GrCube.displayName = "GrCube";
var GrCubes = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6.5,10.5 L12,13.5 L17.5,10.5 L17.5,4.5 L12,1.5 L6.5,4.5 L6.5,10.5 Z M6.5,4.5 L12,7.5 L17.5,4.5 M12,7.5 L12,13.5 L12,7.5 Z M1,19.5 L6.5,22.5 L12,19.5 L12,13.5 L6.5,10.5 L1,13.5 L1,19.5 Z M1,13.5 L6.5,16.5 L12,13.5 M6.5,16.5 L6.5,22.5 L6.5,16.5 Z M12,19.5 L17.5,22.5 L23,19.5 L23,13.5 L17.5,10.5 L12,13.5 L12,19.5 Z M12,13.5 L17.5,16.5 L23,13.5 M17.5,16.5 L17.5,22.5 L17.5,16.5 Z"}}]})(props);
};
GrCubes.displayName = "GrCubes";
var GrCurrency = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,5 L23,5 L23,19 L1,19 L1,5 Z M2,9 L2,9 C3.65685425,9 5,7.65685425 5,6 M2,15 L2,15 C3.65685425,15 5,16.3431458 5,18 M22,9 L22,9 C20.3431458,9 19,7.65685425 19,6 M22,15 L22,15 C20.3431458,15 19,16.3431458 19,18 M12,16 C13.6568542,16 15,14.209139 15,12 C15,9.790861 13.6568542,8 12,8 C10.3431458,8 9,9.790861 9,12 C9,14.209139 10.3431458,16 12,16 Z"}}]})(props);
};
GrCurrency.displayName = "GrCurrency";
var GrCursor = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 3 18 14 13 15 16 20.5 13 22 10 16 6 19"}}]})(props);
};
GrCursor.displayName = "GrCursor";
var GrCut = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,4 L8,16 L23,4 Z M23,20 L8,8 L23,20 Z M5,9 C6.65685425,9 8,7.65685425 8,6 C8,4.34314575 6.65685425,3 5,3 C3.34314575,3 2,4.34314575 2,6 C2,7.65685425 3.34314575,9 5,9 Z M5,21 C6.65685425,21 8,19.6568542 8,18 C8,16.3431458 6.65685425,15 5,15 C3.34314575,15 2,16.3431458 2,18 C2,19.6568542 3.34314575,21 5,21 Z"}}]})(props);
};
GrCut.displayName = "GrCut";
var GrCycle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M13,20 C19,19 21,14 21,10 M14,16 L12,20 L16,23 M0,9 L4,6 L7,10 M9.00000008,20 C3,17 2.00000006,12 3.99999998,6 M20,6.99999999 C16,0.99999995 10,1 6,4.00609254 M20,2 L20,7 L15,7"}}]})(props);
};
GrCycle.displayName = "GrCycle";
var GrDashboard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M15,16 C15,14.3431458 13.6568542,13 12,13 C10.3431458,13 9,14.3431458 9,16 M5,5 L7,7 M12,7 L12,13 M12,3 L12,5 M19,12 L21,12 M3,12 L5,12 M17,7 L19,5 M3,17 L21,17"}}]})(props);
};
GrDashboard.displayName = "GrDashboard";
var GrDatabase = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,2 L23,2 L23,9 L1,9 L1,2 Z M4,12 L5,12 L5,13 L4,13 L4,12 Z M4,5 L5,5 L5,6 L4,6 L4,5 Z M4,19 L5,19 L5,20 L4,20 L4,19 Z M1,16 L23,16 L23,23 L1,23 L1,16 Z M1,9 L23,9 L23,16 L1,16 L1,9 Z"}}]})(props);
};
GrDatabase.displayName = "GrDatabase";
var GrDebian = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.65603874,5.16700815 C2.68642627,5.33364645 3.03933499,4.93419361 2.7631231,5.55645706 C2.23136472,5.92819947 2.69882551,5.71915014 2.65603874,5.16700815 L2.65603874,5.16700815 Z M2.65866423,5.19930536 C2.65706423,5.17900536 2.65606423,5.15910536 2.65376423,5.13840536 C2.65336423,5.16220536 2.65536423,5.18170536 2.65866423,5.19930536 L2.65866423,5.19930536 Z M2.21290675,6.95977879 C1.868546,7.39990489 2.05448766,7.49365067 2.0181823,7.79306417 C2.14278529,7.41066029 2.16532936,7.18103949 2.21290675,6.95977879 L2.21290675,6.95977879 Z M13.0395111,0 C12.6680035,0.0312799047 12.297905,0.0498318001 11.9324561,0.0968925575 L12.0934114,0.118873031 C12.3623434,0.0203366347 12.7543286,0.0648611837 13.0395111,0 L13.0395111,0 Z M12.4285197,0.467238997 L12.4387115,0.427538997 L12.2886995,0.493438997 L12.4285197,0.467238997 L12.4285197,0.467238997 Z M12.0148829,0.309558336 C12.227032,0.34764843 12.4735139,0.376861794 12.4387115,0.427538997 C12.6709155,0.376673927 12.7236592,0.32975407 12.0148829,0.309558336 L12.0148829,0.309558336 Z M9.80002141,13.2015757 C9.66175108,13.0486518 9.57979397,12.8644479 9.48820866,12.6809015 C9.57580179,13.0035166 9.75530899,13.280527 9.92236998,13.5623279 L9.80002141,13.2015757 L9.80002141,13.2015757 Z M14.1172119,12.9648629 C14.2606016,12.8527531 14.3906527,12.7394692 14.5066608,12.629285 C14.1832002,12.7084241 13.8542916,12.7101619 13.5228937,12.6798683 C13.1252256,12.6855982 13.5980875,12.8847845 14.1172119,12.9648629 L14.1172119,12.9648629 Z M15.6571131,12.147875 C15.8942016,11.8210799 16.0668986,11.4631927 16.1274389,11.0931411 C16.0742724,11.3569068 15.9313054,11.5847428 15.7963697,11.8249781 C15.0532137,12.2929556 15.726671,11.5471224 15.795947,11.2635367 C14.9967126,12.269754 15.6861856,11.8669195 15.6571131,12.147875 L15.6571131,12.147875 Z M16.4451694,10.0977732 C16.4930286,9.38167002 16.3039402,9.60800315 16.240488,9.88135006 C16.3145077,9.91995679 16.3734511,10.3861495 16.4451694,10.0977732 L16.4451694,10.0977732 Z M11.8867574,15.2447735 C11.3145606,14.9767808 10.7906457,14.5723025 10.3596781,14.0769904 C10.5883126,14.4117699 10.8349823,14.7369682 11.153934,14.9926086 C10.6143792,14.8097668 9.89357932,13.6851931 9.68312098,13.6393065 C10.6132989,15.3047501 13.4566704,16.5598445 14.9457536,15.9369705 C14.2566564,15.9625674 13.3814766,15.9512484 12.6074633,15.6651265 C12.3129343,15.5135646 11.9222173,15.2147147 11.9101938,15.1117165 C11.8954932,15.1495717 11.871728,15.1878027 11.8867574,15.2447735 L11.8867574,15.2447735 Z M11.9266054,15.0880452 C11.9135054,15.1006452 11.9080054,15.1174452 11.9105054,15.1383452 C11.9171054,15.1216452 11.9226054,15.1049452 11.9266054,15.0880452 L11.9266054,15.0880452 Z M9.12642322,13.5046996 C9.38774663,13.8598158 9.59505819,14.2443332 9.9288514,14.5219071 C9.68871003,14.0531782 9.510377,13.8593931 9.18217284,13.2257637 L9.12642322,13.5046996 L9.12642322,13.5046996 Z M20.4597996,8.57609506 C20.4664689,8.21097497 20.5613419,8.38475222 20.5982578,8.29485772 C20.5265864,8.25366782 20.3385313,7.97374555 20.2238383,7.43682082 C20.3068756,7.31071489 20.4457565,7.76394474 20.5586178,7.78249664 C20.4859601,7.35556821 20.3609344,7.03004115 20.355909,6.70249453 C20.0262019,6.01335032 20.2392904,6.7944086 19.9717204,6.40669747 C19.6206903,5.31185384 20.2629147,6.15251302 20.3062651,5.65513435 C20.8383052,6.42595387 21.1418049,7.6204611 21.2808736,8.11530355 C21.1746347,7.51196773 21.0029709,6.92760651 20.793358,6.36217292 C20.9550648,6.43013391 20.5332088,5.12083977 21.0035345,5.98794127 C20.5010365,4.13960888 18.8535812,2.41254484 17.337727,1.60217926 C17.523058,1.77182343 17.7574695,1.98509978 17.6732579,2.01849319 C16.9195813,1.56953732 17.0519808,1.53468793 16.9441919,1.3450359 C16.3299598,1.09521936 16.2898971,1.36518467 15.8830705,1.34541163 C14.7254322,0.731555248 14.5023868,0.796792166 13.4371322,0.412086912 L13.4859777,0.638560937 C12.7187747,0.383155349 12.5924339,0.735500461 11.7637043,0.639453306 C11.7133089,0.600095108 12.0293017,0.496955963 12.2892631,0.459194636 C11.5478448,0.556979564 11.5825533,0.313080848 10.8571507,0.48605966 C11.0359534,0.36065824 11.2250418,0.277667862 11.4156332,0.171006205 C10.8111232,0.207734262 9.97238965,0.522740749 10.2312708,0.236243124 C9.24524928,0.676275296 7.49385642,1.29388903 6.5109817,2.21547205 L6.4801245,2.00891195 C6.02975963,2.54954706 4.51625373,3.62358439 4.39564292,4.3237658 L4.27526696,4.35189893 C4.0409025,4.74867465 3.88934056,5.19838199 3.70349284,5.60657066 C3.39694038,6.12884174 3.25420821,5.8075417 3.29784038,5.88940487 C2.6950212,7.11176343 2.3956077,8.13874 2.13691443,8.98099605 C2.32116528,9.25659737 2.14132932,10.6396764 2.21102808,11.7466375 C1.908186,17.2136227 6.04793579,22.5218601 10.5729544,23.7472715 C11.236032,23.9847827 12.2225702,23.9755773 13.0613977,24 C12.0715718,23.7167901 11.9434463,23.8500349 10.9793584,23.5137055 C10.2838267,23.1863467 10.1313254,22.8121151 9.63873733,22.3848109 L9.83364965,22.7293126 C8.86754209,22.3873471 9.27173857,22.3060476 8.48579574,22.0570764 L8.69399967,21.7851855 C8.38082489,21.7615612 7.86447163,21.2572784 7.72328936,20.9783424 L7.38071335,20.9918219 C6.96919004,20.4838287 6.74985497,20.1180041 6.76577672,19.8343715 L6.65512288,20.0314443 C6.52972146,19.8161953 5.14067765,18.1269396 5.86138356,18.519911 C5.72748115,18.3976094 5.54947689,18.3208656 5.35649021,17.9703052 L5.50326153,17.8027276 C5.15650547,17.3564488 4.86507633,16.7845338 4.88715074,16.5941303 C5.07210609,16.8439469 5.20041945,16.8906319 5.32755864,16.9332308 C4.45181525,14.7605455 4.40268795,16.8135124 3.7393755,14.7218918 L3.8798063,14.7101971 C3.77211137,14.5484903 3.70682749,14.3725056 3.62040853,14.1998556 L3.6814654,13.5912595 C3.05098276,12.8623344 3.50501104,10.4917309 3.59603275,9.19164225 C3.65910919,8.66293672 4.12229601,8.10013327 4.47464112,7.21762665 L4.2599088,7.18061679 C4.67025794,6.46488936 6.60256701,4.30638808 7.49751984,4.41741765 C7.93111755,3.87279036 7.41157055,4.41544504 7.3267015,4.27825495 C8.27904778,3.29279705 8.57846129,3.58206572 9.22110834,3.40471899 C9.91429169,2.99328962 8.62617958,3.56515766 8.95490038,3.24775587 C10.1529301,2.94181398 9.80401359,2.55213024 11.3671164,2.39667005 C11.53197,2.49050977 10.9844308,2.5415627 10.8470058,2.66339464 C11.8453326,2.17503361 14.0060883,2.28601622 15.4094101,2.93439322 C17.0381256,3.6956315 18.8678121,5.94534236 18.9399062,8.06204317 L19.0220982,8.08411758 C18.9804856,8.92562216 19.1508342,9.89868082 18.8556947,10.7925534 L19.0566657,10.3693823 C19.0801022,11.012546 18.8683757,11.3244527 18.6775965,11.8769234 L18.3338463,12.0486811 C18.052609,12.5948113 18.3609932,12.3953902 18.1598342,12.8297394 C17.7207414,13.2203625 16.8271976,14.0514404 16.5414514,14.1274327 C16.332496,14.1227361 16.6826807,13.8809508 16.7285673,13.7864066 C16.1408714,14.1898986 16.2568794,14.3922317 15.3580284,14.6371637 L15.331633,14.5789718 C13.1144702,15.621964 10.0350434,13.555142 10.0755758,10.7347372 C10.0517636,10.9137278 10.0081784,10.8690154 9.95905107,10.9414852 C9.84468686,9.49030429 10.6292676,8.03287678 11.9523231,7.43776015 C13.2464469,6.79713268 14.7636162,7.06005296 15.6907883,7.92400768 C15.181621,7.25703181 14.1681239,6.54999325 12.9667595,6.61612254 C11.7901936,6.63467443 10.6894321,7.38252717 10.3220577,8.19425478 C9.71914454,8.57384065 9.64921094,9.65736528 9.38652549,9.85561224 C9.03319407,12.4530655 10.0513878,13.5751499 11.7738491,14.8952464 C11.9110392,14.987818 11.9288397,15.0405617 11.9177085,15.0881391 C11.9182721,15.0875755 11.9185539,15.0869649 11.9191175,15.0864483 C13.9511372,15.8454322 16.0503663,15.6614631 17.8083815,14.2520827 C18.2556466,13.9036358 18.7443364,13.3110554 18.8855656,13.3028362 C18.6728998,13.6223985 18.921871,13.4565117 18.7584264,13.7389701 C19.2043294,13.020002 18.5648761,13.4462259 19.219171,12.497543 L19.4609562,12.83035 C19.3711086,12.2338713 20.2019517,11.5092671 20.1175993,10.5657037 C20.3082377,10.2770925 20.3300772,10.8761544 20.127932,11.5401243 C20.4084179,10.8035906 20.2019517,10.6852342 20.2739989,10.0775305 C20.3519638,10.2817422 20.4541166,10.4988229 20.5066255,10.7144476 C20.3237837,10.0027123 20.6941171,9.51580727 20.7857024,9.10221742 C20.6957609,9.06210775 20.5037606,9.41684817 20.4597996,8.57609506 L20.4597996,8.57609506 Z"}}]})(props);
};
GrDebian.displayName = "GrDebian";
var GrDeliver = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.65685425,21 9,19.6568542 9,18 C9,16.3431458 7.65685425,15 6,15 C4.34314575,15 3,16.3431458 3,18 C3,19.6568542 4.34314575,21 6,21 Z M17,21 C18.6568542,21 20,19.6568542 20,18 C20,16.3431458 18.6568542,15 17,15 C15.3431458,15 14,16.3431458 14,18 C14,19.6568542 15.3431458,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18"}}]})(props);
};
GrDeliver.displayName = "GrDeliver";
var GrDeploy = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"}}]})(props);
};
GrDeploy.displayName = "GrDeploy";
var GrDescend = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,8 L8,2 L14,8 M11,21 L22,21 M11,17 L19,17 M11,13 L16,13 M8,2 L8,22","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrDescend.displayName = "GrDescend";
var GrDesktop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L23,1 L23,19 L1,19 L1,1 Z M5,23 L19,23 L5,23 Z M10,19 L10,23 L10,19 Z M14,19 L14,23 L14,19 Z"}}]})(props);
};
GrDesktop.displayName = "GrDesktop";
var GrDetach = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,4 L20,20 M22,12 C22,12 16.7200572,17.2799437 16.7200572,17.2799437 M15,19 C15,19 13.7932491,20.2067517 13.0000004,21.0000004 C6.99999996,27.0000004 -2.00000007,18.0000004 3.99999994,12.0000004 C4.88551518,11.1144851 6,10 6,10 M8,8 C8,8 10.1615592,5.83844087 13,3.00000008 C17,-0.999999955 23,4.99999994 19,9.00000005 C16.9873313,11.0126688 14,14 14,14 M12,16 C12,16 10.6478339,17.3521667 9.99999995,18.0000004 C7.99999952,20 5,17 6.99999995,15.0000004 C7.50049504,14.4995054 9,13 9,13 M11,11 C10.7388543,11.261146 16,6 16,6"}}]})(props);
};
GrDetach.displayName = "GrDetach";
var GrDevice = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M2,7 L22,7 L22,21 L16,21 L12,17 L8,21 L2,21 L2,7 Z M6,2 L11,7 L12,7 L13,7 L18,2"}}]})(props);
};
GrDevice.displayName = "GrDevice";
var GrDiamond = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20"}}]})(props);
};
GrDiamond.displayName = "GrDiamond";
var GrDirections = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,11 L22,6 L17,1 M22,6 L18,6 C14.686,6 12,8.686 12,12 L12,24 M7,6 L2,11 L7,16 M2,11 L6,11 C9.314,11 12,13.686 12,17 L12,24"}}]})(props);
};
GrDirections.displayName = "GrDirections";
var GrDisc = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 Z"}}]})(props);
};
GrDisc.displayName = "GrDisc";
var GrDislike = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L20,23 C22,23 23,22 23,20 L23,10 L16,10 L16,4 C16,2 15,1 13,1 L11,1 C11,1 10.9842682,7 10.9842677,8.32575545 C10.9842672,9.65151089 10,11 8,11 L1,11 L1,23 Z M6,23 L6,11","transform":"rotate(180 12 12)"}}]})(props);
};
GrDislike.displayName = "GrDislike";
var GrDocker = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.94221099,14.9002344 C6.9980621,14.9002344 7.05128211,14.9107588 7.10043586,14.9297745 C7.04721586,14.9606302 7.01109801,15.018335 7.01109801,15.0842919 C7.01109801,15.1828984 7.09098782,15.2626686 7.18959432,15.2626686 C7.25710599,15.2626686 7.31570779,15.2251754 7.34608506,15.1698027 C7.36743286,15.2214082 7.37939241,15.2780367 7.37939241,15.3374756 C7.37939241,15.578939 7.18361455,15.774657 6.94221099,15.774657 C6.70080744,15.774657 6.50496978,15.578939 6.50496978,15.3374756 C6.50496978,15.0959525 6.70080744,14.9002344 6.94221099,14.9002344 L6.94221099,14.9002344 Z M6.94221099,16.0853662 C6.52978585,16.0853662 6.19420083,15.7499008 6.19420083,15.3374756 C6.19420083,14.9250505 6.52978585,14.5895253 6.94221099,14.5895253 C7.35457634,14.5895253 7.69010156,14.9250505 7.69010156,15.3374756 C7.69010156,15.7499008 7.35457634,16.0853662 6.94221099,16.0853662 L6.94221099,16.0853662 Z M20.3859431,11.1838037 C18.2619865,16.8117894 13.4653093,19.318631 7.81023526,19.318631 C5.13823222,19.318631 3.00656172,18.3995992 1.64323262,16.8672219 L1.65327865,16.8605843 C2.04609012,16.880497 2.39758135,16.8872541 2.75439457,16.8872541 C3.08065114,16.8872541 3.39979178,16.8838457 3.6953721,16.8672219 C3.72108514,16.8657867 3.75325633,16.8621989 3.77878997,16.8605843 C3.77902916,16.8605245 3.86998155,16.8546046 3.82549202,16.853887 C4.57667146,16.8075437 5.15892224,16.7031368 5.70188589,16.5482008 C5.70200548,16.548141 5.70212508,16.548141 5.70224467,16.5480812 C5.80091098,16.5198567 5.89658739,16.4901372 5.98825735,16.4583846 C6.09081051,16.4228049 6.14510687,16.3108635 6.109587,16.2083104 C6.07406714,16.1056974 5.96218553,16.0512815 5.85957258,16.0869807 C5.16992503,16.3259326 4.26010213,16.4574876 3.14505333,16.4821841 L3.14475434,16.4821841 C2.57739321,16.4947416 1.95717085,16.4797922 1.28450587,16.4365584 L1.28444607,16.4365584 C1.14529669,16.2507668 1.01649231,16.0576798 0.89869073,15.8577161 L0.71248051,15.5172277 C0.149903198,14.4112083 -0.0964037696,13.1191582 0.0343141305,11.7160038 L16.3965356,11.7160038 C17.7407294,11.7160038 19.0534696,11.2143604 19.6764427,10.6609919 C18.5601381,9.75332174 18.670764,7.59731356 19.3822377,6.774616 C19.9997093,7.270758 20.9954018,8.31584342 20.824141,9.64622396 C21.6011531,9.255625 22.9506091,9.06259783 24,9.66816973 C23.3411483,10.9541803 21.8929064,11.3383809 20.3859431,11.1838037 L20.3859431,11.1838037 Z M2.25508329,11.3188869 L4.46771995,11.3188869 L4.46771995,9.1061306 L2.25508329,9.1061306 L2.25508329,11.3188869 Z M4.80808879,11.3188869 L7.02096464,11.3188869 L7.02096464,9.1061306 L4.80808879,9.1061306 L4.80808879,11.3188869 Z M4.80808879,8.76576176 L7.02096464,8.76576176 L7.02096464,6.5530653 L4.80808879,6.5530653 L4.80808879,8.76576176 Z M7.36127369,11.3188869 L9.57402994,11.3188869 L9.57402994,9.1061306 L7.36127369,9.1061306 L7.36127369,11.3188869 Z M7.36127369,8.76576176 L9.57402994,8.76576176 L9.57402994,6.5530653 L7.36127369,6.5530653 L7.36127369,8.76576176 Z M9.91433899,11.3188869 L12.1270952,11.3188869 L12.1270952,9.1061306 L9.91433899,9.1061306 L9.91433899,11.3188869 Z M9.91433899,8.76576176 L12.1270952,8.76576176 L12.1270952,6.5530653 L9.91433899,6.5530653 L9.91433899,8.76576176 Z M9.91433899,6.21275626 L12.1270952,6.21275626 L12.1270952,4 L9.91433899,4 L9.91433899,6.21275626 Z M12.4674043,11.3188869 L14.6801605,11.3188869 L14.6801605,9.1061306 L12.4674043,9.1061306 L12.4674043,11.3188869 Z"}}]})(props);
};
GrDocker.displayName = "GrDocker";
var GrDocumentCloud = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L19,23 M18,1 L18,6 L23,6 M11,13 L6.00166547,13 C4.34389141,13 3,14.3465171 3,16 L3,16 C3,17.6568542 4.34306961,19 5.9906311,19 L7,19 L7,20.0093689 C7,21.6610488 8.33902013,23 10.0016655,23 L11.9983345,23 C13.6561086,23 15,21.6569304 15,20.0093689 L15,19 M11,19 L15.9983345,19 C17.6561086,19 19,17.6534829 19,16 L19,16 C19,14.3431458 17.6569304,13 16.0093689,13 L15,13 L15,11.9906311 C15,10.3389512 13.6609799,9 11.9983345,9 L10.0016655,9 C8.34389141,9 7,10.3430696 7,11.9906311 L7,13"}}]})(props);
};
GrDocumentCloud.displayName = "GrDocumentCloud";
var GrDocumentConfig = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L16,23 M18,1 L18,6 L23,6 M9,14 L9,11 M9,20 C10.6568542,20 12,18.6568542 12,17 C12,15.3431458 10.6568542,14 9,14 C7.34314575,14 6,15.3431458 6,17 C6,18.6568542 7.34314575,20 9,20 Z M9,23 L9,20 M12,17 L15,17 M3,17 L6,17 M5,13 L7,15 M11,19 L13,21 M13,13 L11,15 M7,19 L5,21"}}]})(props);
};
GrDocumentConfig.displayName = "GrDocumentConfig";
var GrDocumentCsv = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M7,13 C7,13 6.00000004,13 5,13 C3.99999996,13 3,13.5 3,14.5 L3,16 C3,16 3.00000001,16.5 3,17.5 C2.99999999,18.5 4,19 5,19 L7,19 M13.25,13 C13.25,13 12.25,13 10.75,13 C9.25,13 8.75,13.5 8.75,14.5 C8.75,15.5 9.25,16 10.75,16 C12.25,16 12.75,16.5 12.75,17.5 C12.75,18.5 12.25,19 10.75,19 C9.25,19 8.25,19 8.25,19 M20.5,12 C20.5,12 20.5,12 20.5,12.5 C20.5,13 18,19 18,19 L17.5,19 C17.5,19 15,13 15,12.5 L15,12"}}]})(props);
};
GrDocumentCsv.displayName = "GrDocumentCsv";
var GrDocumentDownload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,9 L12,18 M8,15 L12,19 L16,15"}}]})(props);
};
GrDocumentDownload.displayName = "GrDocumentDownload";
var GrDocumentExcel = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M9.25,12 L7.25,15.25 L5.25,12 L5,12 L7.25,15.5 L4.75,19 L5,19 L7.25,15.75 L9.5,19 L9.75,19 L7.25,15.5 L9.5,12 L9.25,12 Z"}}]})(props);
};
GrDocumentExcel.displayName = "GrDocumentExcel";
var GrDocumentImage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L19.9999998,23 M18,1 L18,6 L23,6 M3,11 L16,11 L16,23 L3,23 L3,11 Z M7,16 C7.55228475,16 8,15.5522847 8,15 C8,14.4477153 7.55228475,14 7,14 C6.44771525,14 6,14.4477153 6,15 C6,15.5522847 6.44771525,16 7,16 Z M5,23 L7,20 L9,22 L13,16 L16,20"}}]})(props);
};
GrDocumentImage.displayName = "GrDocumentImage";
var GrDocumentLocked = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M4,15 L14,15 L14,23 L4,23 L4,15 Z M6,15 L6,13 C6,11.3431458 7.34314575,10 9,10 C10.6568542,10 12,11.3431458 12,13 L12,15 M8,19 L10,19"}}]})(props);
};
GrDocumentLocked.displayName = "GrDocumentLocked";
var GrDocumentMissing = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M9,12 L15,18 M15,12 L9,18"}}]})(props);
};
GrDocumentMissing.displayName = "GrDocumentMissing";
var GrDocumentNotes = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M9.75,12 L9.75,18.5 L9.5,18.5 L4.5,12 L4,12 L4,19 L4.25,19 L4.25,12.5 L4.5,12.5 L9.5,19 L10,19 L10,12 L9.75,12 Z"}}]})(props);
};
GrDocumentNotes.displayName = "GrDocumentNotes";
var GrDocumentOutlook = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,8.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L2,23 M16,1 L16,6 L21,6 M7.75,15.75 C7.75,13.5 6.49999991,12 5,12 C3.50000009,12 2.25,13.5 2.25,15.75 C2.25,18 3.50000006,19.5000002 5.00000003,19.5000001 C6.5,19.5 7.75,18 7.75,15.75 Z M5,12 C7.42537405,12 8,14.5 8,15.75 C8,17 7.5,19.5 5,19.5 C2.5,19.5 2,17 2,15.75 C2,14.5 2.559,12 5,12 Z"}}]})(props);
};
GrDocumentOutlook.displayName = "GrDocumentOutlook";
var GrDocumentPdf = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"}}]})(props);
};
GrDocumentPdf.displayName = "GrDocumentPdf";
var GrDocumentPerformance = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,19 L8,14 L12,18 L18.5,11.5 M19,17.0003099 L19,11 L13,11"}}]})(props);
};
GrDocumentPerformance.displayName = "GrDocumentPerformance";
var GrDocumentPpt = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M4,12 L4.24999995,12 L5.49999995,12 C7.5,12 9,12.5 8.99999995,14.25 C8.9999999,16 7.5,16.5 5.49999995,16.5 L4.24999995,16.5 L4.24999995,19 L4,18.9999999 L4,12 Z"}}]})(props);
};
GrDocumentPpt.displayName = "GrDocumentPpt";
var GrDocumentRtf = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M20.5,12 L16.5,12 L16.5,19 M19.5,15.5 L16.5,15.5 M8.5,12 L14.5,12 M11.5,12 L11.5,19 M3,19 L3,12 L4.5,12 C5,12 7,12 7,14 C7,16 5,16 4.5,16 C4,16 3,16 3,16 M5.25,16 L7.5,19"}}]})(props);
};
GrDocumentRtf.displayName = "GrDocumentRtf";
var GrDocumentSound = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,8.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L18,23 M16,1 L16,6 L21,6 M1,14.0104121 L1,18.0104121 L4,18.0104121 L8,21.0104121 L8,11 L4,14.0104121 L1,14.0104121 Z M11,18 L11,18 C12.1045695,18 13,17.1045695 13,16 C13,14.8954305 12.1045695,14 11,14 M11,22 L11,22 C14.3137085,22 17,19.3137085 17,16 C17,12.6862915 14.3137085,10 11,10"}}]})(props);
};
GrDocumentSound.displayName = "GrDocumentSound";
var GrDocumentStore = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M3,12 C3,12 4,10 9,10 C14,10 15,12 15,12 L15,21 C15,21 14,23 9,23 C4,23 3,21 3,21 L3,12 Z M3,17 C3,17 5,19 9,19 C13,19 15,17 15,17 M3,13 C3,13 5,15 9,15 C13,15 15,13 15,13"}}]})(props);
};
GrDocumentStore.displayName = "GrDocumentStore";
var GrDocumentTest = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,5.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L20,23 M18,1 L18,6 L23,6 M6,9 L14,9 M8,9 L8,13.5 L3,21.5 L3,23 L17,23 L17,21.4188612 L12,13.5 L12,9 M5.5,17.5 C5.5,17.5 7.5,19.0000002 10,17.5000001 C12.5,16 14.5,17.5000001 14.5,17.5000001"}}]})(props);
};
GrDocumentTest.displayName = "GrDocumentTest";
var GrDocumentText = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"}}]})(props);
};
GrDocumentText.displayName = "GrDocumentText";
var GrDocumentThreat = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M9,23 C11.7614237,23 14,20.7614237 14,18 C14,15.2385763 11.7614237,13 9,13 C6.23857625,13 4,15.2385763 4,18 C4,20.7614237 6.23857625,23 9,23 Z M9,11 C9,11 9,10 9,9 C9,8 9,7 11,7 C13,7 13.0000001,8 13,9 C12.9999999,10 13,10.9999998 15,10.9999999 C17,11.0000001 17,11 17,11 M8,11 L10,11 L10,13 L8,13 L8,11 Z"}}]})(props);
};
GrDocumentThreat.displayName = "GrDocumentThreat";
var GrDocumentTime = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M10,23 C13.8659932,23 17,19.8659932 17,16 C17,12.1340068 13.8659932,9 10,9 C6.13400675,9 3,12.1340068 3,16 C3,19.8659932 6.13400675,23 10,23 Z M10,12 L10,16 L13,19"}}]})(props);
};
GrDocumentTime.displayName = "GrDocumentTime";
var GrDocumentTransfer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M8,12 L4,16 L8,20 M4,16 L15,16"}}]})(props);
};
GrDocumentTransfer.displayName = "GrDocumentTransfer";
var GrDocumentTxt = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M2,12 L7,12 M4.5,12 L4.5,19 M16,12 L21,12 M18.5,12 L18.5,19 M14.5,11.5 L8.5,18.5 M8.5,11.5 L14.5,18.5"}}]})(props);
};
GrDocumentTxt.displayName = "GrDocumentTxt";
var GrDocumentUpdate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,6.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L15,23 M16,1 L16,6 L21,6 M8,23 C11.8659932,23 15,19.8659932 15,16 C15,12.1340068 11.8659932,9 8,9 C4.13400675,9 1,12.1340068 1,16 C1,19.8659932 4.13400675,23 8,23 Z M4.5,16.5 L8,13 L11.5,16.5 M8,13.5 L8,20"}}]})(props);
};
GrDocumentUpdate.displayName = "GrDocumentUpdate";
var GrDocumentUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,20 L12,11 M8,14 L12,10 L16,14"}}]})(props);
};
GrDocumentUpload.displayName = "GrDocumentUpload";
var GrDocumentUser = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L16,23 M18,1 L18,6 L23,6 M8,11 C6.34325,11 5,12.34325 5,14 C5,15.65675 6.34325,17 8,17 C9.65675,17 11,15.65675 11,14 C11,12.34325 9.65675,11 8,11 L8,11 Z M3,23 L3,22 C3,18 6,17 8,17 C10,17 13,18 13,22 L13,23 L3,23 Z"}}]})(props);
};
GrDocumentUser.displayName = "GrDocumentUser";
var GrDocumentVerified = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M7.5,15 L10.5,18 L16.5,12"}}]})(props);
};
GrDocumentVerified.displayName = "GrDocumentVerified";
var GrDocumentVideo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L22.9999998,23 L4,23 M18,1 L18,6 L23,6 M3,10 L12,10 L12,19 L3,19 L3,10 Z M12,13 L17,10.5 L17,18.5 L12,16 L12,13 Z"}}]})(props);
};
GrDocumentVideo.displayName = "GrDocumentVideo";
var GrDocumentWindows = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M14.25,11.5 L8.25,18.5 M8.25,11.5 L14.25,18.5 M20.5,12 L16.5,12 L16.5,18 L20.5,18 M19.5,15 L16.5,15 M7,12 L3,12 L3,18 L7,18 M6,15 L3,15"}}]})(props);
};
GrDocumentWindows.displayName = "GrDocumentWindows";
var GrDocumentWord = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M14,12 L12.5,18.75 L12.25,18.75 L9.5,12 L9,12 L6.25,18.75 L6,18.75 L4.5,12 L4,12 L6,19 L6.5,19 L9,12.5 L9.5,12.5 L12,19 L12.5,19 L14.5,12 L14,12 Z"}}]})(props);
};
GrDocumentWord.displayName = "GrDocumentWord";
var GrDocumentZip = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M2,13 L7,13 L7,14 L3,18 L3,19 L8,19 M11,12 L11,20 L11,12 Z M15,13 L15,20 L15,13 Z M20,15 C20,13.895 19.105,13 18,13 L15,13 L15,17 L18,17 C19.105,17 20,16.105 20,15 Z"}}]})(props);
};
GrDocumentZip.displayName = "GrDocumentZip";
var GrDocument = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z"}}]})(props);
};
GrDocument.displayName = "GrDocument";
var GrDomain = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M13,3 L13,7 L13,3 Z M9,3 L9,7 L9,3 Z M5,3 L5,7 L5,3 Z M1,7 L23,7 L1,7 Z M1,21 L23,21 L23,3 L1,3 L1,21 Z"}}]})(props);
};
GrDomain.displayName = "GrDomain";
var GrDos = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0,4.54603675 L4.93388435,4.42224753 C5.89173496,4.40127916 6.77758573,4.50447894 7.67366806,4.81357302 L7.67366806,4.98877266 C6.90124863,5.64776074 6.34520769,6.43066436 5.84032455,7.30628357 L2.84298349,7.32712563 L2.8634466,15.8248762 L4.63514814,15.9481601 L6.44802853,15.9275707 C7.52954204,15.9169602 8.52857152,14.1868164 8.62153974,13.2494289 L8.88907602,10.2935194 C9.00263368,8.99562738 9.75446367,7.9965979 10.9183349,7.46076745 C11.6497018,8.68653329 11.9689011,10.0461936 11.9689011,11.4778537 C11.9689011,15.9794864 9.17795963,18.8219646 4.77927415,18.6572491 L0,18.4719443 L0,4.54603675 Z M20.7035438,8.71765744 C20.4667022,7.34751295 19.3235467,6.66780912 17.9531496,6.66780912 C17.0163936,6.66780912 15.4814074,7.0793451 15.4301233,8.25382683 C15.4193865,8.31584776 15.4301233,8.36700554 15.4505864,8.41904754 L16.0066274,10.0154231 C16.1200587,10.344854 16.1406481,10.7052322 16.1406481,11.0556315 C16.1406481,11.4570622 16.0891114,11.8588719 16.0378273,12.2606816 C14.0602315,11.7045143 12.6693712,10.74679 12.6693712,8.52174206 C12.6693712,5.52427469 15.0900819,4.12305658 17.8504551,4.12305658 C20.9199223,4.12305658 23.3199172,5.55547462 23.5158326,8.71765744 L20.7035438,8.71765744 Z M12.4634769,14.0839198 L15.2136185,14.1046356 C15.5019968,15.8658529 16.6658681,16.3501466 18.3963907,16.3501466 C19.4779043,16.3501466 21.0949956,16.0927156 21.0949956,14.7123396 C21.0949956,13.9913305 20.5284705,13.6202155 19.9517138,13.3011425 L20.0957135,10.5511273 C22.2896878,11.1480944 24,11.9723032 24,14.5472452 C24,17.5965019 21.0949956,18.8839097 18.4169802,18.8839097 C16.5012789,18.8839097 14.0189263,18.3276162 12.9989284,16.5149884 C12.6797291,15.9585685 12.3812455,15.2376858 12.3812455,14.5886767 C12.3812455,14.5372662 12.3912244,14.4857295 12.4017086,14.4343191 L12.4634769,14.0839198 Z M19.7047038,11.4570369 C19.7047038,13.033202 19.282431,14.506041 18.561422,15.8864171 C18.3757382,15.8965223 18.1904333,15.9169854 18.0050021,15.9169854 C17.4075297,15.9169854 15.9552801,15.515681 15.9552801,14.7844405 C15.9552801,14.6610302 15.9757432,14.537241 16.0170484,14.4236833 L16.5627314,12.600824 C16.6762891,12.2401932 16.6351102,11.8074362 16.6351102,11.4471843 C16.6351102,10.0357347 15.996459,9.15001021 15.9447959,8.18180172 C15.9141012,7.50235052 17.2016354,7.18251962 17.6549818,7.18251962 C17.9639495,7.18251962 18.2726647,7.18251962 18.5816325,7.2133406 C19.3234835,8.52184311 19.7047038,9.9432717 19.7047038,11.4570369 Z M10.6096071,17.0296989 L11.2583637,16.1030482 L12.3397509,16.1232587 C12.8549919,17.2460774 13.6995375,18.0083916 14.7295143,18.6676323 C13.9775579,18.9149581 13.2359595,19.0383683 12.4530559,19.0383683 C11.3097741,19.0383683 10.2383658,18.780811 9.17769436,18.3791276 L10.6096071,17.0296989 Z M12.5356662,6.70871009 C12.3705719,6.69847853 12.2058564,6.68837329 12.0412673,6.68837329 C10.3003867,6.68837329 8.71411639,8.21249639 8.50822209,9.92242964 L8.05487567,13.640906 C7.99310738,14.1663786 7.53976097,14.7018301 7.19971958,15.0830504 C6.91159387,15.3917655 6.5716788,15.4536601 6.14927969,15.4536601 L6.09774295,15.4536601 C5.56216513,14.2179153 5.28401835,12.9406128 5.28401835,11.591184 C5.28401835,7.35784556 7.65306599,4 12.0617304,4 C12.9269917,4 13.7508216,4.16471544 14.5644199,4.39132549 C13.6995375,5.02985046 13.019581,5.74075423 12.5356662,6.70871009 Z"}}]})(props);
};
GrDos.displayName = "GrDos";
var GrDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"7.086 3.174 17.086 13.174 7.086 23.174","transform":"scale(1 -1) rotate(-89 -1.32 0)"}}]})(props);
};
GrDown.displayName = "GrDown";
var GrDownload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"}}]})(props);
};
GrDownload.displayName = "GrDownload";
var GrDrag = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"}}]})(props);
};
GrDrag.displayName = "GrDrag";
var GrDrawer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000000","strokeWidth":"2","d":"M1,14 L6,2 L18,2 L23,14 L21,22 L3,22 L1,14 Z M1,14 L23,14"}}]})(props);
};
GrDrawer.displayName = "GrDrawer";
var GrDriveCage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L1,2 L23,2 L23,23 M1,8 L23,8 L1,8 Z M1,14 L23,14 L1,14 Z M1,20 L23,20 L1,20 Z M4,5 L16,5 L4,5 Z M18,5 L20,5 L18,5 Z M18,11 L20,11 L18,11 Z M18,17 L20,17 L18,17 Z M4,11 L16,11 L4,11 Z M4,17 L16,17 L4,17 Z"}}]})(props);
};
GrDriveCage.displayName = "GrDriveCage";
var GrDropbox = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.0599,1 L0.00015,5.6095 L4.8819,9.5185 L12.00015,5.1235 L7.0599,1 Z M0,13.4281 L7.05975,18.0376 L12,13.9141 L4.88175,9.5191 L0,13.4281 Z M11.99985,13.914175 L16.9401,18.037675 L23.99985,13.428175 L19.1181,9.518425 L11.99985,13.914175 Z M24,5.609575 L16.94025,1.000075 L12,5.123575 L19.11825,9.518575 L24,5.609575 Z M12.014475,14.801275 L7.059975,18.912775 L4.939725,17.528275 L4.939725,19.080025 L12.014475,23.322775 L19.089225,19.080025 L19.089225,17.528275 L16.968975,18.912775 L12.014475,14.801275 Z"}}]})(props);
};
GrDropbox.displayName = "GrDropbox";
var GrDuplicate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4.5,17 L1,17 L1,1 L1,1 L17,1 L17,4.5 M7,7 L23,7 L23,23 L7,23 L7,7 Z M15,11 L15,19 L15,11 Z M11,15 L19,15 L11,15 Z"}}]})(props);
};
GrDuplicate.displayName = "GrDuplicate";
var GrDxc = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12,14 L16,21 L8,21 L12,14 Z M12,10 L8,3 L16,3 L12,10 Z M2,18 C0.65763624,18 -0.00903042669,18 1.01172597e-13,18 L1.01172597e-13,6 L2,6 C5.3137085,6 8,8.6862915 8,12 C8,15.3137085 5.3137085,18 2,18 Z M22,18 C18.6862915,18 16,15.3137085 16,12 C16,8.6862915 18.6862915,6 22,6 L24,6 L24,18 C24.0090304,18 23.3423638,18 22,18 Z"}}]})(props);
};
GrDxc.displayName = "GrDxc";
var GrEdge = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.487,6.3566 C2.632,8.1336 1,10.6596 1,10.6596 C1,10.6596 1.423,5.3636 5.487,2.2646 C7.103,1.0326 9.313,-0.0004 12.285,-0.0004 C13.402,-0.0004 15.744,0.1946 17.853,1.4946 C19.962,2.7946 20.814,3.8846 21.764,5.4786 C22.174,6.1666 22.508,7.0506 22.716,7.9036 C23.107,9.5016 23.154,11.4116 23.154,11.4116 L23.154,13.9286 L8.081,13.9286 C8.081,13.9286 7.713,18.9936 14.645,18.9936 C17.056,18.9936 17.9,18.6146 18.693,18.3796 C19.934,18.0126 21.133,17.1926 21.133,17.1926 L21.135,22.2526 C21.135,22.2526 18.298,23.9996 14.012,23.9996 C12.805,23.9996 11.533,23.8986 10.306,23.5006 C9.234,23.1526 6.99,22.2146 5.487,20.0166 C4.956,19.2386 4.38,18.2036 4.094,17.1926 C3.786,16.0996 3.79,15.0376 3.79,14.4526 C3.79,12.2646 4.537,10.1756 5.834,8.6656 C7.515,6.7096 9.638,5.8476 9.638,5.8476 C9.638,5.8476 8.947,6.6546 8.521,7.6586 C8.096,8.6626 7.979,9.6726 7.979,9.6726 L16.49,9.6726 C16.49,9.6726 16.988,4.5866 11.675,4.5866 C9.672,4.5866 7.213,5.2816 5.487,6.3566"}}]})(props);
};
GrEdge.displayName = "GrEdge";
var GrEdit = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,4 L20,10 L14,4 Z M22.2942268,5.29422684 C22.6840146,5.68401459 22.6812861,6.3187139 22.2864907,6.71350932 L9,20 L2,22 L4,15 L17.2864907,1.71350932 C17.680551,1.319449 18.3127724,1.31277239 18.7057732,1.70577316 L22.2942268,5.29422684 Z M3,19 L5,21 M7,17 L15,9"}}]})(props);
};
GrEdit.displayName = "GrEdit";
var GrEject = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M21,14 L12,2 L3,14 L21,14 Z M2,22 L22,22 L22,18 L2,18 L2,22 Z"}}]})(props);
};
GrEject.displayName = "GrEject";
var GrElevator = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M1,2.991155 C1,1.89147046 1.88967395,1 2.991155,1 L21.008845,1 C22.1085295,1 23,1.88967395 23,2.991155 L23,21.008845 C23,22.1085295 22.1103261,23 21.008845,23 L2.991155,23 C1.89147046,23 1,22.1103261 1,21.008845 L1,2.991155 Z M16.5,8 L18,10 L15,10 L16.5,8 Z M16.5,16 L18,14 L15,14 L16.5,16 Z M5,13 L6.55613518,9.88772964 C6.80127495,9.3974501 7.44386482,9 8,9 L8,9 C8.55228475,9 9.19907951,9.39815903 9.44386482,9.88772964 L11,13 M6.5,18 L7.75,10 L8,10 L8.25,10 L9.5,18 M8,7 C8.55228475,7 9,6.55228475 9,6 C9,5.44771525 8.55228475,5 8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 Z"}}]})(props);
};
GrElevator.displayName = "GrElevator";
var GrEmergency = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10,7.17157288 L10,2 L14,2 L14,7.17157288 L17.6568542,3.51471863 L20.4852814,6.34314575 L16.8284271,10 L22,10 L22,14 L16.8284271,14 L20.4852814,17.6568542 L17.6568542,20.4852814 L14,16.8284271 L14,22 L10,22 L10,16.8284271 L6.34314575,20.4852814 L3.51471863,17.6568542 L7.17157288,14 L2,14 L2,10 L7.17157288,10 L3.51471863,6.34314575 L6.34314575,3.51471863 L10,7.17157288 Z"}}]})(props);
};
GrEmergency.displayName = "GrEmergency";
var GrEmoji = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12,1.73A10.27,10.27,0,1,0,22.24,12,10.25,10.25,0,0,0,12,1.73ZM21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12Z"}},{"tag":"path","attr":{"d":"M8.8,11.05a1.55,1.55,0,1,0-1.51-1.5A1.56,1.56,0,0,0,8.8,11.05Z"}},{"tag":"path","attr":{"d":"M15.44,11.05a1.55,1.55,0,1,0,0-3.09,1.53,1.53,0,0,0-1.51,1.59A1.51,1.51,0,0,0,15.44,11.05Z"}},{"tag":"path","attr":{"d":"M12.19,16.35A6.58,6.58,0,0,1,6.9,13.5a5.71,5.71,0,0,0,5.3,4,5.54,5.54,0,0,0,5.31-4A6.27,6.27,0,0,1,12.19,16.35Z"}}]})(props);
};
GrEmoji.displayName = "GrEmoji";
var GrEmptyCircle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 Z"}}]})(props);
};
GrEmptyCircle.displayName = "GrEmptyCircle";
var GrErase = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,21 L22,6 L18,2 L2,18 L5,21 L19,21 M6,14 L10,18"}}]})(props);
};
GrErase.displayName = "GrErase";
var GrEscalator = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M22,9 C22,7.8954305 21.1017394,7 20.0020869,7 L16,7 L6,17 L4,17 C2.8954305,17 2,17.8877296 2,19 L2,19 C2,20.1045695 2.89826062,21 3.99791312,21 L8,21 L18,11 L20,11 C21.1045695,11 22,10.1122704 22,9 L22,9 Z M7,9 C7.55228475,9 8,8.55228475 8,8 C8,7.44771525 7.55228475,7 7,7 C6.44771525,7 6,7.44771525 6,8 C6,8.55228475 6.44771525,9 7,9 Z M7,15 L7,12.495389 C7,12.2217932 7.23193359,12 7.5,12 L7.5,12 C7.77614237,12 8,12.214035 8,12.5046844 L8,14 L7,15 Z M12,4 C12.5522847,4 13,3.55228475 13,3 C13,2.44771525 12.5522847,2 12,2 C11.4477153,2 11,2.44771525 11,3 C11,3.55228475 11.4477153,4 12,4 Z M12,10 L12,7.49538898 C12,7.2217932 12.2319336,7 12.5,7 L12.5,7 C12.7761424,7 13,7.21403503 13,7.50468445 L13,9 L12,10 Z"}}]})(props);
};
GrEscalator.displayName = "GrEscalator";
var GrExpand = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9"}}]})(props);
};
GrExpand.displayName = "GrExpand";
var GrFacebookOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"}}]})(props);
};
GrFacebookOption.displayName = "GrFacebookOption";
var GrFacebook = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"}}]})(props);
};
GrFacebook.displayName = "GrFacebook";
var GrFan = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M15,12 C19,15 20,19 20,19 M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,9 C15,4 19,3 19,3 M12,15 C9,19 5,20 5,20 M9,12 C5,9 4,5 4,5"}}]})(props);
};
GrFan.displayName = "GrFan";
var GrFastForward = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"9 2.059 9 8 1 2.059 1 22.059 9 16 9 22.059 22 12.059"}}]})(props);
};
GrFastForward.displayName = "GrFastForward";
var GrFavorite = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,8.4 C1,4 4.5,3 6.5,3 C9,3 11,5 12,6.5 C13,5 15,3 17.5,3 C19.5,3 23,4 23,8.4 C23,15 12,21 12,21 C12,21 1,15 1,8.4 Z"}}]})(props);
};
GrFavorite.displayName = "GrFavorite";
var GrFedora = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.9998121,0 C5.3752955,0 0.00469667319,5.36825049 0,11.9918748 L0,21.278137 C0.00352250489,22.7820587 1.22334247,23.9996243 2.72820352,23.9996243 L12.0046967,23.9996243 C18.6300587,23.9970411 24,18.6261605 24,12.0002818 C24,5.37285323 18.6273346,0 11.9998121,0 L11.9998121,0 Z M16.595319,5.57654795 C16.2162505,5.57654795 16.0784971,5.50370254 15.5230685,5.50370254 C13.883225,5.50370254 12.5531742,6.83187476 12.5504031,8.4717182 L12.5504031,11.0548415 C12.5504031,11.2862935 12.7382701,11.4738787 12.9702857,11.4738787 L14.9232094,11.4743014 C15.650771,11.4743014 16.2386536,12.0546693 16.2386536,12.7841566 C16.2390763,13.5183875 15.6447123,14.096454 14.9093542,14.096454 L12.5503562,14.096454 L12.5503562,17.0814247 C12.5503562,20.1916086 10.0288063,22.7134873 6.91852838,22.7134873 C6.44665362,22.7134873 6.11112329,22.6601331 5.67428571,22.5460978 C5.03736986,22.379319 4.51688454,21.8570489 4.51669667,21.2496282 C4.51669667,20.5156791 5.04962818,19.9814795 5.84627789,19.9814795 C6.22548728,19.9814795 6.3629589,20.0543249 6.91857534,20.0543249 C8.55832485,20.0543249 9.88837573,18.7260587 9.89133464,17.0864031 L9.89133464,14.5031389 C9.89133464,14.271499 9.70313894,14.0840078 9.47140509,14.0840078 L7.51848141,14.083773 C6.79082583,14.083773 6.20294325,13.5033581 6.20294325,12.7738239 C6.20256751,12.039499 6.79688454,11.4616204 7.53233659,11.4616204 L9.89100587,11.4616204 L9.89100587,8.47646184 C9.89100587,5.36627789 12.4128845,2.84449315 15.5230685,2.84449315 C15.9949432,2.84449315 16.3304736,2.89775342 16.7671703,3.01197652 C17.404274,3.17856751 17.9246184,3.70083757 17.9249941,4.30825832 C17.9249941,5.04248924 17.3920157,5.57654795 16.595319,5.57654795 L16.595319,5.57654795 Z"}}]})(props);
};
GrFedora.displayName = "GrFedora";
var GrFilter = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"3 6 10 13 10 21 14 21 14 13 21 6 21 3 3 3"}}]})(props);
};
GrFilter.displayName = "GrFilter";
var GrFingerPrint = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 L12,17 M12,20 C9.23857625,20 7,17.7614237 7,15 C7,12.2385763 9.23857625,10 12,10 C14.7614237,10 17,12.2385763 17,15 C17,15.8284271 17.6715729,16.5 18.5,16.5 C19.3284271,16.5 20,15.8284271 20,15 C20,10.581722 16.418278,7 12,7 C7.581722,7 4,10.581722 4,15 C4,19.418278 7.581722,23 12,23 L14,23 M1,15 C1,17.6720798 1.95275656,20.1216314 3.53708682,22.0274719 M20.5202529,8.04207866 C18.5030558,5.574886 15.4354451,4 12,4 C8.59642702,4 5.55389491,5.54579976 3.53616098,7.97364199 M18.5259055,2.61083013 C16.577286,1.58228463 14.3566429,1 12,1 C9.66126395,1 7.45646883,1.57346929 5.51856118,2.58746134"}}]})(props);
};
GrFingerPrint.displayName = "GrFingerPrint";
var GrFireball = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,13 L10.25,14 L11,12 L9.75,11 L11.25,11 L12,9.25 L12.75,11 L14.25,11 L13,12 L13.75,14 L12,13 Z"}}]})(props);
};
GrFireball.displayName = "GrFireball";
var GrFirefox = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.24954645,1 C4.20019837,2.2660337 4.15311916,3.47137493 4.10547273,4.68409001 C4.72941407,4.52980633 5.34030936,4.43848401 5.93475529,4.69429995 C7.22631387,2.92627708 9.08339018,2.31821789 11.1293506,2.093599 C11.1418294,2.1140189 11.1548754,2.1344388 11.1673543,2.1548587 C11.1265145,2.19853459 11.0868091,2.24277771 11.0448349,2.28531916 C10.2252028,3.11799724 9.56609389,4.0641192 9.09700345,5.13219333 C8.96257245,5.43792459 8.93137538,5.78960062 8.8587713,6.12142397 C8.83041033,6.25074999 8.89564056,6.31995076 9.02666824,6.33810178 C9.633593,6.42091581 10.2393833,6.51791033 10.848577,6.58767831 C11.2308828,6.63135421 11.6177265,6.63929528 12.0028684,6.65517742 C12.1832442,6.66255127 12.2609533,6.75217194 12.2649238,6.92233776 C12.2802387,7.60640436 12.0516493,8.192342 11.5059842,8.61265157 C10.9801719,9.01707901 10.3760832,9.27573105 9.72491533,9.41640146 C9.65741622,9.43114917 9.59048433,9.45100185 9.51674581,9.47028731 C9.58197604,10.3023982 9.64663905,11.1191941 9.7152726,11.9847709 C9.08339018,11.6818757 8.4787343,11.3925939 7.86103238,11.0970725 C7.67498441,11.4890212 7.66137115,11.8769992 7.77878556,12.2729184 C8.09529399,13.3455303 9.21044733,13.9677699 10.3647388,13.6824586 C10.7691662,13.582628 11.1599804,13.4124621 11.5411518,13.2394602 C11.9172183,13.06816 12.2700288,12.8480788 12.6370197,12.6563587 C13.2592594,12.3319092 13.8860368,12.3602702 14.5111126,12.649552 C14.6001661,12.6909591 14.690354,12.7454121 14.7595547,12.8146129 C14.9943836,13.0494417 15.1770282,13.3177365 15.0828698,13.6716814 C14.9915475,14.0137147 14.7431054,14.2116743 14.4056098,14.2831439 C14.2116208,14.3245509 14.0096907,14.3421347 13.8117311,14.3415675 C13.6801362,14.3410003 13.609801,14.384109 13.5377641,14.490179 C12.8582353,15.4986951 11.9762091,16.2417525 10.7476119,16.4544598 C10.2314423,16.5435132 9.69768879,16.5287655 9.17187641,16.5582609 C9.10210842,16.5622315 9.03234044,16.5520215 8.91662768,16.5457821 C8.98639567,16.6104451 9.02156327,16.6501505 9.06353751,16.6813475 C10.4537923,17.7080147 11.9909568,18.0585562 13.6784345,17.654696 C15.0590466,17.3251416 16.2870766,16.7063052 17.3006976,15.6904153 C18.2666723,14.7216045 18.7085362,13.5400865 18.7227167,12.1940749 C18.7368972,10.8412566 18.4345692,9.56047519 17.7425616,8.38689825 C17.6217438,8.18156483 17.4640568,7.99778574 17.288786,7.75615028 C18.4799468,8.29614315 19.5298699,8.90987454 20.0159769,10.1764755 C20.1594834,8.59450055 19.8679326,7.09704134 19.2576046,5.6517663 C18.6478437,4.20762571 17.7726242,2.95747415 16.5763585,1.92059709 C16.6262738,1.93137426 16.6767563,1.93931533 16.7249699,1.95463025 C19.4192621,2.79865272 21.4879113,4.40445084 22.7806043,6.94616097 C23.4068145,8.17645985 23.7272934,9.49751384 23.8923543,10.8588404 C24.0693267,12.316027 24.0483396,13.7647054 23.6762437,15.1969344 C23.054004,17.5945708 21.7408911,19.5560155 19.9229529,21.2100272 C18.1929338,22.7840611 16.1776032,23.805056 13.8707219,24.097174 C8.73171416,24.7483419 4.68120042,22.8986394 1.80823415,18.5707554 C0.665287063,16.8486773 0.125861413,14.921833 0.022627482,12.8594232 C-0.144135022,9.50942545 0.61140122,6.38518099 2.2716524,3.47761434 C2.75492333,2.63018856 3.33745766,1.85423242 4.04875079,1.18094299 C4.09923331,1.13329656 4.1514175,1.08791901 4.24954645,1"}}]})(props);
};
GrFirefox.displayName = "GrFirefox";
var GrFlagFill = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","stroke":"#000","strokeWidth":"2","d":"M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14"}}]})(props);
};
GrFlagFill.displayName = "GrFlagFill";
var GrFlag = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14"}}]})(props);
};
GrFlag.displayName = "GrFlag";
var GrFolderCycle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7.0001,18 C7.0001,15.239 9.2391,13 12.0001,13 C13.9851,13 15.6991,14.156 16.5,16 M17.0001,18 C17.0001,20.761 14.7611,23 12.0001,23 C10.0151,23 8.3011,21.844 7.5,20 M13.0001,16 L17.0001,16 L17.0001,12 M11.0001,20 L7.0001,20 L7.0001,24 M4.0001,23 L1.0001,23 L1.0001,5 L1.0001,1 L9.0001,1 L12.0001,5 L23.0001,5 L23.0001,23 L19.0001,23 M1.0001,9 L23.0001,9 M4,23 L1,23 L1,1 L9,1 L12,5 L23,5 L23,23 L19,23 M1,9 L23,9"}}]})(props);
};
GrFolderCycle.displayName = "GrFolderCycle";
var GrFolderOpen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,2 L11,1.99999998 L13,6 L19,6 L19,10 L5,10 L5,2 Z M2,10 L22,10 L19,22 L5,22 L2,10 Z"}}]})(props);
};
GrFolderOpen.displayName = "GrFolderOpen";
var GrFolder = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,10 L2,6 L2,2 L10,2 L13,6 L22,6 L22,10 L2,10 Z M2,10 L22,10 L22,22 L2,22 L2,10 Z"}}]})(props);
};
GrFolder.displayName = "GrFolder";
var GrFormAdd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,18 L12,6 M6,12 L18,12"}}]})(props);
};
GrFormAdd.displayName = "GrFormAdd";
var GrFormAttachment = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308"}}]})(props);
};
GrFormAttachment.displayName = "GrFormAttachment";
var GrFormCalendar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,19 L18,19 L18,8 L6,8 L6,19 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z"}}]})(props);
};
GrFormCalendar.displayName = "GrFormCalendar";
var GrFormCheckmark = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 13 10.2 16.6 18 7"}}]})(props);
};
GrFormCheckmark.displayName = "GrFormCheckmark";
var GrFormClock = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z M12,8 L12,12 L15,13"}}]})(props);
};
GrFormClock.displayName = "GrFormClock";
var GrFormClose = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,7 L17,17 M7,17 L17,7"}}]})(props);
};
GrFormClose.displayName = "GrFormClose";
var GrFormCut = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18,7.52380952 L10.1428571,13.8095238 L18,7.52380952 Z M18,15.9047619 L10.1428571,9.61904762 L18,15.9047619 Z M8.57142857,10.1428571 C9.43930461,10.1428571 10.1428571,9.43930461 10.1428571,8.57142857 C10.1428571,7.70355254 9.43930461,7 8.57142857,7 C7.70355254,7 7,7.70355254 7,8.57142857 C7,9.43930461 7.70355254,10.1428571 8.57142857,10.1428571 Z M8.57142857,16.4285714 C9.43930461,16.4285714 10.1428571,15.7250189 10.1428571,14.8571429 C10.1428571,13.9892668 9.43930461,13.2857143 8.57142857,13.2857143 C7.70355254,13.2857143 7,13.9892668 7,14.8571429 C7,15.7250189 7.70355254,16.4285714 8.57142857,16.4285714 Z"}}]})(props);
};
GrFormCut.displayName = "GrFormCut";
var GrFormDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"18 9 12 15 6 9"}}]})(props);
};
GrFormDown.displayName = "GrFormDown";
var GrFormEdit = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(props);
};
GrFormEdit.displayName = "GrFormEdit";
var GrFormFilter = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 8 11.667 12.667 11.667 18 12.333 18 12.333 12.667 18 8 18 6 6 6"}}]})(props);
};
GrFormFilter.displayName = "GrFormFilter";
var GrFormFolder = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"6 18 6 6 10.8 6 12.6 8.4 18 8.4 18 18"}}]})(props);
};
GrFormFolder.displayName = "GrFormFolder";
var GrFormLocation = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,17 C12,17 8,14 8,11 C8,8.5 10,7 12,7 C14,7 16,8.5 16,11 C16,14 12,17 12,17 Z M12,12 C12.5523333,12 13,11.5523333 13,11 C13,10.4476667 12.5523333,10 12,10 C11.4476667,10 11,10.4476667 11,11 C11,11.5523333 11.4476667,12 12,12 L12,12 Z"}}]})(props);
};
GrFormLocation.displayName = "GrFormLocation";
var GrFormLock = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,11 C9,11 9,8 9,8 C9,6.34314575 10.3431458,5 12,5 C13.6568542,5 15,6.34314575 15,8 L15,11 M12,13 L12,16 M17,18 L17,11 L7,11 L7,18 L17,18 Z"}}]})(props);
};
GrFormLock.displayName = "GrFormLock";
var GrFormNextLink = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"}}]})(props);
};
GrFormNextLink.displayName = "GrFormNextLink";
var GrFormNext = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"9 6 15 12 9 18"}}]})(props);
};
GrFormNext.displayName = "GrFormNext";
var GrFormPreviousLink = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrFormPreviousLink.displayName = "GrFormPreviousLink";
var GrFormPrevious = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"9 6 15 12 9 18","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrFormPrevious.displayName = "GrFormPrevious";
var GrFormRefresh = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17.3333333,9.33333333 C16.3982691,7.36020781 14.3579813,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 M18.5,6 L18.5,10 L14.5,10"}}]})(props);
};
GrFormRefresh.displayName = "GrFormRefresh";
var GrFormSchedule = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,19 L18,19 L18,8 L6,8 L6,19 Z M8,15 L10,15 L8,15 Z M11,15 L16,15 L11,15 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z"}}]})(props);
};
GrFormSchedule.displayName = "GrFormSchedule";
var GrFormSearch = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 Z"}}]})(props);
};
GrFormSearch.displayName = "GrFormSearch";
var GrFormSubtract = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,12 L18,12"}}]})(props);
};
GrFormSubtract.displayName = "GrFormSubtract";
var GrFormTrash = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(props);
};
GrFormTrash.displayName = "GrFormTrash";
var GrFormUp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"18 9 12 15 6 9","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrFormUp.displayName = "GrFormUp";
var GrFormUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,14.1818182 L6,17.4545455 L18,17.4545455 L18,14.1818182 M12,6 L12,14 M8.18181818,9.81818182 L12,6 L15.8181818,9.81818182"}}]})(props);
};
GrFormUpload.displayName = "GrFormUpload";
var GrFormViewHide = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"}}]})(props);
};
GrFormViewHide.displayName = "GrFormViewHide";
var GrFormView = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"}}]})(props);
};
GrFormView.displayName = "GrFormView";
var GrForwardTen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20.8888889,7.55555556 C19.3304485,4.26701301 15.9299689,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 L12,22 C17.5228475,22 22,17.5228475 22,12 M22,4 L22,8 L18,8 M9,16 L9,9 L7,9.53333333 M17,12 C17,10 15.9999999,8.5 14.5,8.5 C13.0000001,8.5 12,10 12,12 C12,14 13,15.5000001 14.5,15.5 C16,15.4999999 17,14 17,12 Z M14.5,8.5 C16.9253741,8.5 17,11 17,12 C17,13 17,15.5 14.5,15.5 C12,15.5 12,13 12,12 C12,11 12.059,8.5 14.5,8.5 Z"}}]})(props);
};
GrForwardTen.displayName = "GrForwardTen";
var GrFreebsd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.7253418,0.403330656 C24.9975688,1.67496208 21.4706794,7.26490597 20.8744345,7.86115088 C20.2781896,8.45650302 18.7637754,7.90875554 17.4918461,6.63682558 C16.2196191,5.36519416 15.6715737,3.85048208 16.2678187,3.25423717 C16.8640636,2.65769514 22.4534125,-0.868896418 23.7253418,0.403330656 L23.7253418,0.403330656 Z M5.88500669,1.74874919 C3.94274831,0.64670772 1.17931401,-0.579104582 0.300120884,0.300088547 C-0.590973233,1.19058772 0.680063246,4.01650237 1.79341076,5.96233113 C2.78417662,4.23935071 4.19415887,2.78890453 5.88500669,1.74874919 L5.88500669,1.74874919 Z M21.785166,7.42259564 C21.9639794,8.02925383 21.9315489,8.53058725 21.6417578,8.81978414 C20.9639901,9.49755113 19.1338994,8.77634479 17.4844083,7.20599597 C17.3689674,7.10275387 17.2550141,6.99564356 17.1428465,6.88317878 C16.5466016,6.28633892 16.0821617,5.65081997 15.785527,5.06617893 C15.2077288,4.02989107 15.0631307,3.11410221 15.4999004,2.67762963 C15.7379223,2.43960776 16.1187574,2.37474692 16.583198,2.45864948 C16.8863778,2.2673395 17.2437081,2.05371455 17.6358493,1.83503223 C16.0414007,1.00344305 14.2288637,0.533647279 12.305647,0.533647279 C5.92785039,0.533647279 0.757122899,5.70348271 0.757122899,12.0821714 C0.757122899,18.4596702 5.92785039,23.6301005 12.305647,23.6301005 C18.683741,23.6301005 23.8544685,18.4596702 23.8544685,12.0821714 C23.8544685,10.0223894 23.313861,8.09084213 22.3692121,6.41635843 C22.1648105,6.78856511 21.9663598,7.12982838 21.785166,7.42259564 L21.785166,7.42259564 Z"}}]})(props);
};
GrFreebsd.displayName = "GrFreebsd";
var GrGallery = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"}}]})(props);
};
GrGallery.displayName = "GrGallery";
var GrGamepad = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,6 L12,2 M12,6 C14.4983324,6.0444148 16.0056152,6 17,6 C19,6 21,6.5 22,10 C23,13.5 23,15.5 23,18 C23,20.5 21,21 19,21 C17,21 15.9456522,17 12,17 C8.05434783,17 7,21 5,21 C3,21 1,20.5 1,18 C1,15.5 1,13.5 2,10 C3,6.5 5,6 7,6 C7.99438477,6 9.50166757,6.0444148 12,6 L12,6 L12,6 Z M18,15 C18.5522847,15 19,14.5522847 19,14 C19,13.4477153 18.5522847,13 18,13 C17.4477153,13 17,13.4477153 17,14 C17,14.5522847 17.4477153,15 18,15 Z M14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 C13.4477153,10 13,10.4477153 13,11 C13,11.5522847 13.4477153,12 14,12 Z M4,12 L10,12 M7,9 L7,15"}}]})(props);
};
GrGamepad.displayName = "GrGamepad";
var GrGatsbyjs = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M22,12.0921187 L15.5483871,12.0921187 L15.5483871,13.9264656 L19.9717742,13.9264656 C19.3266129,16.6787886 17.2983871,18.9719229 14.6262097,19.8898991 L4.02701613,9.33979569 C5.13306452,6.12868525 8.26653226,3.83514962 11.8616935,3.83514962 C14.6266129,3.83514962 17.1157258,5.21191322 18.6818548,7.32161278 L20.0649194,6.12948803 C18.2205645,3.65091216 15.2717742,2 11.8616935,2 C7.06895161,2 3.01370968,5.39454513 2,9.89009975 L14.1653226,22 C18.5887097,20.8989905 22,16.8622233 22,12.091316 L22,12.0921187 Z M2,12 C2,14.5927726 3.01847351,17.0923675 4.96305299,19.036947 C6.90763247,20.9815265 9.50040512,22 12,22 L2,12 Z"}}]})(props);
};
GrGatsbyjs.displayName = "GrGatsbyjs";
var GrGift = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,11 L21,11 L21,23 L3,23 L3,11 Z M2,11 L2,7 L22,7 L22,11 L2,11 Z M12,23 L12,7 L12,23 Z M7,7 L12,7 C12,7 10,2 7,2 C3.5,2 3,7 7,7 Z M17.1843819,7 L12.1843819,7 C12.1843819,7 14,2 17.1843819,2 C20.5,2 21.1843819,7 17.1843819,7 Z"}}]})(props);
};
GrGift.displayName = "GrGift";
var GrGithub = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"}}]})(props);
};
GrGithub.displayName = "GrGithub";
var GrGlobe = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,8 C2,8 5.5,9 7,10 C8.5,11 7.56437103,12.4191614 8,13 C8.43562897,13.5808386 10,12 10,15 C10,18 13,16 13,19 C13,22 15.5,21.5 16,20 C16.5,18.5 18.2333023,16.8664183 18,15 C17.7666977,13.1335817 17,12 15,12 C13,12 11.5,11.5 11,10 C10.5,8.5 14,8 13,5 C12,2 13,1 13,1 M23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 C18.075,1 23,5.925 23,12 L23,12 Z"}}]})(props);
};
GrGlobe.displayName = "GrGlobe";
var GrGolang = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none"},"child":[{"tag":"path","attr":{"d":"M21.4679537,3.20617761 C22.1814672,4.67953668 20.0131274,4.83706564 20.1243243,5.49498069 C20.3281853,6.68108108 20.1891892,8.44169884 20.0316602,10.1745174 C19.7629344,13.1119691 21.9590734,20.1451737 17.3814672,22.9714286 C16.5196911,23.5088803 14.4718147,23.8054054 12.4517375,23.8517375 C12.4517375,23.8517375 12.442471,23.8517375 12.442471,23.8517375 C12.442471,23.8517375 12.4332046,23.8517375 12.4332046,23.8517375 C10.4131274,23.8054054 8.08725869,23.5088803 7.22548263,22.9714286 C2.65714286,20.1451737 4.85328185,13.1119691 4.59382239,10.1745174 C4.42702703,8.44169884 4.28803089,6.68108108 4.5011583,5.49498069 C4.61235521,4.83706564 2.44401544,4.68880309 3.15752896,3.20617761 C3.76911197,1.93667954 5.27953668,3.05791506 5.65945946,2.65945946 C7.596139,0.648648649 9.94980695,0.111196911 11.8030888,0.0648648649 C11.988417,0.0648648649 12.8223938,0.0648648649 12.8223938,0.0648648649 C14.6664093,0.157528958 17.0200772,0.657915058 18.9660232,2.65945946 C19.3459459,3.05791506 20.8471042,1.93667954 21.4679537,3.20617761 Z M11.4324324,10.9065637 C11.3490347,10.9436293 11.2100386,11.8517375 11.6362934,11.8980695 C11.9235521,11.9258687 12.7111969,12.0185328 12.8965251,11.8980695 C13.2579151,11.6664093 13.2208494,11.1104247 13.0169884,10.9714286 C12.6741313,10.7490347 11.5250965,10.8602317 11.4324324,10.9065637 Z M9.07876448,4.10501931 C8.12432432,3.99382239 6.52123552,4.88339768 6.28030888,6.77374517 C6.02084942,8.73822394 8.33745174,10.6841699 10.56139,8.73822394 C11.7567568,7.69111969 12.1737452,4.46640927 9.07876448,4.10501931 Z M15.5281853,4.10501931 C12.4332046,4.46640927 12.8501931,7.69111969 14.0455598,8.73822394 C16.2694981,10.6841699 18.5861004,8.73822394 18.3266409,6.77374517 C18.0949807,4.88339768 16.4918919,3.99382239 15.5281853,4.10501931 Z"}},{"tag":"path","attr":{"d":"M12.3127413,8.98841699 C12.8965251,8.90501931 14.2957529,9.57220077 14.2030888,10.3598456 C14.0918919,11.2772201 10.5984556,11.3976834 10.4131274,10.3042471 C10.3019305,9.63706564 10.8301158,9.21081081 12.3127413,8.98841699 Z M20.1984556,16.3737452 C19.9111969,16.3644788 19.7258687,15.984556 19.7258687,15.7528958 C19.7258687,15.3359073 19.7814672,14.8447876 20.0872587,14.6316602 C20.7173745,14.196139 21.2177606,16.3830116 20.1984556,16.3737452 Z M4.41776062,16.3737452 C3.3984556,16.3830116 3.8988417,14.196139 4.52895753,14.6316602 C4.83474903,14.8447876 4.89034749,15.3359073 4.89034749,15.7528958 C4.89034749,15.984556 4.70501931,16.3644788 4.41776062,16.3737452 Z M18.2617761,23.0918919 C18.4471042,23.3606178 18.4563707,23.5459459 18.1598456,23.6849421 C17.0293436,24.203861 16.019305,23.5088803 16.3992278,23.3142857 C17.2054054,22.9065637 17.7057915,22.2671815 18.2617761,23.0918919 Z M6.35444015,23.184556 C6.91042471,22.3598456 7.41081081,22.9992278 8.21698842,23.4069498 C8.5969112,23.6015444 7.58687259,24.2965251 6.45637066,23.7776062 C6.15984556,23.63861 6.16911197,23.4532819 6.35444015,23.184556 Z"}},{"tag":"path","attr":{"d":"M19.7351351,3.42857143 C19.7814672,3.23397683 20.2633205,3.14131274 20.5320463,3.47490347 C20.8563707,3.87335907 20.0594595,4.42007722 20.0223938,4.1976834 C19.9297297,3.5953668 19.6795367,3.62316602 19.7351351,3.42857143 Z M4.88108108,3.42857143 C4.93667954,3.62316602 4.68648649,3.5953668 4.59382239,4.1976834 C4.55675676,4.42007722 3.75984556,3.87335907 4.08416988,3.47490347 C4.34362934,3.14131274 4.82548263,3.23397683 4.88108108,3.42857143 Z M15.7413127,7.94131274 C15.1578953,7.94131274 14.6849421,7.46835949 14.6849421,6.88494208 C14.6849421,6.30152468 15.1578953,5.82857143 15.7413127,5.82857143 C16.3247301,5.82857143 16.7976834,6.30152468 16.7976834,6.88494208 C16.7976834,7.46835949 16.3247301,7.94131274 15.7413127,7.94131274 Z M15.4633205,6.76447876 C15.6475575,6.76447876 15.7969112,6.61512511 15.7969112,6.43088803 C15.7969112,6.24665096 15.6475575,6.0972973 15.4633205,6.0972973 C15.2790834,6.0972973 15.1297297,6.24665096 15.1297297,6.43088803 C15.1297297,6.61512511 15.2790834,6.76447876 15.4633205,6.76447876 Z M11.3583012,9.43320463 C11.4694981,9.00694981 11.8586873,8.86795367 12.1737452,8.85868726 C12.9799228,8.84015444 13.2857143,9.27567568 13.3135135,9.61853282 C13.369112,10.2023166 11.1081081,10.3413127 11.3583012,9.43320463 Z M8.87490347,7.94131274 C8.29148607,7.94131274 7.81853282,7.46835949 7.81853282,6.88494208 C7.81853282,6.30152468 8.29148607,5.82857143 8.87490347,5.82857143 C9.45832088,5.82857143 9.93127413,6.30152468 9.93127413,6.88494208 C9.93127413,7.46835949 9.45832088,7.94131274 8.87490347,7.94131274 Z M9.15289575,6.76447876 C9.33713283,6.76447876 9.48648649,6.61512511 9.48648649,6.43088803 C9.48648649,6.24665096 9.33713283,6.0972973 9.15289575,6.0972973 C8.96865868,6.0972973 8.81930502,6.24665096 8.81930502,6.43088803 C8.81930502,6.61512511 8.96865868,6.76447876 9.15289575,6.76447876 Z"}}]}]})(props);
};
GrGolang.displayName = "GrGolang";
var GrGooglePlay = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"polygon","attr":{"stroke":"#444","strokeLinejoin":"round","strokeWidth":"2","points":"3 2 3 22 21 12"}},{"tag":"path","attr":{"stroke":"#444","strokeWidth":"2","d":"M3,2 L14,16"}},{"tag":"path","attr":{"stroke":"#444","strokeWidth":"2","d":"M3,8 L14,22","transform":"matrix(1 0 0 -1 0 30)"}}]}]})(props);
};
GrGooglePlay.displayName = "GrGooglePlay";
var GrGooglePlus = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0.0202537528,11.2032618 C0.0858884305,7.29693926 3.69605513,3.87603603 7.62298049,4.00635861 C9.5045944,3.91939087 11.2733582,4.73384249 12.7144674,5.87784249 C12.0993693,6.57306829 11.4624794,7.24274571 10.7820061,7.86906829 C9.04956189,6.67810055 6.58579693,6.33771345 4.85335275,7.71345539 C2.37505996,9.41848765 2.26220982,13.4442941 4.64607169,15.2796489 C6.96429889,17.3722941 11.3459973,16.3333264 11.9865191,13.1291973 C10.534514,13.1075199 9.07861756,13.1291973 7.62661245,13.0822296 C7.62298049,12.2205522 7.61934853,11.3588747 7.62298049,10.4974554 C10.0504259,10.4902296 12.4778712,10.4863586 14.9089486,10.5046812 C15.0544863,12.532036 14.7852026,14.6897135 13.5332146,16.3658425 C11.6370729,19.0195199 7.83052098,19.7942296 4.86061667,18.6574554 C1.88007591,17.527907 -0.230870232,14.3962941 0.0202537528,11.2032618 M19.6437253,8.32145539 L21.8091508,8.32145539 C21.8127827,9.04197152 21.8164147,9.76610055 21.8236786,10.4863586 C22.5479949,10.4938425 23.2759431,10.4938425 24,10.5010683 L24,12.6551328 C23.2759431,12.6623586 22.5516269,12.6659715 21.8236786,12.6731973 C21.8164147,13.3970683 21.8127827,14.1175844 21.8091508,14.8381005 L19.6400933,14.8381005 C19.6328294,14.1175844 19.6328294,13.3970683 19.6255655,12.6768102 C18.9012492,12.6695844 18.1735604,12.6623586 17.4492441,12.6551328 L17.4492441,10.5010683 C18.1735604,10.4938425 18.8976172,10.4902296 19.6255655,10.4863586 C19.6291974,9.76248765 19.6364613,9.04197152 19.6437253,8.32145539"}}]})(props);
};
GrGooglePlus.displayName = "GrGooglePlus";
var GrGoogleWallet = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.3007772,20.2064516 C11.8620675,20.9290323 11.1007772,21.3548387 10.2620675,21.3548387 C10.0298095,21.3548387 9.79755139,21.316129 9.57819655,21.2516129 C9.39755139,21.1870968 9.204003,21.1096774 9.03626107,21.0064516 C8.36529333,20.5935484 7.96529333,19.9096774 7.9007772,19.1870968 C7.89140409,19.0839926 7.88808323,18.9793754 7.89136416,18.8743442 C7.55009449,15.0742313 5.43254085,11.8144954 2.19755139,10.0774194 C1.1007772,9.49677419 0.674970747,8.11612903 1.26851913,7.01935484 C1.66851913,6.27096774 2.42980946,5.81935484 3.26851913,5.81935484 C3.64271268,5.81935484 4.01690623,5.90967742 4.33948688,6.09032258 C6.48434923,7.23339294 8.37353109,8.87504028 9.73981084,10.748043 C9.55437093,9.20494486 9.06580772,7.70138229 8.2491643,6.38709677 C7.86206752,5.74193548 7.82335784,4.95483871 8.05561591,4.3483871 C8.17174494,4.03870968 8.32658365,3.75483871 8.59755139,3.47096774 C8.86851913,3.18709677 9.16529333,3.03225806 9.4491643,2.91612903 C9.72013204,2.81290323 9.91368042,2.76129032 10.3007772,2.76129032 C10.7652933,2.76129032 11.2169062,2.90322581 11.5910998,3.1483871 C11.6256625,3.16950877 11.659368,3.19148766 11.6922588,3.21432378 C11.6556159,3.17419355 11.5910998,3.13548387 11.5910998,3.13548387 C14.3738522,4.83605479 16.7449876,7.17977729 18.3834315,9.79420491 C18.1429112,7.64929068 17.5519189,5.57240342 16.6104546,3.57419355 C16.0169062,2.33548387 16.5459385,0.838709677 17.7975514,0.24516129 C18.1330353,0.0774193548 18.4943256,0 18.8685191,0 C19.8233578,0 20.7136804,0.567741935 21.1265836,1.43225806 C21.9007772,3.05806452 22.4943256,4.76129032 22.8943256,6.51612903 C23.2943256,8.29677419 23.5136804,10.1677419 23.5265836,12.0258065 C23.5265836,13.9096774 23.3072288,15.7419355 22.9072288,17.5354839 C22.804003,18.0129032 22.687874,18.4645161 22.5459385,18.9419355 C22.1072288,20.5290323 21.604003,21.7548387 21.1007772,22.6967742 C20.6620675,23.4967742 19.8233578,24 18.9072288,24 C18.5330353,24 18.1717449,23.9096774 17.8362611,23.7548387 C17.087874,23.4064516 16.6362611,22.7612903 16.4685191,22.0516129 C16.4169062,21.8451613 16.404003,21.6258065 16.404003,21.4709677 C16.404003,20.9290323 16.3781966,20.5677419 16.3781966,20.5677419 C16.3781966,17.8729043 15.7339615,15.3069136 14.548495,13.0500263 C14.3781966,15.6 13.6169062,18.0516129 12.3007772,20.2064516 Z"}}]})(props);
};
GrGoogleWallet.displayName = "GrGoogleWallet";
var GrGoogle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"}},{"tag":"path","attr":{"d":"M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"}},{"tag":"path","attr":{"d":"M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"}},{"tag":"path","attr":{"d":"M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"}}]})(props);
};
GrGoogle.displayName = "GrGoogle";
var GrGraphQl = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.3335126,2.85206923 L19.0436746,5.57156232 C19.1861408,5.42269933 19.3517561,5.29107777 19.5390336,5.18229987 C20.6054985,4.56924218 21.9657203,4.93324518 22.585164,5.99971013 C23.1982217,7.06617507 22.8342187,8.42639682 21.7677537,9.04584053 C21.5354003,9.17940894 21.2887997,9.26659782 21.038849,9.31024708 L21.038849,14.6900096 C21.2856344,14.7341019 21.5290274,14.8207365 21.7585099,14.9526546 C22.8303433,15.5715108 23.1940011,16.9304425 22.5751449,17.9958959 C21.9626686,19.0613494 20.597357,19.4250072 19.5319036,18.8125309 C19.2675499,18.6605671 19.046399,18.4622584 18.8726413,18.2336837 L14.2472483,20.9042339 C14.359389,21.1704807 14.4213527,21.4632106 14.4213527,21.770637 C14.4213527,22.997106 13.4248466,24 12.1919896,24 C10.9591327,24 9.96262662,23.0034939 9.96262662,21.770637 C9.96262662,21.5276826 10.001326,21.293907 10.0729072,21.0751276 L5.39448212,18.3739583 C5.24136397,18.5447862 5.05910975,18.6948998 4.84979559,18.8164775 C3.77694463,19.4295352 2.41672287,19.0655322 1.80366518,17.9990673 C1.19060749,16.9326023 1.55461049,15.5723806 2.62107544,14.9529369 C2.78345801,14.8595912 2.95265101,14.7888975 3.12500248,14.7398866 L3.12500248,9.26050018 C2.95045269,9.21143227 2.77917162,9.14021295 2.61500295,9.04584053 C1.548538,8.43278284 1.184535,7.06617507 1.79759269,5.99971013 C2.41065038,4.93324518 3.77725815,4.56924218 4.8437231,5.18229987 C4.99574654,5.27060092 5.13349582,5.37395472 5.25617553,5.48936462 L10.0208088,2.73842163 C9.98274768,2.57496174 9.96262662,2.40454853 9.96262662,2.22936302 C9.96262662,0.996506107 10.9591327,4.6629367e-14 12.1919896,4.6629367e-14 C13.4248466,4.6629367e-14 14.4213527,0.996506107 14.4213527,2.22936302 C14.4213527,2.44556708 14.3907061,2.6545024 14.3335126,2.85206923 Z M13.8405544,3.73141097 C13.7908242,3.78597435 13.7384158,3.8380524 13.6835353,3.88743909 L19.9624322,14.7624885 C19.9851165,14.7552188 20.0079142,14.7483109 20.0308156,14.7417672 L20.0308156,9.25474103 C19.4969015,9.10015188 19.0200076,8.74749468 18.7216233,8.22843028 C18.396599,7.66302338 18.3462063,7.01504748 18.5295247,6.43866863 L13.8405544,3.73141097 Z M10.5612952,3.75078761 C10.5290822,3.71626947 10.4979547,3.6807246 10.4679668,3.64420691 L5.81568405,6.33028239 C6.04182311,6.93281226 6.00669953,7.62728911 5.66113335,8.22843028 C5.32249418,8.81752134 4.75393127,9.19227671 4.13303588,9.30641503 L4.13303588,14.6916383 C4.16637437,14.6977154 4.19956458,14.7045461 4.23257942,14.7121233 L10.5612952,3.75078761 Z M12.8009687,4.3748119 C12.60746,4.42948073 12.403193,4.45872604 12.1919896,4.45872604 C11.9129003,4.45872604 11.645923,4.40765895 11.3998763,4.31434325 L5.14116232,15.1544358 C5.34676617,15.3211714 5.52618301,15.5275552 5.66720584,15.7703471 C5.76055152,15.9327297 5.83124515,16.1019227 5.8802561,16.2742741 L18.5020915,16.2742741 C18.5510684,16.101457 18.6218024,15.9318817 18.7152686,15.7692896 C18.8216025,15.5843129 18.950628,15.4204894 19.0968364,15.2792547 L12.8009687,4.3748119 Z M13.7498392,20.1747099 L18.4885766,17.4387184 C18.4752977,17.3870257 18.4638585,17.3348529 18.454287,17.2823075 L5.92850441,17.2823075 C5.91572246,17.3524283 5.89960649,17.4218931 5.88022341,17.4904498 L10.5957921,20.2130645 C11.0004395,19.7984186 11.5657199,19.541274 12.1919896,19.541274 C12.7987163,19.541274 13.3482006,19.7826203 13.7498392,20.1747099 Z"}}]})(props);
};
GrGraphQl.displayName = "GrGraphQl";
var GrGremlin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,14 C7.55228475,14 8,13.5522847 8,13 C8,12.4477153 7.55228475,12 7,12 C6.44771525,12 6,12.4477153 6,13 C6,13.5522847 6.44771525,14 7,14 Z M17,14 C17.5522847,14 18,13.5522847 18,13 C18,12.4477153 17.5522847,12 17,12 C16.4477153,12 16,12.4477153 16,13 C16,13.5522847 16.4477153,14 17,14 Z M12,16 C12.5,16 13,15.6790227 13,15 C13,14.8871314 11,14.9246156 11,15 C11,15.6790227 11.5,16 12,16 Z M3,24 C3,24 3.00341148,16 3,12 C3.00341148,8 2.55309359,4 12,4 C21.4469064,4 20.9965885,8 21,12 C20.9965885,16 21,24 21,24 M20.0682179,7 C23.3272228,7 23.6478055,3.42041241 22.1136966,1.88630344 C20.5795876,0.352194472 17,0.672777193 17,3.93178206 M7,19 C7,18.7966267 9.50000016,20.1517845 12,20 C14.4999998,20.1517846 17,18.5013715 17,19 C17,19.8021982 15.5,21 12,21 C8.5,21 7,19.5069424 7,19 Z M3.94464295,7 C0.604407067,7 0.38005973,3.42041241 1.90773825,1.88630344 C3.43541678,0.352194472 7,0.672777193 7,3.93178206"}}]})(props);
};
GrGremlin.displayName = "GrGremlin";
var GrGrid = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,1 L8,23 M16,1 L16,23 M1,8 L23,8 M1,16 L23,16 M1,1 L23,1 L23,23 L1,23 L1,1 Z"}}]})(props);
};
GrGrid.displayName = "GrGrid";
var GrGrommet = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#865CD6","strokeWidth":"4","d":"M12,2 C6.485,2 2,6.485 2,12 C2,17.515 6.485,22 12,22 C17.515,22 22,17.515 22,12 C22,6.485 17.515,2 12,2 Z"}}]})(props);
};
GrGrommet.displayName = "GrGrommet";
var GrGroup = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"}}]})(props);
};
GrGroup.displayName = "GrGroup";
var GrGrow = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,16 L12,7 M12.0000002,11 C12,8 12,5 5,5 C5,8 5,11 12.0000002,11 Z M4,16 L20,16 M18,16 L16,23 L8,23 L6,16 L6,16 M12,7 C12,4 12,1 19,1 C19,4 19,7 12,7 Z"}}]})(props);
};
GrGrow.displayName = "GrGrow";
var GrHadoop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M22.6148786,8.51458809 C22.4527967,9.15577678 22.1254391,9.70110654 21.4473346,9.94260905 C21.1149047,10.060965 20.9000793,9.93918049 20.561027,9.84144289 C20.8938327,9.87309841 21.0852218,9.92424509 21.3832721,9.77672285 C21.939686,9.50159222 22.3496579,9.05202745 22.6148786,8.51458809 L22.6148786,8.51458809 Z M23.9697255,12.7295161 C23.8906337,13.5066732 23.683182,14.2616621 23.3136953,14.9015827 C22.9828153,15.4754212 22.5216967,15.9578157 21.9074669,16.2867231 C21.4900743,16.5086405 21.0050967,16.6371413 20.5037277,16.68965 C19.9832433,16.7437556 19.4459448,16.7148241 18.9445759,16.6297205 C18.9211395,16.7074034 18.8969047,16.7863543 18.8738441,16.8635205 C18.8445369,16.9605536 18.814854,17.0582442 18.7855468,17.1547137 C18.6832065,17.4910419 18.4386981,17.7941647 18.1340254,18.0187592 C17.8195837,18.2507744 17.436195,18.4023358 17.0787318,18.4183984 C16.7372843,18.4349776 16.4734256,18.3545238 16.2394847,18.2163948 C16.0129176,18.0831974 15.8191802,17.897867 15.6078303,17.69375 L15.3309149,17.4273551 C15.268825,17.3668151 15.2066881,17.306463 15.1438468,17.2464866 C15.1371775,17.2900247 15.1309779,17.3316371 15.1243086,17.3696801 C15.2219523,17.5671749 15.2910872,17.7523174 15.3613963,17.9421566 L15.3613963,17.9427202 C15.4057328,18.061264 15.4512435,18.1831425 15.5061475,18.3152127 C15.5879634,18.5105 15.6497245,18.6734273 15.692699,18.8423663 C15.7356265,19.0129022 15.7592977,19.1863031 15.764558,19.3988272 C15.7695834,19.5798836 15.7745149,19.7605643 15.7795403,19.941245 C15.7840491,20.111734 15.7883701,20.2822699 15.7938182,20.4527588 C15.8691997,20.5894787 15.913771,20.6832241 15.9359863,20.7867386 C15.9609725,20.8971103 15.9584833,21.0047109 15.9457553,21.1800843 C15.918045,21.5742754 15.7877595,21.7939384 15.568848,21.9185879 C15.3633689,22.0350182 15.0912911,22.0523959 14.754775,22.050799 C14.7035814,22.0500006 14.6206383,22.0500006 14.5199888,22.0500006 C14.1934766,22.0500006 13.6883973,22.050799 13.533877,22.0398558 C13.3262844,22.0248265 13.153588,22.0089987 13.0086959,21.9742434 C12.8969623,21.9477072 12.8051425,21.9089598 12.728399,21.8527407 C12.6168532,21.9427757 12.5188338,22.0242159 12.4203447,22.1052803 C12.1304196,22.3441527 11.8361266,22.5875339 11.7175827,22.6663909 C11.672166,22.7363242 11.6310702,22.8068212 11.593356,22.8722927 C11.4716654,23.0855682 11.3816303,23.2433292 11.094711,23.3990237 C10.5312052,23.7033206 10.0951198,23.6767844 9.71257649,23.4419981 C9.3481153,23.218343 9.04705907,22.8074318 8.73228859,22.3218905 C8.58255892,22.0914252 8.34349867,21.7117468 8.22711532,21.3394422 C8.0984267,20.9273568 8.11627402,20.5265434 8.5268095,20.3156162 C8.54634763,20.3054714 8.56616756,20.2952796 8.58471938,20.2855106 C8.627506,20.2632484 8.66785035,20.2429588 8.70814774,20.2221995 C8.55254723,20.2304187 8.39614829,20.2367122 8.24054778,20.2347396 C7.93507669,20.232767 7.62814964,20.211726 7.31516389,20.1714286 C7.32023629,20.2087671 7.32455722,20.2386379 7.32695252,20.2579881 C7.35090551,20.4655807 7.36748474,20.6015022 7.34775875,20.7376585 C7.32793882,20.8780888 7.27218941,21.003067 7.15350469,21.1800374 C7.14561429,21.191779 7.11903117,21.2302447 7.09629931,21.2624638 C6.98625645,21.4245927 6.92120764,21.5210622 6.76983413,21.8560283 C6.78476953,22.0211161 6.78965406,22.1538908 6.77871083,22.2861019 C6.76668737,22.4285048 6.73672264,22.5733969 6.68604563,22.7628604 C6.55684038,23.2406052 6.07646549,23.3507419 5.54423942,23.3173487 C5.05588021,23.2869143 4.52121188,23.1331924 4.21231223,23.0492161 C4.14524385,23.0314157 4.09085647,23.0173257 4.03801899,23.0034705 C3.77735409,22.9355098 3.49649353,22.862054 3.26011038,22.7546412 C2.78678049,22.5385947 2.48342291,22.1995894 2.77884313,21.5505103 C2.82642035,21.4476064 2.8678919,21.3429177 2.90560612,21.2374306 C2.92007184,21.1999512 2.92955911,21.1640217 2.9418174,21.1265424 C2.70083153,21.1640217 2.44481632,21.1183232 2.19551735,21.0235915 C1.75938505,20.8577992 1.342603,20.5410091 1.08762107,20.2859333 C0.883738843,20.0815814 0.725132469,19.8617305 0.606447747,19.6359148 C0.478040929,19.3913595 0.395896259,19.1378805 0.354095942,18.8882528 C0.285242834,18.4796899 0.333289716,18.4331929 0.574792225,18.2013185 C0.610815645,18.1659996 0.651159997,18.1275339 0.661022993,18.1179527 C0.780365248,17.9999725 0.89890907,17.8816635 1.01796953,17.7642469 C1.14501431,17.6382824 1.27351506,17.5113315 1.40009018,17.3847564 C1.45828186,17.2273242 1.51619174,17.0703147 1.57457128,16.9115204 C1.61209764,16.8101664 1.64929522,16.7080139 1.68639887,16.6070826 C1.66855155,16.5129145 1.65239502,16.4182297 1.63882166,16.3213375 C1.6231348,16.2082418 1.61078257,16.1043516 1.60261037,16.0106062 C1.56588245,15.5787948 1.55357719,15.2074295 1.56639909,14.8711483 C1.57607422,14.6146634 1.59998024,14.37875 1.63933829,14.1529813 C1.4399179,14.1974117 1.23678714,14.1939832 1.05272485,14.1356036 C0.825265365,14.0621478 0.626737339,13.9051383 0.503778652,13.6470096 C0.457704369,13.5522778 0.421446116,13.4564659 0.387160463,13.3483017 C0.357007874,13.2528654 0.329156651,13.1463451 0.299285862,13.0256408 C0.13617069,12.8575941 0.0437403251,12.6812344 0.0130711032,12.5006476 C-0.0233750164,12.2933838 0.0186131678,12.0866835 0.111419266,11.8886252 C0.200280166,11.6982694 0.336718282,11.5172129 0.494620156,11.3529706 C0.919903162,10.9112492 1.5244109,10.579242 1.80574113,10.5303967 L2.01676228,10.4934809 L1.94654714,10.6956253 C1.91005406,10.7979657 1.86736137,10.9051905 1.82607769,11.0107246 C1.81442996,11.0413938 1.80264133,11.0723448 1.7898664,11.1056442 C1.91925952,11.2079845 1.99680146,11.3499647 2.03301274,11.5115769 C2.08956059,11.7614865 2.05302054,12.049392 2.00478579,12.264828 L1.94725164,12.5227219 L1.7838077,12.3159747 C1.74426179,12.2672233 1.71133817,12.2164524 1.67968264,12.1672314 C1.65046939,12.1222843 1.62275906,12.0800143 1.59443818,12.045259 C1.57194115,12.3807417 1.53112713,12.7171638 1.29206689,12.946502 C1.29883009,12.9753395 1.30202382,12.9907446 1.30681442,12.9940792 C1.31061872,12.9960518 1.35124487,12.9738835 1.44931123,12.9356997 C1.6176397,12.8714493 1.76736938,12.7642244 1.90822236,12.6381659 C2.05302054,12.5077865 2.18546649,12.3589492 2.31946234,12.2116618 C2.47092978,11.9175097 2.64428368,11.6392792 2.84670994,11.3746691 C3.05247083,11.1046579 3.28796161,10.8493941 3.55980457,10.6085492 C4.22513412,10.0193056 4.87238151,9.62689924 5.6070808,9.34261011 C6.32623413,9.06470845 7.12795483,8.88956982 8.11284546,8.73166794 C8.23679045,8.60316719 8.36256713,8.47588757 8.49153755,8.35001695 C8.6299013,8.21719527 8.77286778,8.08437358 8.92259746,7.95159887 C9.13296108,7.7666442 9.30875724,7.65354851 9.48361408,7.58356821 C9.64151595,7.51931783 9.79730433,7.49419067 9.97239599,7.48141574 C10.2730765,7.0805554 10.5472208,6.73661862 10.8697408,6.4386622 C11.207431,6.12638095 11.5952346,5.86646752 12.1173629,5.6469454 C13.1987699,5.19080531 14.1156059,4.95320103 14.9827981,5.00768234 C15.8562369,5.06230455 16.6734096,5.41197126 17.5491967,6.13455315 C17.7144724,6.2710852 17.8828008,6.41856048 18.0505657,6.56589486 C18.4175631,6.88855573 18.7777034,7.20450038 19.2007789,7.46911048 C19.3601368,7.56783438 19.494931,7.65359548 19.6281285,7.75457378 C19.759776,7.8550824 19.8812787,7.96737966 20.0078069,8.11678057 C20.1607303,8.29985657 20.3003621,8.48269774 20.4228511,8.67850169 C20.5257551,8.84208653 20.6156023,9.01572223 20.6949289,9.20621896 C20.8742006,9.13393729 21.0640398,9.05428185 21.2160239,8.92582807 C21.3472957,8.81324901 21.456634,8.65337454 21.5656436,8.4940167 C21.6632873,8.35053358 21.7613067,8.20836554 21.877737,8.09118375 C21.9156861,8.0518257 21.9589893,8.01970051 22.005909,7.99607628 C22.1844292,7.90181422 22.4103858,7.91736018 22.6242719,7.99119175 C22.8262285,8.06032666 23.0211401,8.18319141 23.153586,8.31385263 C23.2145018,8.37335938 23.2633471,8.43709312 23.2953784,8.49890123 C23.5613975,9.00750307 23.7527865,9.71463294 23.8684184,10.4424281 C23.9972949,11.2597887 24.032426,12.1066913 23.9697255,12.7295161 L23.9697255,12.7295161 Z M20.2449884,9.38187423 C20.2063349,9.38286053 20.1684328,9.38384683 20.1317049,9.38520886 C20.1867968,9.43931444 20.2299591,9.50356482 20.2616146,9.57457839 C20.2772076,9.559643 20.2950079,9.54517727 20.3141233,9.53212054 C20.2914384,9.48139656 20.2684248,9.43109528 20.2449884,9.38187423 L20.2449884,9.38187423 Z M1.49914284,11.6538859 C1.59749101,11.6428487 1.65864158,11.694512 1.73472756,11.7702692 C1.72096633,11.5887431 1.68658674,11.4539958 1.55911926,11.379084 C1.54996076,11.4085791 1.5427279,11.438262 1.53422693,11.4682267 C1.5177886,11.5266063 1.50764381,11.5886962 1.49914284,11.6538859 L1.49914284,11.6538859 Z M1.88995233,13.6347043 C1.89915779,13.6020625 1.90878596,13.5699373 1.91935345,13.5371076 C1.98116156,13.3420081 2.04738454,13.1526386 2.11839811,12.969046 C1.9698426,13.1033236 1.80278223,13.2172647 1.60012114,13.2984231 C1.07606727,13.5080822 1.0867287,13.3269318 0.861147885,12.8719659 C1.34072434,12.4889529 1.11875995,12.0185349 1.27140156,11.4898314 C1.30695532,11.3683287 1.35843076,11.249597 1.43127604,11.0930571 C0.929014692,11.3954284 0.00597913924,12.2399357 0.622792141,12.8799502 C0.689672649,13.1214528 0.741335963,13.3093663 0.833155762,13.5003327 C1.02196169,13.8947586 1.51515847,13.7935925 1.88995233,13.6347043 L1.88995233,13.6347043 Z M3.27852131,20.0330179 C2.74235004,19.2215281 2.25798299,18.2554711 1.97374083,17.2730697 C1.92127909,17.4138757 1.86867644,17.5535545 1.81649649,17.6941727 C1.57616815,17.9367084 1.33593374,18.1800896 1.0956054,18.4236117 C0.91755483,18.6042924 0.88279951,18.610539 0.91882293,18.8658027 C0.967386445,19.2162209 1.17413363,19.5886664 1.48298632,19.9039065 C1.76549071,20.1924227 2.74070621,20.9449223 3.1241889,20.4320465 C3.20581694,20.3226612 3.24423566,20.1874912 3.27852131,20.0480472 L3.27852131,20.0330179 L3.27852131,20.0330179 Z M15.0621717,18.4968797 C14.9773969,18.2953458 14.9305242,18.106305 14.8715341,17.9154326 C14.7439727,18.3717136 14.5718869,18.8011766 14.4156758,19.294937 C14.2676369,19.7621142 13.507059,21.1168203 13.0602183,21.4461034 C13.1472945,21.5109644 13.307075,21.5359506 13.5918338,21.5606081 C13.7934147,21.5777509 14.5869632,21.5824476 14.7869472,21.5853595 C15.2259914,21.5933908 15.3926291,21.5599976 15.4371535,21.0603663 C15.4586172,20.8152474 15.4390791,20.7697367 15.316778,20.5550991 C15.3062574,20.1726497 15.2957369,19.7894488 15.2851694,19.4070464 C15.2740853,19.0447456 15.2043868,18.8351804 15.0621717,18.4968797 L15.0621717,18.4968797 Z M22.9516294,8.87327239 C22.849477,8.62589905 22.441055,8.25519129 22.1816582,8.50716736 C21.91996,8.7621493 21.7230758,9.12102146 21.4379413,9.34660228 C21.0492923,9.65207336 20.3809099,9.54700897 20.5019899,10.196229 C20.5904751,10.6690892 20.6156492,11.1983563 20.5144831,11.6389035 C20.4180136,12.0620261 20.3176458,12.6633401 20.0969026,12.9465959 C20.1621393,12.7068781 20.2719003,12.0801082 20.3025695,11.6572675 C20.3191957,11.4259098 20.2932232,11.146693 20.2500139,10.8656916 C20.2012155,10.8666779 20.152605,10.8678051 20.1027734,10.869308 C19.9246289,10.8729244 19.634375,11.128376 19.5562695,11.2877808 C19.3382973,11.7317096 19.3234558,12.1442177 19.0793232,12.5667766 C19.2758316,12.094433 19.1652721,11.6684455 19.3447317,11.1618163 C19.4078549,10.9831082 19.568199,10.8290106 19.7535294,10.7352182 C19.6503907,10.7198132 19.5472519,10.7649011 19.3948921,10.8004549 C18.742948,10.9555388 18.7722552,11.4679449 18.3713009,11.9572904 C18.7577895,11.248188 18.5605296,10.7780048 19.3986025,10.5867097 C19.6743906,10.5241971 19.8757366,10.4991169 20.0570279,10.644009 C20.0609261,10.644009 20.0648713,10.644009 20.0683469,10.6432106 C20.116018,10.6395941 20.1632665,10.6356959 20.2113133,10.6323613 C20.1875013,10.5022167 20.1620923,10.3739977 20.1367303,10.2531525 C19.7535294,10.2029452 19.4003872,10.2136066 19.0074172,10.2729725 C19.0923799,10.2360567 19.1749942,10.2019589 19.2550724,10.1729805 C19.3800506,10.1270941 19.5015533,10.0908358 19.6223985,10.0701705 C19.6343281,10.0462644 19.6413261,10.0198692 19.6447077,9.99145437 C19.6572008,9.85905538 19.5591814,9.74079336 19.4269233,9.72768967 C19.2941017,9.71510261 19.1812408,9.81274627 19.168325,9.94556795 C19.1636283,9.99770093 19.1819923,10.0600257 19.2112995,10.111689 C19.2048181,10.1000413 19.1985715,10.0885344 19.1928885,10.0762292 L19.1923249,10.0754307 C19.1417418,9.97788101 19.1186812,9.86534892 19.1290139,9.74868376 C19.1381724,9.66062129 19.1656948,9.57941596 19.20773,9.50746305 C19.1948611,9.51056285 19.1819453,9.51469591 19.1690764,9.51925168 C19.0759416,9.55663713 18.8772726,9.54466064 18.7874254,9.51389748 C18.9635973,9.48468423 19.2260939,9.39103273 19.3956436,9.30841839 C19.4003402,9.30644579 19.404802,9.30452016 19.4085124,9.30217183 C19.5143752,9.23693515 19.6412791,9.20480996 19.7737251,9.21711523 C19.8409344,9.22383146 19.9041515,9.24120912 19.9620144,9.26877854 C20.0409183,9.29202703 20.1292156,9.32340075 20.2354072,9.36158464 C20.0740768,9.02445803 19.8918932,8.71969145 19.6725589,8.41393856 C19.4651542,8.1253285 19.2909079,8.02566527 18.9842627,7.84451491 C18.9174761,7.80487506 18.8522394,7.76528217 18.7878012,7.72371669 C18.5612341,7.68219817 18.3085065,7.64138415 18.0904873,7.68290267 C18.2701817,7.61221786 18.4053518,7.58370911 18.562784,7.57069934 C18.1288121,7.25954529 17.754394,6.91034826 17.3260582,6.55011406 C15.6731609,5.16027698 14.3356447,5.25900088 12.2307873,6.17287794 C11.3766049,6.54475986 11.070852,6.91866136 10.5453421,7.5914586 C10.5499449,7.5914586 10.5554869,7.59098894 10.5617805,7.59098894 C11.096214,7.57750951 11.6275946,7.55914555 12.1770105,7.50748223 C11.608761,7.63978729 11.0654038,7.74555618 10.507487,7.83004918 C9.89184819,7.92398248 9.70280743,7.90834258 9.23844817,8.36025568 C8.38276279,9.19269257 7.66600476,10.1335754 6.88278892,10.977801 C6.42956076,11.4670525 6.20416781,11.9573844 5.93805478,12.5147376 C5.67410221,13.0692258 5.71064226,13.2792607 6.06481776,13.7584614 C6.42664883,14.2489811 6.64537251,14.4708516 6.79876559,14.9063733 C7.19887447,14.2888088 7.68089319,13.7767784 8.1891193,13.1629243 C7.77416895,13.8279721 7.39575866,14.4563858 7.05280819,15.1325647 C6.8391569,15.5532919 6.73423341,15.7676947 6.74109054,16.2329933 C7.14213876,16.6950981 7.39364516,16.9415791 7.76599676,17.0439194 C8.16709194,17.1541032 8.54507953,17.1357392 8.90761509,16.9478257 C9.80956262,16.4810711 10.6668918,15.8720546 11.667939,15.7953111 C12.184713,14.8742481 12.0395391,13.7160036 11.8540678,12.6683655 C11.7004399,11.7977447 11.7394222,11.0299809 11.946827,10.15673 C11.9987721,11.0048538 12.0666389,11.7923905 12.2348734,12.6238881 C12.4799924,13.8419681 12.5315617,14.8935044 12.0192965,16.1521167 C10.9129501,16.1786528 10.0049439,16.8268865 9.02371665,17.3286782 C8.58251195,17.5544939 8.169816,17.5771318 7.67614956,17.4597152 C7.17285495,17.3399972 6.78697696,16.9517239 6.26912269,16.3846955 C6.31989363,15.955984 6.37583091,15.6895891 6.52847252,15.3747717 C6.34379966,14.8184987 6.11479028,14.5626714 5.69147987,13.9937174 C5.20053749,13.3341647 5.19208349,13.0484196 5.56344878,12.297329 C5.83111172,11.7527976 6.08200756,11.2504424 6.50536493,10.7536761 C6.92214697,10.2615126 7.3054418,9.80339991 7.69286968,9.3703674 C6.08271206,9.61478184 5.05489391,10.0030551 3.95516982,10.9676092 C3.13982879,11.6834279 2.63127392,12.5722248 2.26845656,13.5985869 C2.03855481,14.246257 1.97411657,14.8987647 2.08251559,15.9575339 C2.22186564,17.3221968 2.94656103,18.8618575 3.72695887,19.984877 C3.63175748,20.6841165 3.50832912,21.2108945 3.3131827,21.7106666 C3.09196978,22.2774601 3.97226568,22.4509079 4.39754869,22.5672913 C4.74289446,22.662023 6.0544851,23.0219754 6.18416002,22.5571465 C6.26142016,22.2785873 6.26142016,22.0840984 6.2420699,21.790322 C6.47586987,21.324131 6.54688345,21.2618063 6.71375595,20.9860651 C6.89227618,20.6909267 6.90721158,20.5731343 6.90866755,20.2264735 C6.90937204,19.779398 6.89781825,18.9809649 6.91665188,18.6923079 C6.97719189,18.9504836 7.04919176,19.3098724 7.1088394,19.6547954 C8.04108042,19.821574 8.96627644,19.8094566 9.89790689,19.6192417 C9.90974248,19.5541929 9.93130018,19.4832732 9.95544103,19.3961971 C10.0177188,19.1781779 10.142838,18.9602526 10.2058202,18.7418577 C10.1882077,18.956918 10.1718164,19.1713677 10.1543448,19.3858174 C10.1369671,19.6071243 10.1362626,19.7856445 10.1635033,20.0063408 C10.1785326,20.1277966 10.1939846,20.2489235 10.2084504,20.3701914 C10.1410532,20.2590683 10.0360828,20.1524071 9.97474433,20.0406734 C9.55979398,20.3136906 9.33158303,20.4682578 8.92414735,20.6832711 C8.49374498,20.9110124 8.98741143,21.7258368 9.16513323,22.0090927 C9.55584878,22.6291933 10.0224624,23.3643153 10.7482381,22.980363 C10.986312,22.8547741 11.1256621,22.563393 11.2845502,22.353593 C11.497544,22.228239 12.62836,21.27491 12.8080544,21.1709728 C13.0615804,21.0254701 13.9750817,19.5287839 14.0908545,19.15554 C14.3463061,18.3289739 14.646329,17.6999026 14.7311038,16.8375949 C14.1494689,16.5930396 13.8666827,16.3213845 13.4498537,15.8313345 C14.0358096,16.265682 14.5416404,16.4978852 15.1732948,16.6979161 C15.4035254,16.900812 15.6358224,17.1059624 15.8773719,17.3209757 C16.2275552,17.6328812 16.5490889,17.9508454 17.0568453,17.9600039 C17.6060733,17.9693972 18.2271603,17.5494684 18.3869408,17.0287492 C18.4482793,16.8285773 18.5101344,16.6277949 18.5712849,16.4273882 C18.462698,16.4011808 18.3560837,16.3719206 18.2533207,16.3404529 C18.1394266,16.6142685 18.1484442,16.7203662 18.0947143,16.9215243 C18.0021431,17.265649 17.5284844,17.5045213 17.0322348,17.3847564 C16.8558281,17.3422046 16.7521257,17.3175941 16.6892374,17.2722713 C16.7388811,17.407817 16.8361021,17.523261 17.0165949,17.5562316 C17.2166259,17.5933353 17.364242,17.6093979 17.6548717,17.5433628 C17.2955298,17.7297264 17.179898,17.7377108 16.9251978,17.6808811 C16.2550777,17.5320438 16.4910381,16.7250159 16.6371044,16.2314903 C16.7288772,15.920759 16.6978323,15.5910531 16.6282747,15.2797112 C16.8821764,15.4402432 17.0833345,15.5816598 17.3722264,15.6793504 C18.7255234,16.1352087 20.3314071,16.5998498 21.6935338,15.8388961 C22.7618842,15.2426075 23.3476522,13.9201206 23.4792528,12.7087098 C23.5965285,11.6287587 23.3941962,9.94411199 22.9516294,8.87327239 L22.9516294,8.87327239 Z M16.0434459,15.3758049 C16.0168628,15.5439925 15.9807455,15.7515851 15.9541623,15.9197727 C16.0256456,15.7299335 16.1106083,15.5101765 16.1932696,15.3289322 C16.2809563,15.1373553 16.3299425,15.1199776 16.5149441,15.0187645 C16.6470144,14.9469055 16.8860276,14.8484634 17.0174873,14.7773559 C16.8821294,14.7999938 16.6393588,14.8494027 16.5045645,14.8722755 C16.1430152,14.9334261 16.1000408,15.0199386 16.0434459,15.3758049 L16.0434459,15.3758049 Z M9.86540597,8.90807468 C9.44618166,9.32340075 9.03874598,10.7473356 8.90855443,11.3167593 C9.11314115,10.8429127 9.62709719,9.52000315 10.0206777,9.18315834 C10.1293585,9.08988257 10.2059142,9.03267719 10.2868847,8.99106474 C10.0050848,9.46448857 10.0255622,9.58176429 10.1245679,10.2151096 C10.2085443,9.57124376 10.4319647,9.32194479 10.7968955,8.84218047 C11.1974741,8.74092037 11.5732542,8.62115542 11.9837897,8.46081128 C11.5201349,8.51346089 11.0579362,8.56099114 10.593436,8.60476406 C10.2045052,8.64144501 10.1417108,8.63590294 9.86540597,8.90807468 L9.86540597,8.90807468 Z M16.8285874,10.4872343 C16.7385524,10.2980996 16.5803687,10.1626478 16.3973396,10.0959082 C16.5639304,10.006061 16.7266228,9.9133958 16.8543251,9.79766997 C16.4808933,9.97064814 16.0465457,9.92814333 15.7269847,10.1449414 C15.4437758,10.3347806 15.0545632,10.9391004 14.7680196,11.194552 C14.9754243,11.1140982 15.1754083,10.9747012 15.3594237,10.828447 C15.3607857,10.9371278 15.3852084,11.048157 15.4340537,11.1529866 C15.4852004,11.2597887 15.5594077,11.3477103 15.6457793,11.4172209 C15.6211688,11.3926104 15.5998459,11.3645713 15.5840652,11.3319765 C15.5075095,11.1718202 15.575846,10.979163 15.7360023,10.9033588 C15.8965343,10.8260517 16.0900838,10.8945761 16.1666395,11.0545445 C16.1734966,11.0699965 16.1801189,11.0854016 16.1844398,11.1008536 C16.0309059,11.2154052 15.8902877,11.3492132 15.7726832,11.5041562 C15.6699672,11.6393732 15.5840182,11.7920148 15.5227267,11.9610947 C16.0684322,11.3139413 16.8600551,10.8243609 17.6043356,10.6159699 C17.3961324,10.6135276 17.1496514,10.6526039 16.8988495,10.7342319 C16.8898789,10.6514297 16.8670531,10.5676412 16.8285874,10.4872343 L16.8285874,10.4872343 Z M14.1629483,9.9039555 C14.2885371,9.34810521 14.5118166,8.81235664 15.3754393,8.39750023 C14.230909,8.68413769 14.0160836,9.16479438 14.1629483,9.9039555 L14.1629483,9.9039555 Z"}}]})(props);
};
GrHadoop.displayName = "GrHadoop";
var GrHalt = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,23 C10,23 12.9996892,23 15,23 C18,23 19,21 19,18 L19,6 C19,4.00000008 18,3.99999992 17.5,4 C17,4.00000008 15.9998779,4.00000008 15.9998779,5.99999984 C15.9998779,7.9999996 15.9998782,13 15.9998782,13 C15.9998782,13 15.9998784,5.00000004 15.9998782,4 C15.9998779,2.99999996 15.9998779,2 14.5,2 C13.0001221,2 12.9996891,2.99999994 12.9996891,4.00000006 C12.9996891,5.00000017 12.9996892,13 12.9996892,13 C12.9996892,13 12.9996891,4.00000006 12.9996891,3.00000006 C12.9996891,2.00000006 13,1.00000001 11.5,0.999999996 C10,0.999999981 10,2.00000006 10,3 L10,13 L10,4 C10,3 10.029402,2 8.5,2 C7,2 7,3 7,4 L7,18 L7,14 C7,13 6.44999986,12 5.00000005,12 C5,12 4,12 4,12 C4,12 4.00000001,14.0384045 4,18 C3.99999999,21.9615955 6,23.023861 8,23 Z"}}]})(props);
};
GrHalt.displayName = "GrHalt";
var GrHelp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,23 C12.5522847,23 13,22.5522847 13,22 C13,21.4477153 12.5522847,21 12,21 C11.4477153,21 11,21.4477153 11,22 C11,22.5522847 11.4477153,23 12,23 Z M12,18 L12,15 C12,13 13,13 15,12 C17,11 18,9.15767339 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7"}}]})(props);
};
GrHelp.displayName = "GrHelp";
var GrHeroku = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M20.4425631,0 L3.16168659,0 C1.96912351,0 1,0.966467463 1,2.16168659 L1,21.8403054 C1,23.0335325 1.96912351,24 3.16168659,24 L20.4425631,24 C21.6354582,24 22.6015936,23.0335325 22.6015936,21.8403054 L22.6015936,2.16168659 C22.6015936,0.966467463 21.6354582,0 20.4425631,0 L20.4425631,0 Z M21.4013944,21.8403054 C21.4013944,22.3701859 20.9721116,22.7991368 20.4425631,22.7991368 L3.16168659,22.7991368 C2.63247012,22.7991368 2.2001992,22.3701859 2.2001992,21.8403054 L2.2001992,2.16168659 C2.2001992,1.62981408 2.63247012,1.2001992 3.16168659,1.2001992 L20.4425631,1.2001992 C20.9721116,1.2001992 21.4013944,1.62981408 21.4013944,2.16168659 L21.4013944,21.8403054 Z M6.40036521,20.4013612 L9.10222444,18.0002988 L6.40036521,15.5999004 L6.40036521,20.4013612 L6.40036521,20.4013612 Z M16.1577357,10.6722776 C15.672012,10.1838977 14.7852258,9.60056441 13.302158,9.60056441 C11.675,9.60056441 9.99903718,10.0245352 8.80116202,10.4126494 L8.80116202,3.60122842 L6.40043161,3.60122842 L6.40043161,14.0085989 L8.09697875,13.2400066 C8.1251992,13.2273904 10.860259,12.0012948 13.302158,12.0012948 C14.5202855,12.0012948 14.7902058,12.6719456 14.8031541,13.2323705 L14.8031541,20.4013612 L17.2012284,20.4013612 L17.2012284,13.201494 C17.2038845,13.0474436 17.1886122,11.7157703 16.1577357,10.6722776 M13.0012948,7.50039841 L15.4020252,7.50039841 C16.4866866,6.27164675 17.0394754,4.96354582 17.201494,3.60099602 L14.8030876,3.60099602 C14.5358234,4.96088977 13.9445219,6.26135458 13.0012948,7.50039841"}}]})(props);
};
GrHeroku.displayName = "GrHeroku";
var GrHide = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z M20,5 L4,19"}}]})(props);
};
GrHide.displayName = "GrHide";
var GrHistory = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,12 C1,18.075 5.925,23 12,23 C18.075,23 23,18.075 23,12 C23,5.925 18.075,1 12,1 C7.563,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6"}}]})(props);
};
GrHistory.displayName = "GrHistory";
var GrHome = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,11 L12,2 L23,11 M15,23 L15,15 L15,15 L9,15 L9,23 M4,23 L4,9 M20,23 L20,9"}}]})(props);
};
GrHome.displayName = "GrHome";
var GrHorton = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.30070636,12.9767911 L2.14328961,12.9767911 C1.82441978,13.9656912 1.38849647,14.9344097 1.21089808,15.9475277 C0.988900101,17.2391524 0.972754793,18.5711403 0.87184662,19.8829465 C0.843592331,20.221998 0.996972755,20.3995964 1.33602422,20.4036327 C2.8617558,20.4238143 2.68819374,20.4843592 2.93844601,19.2048436 C2.95459132,19.1160444 2.9667003,19.0272452 2.99495459,18.938446 C3.51564077,17.2795156 3.53985873,15.6528759 2.72452069,14.0625631 C2.5469223,13.7194753 2.4419778,13.3400605 2.30070636,12.9767911 L2.30070636,12.9767911 Z M18.9061554,7.0554995 C18.9061554,6.77699294 18.6801211,6.55499495 18.4056509,6.55499495 C18.1271443,6.55499495 17.9051463,6.77699294 17.9051463,7.0554995 C17.9051463,7.32996973 18.1271443,7.55600404 18.4056509,7.55600404 C18.6801211,7.55600404 18.9061554,7.32996973 18.9061554,7.0554995 L18.9061554,7.0554995 Z M21.0817356,9.79212916 C21.2875883,10.2320888 21.235116,10.8133199 21.2310797,11.3299697 C21.2270434,12.2542886 21.1745711,13.1786075 21.1342079,14.1029263 C21.0978809,15.0191726 21.0575177,15.9354188 21.0090817,17.025227 C20.431887,16.6700303 19.9717457,16.419778 19.5519677,16.1170535 C19.4106963,16.0161453 19.3097881,15.7820383 19.2976791,15.6004036 C19.2008073,14.5025227 19.1039354,13.4006054 19.0716448,12.2986882 C19.0554995,11.60444 18.8698285,11.0918264 18.1473259,10.8940464 C17.7638749,10.7931382 17.5660949,10.5267407 17.4207871,10.1594349 C16.8072654,8.63370333 16.1695257,7.11200807 15.4914228,5.47325933 C16.653885,5.68718466 17.7275479,5.86074672 18.7891019,6.09081736 C18.9788093,6.13118063 19.1644803,6.36932392 19.2774975,6.56306761 C19.8990918,7.62865792 20.5529768,8.67810293 21.0817356,9.79212916 L21.0817356,9.79212916 Z M21.6508577,17.0171544 C21.6508577,17.0332997 21.667003,17.0454087 21.691221,17.0978809 C22.4621594,17.1543895 23.3057518,17.4490414 23.8627649,16.3794147 C23.4994955,16.2744702 23.1765893,16.1775984 22.8536831,16.0928355 C21.6508577,15.778002 21.6508577,15.778002 21.6508577,17.0171544 L21.6508577,17.0171544 Z M15.3501514,13.8123108 C15.2532795,13.4651867 15.0797175,13.3158426 14.7204844,13.2633703 C14.284561,13.1947528 13.7880928,13.1463169 13.4490414,12.9041372 C11.9515641,11.8183653 10.506559,10.6599395 9.02522704,9.54994955 C8.62563068,9.24722503 8.52875883,8.93239152 8.69424823,8.46821393 C8.94046418,7.77396569 9.15035318,7.06760848 9.41271443,6.26034309 C9.18668012,6.28456105 9.08173562,6.28859738 8.98082745,6.30877901 C7.67305752,6.59939455 6.37739657,6.95459132 5.05348133,7.16851665 C4.19374369,7.30978809 3.67305752,7.7457114 3.15237134,8.419778 C1.88900101,10.0544904 0.920282543,11.790111 0.565085772,13.8486377 C0.43592331,14.6034309 0.193743693,15.3380424 0,16.0807265 C0.0605449041,16.1210898 0.125126135,16.1614531 0.185671039,16.2018163 C0.310797175,16.0565086 0.48839556,15.9313824 0.552976791,15.765893 C0.956609485,14.6760848 1.33198789,13.5782038 1.72754793,12.4883956 C1.93340061,11.9233098 2.11503532,11.8789102 2.49041372,12.3592331 C2.73259334,12.6659939 2.95459132,13.0171544 3.08375378,13.3804238 C3.77396569,15.3299697 4.43592331,17.2875883 5.10998991,19.2411705 C5.51765893,20.431887 5.52169526,20.4117053 6.79313824,20.4157417 C7.27346115,20.4157417 7.44702321,20.2462159 7.40665994,19.778002 C7.32189707,18.764884 7.26942482,17.7517659 7.1765893,16.7426842 C7.13218971,16.2260343 7.36226034,15.987891 7.83854692,15.8587286 C9.01311806,15.5438951 10.1796165,15.2048436 11.346115,14.8698285 C12.0807265,14.6639758 12.1533804,14.6881937 12.5166498,15.3420787 C13.2795156,16.7023209 14.0787084,18.0464178 14.7769929,19.4429869 C15.1564077,20.209889 15.6609485,20.5045409 16.4924319,20.4157417 C17.1019173,20.3511604 17.1503532,20.3430878 16.9848638,19.7336024 C16.4399596,17.7598385 15.8829465,15.7860747 15.3501514,13.8123108 L15.3501514,13.8123108 Z M15.2330979,6.27245207 C14.8536831,5.23107972 14.3047427,4.66195762 13.1786075,4.55297679 C12.4601413,4.48435923 11.7618567,4.19374369 11.0514632,4 L10.8335015,4 C10.7366297,4.21392533 10.6195762,4.419778 10.5469223,4.63773966 C10.1392533,5.86074672 9.75983855,7.09182644 9.34006054,8.30676085 C9.18264379,8.75882947 9.28355197,9.04944501 9.66700303,9.32795156 C10.728557,10.1150353 11.7941473,10.9061554 12.815338,11.7497477 C14.4500505,12.7386478 15.0554995,12.7386478 15.790111,12.7346115 C16.5247225,12.7305752 17.1099899,12.7346115 17.8486377,12.7346115 C17.7558022,12.4722503 17.6992936,12.2865792 17.6266398,12.1089808 C16.8193744,10.1675076 15.9475277,8.25025227 15.2330979,6.27245207 L15.2330979,6.27245207 Z M11.4470232,15.4510595 C11.160444,15.4873865 10.7891019,15.5035318 10.764884,15.987891 C10.7124117,17.0696266 10.6155399,18.1513623 10.530777,19.3420787 C10.5509586,19.592331 10.4581231,20.1210898 10.6437941,20.2542886 C10.9182644,20.443996 11.4026236,20.407669 11.7820383,20.3551968 C11.9354188,20.3350151 12.1210898,20.0484359 12.1735621,19.8466196 C12.3148335,19.3259334 12.3269425,18.764884 12.5005045,18.2563068 C12.8193744,17.3118063 12.6215943,16.4803229 12.0484359,15.7255298 C11.9273461,15.5640767 11.6367306,15.4268416 11.4470232,15.4510595 L11.4470232,15.4510595 Z M24,15.7255298 C23.9071645,15.160444 23.8546922,14.6437941 23.7255298,14.1473259 C23.6932392,14.0221998 23.4349142,13.9091826 23.2653885,13.889001 C23.1564077,13.8728557 22.9465187,14.0020182 22.9061554,14.110999 C22.6195762,14.8617558 23.0958628,15.6165489 24,15.7255298 L24,15.7255298 Z"}}]})(props);
};
GrHorton.displayName = "GrHorton";
var GrHostMaintenance = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,23 L20,17 M21,14 C19.8954305,14 19,14.8954305 19,16 C19,17.1045695 19.8954305,18 21,18 C22.1045695,18 23,17.1045695 23,16 M17,4 L18,4 L18,5 L17,5 L17,4 Z M10,23 L3,23 L3,1 L3,1 L21,1 L21,11 M3,13 L17,13 M3,18 L13,18 M3,8 L21,8"}}]})(props);
};
GrHostMaintenance.displayName = "GrHostMaintenance";
var GrHost = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,4 L18,4 L18,5 L17,5 L17,4 Z M3,1 L21,1 L21,23 L3,23 L3,1 Z M3,13 L21,13 L3,13 Z M3,18 L21,18 L3,18 Z M3,8 L21,8 L3,8 Z"}}]})(props);
};
GrHost.displayName = "GrHost";
var GrHp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.4210347,0.00016035599 L5,15.127022 L7.13818677,15.127022 L10.5590611,0.00016035599 L8.4210347,0.00016035599 Z M17.4142797,8.87313837 L15.9176772,15.0979976 L18.0557037,15.0979976 L19.5523061,8.87313837 L17.4142797,8.87313837 Z M13.7794905,8.87313837 L10.3586161,24 L12.4966425,24 L15.9176772,8.87313837 L13.7794905,8.87313837 Z M10.131552,8.87313837 L8.63478923,15.0979976 L10.7728157,15.0979976 L12.2694181,8.87313837 L10.131552,8.87313837 Z"}}]})(props);
};
GrHp.displayName = "GrHp";
var GrHpeLabs = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#01A982","strokeWidth":"2","points":"14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"}}]})(props);
};
GrHpeLabs.displayName = "GrHpeLabs";
var GrHpe = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 48 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 6H46V18H2V6ZM5 9H43V15H5V9Z"}}]})(props);
};
GrHpe.displayName = "GrHpe";
var GrHpi = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.7928421,15.3333704 C15.9768442,15.3333704 16.1755131,15.1915021 16.2349804,15.0183002 L18.4310048,8.64836276 C18.4908721,8.47529417 18.3902043,8.33315926 18.2063356,8.33315926 L17.2052578,8.33315926 C17.0219225,8.33315926 16.8228536,8.47529417 16.7629863,8.64836276 L14.5570951,15.0183002 C14.4973611,15.1915021 14.5981622,15.3333704 14.7821642,15.3333704 L15.7928421,15.3333704 Z M24.0002667,12 C24.0002667,18.627007 18.6267403,24 12,24 C11.8170646,24 11.6393293,23.9803998 11.4581273,23.9727997 L13.8777542,16.981922 C13.9382882,16.8085868 14.1365571,16.6668519 14.3205591,16.6668519 L16.0003111,16.6668519 C18.6083401,16.6668519 18.632207,15.8021756 18.9066101,15.0079001 C19.5488839,13.1445461 20.6560962,9.93424371 20.8714319,9.30583673 C21.1779686,8.40956011 21.2793031,7.00007778 19.0002111,7.00007778 L15.0000333,7.00007778 C14.816698,7.00007778 14.6177624,7.14194602 14.5570951,7.31528128 L8.92489917,23.5871954 C3.79030878,22.2271803 0,17.5617951 0,12 C0,6.69394104 3.44790498,2.20055778 8.22275803,0.615473505 L2.77589751,16.3513817 C2.71523017,16.5248503 2.81643129,16.6668519 3.00003333,16.6668519 L4.99965555,16.6668519 C5.1836576,16.6668519 5.38232647,16.5248503 5.44272714,16.3513817 L8.1092901,8.64836276 C8.16915744,8.47529417 8.36755964,8.33315926 8.55102834,8.33315926 L9.539706,8.33315926 C9.72330804,8.33315926 9.82410916,8.47529417 9.76424182,8.64836276 L7.10847898,16.3513817 C7.04914499,16.5248503 7.14994611,16.6668519 7.33328148,16.6668519 L9.33357037,16.6668519 C9.51690574,16.6668519 9.71570795,16.5248503 9.77544195,16.3513817 C9.77544195,16.3513817 11.6389293,10.9485217 12.2016022,9.3149035 C12.7649418,7.68155202 12.3125368,7.00007778 10.3462483,7.00007778 L9.01290014,7.00007778 C8.82956477,7.00007778 8.72889699,6.8580762 8.78916432,6.68514095 L11.0862565,0.0464005156 C11.3887932,0.0234669274 11.6913299,0 12,0 C18.6267403,0 24.0002667,5.37299303 24.0002667,12 L24.0002667,12 Z"}}]})(props);
};
GrHpi.displayName = "GrHpi";
var GrHtml5 = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,2 L21,2 L21,18 L12,22 L3,18 L3,2 Z M17,6 L8,6 L8,11 L16,11 L16,16 L12,17.5 L8,16 L8,14"}}]})(props);
};
GrHtml5.displayName = "GrHtml5";
var GrIceCream = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,8 C19,8 19,6.5 17.5,6.5 C17.5,3.5 15.5,1 12,1 C8.5,1 6.5,3.5 6.5,6.5 C5,6.5 5,8 7,8 M7,8 L17,8 L12,21 L7,8 Z"}}]})(props);
};
GrIceCream.displayName = "GrIceCream";
var GrImage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,3 L23,3 L23,21 L1,21 L1,3 Z M6,9 C6.55228475,9 7,8.55228475 7,8 C7,7.44771525 6.55228475,7 6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 Z M23,15 L18,9 L12,16 L9,13 L1,21"}}]})(props);
};
GrImage.displayName = "GrImage";
var GrImpact = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M13,2 L22,6 L22,17 L13,22 L13,2 Z M22,6 L13,11 L22,6 Z M9,22 L9,2 L9,22 Z M9,12 L3,5 L9,12 Z M9,12 L1,12 L9,12 Z M9,12 L3,19 L9,12 Z"}}]})(props);
};
GrImpact.displayName = "GrImpact";
var GrInProgress = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L23,1 M10,4.5 L14,4.5 C14,4.5 14,6 14,6 C14,7 12,8 12,8 C12,8 10,7 10,6 C10,6 10,4.5 10,4.5 Z M5,1 C5,1 5,3 5,6 C5,9 10,9.23530084 10,12 C10,14.7646992 5.00000001,15 5,18 C4.99999999,21 5,23 5,23 M19,1 C19,1 19,3 19,6 C19,9 14,9.23530084 14,12 C14,14.7646992 19,15 19,18 C19,21 19,23 19,23 M1,23 L23,23 M8,21 C8,19 12,17 12,17 C12,17 16,19 16,21 C16,21 16,23 16,23 L8,23 L8,21 Z"}}]})(props);
};
GrInProgress.displayName = "GrInProgress";
var GrInbox = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,13 L6,2 L18,2 L23,13 L23,22 L1,22 L1,13 Z M1,13 L8,13 L8,16 L16,16 L16,13 L23,13"}}]})(props);
};
GrInbox.displayName = "GrInbox";
var GrIndicator = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 Z M19,8 C19,4.13400675 15.8659932,1 12,1 C8.13400675,1 5,4.13400675 5,8 C5,9.93299662 5.5,11 7,13 C8.5,15 10,16.5 10,19 L10,23 L14,23 L14,19 C14,16.5 15.5,15 17,13 C18.5,11 19,9.93299662 19,8 Z"}}]})(props);
};
GrIndicator.displayName = "GrIndicator";
var GrInfo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,17.0002864 C15,14.0000003 19,12.0005727 19,8.00028636 C19,4.00000002 16,1.00028636 12,1.00028636 C8,1.00028636 5,4.00000002 5,8.00028636 C5,12.0005727 9,14.0000003 9,17.0002864 C9,20.0005725 9,20 9,20 C9,22.0000003 10,22.9999997 12,23 C14,23.0000003 15,22.0000003 15,20 C15,20 15,20.0005725 15,17.0002864 Z M9,18 L15,18"}}]})(props);
};
GrInfo.displayName = "GrInfo";
var GrInherit = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#231F20","strokeWidth":"2","d":"M17,18 L12,15 L17,18 Z M7,18 L12,15 L12,11 M17,20 C17,21.657 18.343,23 20,23 C21.657,23 23,21.657 23,20 C23,18.343 21.657,17 20,17 C18.343,17 17,18.343 17,20 L17,20 L17,20 Z M4,17 C2.343,17 1,18.343 1,20 C1,21.657 2.343,23 4,23 C5.657,23 7,21.657 7,20 C7,18.343 5.657,17 4,17 L4,17 L4,17 Z M17,6 C17,8.761 14.761,11 12,11 C9.239,11 7,8.761 7,6 C7,3.239 9.239,1 12,1 C14.761,1 17,3.239 17,6 L17,6 L17,6 Z"}}]})(props);
};
GrInherit.displayName = "GrInherit";
var GrInspect = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5.5,21 C7.98528137,21 10,18.9852814 10,16.5 C10,14.0147186 7.98528137,12 5.5,12 C3.01471863,12 1,14.0147186 1,16.5 C1,18.9852814 3.01471863,21 5.5,21 Z M1,16 L1,7 L1,6.5 C1,4.01471863 3.01471863,2 5.5,2 L6,2 M23,16 L23,7 L23,6.5 C23,4.01471863 20.9852814,2 18.5,2 L18,2 M18.5,21 C20.9852814,21 23,18.9852814 23,16.5 C23,14.0147186 20.9852814,12 18.5,12 C16.0147186,12 14,14.0147186 14,16.5 C14,18.9852814 16.0147186,21 18.5,21 Z M10,17 C10,17 10,15 12,15 C14,15 14,17 14,17"}}]})(props);
};
GrInspect.displayName = "GrInspect";
var GrInstagram = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"}}]})(props);
};
GrInstagram.displayName = "GrInstagram";
var GrInstallOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,18 L12,8 L12,18 Z M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M17,12 L12,7 L7,12","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrInstallOption.displayName = "GrInstallOption";
var GrInstall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,13.5 L19,17.5 L12,22 L5,17.5 L5,13.5 M12,22 L12,13.5 M18.5,8.5 L12,4.5 L15.5,2 L22,6 L18.5,8.5 L18.5,8.5 L18.5,8.5 Z M5.5,8.5 L12,4.5 L8.5,2 L2,6 L5.5,8.5 L5.5,8.5 L5.5,8.5 Z M18.5,9 L12,13 L15.5,15.5 L22,11.5 L18.5,9 L18.5,9 L18.5,9 Z M5.5,9 L12,13 L8.5,15.5 L2,11.5 L5.5,9 L5.5,9 Z"}}]})(props);
};
GrInstall.displayName = "GrInstall";
var GrIntegration = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#231F20","strokeWidth":"2","d":"M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3"}}]})(props);
};
GrIntegration.displayName = "GrIntegration";
var GrInternetExplorer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.9995527,12.3365818 C23.9995527,10.4393317 23.5090273,8.656914 22.6488466,7.1080745 C26.3153205,-1.18993486 18.7201703,0.0254770168 18.2972919,0.108218948 C16.688185,0.423085539 15.1995011,0.928594013 13.8263205,1.56939672 C13.6238264,1.55799176 13.4201024,1.5517302 13.2148129,1.5517302 C8.09006842,1.5517302 3.80034655,5.12618162 2.70245058,9.91794575 C5.40352737,6.88769025 7.29384506,5.6650105 8.42584412,5.17571497 C8.24515364,5.33717355 8.06826481,5.50042114 7.89428312,5.66489868 C7.83636377,5.71957545 7.78056888,5.7750349 7.72343222,5.83004711 C7.60871165,5.94040695 7.49421471,6.05087861 7.38240129,6.16235659 C7.3158723,6.22866195 7.25113233,6.29552637 7.18560967,6.36227899 C7.08643116,6.4632465 6.98747629,6.56410221 6.89064586,6.6656288 C6.82188061,6.73774845 6.75479256,6.81009173 6.68725725,6.8823232 C6.59680019,6.97915363 6.5069022,7.07609586 6.41868142,7.17337354 C6.35013979,7.24895941 6.2827163,7.32454528 6.21540462,7.40035478 C6.13176818,7.49450168 6.04891444,7.58864858 5.96717882,7.68301911 C5.89941989,7.7612885 5.83222003,7.8395579 5.76580285,7.9179391 C5.68831615,8.00940248 5.61183578,8.10086586 5.53613809,8.19232924 C5.46916185,8.27328215 5.40240924,8.35412326 5.33688657,8.43496436 C5.26599687,8.52240245 5.19667255,8.60972873 5.12746004,8.6969432 C5.06037199,8.78147415 4.99328393,8.86589328 4.92776127,8.95031241 C4.86536938,9.03070626 4.80476651,9.11076467 4.74371638,9.19093489 C4.67483931,9.28150376 4.60540318,9.37207263 4.53831513,9.46219425 C4.49034717,9.52671059 4.44428004,9.59055606 4.39720659,9.65484877 C3.97108565,10.2362786 3.58175132,10.806527 3.23009811,11.3543009 C3.2292036,11.3556427 3.22830909,11.3569845 3.2275264,11.3583262 C3.13494489,11.5025655 3.04560597,11.6446804 2.95805606,11.7855653 C2.95335989,11.7931686 2.9484401,11.8008838 2.94374394,11.8085989 C2.85608222,11.9500429 2.77143946,12.0890269 2.68892115,12.2265574 C2.68601401,12.2313654 2.68299504,12.2362852 2.68008789,12.2410932 C2.45825007,12.6113074 2.25251338,12.9682159 2.06723854,13.3039916 C1.09591536,15.0642702 0.623056401,16.294106 0.602594545,16.3671202 C-2.4646712,27.332886 7.10834659,22.7021332 8.44418153,22.0109026 C9.88254936,22.7214769 11.5018313,23.1214335 13.2148129,23.1214335 C17.9042678,23.1214335 21.894106,20.1280764 23.3792119,15.9479317 L17.7125077,15.9479317 C16.8740189,17.3644959 15.2597686,18.3239669 13.4052312,18.3239669 C10.6880532,18.3239669 8.48544068,16.2652582 8.48544068,13.72564 L23.9112201,13.72564 C23.9696986,13.270783 24,12.8072045 24,12.3365818 L23.9995527,12.3365818 Z M21.9848985,1.72369924 C22.9136208,2.35052528 23.6585218,3.33493063 22.3792645,6.65008673 C21.1523358,4.6769153 19.3064081,3.12908212 17.1124051,2.27829381 C18.1104517,1.79626615 20.5820874,0.776751388 21.9848985,1.72369924 L21.9848985,1.72369924 Z M2.24759358,21.9887635 C1.4911758,21.213002 1.35744695,19.3235789 3.02659768,15.88062 C3.86899999,18.3026105 5.55000295,20.3320241 7.72276134,21.6200029 C6.64219644,22.2147385 3.77351133,23.553816 2.24759358,21.9887635 L2.24759358,21.9887635 Z M8.46117717,10.7761138 C8.54738531,8.3078325 10.6955447,6.3315303 13.3349005,6.3315303 C15.9741445,6.3315303 18.1224157,8.3078325 18.2086239,10.7761138 L8.46117717,10.7761138 L8.46117717,10.7761138 Z"}}]})(props);
};
GrInternetExplorer.displayName = "GrInternetExplorer";
var GrItalic = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13,19.56l-.13.43H6.3l.16-.43a4.05,4.05,0,0,0,1.3-.17,1.6,1.6,0,0,0,.76-.55,7.22,7.22,0,0,0,.8-2l2.77-9.61a7.07,7.07,0,0,0,.35-1.81.86.86,0,0,0-.15-.52.94.94,0,0,0-.46-.32,4.28,4.28,0,0,0-1.22-.11l.14-.43h6.16l-.13.43a2.6,2.6,0,0,0-1.12.17,1.78,1.78,0,0,0-.81.67,9.08,9.08,0,0,0-.71,1.93L11.4,16.87A8.76,8.76,0,0,0,11,18.56a.83.83,0,0,0,.15.5.92.92,0,0,0,.47.32A6.35,6.35,0,0,0,13,19.56Z"}}]})(props);
};
GrItalic.displayName = "GrItalic";
var GrIteration = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,9 L1,23 L15,23 M5,5 L5,19 L19,19 M9,15 L23,15 L23,1 L9,1 L9,15 L9,15 L9,15 Z"}}]})(props);
};
GrIteration.displayName = "GrIteration";
var GrJava = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,18 L1,9 L17,9 L17,18 C17,22 15,23 9,23 C3,23 1,22 1,18 Z M17,9 L17,12 C17,13.657 18.343,15 20,15 C21.657,15 23,13.657 23,12 C23,10.343 21.657,9 20,9 L17,9 Z M13,6 L13,2 M5,6 L5,4 M9,6 L9,0"}}]})(props);
};
GrJava.displayName = "GrJava";
var GrJs = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"rect","attr":{"width":"24","height":"24"}},{"tag":"path","attr":{"stroke":"#333","strokeWidth":"2","d":"M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"}}]}]})(props);
};
GrJs.displayName = "GrJs";
var GrKeyboard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,6 L22,6 C22.5522847,6 23,6.44771525 23,7 L23,18 C23,18.5522847 22.5522847,19 22,19 L2,19 C1.44771525,19 1,18.5522847 1,18 L1,7 C1,6.44771525 1.44771525,6 2,6 Z M6,16 L18,16 M8,13 L10,13 M3,10 L5,10 M6,10 L8,10 M9,10 L11,10 M12,10 L14,10 M15,10 L17,10 M18,10 L21,10 M3,13 L7,13 M3,16 L5,16 M11,13 L13,13 M14,13 L16,13 M17,13 L21,13 M19,16 L21,16"}}]})(props);
};
GrKeyboard.displayName = "GrKeyboard";
var GrLanguage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"}}]})(props);
};
GrLanguage.displayName = "GrLanguage";
var GrLaunch = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,9 L7,14 C7,14 4,16 4,19 L4,20 L8,20 L10,23 L14,23 L16,20 L20,20 L20,19 C20,16 17,14 17,14 L17,9 C17,5 14,1 12,1 C10,1 7,5 7,9 Z M8,20 L16,20 M12,9 C12.5522847,9 13,8.55228475 13,8 C13,7.44771525 12.5522847,7 12,7 C11.4477153,7 11,7.44771525 11,8 C11,8.55228475 11.4477153,9 12,9 Z"}}]})(props);
};
GrLaunch.displayName = "GrLaunch";
var GrLayer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20"}}]})(props);
};
GrLayer.displayName = "GrLayer";
var GrLicense = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,13 L10,16 L13,16 L13,19 L16,19 L16,21 L18,23 L23,23 L23,19 L12.74,8.74 C12.91,8.19 13,7.6 13,7 C13,3.69 10.31,1 7,1 C3.69,1 1,3.69 1,7 C1,10.31 3.69,13 7,13 C7.88,13 8.72,12.81 9.47,12.47 L10,13 Z M6,7 C5.4475,7 5,6.5525 5,6 C5,5.4475 5.4475,5 6,5 C6.5525,5 7,5.4475 7,6 C7,6.5525 6.5525,7 6,7 Z"}}]})(props);
};
GrLicense.displayName = "GrLicense";
var GrLike = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L20,23 C22,23 23,22 23,20 L23,10 L16,10 L16,4 C16,2 15,1 13,1 L11,1 C11,1 10.9842682,7 10.9842677,8.32575545 C10.9842672,9.65151089 10,11 8,11 L1,11 L1,23 Z M6,23 L6,11"}}]})(props);
};
GrLike.displayName = "GrLike";
var GrLineChart = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,16 L8,9 L13,14 L23,4 M0,22 L23.999,22 M16,4 L23,4 L23,11"}}]})(props);
};
GrLineChart.displayName = "GrLineChart";
var GrLinkBottom = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrLinkBottom.displayName = "GrLinkBottom";
var GrLinkDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,2 L12,22 M3,11 L12,2 L21,11","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrLinkDown.displayName = "GrLinkDown";
var GrLinkNext = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,12 L22,12 M13,3 L22,12 L13,21"}}]})(props);
};
GrLinkNext.displayName = "GrLinkNext";
var GrLinkPrevious = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,12 L22,12 M13,3 L22,12 L13,21","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrLinkPrevious.displayName = "GrLinkPrevious";
var GrLinkTop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2"}}]})(props);
};
GrLinkTop.displayName = "GrLinkTop";
var GrLinkUp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,2 L12,22 M3,11 L12,2 L21,11"}}]})(props);
};
GrLinkUp.displayName = "GrLinkUp";
var GrLink = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16.1251884,2.42026615 C16.9095797,1.63587482 18.1818354,1.63638083 18.9643331,2.41887857 L21.5811214,5.03566688 C22.3647464,5.81929188 22.3723943,7.08215115 21.5797338,7.87481161 L17.8748116,11.5797338 C17.0904203,12.3641252 15.8181646,12.3636192 15.0356669,11.5811214 L12.4188786,8.96433312 C11.6352536,8.18070812 11.6276057,6.91784885 12.4202662,6.12518839 L16.1251884,2.42026615 Z M6.12518839,12.4202662 C6.90957973,11.6358748 8.18183538,11.6363808 8.96433312,12.4188786 L11.5811214,15.0356669 C12.3647464,15.8192919 12.3723943,17.0821512 11.5797338,17.8748116 L7.87481161,21.5797338 C7.09042027,22.3641252 5.81816462,22.3636192 5.03566688,21.5811214 L2.41887857,18.9643331 C1.63525357,18.1807081 1.6276057,16.9178488 2.42026615,16.1251884 L6.12518839,12.4202662 Z M7,17 L17,7"}}]})(props);
};
GrLink.displayName = "GrLink";
var GrLinkedinOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"}}]})(props);
};
GrLinkedinOption.displayName = "GrLinkedinOption";
var GrLinkedin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"}}]})(props);
};
GrLinkedin.displayName = "GrLinkedin";
var GrList = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M9,6 L21,6 M9,12 L21,12 M9,18 L17,18 M4,7 C4.55228475,7 5,6.55228475 5,6 C5,5.44771525 4.55228475,5 4,5 C3.44771525,5 3,5.44771525 3,6 C3,6.55228475 3.44771525,7 4,7 Z M4,13 C4.55228475,13 5,12.5522847 5,12 C5,11.4477153 4.55228475,11 4,11 C3.44771525,11 3,11.4477153 3,12 C3,12.5522847 3.44771525,13 4,13 Z M4,19 C4.55228475,19 5,18.5522847 5,18 C5,17.4477153 4.55228475,17 4,17 C3.44771525,17 3,17.4477153 3,18 C3,18.5522847 3.44771525,19 4,19 Z"}}]})(props);
};
GrList.displayName = "GrList";
var GrLocal = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,4 L23,4 L23,20 L1,20 L1,4 Z M11,8 L23,8 M1,16 L23,16 M1,12 L23,12 M11,4 L11,12"}}]})(props);
};
GrLocal.displayName = "GrLocal";
var GrLocationPin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,10 C14.209139,10 16,8.209139 16,6 C16,3.790861 14.209139,2 12,2 C9.790861,2 8,3.790861 8,6 C8,8.209139 9.790861,10 12,10 Z M12,10 L12,22"}}]})(props);
};
GrLocationPin.displayName = "GrLocationPin";
var GrLocation = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"}}]})(props);
};
GrLocation.displayName = "GrLocation";
var GrLock = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,23 L19,11 L5,11 L5,23 L19,23 Z M12,15 L12,19 M17,11 L17,7 C17,4 17,1 12,1 C7,1 7,4 7,7 L7,11"}}]})(props);
};
GrLock.displayName = "GrLock";
var GrLogin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,15 L9,22 L22,22 L22,2 L9,2 L9,9 M18,12 L0,12 M13,7 L18,12 L13,17"}}]})(props);
};
GrLogin.displayName = "GrLogin";
var GrLogout = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#231F20","strokeWidth":"2","d":"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(props);
};
GrLogout.displayName = "GrLogout";
var GrLounge = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,5.99703014 C5,5.4463856 5.44994876,5 6.00684547,5 L17.9931545,5 C18.5492199,5 19,5.45303631 19,5.99703014 L19,13 L5,13 L5,5.99703014 Z M22,8 L22,15.0029699 C22,15.5536144 21.5446944,16 21.0081969,16 L2.99180311,16 C2.44404538,16 2,15.5469637 2,15.0029699 L2,8 M5,16 L5,18 L5,16 Z M19,16 L19,18 L19,16 Z"}}]})(props);
};
GrLounge.displayName = "GrLounge";
var GrMagic = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2.5,19.5 L19.5,2.5 L21.5,4.5 L4.5,21.5 L2.5,19.5 Z M3,20 L15,8 L16,9 L4,21 L3,20 Z M5.5,3 L5,3.5 L5.5,4 L6,3.5 L5.5,3 Z M11.5,3 L11,3.5 L11.5,4 L12,3.5 L11.5,3 Z M8.5,6 L8,6.5 L8.5,7 L9,6.5 L8.5,6 Z M20.5,12 L20,12.5 L20.5,13 L21,12.5 L20.5,12 Z M20.5,17 L20,17.5 L20.5,18 L21,17.5 L20.5,17 Z"}}]})(props);
};
GrMagic.displayName = "GrMagic";
var GrMailOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(props);
};
GrMailOption.displayName = "GrMailOption";
var GrMail = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"}}]})(props);
};
GrMail.displayName = "GrMail";
var GrMandriva = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.5570931,17.2000288 C11.5359885,19.9198072 8.20256657,21.3464829 5.48168143,21.3477982 L5.47448141,21.3477982 C3.53623738,21.3469582 1.90939399,20.6221567 0.929831949,19.1255136 C-1.43057297,15.5191461 0.857831799,8.79721207 6.0417226,4.11132231 C6.48248351,3.71304149 6.93008445,3.34272071 7.38104539,3 C3.03835634,7.58232954 1.26883266,13.546462 3.44275718,16.8678289 C5.39538971,19.8509662 9.91672716,19.7668791 14.3554206,16.9971815 L13.0316172,15.6656664 C12.8748968,15.5090661 12.6040563,15.4076658 12.3402957,15.4076658 C12.2337355,15.4076658 12.1324553,15.4249459 12.0478551,15.4574659 L7.76936619,17.1139494 C7.66772598,17.1534295 7.57496579,17.1731095 7.49408562,17.1731095 C7.31780525,17.1731095 7.23512508,17.0811893 7.20176501,17.0262292 C7.1495649,16.940789 7.11452483,16.7857487 7.2444851,16.5305082 L9.33848946,12.4490597 C9.48608977,12.1594991 9.43796967,11.7014581 9.23264924,11.4486176 L6.33584321,7.89157019 C6.1409628,7.65300969 6.15512283,7.48608934 6.20168293,7.38816914 C6.235163,7.31748899 6.32816319,7.19892875 6.5736837,7.19892875 C6.6216838,7.19892875 6.67364391,7.20360876 6.72884403,7.21260877 L11.2574135,7.94185029 C11.2922135,7.9476103 11.3294136,7.95037031 11.3676937,7.95037031 C11.6742943,7.95037031 12.0216951,7.77084994 12.1756554,7.53348944 L14.6625406,3.67956142 C14.8154209,3.44304092 14.9649412,3.39336082 15.0633414,3.39336082 C15.1529816,3.39336082 15.368742,3.43704091 15.4313822,3.84156175 L16.1365036,8.3750512 C16.1864237,8.69701187 16.4945844,9.03925258 16.808865,9.12241275 L21.2429943,10.2967352 C21.5752749,10.3851754 21.6415151,10.5556957 21.6513551,10.6492959 C21.6613151,10.7426561 21.6323951,10.9227765 21.3261544,11.0781768 L17.2318659,13.1493811 C16.9415853,13.2957814 16.7119048,13.6941823 16.7297849,14.019503 L16.9825054,18.6005125 C16.9935454,18.7941929 16.9555053,18.9384332 16.8698251,19.0291534 C16.811985,19.0899935 16.7372249,19.1222736 16.6528647,19.1222736 C16.5299844,19.1222736 16.3999042,19.0537534 16.2657439,18.9186332 L14.5570935,17.2000293 L14.5570931,17.2000288 Z M24,11.4025855 C22.7552374,10.7310641 22.576677,10.7632242 21.6445151,11.8272664 C22.3162765,10.5826238 22.2838764,10.4035834 21.2195942,9.47142148 C22.4647168,10.1433029 22.6436372,10.1110228 23.5756791,9.04710059 C22.9040377,10.2918632 22.9364378,10.4706636 24,11.4025855 Z"}}]})(props);
};
GrMandriva.displayName = "GrMandriva";
var GrManual = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,9 L14,17 L14,9 Z M10,9 L10,17 L10,9 Z M8,5 C8,7.209 9.791,9 12,9 C14.209,9 16,7.209 16,5 C16,2.791 14.209,1 12,1 C9.791,1 8,2.791 8,5 Z M4,23 L20,23 L20,20 L4,20 L4,23 Z M7,20 L17,20 L17,17 L7,17 L7,20 Z"}}]})(props);
};
GrManual.displayName = "GrManual";
var GrMapLocation = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z"}}]})(props);
};
GrMapLocation.displayName = "GrMapLocation";
var GrMap = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,15 L19,15 L22,22 L2,22 L5,15 L9,15 M13,8 C13,8.5525 12.5525,9 12,9 C11.4475,9 11,8.5525 11,8 C11,7.4475 11.4475,7 12,7 C12.5525,7 13,7.4475 13,8 M6,8 C6,13 12,18 12,18 C12,18 18,13 18,8 C18,4.58317221 15.3135725,2 12,2 C8.68642746,2 6,4.58317221 6,8 Z"}}]})(props);
};
GrMap.displayName = "GrMap";
var GrMastercard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"circle","attr":{"cx":"7","cy":"12","r":"7"}},{"tag":"circle","attr":{"cx":"17","cy":"12","r":"7","fillOpacity":".8"}}]}]})(props);
};
GrMastercard.displayName = "GrMastercard";
var GrMedium = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.84593838,5.88685595 C2.87575654,5.59224254 2.76340763,5.30104995 2.54341737,5.10276397 L0.302521008,2.4032473 L0.302521008,2 L7.2605042,2 L12.6386555,13.7949836 L17.3669469,2 L24,2 L24,2.4032473 L22.0840336,4.2402628 C21.9188563,4.36617057 21.8369199,4.57310892 21.8711485,4.77792587 L21.8711485,18.2755093 C21.8369199,18.4803262 21.9188563,18.6872645 22.0840336,18.8131723 L23.9551821,20.6501878 L23.9551821,21.0534351 L14.5434174,21.0534351 L14.5434174,20.6501878 L16.4817928,18.7683671 C16.6722689,18.5779447 16.6722689,18.5219382 16.6722689,18.2307041 L16.6722689,7.32062416 L11.2829132,21.0086299 L10.5546219,21.0086299 L4.28011204,7.32062416 L4.28011204,16.4945003 C4.22779746,16.8801958 4.35589372,17.2685069 4.62745097,17.5474239 L7.14845938,20.6053826 L7.14845938,21.0086299 L0,21.0086299 L0,20.6053826 L2.5210084,17.5474239 C2.79058848,17.2680445 2.91121535,16.8771576 2.84593838,16.4945003 L2.84593838,5.88685595 Z"}}]})(props);
};
GrMedium.displayName = "GrMedium";
var GrMenu = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"}}]})(props);
};
GrMenu.displayName = "GrMenu";
var GrMicrofocus = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1,5 L5,5 L5,19 L19,19 L19,23 L1,23 L1,5 Z M5,1 L23,1 L23,19 L19,19 L19,5 L5,5 L5,1 Z"}}]})(props);
};
GrMicrofocus.displayName = "GrMicrofocus";
var GrMicrophone = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,11 C8,14 9.790861,15 12,15 C14.209139,15 16,14 16,11 L16,5 C16,2 14.209139,1 12,1 C9.790861,1 8,2 8,5 L8,11 Z M4,9 L4,11 C4,16 7.581722,19 12,19 C16.418278,19 20,16 20,11 L20,9 M12,24 L12,19"}}]})(props);
};
GrMicrophone.displayName = "GrMicrophone";
var GrMoney = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,16 C16,14.8954305 12.8659932,14 9,14 C5.13400675,14 2,14.8954305 2,16 C2,17.1045695 5.13400675,18 9,18 C12.8659932,18 16,17.1045695 16,16 Z M2,16 L2,20.9367547 C2,22.0762536 5.13400675,23 9,23 C12.8659932,23 16,22.0762537 16,20.9367548 L16,16 M9,5 C4.581722,5 1,5.8954305 1,7 C1,8.1045695 4.581722,9 9,9 M1,7 L1,12.0000002 C1,13.0128881 4.581722,14 9,14 M23,4 C23,2.8954305 19.9004329,2 16.0769231,2 C12.2534133,2 9.15384615,2.8954305 9.15384615,4 C9.15384615,5.1045695 12.2534133,6 16.0769231,6 C19.9004329,6 23,5.1045695 23,4 Z M16,16 C19.8235098,16 23.0000002,15.0128879 23.0000002,14 L23,4 M9.15384615,3.99999999 L9.15384615,14.1660042 M8.99999999,9.00000001 C8.99999999,10.0128879 12.2534135,11 16.0769233,11 C19.9004331,11 23.0000004,10.0128879 23.0000004,9.00000001"}}]})(props);
};
GrMoney.displayName = "GrMoney";
var GrMonitor = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,16 L23,16 L23,2 L1,2 L1,16 Z M5,22 L19,22 L5,22 Z M9,22 L15,22 L15,16 L9,16 L9,22 Z"}}]})(props);
};
GrMonitor.displayName = "GrMonitor";
var GrMonospace = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.88,17H9.58L8.65,14.1H4.44L3.57,17H1.32L5.41,4.17H7.66ZM8,11.93,6.52,7.17,5.09,11.93Z"}},{"tag":"path","attr":{"d":"M14.13,17,12.22,4.17h1.66L15.07,13l1.46-8.82h1.92l1.4,9,1.23-9h1.62L20.78,17H19.06l-1.6-9.6L15.88,17Z"}},{"tag":"polygon","attr":{"points":"11.36 17.95 11.36 19.34 1.89 19.34 1.89 17.95 1.38 17.95 1.38 19.86 1.64 19.86 1.89 19.86 11.36 19.86 11.87 19.86 11.87 19.86 11.87 17.95 11.36 17.95"}},{"tag":"polygon","attr":{"points":"22.17 18 22.17 19.39 12.69 19.39 12.69 18 12.19 18 12.19 19.91 12.45 19.91 12.69 19.91 22.17 19.91 22.67 19.91 22.68 19.91 22.68 18 22.17 18"}}]})(props);
};
GrMonospace.displayName = "GrMonospace";
var GrMoreVertical = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14,14 L10,14 L10,10 L14,10 L14,14 Z M14,7 L10,7 L10,3 L14,3 L14,7 Z M14,21 L10,21 L10,17 L14,17 L14,21 Z"}}]})(props);
};
GrMoreVertical.displayName = "GrMoreVertical";
var GrMore = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,13 L3,11 L5,11 L5,13 L3,13 Z M11,12.9995001 L11,11 L12.9995001,11 L12.9995001,12.9995001 L11,12.9995001 Z M19,12.9995001 L19,11 L20.9995001,11 L20.9995001,12.9995001 L19,12.9995001 Z"}}]})(props);
};
GrMore.displayName = "GrMore";
var GrMultimedia = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M2,8 L2,22 L22,22 L22,9 M11,4 L7,8 M2,4 L2,8 L17,8 L21,4 L2,4 Z M16,4 L12,8"}}]})(props);
};
GrMultimedia.displayName = "GrMultimedia";
var GrMultiple = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,15 L23,15 L23,1 L9,1 L9,5 M15,19 L19,19 L19,5 L5,5 L5,9 M1,23 L15,23 L15,9 L1,9 L1,23 L1,23 L1,23 Z"}}]})(props);
};
GrMultiple.displayName = "GrMultiple";
var GrMusic = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,17.9979131 C1,16.8944962 1.88670635,16 2.99810135,16 L9,16 L9,20.0020869 C9,21.1055038 8.11329365,22 7.00189865,22 L2.99810135,22 C1.89458045,22 1,21.1017394 1,20.0020869 L1,17.9979131 Z M15,17.9979131 C15,16.8944962 15.8867064,16 16.9981014,16 L23,16 L23,20.0020869 C23,21.1055038 22.1132936,22 21.0018986,22 L16.9981014,22 C15.8945804,22 15,21.1017394 15,20.0020869 L15,17.9979131 Z M9,16 L9,2 L23,2 L23,15.5 M9,6 L23,6"}}]})(props);
};
GrMusic.displayName = "GrMusic";
var GrMysql = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"}}]})(props);
};
GrMysql.displayName = "GrMysql";
var GrNavigate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,11 L22,8 L20,5 L12,5 L12,11 L20,11 Z M12,24 L12,0 M4,2 L2,5 L4,8 L12,8 L12,2 L4,2 Z"}}]})(props);
};
GrNavigate.displayName = "GrNavigate";
var GrNetwork = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000000","strokeWidth":"2","d":"M7.5,7 L7.5,15.5142857 C7.5,19.7571429 13,18.3428571 13,22.1142857 L13,24 M11,10 L7.5,7 L4,10 M16.5,2 L16.5,10.440516 C16.5,14.5083612 13,13.1524128 13,16.7682752 L13,24 M13,5 L16.5,2 L20,5"}}]})(props);
};
GrNetwork.displayName = "GrNetwork";
var GrNewWindow = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11,9 L19,9 M15,13 L15,5 M17,17 L17,23 L1,23 L1,7 L1,7 L7,7 M7,1 L23,1 L23,17 L7,17 L7,1 Z"}}]})(props);
};
GrNewWindow.displayName = "GrNewWindow";
var GrNew = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,1 L12,23 M2,6 L22,18 M22.0000001,6 L2.00000008,18"}}]})(props);
};
GrNew.displayName = "GrNew";
var GrNext = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"7 2 17 12 7 22"}}]})(props);
};
GrNext.displayName = "GrNext";
var GrNode = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.8988601,24 C11.5774615,24 11.2582643,23.9156879 10.9764902,23.7534477 L8.04053599,22.0152536 C7.60202502,21.7700221 7.81599724,21.6832885 7.96062661,21.6333176 C8.54530789,21.4285911 8.66396121,21.3823625 9.28804684,21.0279435 C9.35364738,20.9905204 9.43950043,21.0037286 9.50664192,21.043353 L11.7621556,22.3817801 C11.843606,22.4258073 11.9591774,22.4258073 12.034684,22.3817801 L20.8291183,17.3054433 C20.9105686,17.2592148 20.9634012,17.1645563 20.9634012,17.0676964 L20.9634012,6.91942563 C20.9634012,6.81816306 20.9105686,6.72790729 20.8273572,6.677276 L12.0364451,1.60534197 C11.9549948,1.55691204 11.8471281,1.55691204 11.7656778,1.60534197 L2.97652685,6.677276 C2.89133421,6.72570593 2.83718075,6.82036442 2.83718075,6.91722427 L2.83718075,17.0654951 C2.83718075,17.1623549 2.89001339,17.254812 2.97366508,17.3010406 L5.3819532,18.6923003 C6.6895612,19.3461043 7.48865497,18.5756282 7.48865497,17.8007494 L7.48865497,7.78456021 C7.48865497,7.64147179 7.60092434,7.53140378 7.74401276,7.53140378 L8.85790105,7.53140378 C8.99658675,7.53140378 9.11105748,7.64147179 9.11105748,7.78456021 L9.11105748,17.8051521 C9.11105748,19.5486294 8.16006985,20.5502483 6.50684829,20.5502483 C5.99833407,20.5502483 5.59768651,20.5502483 4.4793955,19.9999083 L2.17236995,18.6702867 C1.60221764,18.3400826 1.25,17.7237018 1.25,17.0654951 L1.25,6.91722427 C1.25,6.25681619 1.60221764,5.64043532 2.17236995,5.314634 L10.9756096,0.236095888 C11.5325538,-0.0786986292 12.2722108,-0.0786986292 12.8247522,0.236095888 L21.6169851,5.31683536 C22.184936,5.64483804 22.539355,6.25901755 22.539355,6.91942563 L22.539355,17.0676964 C22.539355,17.7259031 22.184936,18.3400826 21.6169851,18.6702867 L12.8247522,23.7488248 C12.5429781,23.9117255 12.2237809,23.9953771 11.8979796,23.9953771 L11.8988601,24 Z M14.6153387,17.007159 C10.7673609,17.007159 9.9605624,15.2407875 9.9605624,13.7592721 C9.9605624,13.618385 10.0741526,13.5061157 10.2152598,13.5061157 L11.3511617,13.5061157 C11.4766392,13.5061157 11.5823045,13.5974721 11.6021167,13.7214087 C11.7738228,14.8788839 12.2845384,15.4626847 14.6113762,15.4626847 C16.4649216,15.4626847 17.2530085,15.0439859 17.2530085,14.0610786 C17.2530085,13.495329 17.0284698,13.0748692 14.1490906,12.7930951 C11.7408024,12.5553482 10.2526829,12.0248203 10.2526829,10.0986301 C10.2526829,8.32433374 11.7496079,7.26768082 14.2569572,7.26768082 C17.072497,7.26768082 18.4681594,8.24508478 18.6442682,10.3451825 C18.6508723,10.4178273 18.624456,10.4882709 18.576026,10.5411035 C18.5275961,10.5917348 18.4593539,10.6225539 18.3889104,10.6225539 L17.2464044,10.6225539 C17.127531,10.6225539 17.0240671,10.5389022 16.9998521,10.4244314 C16.7246821,9.20707921 16.0598713,8.81743844 14.2525545,8.81743844 C12.2295044,8.81743844 11.9939589,9.52187372 11.9939589,10.0502002 C11.9939589,10.690796 12.2713303,10.8779116 15.001017,11.2389347 C17.7042874,11.5977564 18.9876804,12.1040693 18.9876804,14.0038432 C18.9876804,15.9190266 17.3894929,17.0175054 14.6025708,17.0175054 L14.6153387,17.007159 Z"}}]})(props);
};
GrNode.displayName = "GrNode";
var GrNodes = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,4 C14,5.1048 13.1048,6 12,6 C10.8952,6 10,5.1048 10,4 C10,2.8952 10.8952,2 12,2 C13.1048,2 14,2.8952 14,4 Z M14,20 C14,21.1048 13.1048,22 12,22 C10.8952,22 10,21.1048 10,20 C10,18.8952 10.8952,18 12,18 C13.1048,18 14,18.8952 14,20 Z M7,8 C7,9.1048 6.1048,10 5,10 C3.8952,10 3,9.1048 3,8 C3,6.8952 3.8952,6 5,6 C6.1048,6 7,6.8952 7,8 Z M7,16 C7,17.1048 6.1048,18 5,18 C3.8952,18 3,17.1048 3,16 C3,14.8952 3.8952,14 5,14 C6.1048,14 7,14.8952 7,16 Z M21,8 C21,9.1048 20.1048,10 19,10 C17.8952,10 17,9.1048 17,8 C17,6.8952 17.8952,6 19,6 C20.1048,6 21,6.8952 21,8 Z M21,16 C21,17.1048 20.1048,18 19,18 C17.8952,18 17,17.1048 17,16 C17,14.8952 17.8952,14 19,14 C20.1048,14 21,14.8952 21,16 Z"}}]})(props);
};
GrNodes.displayName = "GrNodes";
var GrNorton = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.9101215,0.816194332 L22.7068826,0.816194332 L22.7068826,1.61295547 L21.9101215,1.61295547 L21.9101215,0.816194332 Z M21.9101215,1.61295547 L20.4331984,1.61295547 L20.4331984,2.4097166 L21.9101215,2.4097166 L21.9101215,1.61295547 Z M20.4331984,2.4097166 L20.4331984,3.96437247 L19.6947368,3.96437247 L19.6947368,2.4097166 L20.4331984,2.4097166 Z M20.4331984,3.96437247 L21.1910931,3.96437247 L21.1910931,4.72226721 L20.4331984,4.72226721 L20.4331984,3.96437247 Z M21.1910931,3.96437247 L21.1910931,3.21619433 L22.0267206,3.21619433 L22.0267206,3.96437247 L21.1910931,3.96437247 Z M20.4331984,4.72226721 L20.4331984,6.33522267 L19.7821862,6.33522267 L19.7821862,6.96680162 L19.0923077,6.96680162 L19.0923077,7.88987854 L18.4995951,7.88987854 L18.4995951,8.67692308 L17.7417004,8.67692308 L17.7417004,7.89959514 L16.9838057,7.89959514 L16.9740891,8.67692308 L17.7417004,8.67692308 L17.7417004,9.50283401 L16.9838057,9.50283401 L16.9935223,10.4064777 L16.3425101,10.4064777 L16.3522267,11.1643725 L15.7497976,11.1643725 L15.740081,12.0194332 C14.6042656,13.6541793 13.8165786,15.3703291 13.1068826,17.0817814 C13.0166656,17.2993424 12.9843157,17.4767392 12.8736842,17.6064777 C12.6350495,17.886327 12.2792569,17.974147 11.9894737,17.9659919 C11.4470717,17.9507255 10.9697158,17.6983044 10.7165992,17.1109312 C9.86728944,15.1400551 9.44710048,13.7603465 7.11174089,11.1740891 C6.73552723,10.7574572 6.82323501,10.2253563 7.12145749,10.0566802 C7.40843204,9.89436507 7.80877956,10.0107768 8.2582996,10.2607287 C9.51609859,10.9601153 10.2158747,11.6755026 11.7076923,13.6615385 C12.2511882,12.3496564 13.19015,10.5765708 14.3603239,8.65748988 L14.9044534,8.65748988 L14.9044534,7.89959514 L15.4194332,7.89959514 L15.4194332,7.151417 L16.1773279,7.151417 L16.1773279,5.9562753 L16.9935223,5.9562753 L16.9838057,6.71417004 L17.7417004,6.71417004 L17.7417004,5.9562753 L16.9935223,5.9562753 L16.9935223,5.27611336 L17.6736842,5.27611336 L17.6736842,4.72226721 L18.9271255,4.72226721 L18.9271255,5.49959514 L19.6947368,5.49959514 L19.6947368,4.72226721 L20.4331984,4.72226721 Z M18.9271255,4.72226721 L18.9271255,3.96437247 L19.6947368,3.96437247 L19.6947368,4.72226721 L18.9271255,4.72226721 Z M18.9271255,3.96437247 L18.1595142,3.96437247 L18.1595142,3.23562753 L18.9271255,3.23562753 L18.9271255,3.96437247 Z M20.4331999,2.41353172 L21.1897089,2.41353172 L21.1897089,3.21168583 L20.4331999,3.21168583 L20.4331999,2.41353172 Z M22.7027248,1.61537762 L23.5216979,1.61537762 L23.5216979,2.41353172 L22.7027248,2.41353172 L22.7027248,1.61537762 Z M16.5465587,4.54360314 L16.5465587,5.28582996 L15.6137652,5.28582996 L15.6137652,6.52955466 L14.6809717,6.52955466 L14.6809717,7.26441847 C13.6908876,6.74537522 12.5637461,6.45182186 11.3676113,6.45182186 C7.42126355,6.45182186 4.21619433,9.64716515 4.21619433,13.5935223 C4.21619433,17.5398576 7.42126355,20.7352227 11.3676113,20.7352227 C15.3139591,20.7352227 18.5093117,17.5398576 18.5093117,13.5935223 C18.5093117,12.3895534 18.2119011,11.2554858 17.6864896,10.2607287 L18.4121457,10.2607287 L18.4121457,9.32793522 L19.0340081,9.32793522 L19.0340081,8.3951417 L19.6558704,8.3951417 L19.6558704,7.61781377 L19.9265337,7.61781377 C21.1151026,9.30906076 21.8129555,11.3700091 21.8129555,13.5935223 C21.8129555,19.3395646 17.1525368,24 11.4064777,24 C5.66041864,24 1,19.3395646 1,13.5935223 C1,7.84746131 5.66041864,3.18704453 11.4064777,3.18704453 C13.2757551,3.18704453 15.0301395,3.68025475 16.5465587,4.54360314 L16.5465587,4.54360314 Z M22.7027248,0 L23.5216979,0 L23.5216979,0.817223514 L22.7027248,0.817223514 L22.7027248,0 Z"}}]})(props);
};
GrNorton.displayName = "GrNorton";
var GrNote = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L16,23 L23,16 L23,1 L1,1 L1,23 Z M15,23 L15,15 L23,15"}}]})(props);
};
GrNote.displayName = "GrNote";
var GrNotes = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23"}}]})(props);
};
GrNotes.displayName = "GrNotes";
var GrNotification = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"}}]})(props);
};
GrNotification.displayName = "GrNotification";
var GrNpm = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"rect","attr":{"width":"24","height":"24"}},{"tag":"path","attr":{"d":"M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z"}}]}]})(props);
};
GrNpm.displayName = "GrNpm";
var GrObjectGroup = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L4,1 L4,4 L1,4 L1,1 Z M20,1 L23,1 L23,4 L20,4 L20,1 Z M4,2 L20,2 M4,22 L20,22 M1,20 L4,20 L4,23 L1,23 L1,20 Z M20,20 L23,20 L23,23 L20,23 L20,20 Z M2,4 L2,20 M22,4 L22,20 M7,7 L14,7 L14,13 L7,13 L7,7 Z M17,10 L17,17 L10,17 L10,15"}}]})(props);
};
GrObjectGroup.displayName = "GrObjectGroup";
var GrObjectUngroup = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,1 L4,1 L4,4 L1,4 L1,1 Z M13,1 L16,1 L16,4 L13,4 L13,1 Z M4,2 L13,2 M15,9 L20,9 M4,15 L13,15 M1,13 L4,13 L4,16 L1,16 L1,13 Z M13,13 L16,13 L16,16 L13,16 L13,13 Z M2,4 L2,13 M15,4 L15,13 M20,8 L23,8 L23,11 L20,11 L20,8 Z M11,22 L20,22 M8,20 L11,20 L11,23 L8,23 L8,20 Z M20,20 L23,20 L23,23 L20,23 L20,20 Z M9,16 L9,20 M22,11 L22,20"}}]})(props);
};
GrObjectUngroup.displayName = "GrObjectUngroup";
var GrOfflineStorage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,21 C15.5230211,21 18.5732537,18.9757518 20.0510587,16.0268945 C20.6582603,14.8152657 21,13.4475416 21,12 C21,10.5673224 20.6652426,9.21283165 20.0696798,8.01047964 C18.5989839,5.04136538 15.5378852,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M20,9 L12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 L20,15"}}]})(props);
};
GrOfflineStorage.displayName = "GrOfflineStorage";
var GrOnedrive = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M21.6924215,13.986674 C22.9997233,14.1908343 24,15.3216239 24,16.6862741 C24,17.7522298 23.3892094,18.6751163 22.4988002,19.1254521 C22.4321553,19.1592575 22.3639409,19.1904067 22.294157,19.2186583 L8.59404885,19.2186583 L8.59404885,19.2181754 C6.85476268,19.2073094 5.44797646,17.7943658 5.44797646,16.0524235 C5.44797646,14.3037201 6.86550796,12.8860679 8.61421133,12.8860679 C8.70222602,12.8860679 8.78903338,12.8906557 8.87511633,12.8976583 C8.87028699,12.8172498 8.86702719,12.7364791 8.86702719,12.6548633 C8.86702719,10.4662072 10.6413261,8.69190834 12.8299821,8.69190834 C14.3676434,8.69190834 15.6998164,9.5683125 16.3568479,10.8482079 C16.9002691,10.4918027 17.5498151,10.283779 18.2483789,10.283779 C20.1559675,10.283779 21.7023216,11.8301331 21.7023216,13.7377217 C21.7023216,13.8215107 21.6982167,13.9043338 21.6924215,13.986674 Z M8.18741857,12.2086324 C6.25507961,12.421727 4.74711875,14.0641849 4.74711875,16.0524235 C4.74711875,16.8619413 4.9992102,17.6150766 5.42841764,18.2378198 L3.27887919,18.2378198 C1.46799809,18.2378198 -1.77635684e-15,16.7698217 -1.77635684e-15,14.9589406 C-1.77635684e-15,13.2281057 1.34134869,11.8115401 3.04103428,11.6894786 C2.98428956,11.4324371 2.95350253,11.1656161 2.95350253,10.8915512 C2.95350253,8.85248384 4.60646427,7.19964283 6.64541087,7.19964283 C7.40977438,7.19964283 8.11980783,7.43181327 8.70886636,7.82963 C9.54542848,6.15252157 11.276867,5 13.2783862,5 C15.9223281,5 18.0967377,7.01021204 18.3569183,9.58557738 C18.3206982,9.58461151 18.2847197,9.58292125 18.2483789,9.58292125 C17.6798451,9.58292125 17.1232638,9.6982217 16.6079734,9.92012979 C15.7386926,8.71545137 14.3462736,7.99105063 12.8299821,7.99105063 C10.4089142,7.99105063 8.41282793,9.84563725 8.18741857,12.2086324 Z"}}]})(props);
};
GrOnedrive.displayName = "GrOnedrive";
var GrOpera = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.124775,0 C5.56831311,0 1,4.75571037 1,11.888501 C1,18.2355851 5.43849706,24 12.1251037,24 C18.8774638,24 23.3506693,18.2369941 23.3506693,11.888501 C23.3506223,4.69859883 18.621683,0 12.124775,0 L12.124775,0 Z M12.1251037,21.3207828 C11.5820274,21.3207828 11.1100117,21.2149198 10.6996164,21.0221213 C9.55884149,20.4469667 8.87181213,19.1728532 8.46982387,17.6127593 C8.03491194,15.803319 7.98578474,13.6079061 7.98578474,11.6864031 C7.98578474,8.2547319 8.23625832,5.15403523 9.63680626,3.60648141 C10.2479843,2.95679061 11.0537456,2.57222701 12.1121409,2.56936204 C12.1165088,2.56936204 12.1208767,2.5689863 12.1250098,2.5689863 C13.5037182,2.5689863 14.4704814,3.24413307 15.1409315,4.30276321 C16.1404305,5.99107632 16.3679843,8.72707632 16.3679843,11.6711389 C16.3680783,15.8502857 16.0902701,21.3207828 12.1251037,21.3207828 L12.1251037,21.3207828 Z"}}]})(props);
};
GrOpera.displayName = "GrOpera";
var GrOptimize = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,22 L6,22 L6,18 L2,18 L2,22 Z M22,2 L12,12 M22,10 L22,2 L14,2 M22,13 L18,13 L18,22 L22,22 L22,13 Z M10,22 L14,22 L14,16 L10,16 L10,22 Z"}}]})(props);
};
GrOptimize.displayName = "GrOptimize";
var GrOracle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.957359,18.9123664 C4.11670252,18.9123664 1,15.803458 1,11.9617373 C1,8.12000773 4.11670252,5 7.957359,5 L16.0437948,5 C19.8855156,5 23,8.12000773 23,11.9617373 C23,15.803458 19.8855156,18.9123664 16.0437948,18.9123664 L7.957359,18.9123664 L7.957359,18.9123664 Z M15.8639176,16.4585488 C18.352201,16.4585488 20.3674397,14.448858 20.3674397,11.9617373 C20.3674397,9.47460595 18.352201,7.45381934 15.8639176,7.45381934 L8.1360824,7.45381934 C5.64895285,7.45381934 3.63255855,9.47460595 3.63255855,11.9617373 C3.63255855,14.448858 5.64895285,16.4585488 8.1360824,16.4585488 L15.8639176,16.4585488 L15.8639176,16.4585488 Z"}}]})(props);
};
GrOracle.displayName = "GrOracle";
var GrOrderedList = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"5.77","y":"6.42","width":"18.06","height":"1.75"}},{"tag":"rect","attr":{"x":"5.77","y":"11.71","width":"18.06","height":"1.75"}},{"tag":"rect","attr":{"x":"5.77","y":"16.99","width":"18.06","height":"1.75"}},{"tag":"path","attr":{"d":"M3.13,4.87V8a2,2,0,0,0,0,.45.3.3,0,0,0,.13.16.62.62,0,0,0,.32.06H3.7v.11h-2V8.71h.1a.79.79,0,0,0,.35-.06.29.29,0,0,0,.14-.16A1.75,1.75,0,0,0,2.3,8V6a1.28,1.28,0,0,0,0-.33.24.24,0,0,0-.1-.11.28.28,0,0,0-.16,0,.91.91,0,0,0-.35.09l-.05-.1L3,4.87Z"}},{"tag":"path","attr":{"d":"M3.65,14.3H1.37v-.06a12.51,12.51,0,0,0,1.27-1.67,1.81,1.81,0,0,0,.22-.84.7.7,0,0,0-.18-.5.6.6,0,0,0-.45-.2.75.75,0,0,0-.68.44l-.11,0a1.58,1.58,0,0,1,.47-.81,1.09,1.09,0,0,1,.72-.26,1.06,1.06,0,0,1,.54.14,1,1,0,0,1,.38.37.9.9,0,0,1,.14.45,1.6,1.6,0,0,1-.21.77,7.28,7.28,0,0,1-1.25,1.47h.83a1.87,1.87,0,0,0,.4,0,.33.33,0,0,0,.15-.09,1.16,1.16,0,0,0,.16-.26h.1Z"}},{"tag":"path","attr":{"d":"M2.09,18v-.1a1.88,1.88,0,0,0,.45-.17.67.67,0,0,0,.22-.25.69.69,0,0,0,.09-.34.55.55,0,0,0-.17-.41.58.58,0,0,0-.43-.17.8.8,0,0,0-.68.42l-.11,0A1.72,1.72,0,0,1,2,16.19a1.16,1.16,0,0,1,.71-.24.93.93,0,0,1,.66.24.76.76,0,0,1,.26.57.78.78,0,0,1-.12.41,1,1,0,0,1-.38.35,1.34,1.34,0,0,1,.51.4,1,1,0,0,1,.17.6,1.38,1.38,0,0,1-.44,1A1.62,1.62,0,0,1,2.2,20a1.24,1.24,0,0,1-.71-.16.34.34,0,0,1-.16-.29.32.32,0,0,1,.31-.32.41.41,0,0,1,.18,0l.32.25a.84.84,0,0,0,.52.23A.47.47,0,0,0,3,19.55a.61.61,0,0,0,.15-.42,1.1,1.1,0,0,0-.27-.72A1.42,1.42,0,0,0,2.09,18Z"}}]})(props);
};
GrOrderedList.displayName = "GrOrderedList";
var GrOrganization = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,3 L20,23 L4,23 L4,3 L20,3 Z M8.042,9 L10.042,9 L10.042,7 L8.042,7 L8.042,9 Z M14,9 L16,9 L16,7 L14,7 L14,9 Z M8.042,15 L10.042,15 L10.042,13 L8.042,13 L8.042,15 Z M10.042,23 L14.042,23 L14.042,19 L10.042,19 L10.042,23 Z M14,15 L16,15 L16,13 L14,13 L14,15 Z M2,3 L22,3 L22,1 L2,1 L2,3 Z"}}]})(props);
};
GrOrganization.displayName = "GrOrganization";
var GrOverview = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18.5,21 C20.9852814,21 23,18.9852814 23,16.5 C23,14.0147186 20.9852814,12 18.5,12 C16.0147186,12 14,14.0147186 14,16.5 C14,18.9852814 16.0147186,21 18.5,21 L18.5,21 Z M10,7 L14,7 M1.5,14.5 C1.5,14.5 5.5,5 6,4 C6.5,3 7.5,3 8,3 C8.5,3 10,3 10,5 L10,16 M5.5,21 C3.01471863,21 1,18.9852814 1,16.5 C1,14.0147186 3.01471863,12 5.5,12 C7.98528137,12 10,14.0147186 10,16.5 C10,18.9852814 7.98528137,21 5.5,21 L5.5,21 L5.5,21 Z M22.5,14.5 C22.5,14.5 18.5,5 18,4 C17.5,3 16.5,3 16,3 C15.5,3 14,3 14,5 L14,16 M10,16 L14,16"}}]})(props);
};
GrOverview.displayName = "GrOverview";
var GrPaint = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,10 L2,10 C2,4.4771525 2,1 12,1 C22,1 22,4.4771525 22,10 L20,10 M12,10 C16.418278,10 20,9.1045695 20,8 C20,6.8954305 16.418278,6 12,6 C7.581722,6 4,6.8954305 4,8 C4,9.1045695 7.581722,10 12,10 Z M4,20 C4,21.6568542 7.581722,23 12,23 C16.418278,23 20,21.6568542 20,20 M20,8 L20,20 L20,8 Z M4,20 L4,8 L4,20 Z M8,13 L8,17 M13,13 L13,17 M7,12 C5.5,12 4,11 4,8 M18,13.5 C18,13.5 18,14 18,12 C18,10 20,11 20,8 M8,13 C8,12.4477153 7.55228475,12 7,12 M13,13 C13,12.4477153 13.4477153,12 14,12 C14.5522847,12 15,12.4477153 15,13 L15,13.5 M15,13.5 C15,14.3284271 15.6715729,15 16.5,15 C17.3284271,15 18,14.3284271 18,13.5 M8,17 C8,18.3807119 9.11928813,19.5 10.5,19.5 C11.8807119,19.5 13,18.3807119 13,17"}}]})(props);
};
GrPaint.displayName = "GrPaint";
var GrPan = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8.5,5.5 L12,2 L15.5,5.5 M22,12 L2,12 M5.5,8.5 L2,12 L5.5,15.5 M18.5,15.5 L22,12 L18.5,8.5 M12,22 L12,2 M8.5,18.5 L12,22 L15.5,18.5"}}]})(props);
};
GrPan.displayName = "GrPan";
var GrPauseFill = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,21 L9,21 L9,3 L3,3 L3,21 Z M4,19 L8,19 L8,5 L4,5 L4,19 Z M5,17 L7,17 L7,7 L5,7 L5,17 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z M16,19 L20,19 L20,5 L16,5 L16,19 Z M17,17 L19,17 L19,7 L17,7 L17,17 Z"}}]})(props);
};
GrPauseFill.displayName = "GrPauseFill";
var GrPause = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z"}}]})(props);
};
GrPause.displayName = "GrPause";
var GrPaypal = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M21.4945038,7.054125 C20.4250038,12.026625 17.0155038,14.658375 11.6050038,14.658375 L9.64300376,14.658375 L8.17975376,24.000375 L11.3620038,24.000375 C11.8217538,24.000375 12.2125038,23.665875 12.2845038,23.212125 L12.3220038,23.014125 L13.0540038,18.377625 L13.1012538,18.121875 C13.1725038,17.668125 13.5640038,17.333625 14.0230038,17.333625 L14.6042538,17.333625 C18.3640038,17.333625 21.3085038,15.805875 22.1687538,11.388375 C22.5137538,9.615375 22.3480038,8.128875 21.4945038,7.054125 M19.3172538,1.80975 C18.2057538,0.543 16.1972538,0 13.6270038,0 L6.16900376,0 C5.64325376,0 5.19625376,0.3825 5.11375376,0.90075 L2.00800376,20.59725 C1.94650376,20.98575 2.24725376,21.3375 2.64100376,21.3375 L7.24525376,21.3375 L8.40175376,14.0025 L8.36575376,14.232 C8.44825376,13.71375 8.89225376,13.33125 9.41725376,13.33125 L11.6050038,13.33125 C15.9040038,13.33125 19.2692538,11.58525 20.2525038,6.53475 C20.2817538,6.38475 20.3290038,6.0975 20.3290038,6.0975 C20.6080038,4.2285 20.3267538,2.96025 19.3172538,1.80975"}}]})(props);
};
GrPaypal.displayName = "GrPaypal";
var GrPerformance = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12,19 L10,22 L7,21 L6.5,17.5 L3,17 L2,14 L5,12 L2,10 L3,7 L6.5,6.5 L7,3 L10,2 L12,5 L14,2 L17,3 L17.5,6.5 L21,7 L22,10 L19,12 L22,14 L21,17 L17.5,17.5 L17,21 L14,22 L12,19 Z M12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 Z"}}]})(props);
};
GrPerformance.displayName = "GrPerformance";
var GrPersonalComputer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,18 L21,18 L21,5 L21,5 C21,4.44771525 20.5522847,4 20,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,18 Z M2,20 L22,20 C23,20 23,19 23,19 L1,19 C1,19 1,20 2,20 Z"}}]})(props);
};
GrPersonalComputer.displayName = "GrPersonalComputer";
var GrPhone = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6.375,2 C5,2 3,3.5 2.5,4.5 C1.78539513,5.92920973 1.9033374,6.49067969 2.375,8 C3,10 4.83244154,13.545116 7.375,16 C11,19.5 14.375,21 15.875,21.5 C17.375,22 19,21.5 20,20.5 C21,19.5 22,18.5 20.875,17 C20.077805,15.9370734 18.9164827,14.7082413 17.5,14 C16.2120164,13.3560082 15.444427,13.5904184 15,14.5 C14.7543142,15.0028302 14.6780041,15.9659877 14.5,16.5 C14.2754227,17.173732 13.375,17 12.375,16.5 C11.4176235,16.0213117 9,14 7,11 C5.76086515,9.14129772 7.74150655,9.12924672 9,8.5 C10,8 10.3099909,6.84998476 9.5,5.5 C8,3 7.5,2 6.375,2 Z"}}]})(props);
};
GrPhone.displayName = "GrPhone";
var GrPieChart = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M10,23 C5.02943725,23 1,18.9705627 1,14 C1,9.02943725 5.02943725,5 10,5 L10,14 C10,14 10.7746374,14.7746374 11.1619561,15.1619561 L16.363961,20.363961 C14.7352814,21.9926407 12.4852814,23 10,23 Z M14,10 L14,1 C18.9705627,1 23,5.02943725 23,10 L14,10 Z M14,13 L22,13 C22,15.2037225 21.2079601,17.2224541 19.8930183,18.7870568 L14,13 Z"}}]})(props);
};
GrPieChart.displayName = "GrPieChart";
var GrPiedPiper = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0,19.4210526 C2.2736843,19.4210526 4.04210525,18.6631579 4.04210525,18.6631579 C4.04210525,18.6631579 7.0736842,11.0842105 11.368421,11.0842105 C14.6526316,11.0842105 15.1578947,13.6105264 15.1578947,13.6105264 C15.1578947,13.6105264 19.9578947,4.26315788 24,3 C20.2105263,6.03157895 20.7157895,9.31578948 18.9473684,10.831579 C17.1789474,12.3473684 17.1789477,10.8381579 15.1578951,14.375 C10.6105267,14.8802632 9.125,16.3894739 6.06315789,18.1578947 C11.3684206,15.6315794 12.3789474,15.3789474 17.1789474,15.631579 C17.6828892,15.6581022 17.9368421,15.8842105 17.6842105,16.3894737 C16.951256,17.8553827 16.4037001,20.0617486 15.4105263,19.9263158 C9.85263157,19.1684211 6.56842104,20.431579 3.78947367,20.431579 C1.0105263,20.431579 0,19.9263158 0,19.4210526 Z"}}]})(props);
};
GrPiedPiper.displayName = "GrPiedPiper";
var GrPin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,3 L10,9 C10,9 6,8 3,11 C3,11 13,21 13,21 C16,18 15,14 15,14 L21,8 L16,3 Z M1,23 L8,16 M14,1 L23,10"}}]})(props);
};
GrPin.displayName = "GrPin";
var GrPinterest = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12,0 C5.37225,0 0,5.37225 0,12 C0,17.0835 3.16275,21.426 7.62675,23.17425 C7.52175,22.22475 7.42725,20.76825 7.66875,19.73175 C7.88625,18.79575 9.07575,13.767 9.07575,13.767 C9.07575,13.767 8.7165,13.0485 8.7165,11.98575 C8.7165,10.317 9.684,9.07125 10.88775,9.07125 C11.9115,9.07125 12.4065,9.84 12.4065,10.76175 C12.4065,11.7915 11.751,13.3305 11.41275,14.757 C11.13,15.95175 12.01125,16.926 13.1895,16.926 C15.3225,16.926 16.962,14.67675 16.962,11.43075 C16.962,8.5575 14.89725,6.54825 11.949,6.54825 C8.535,6.54825 6.531,9.1095 6.531,11.75625 C6.531,12.7875 6.92775,13.89375 7.4235,14.4945 C7.52175,14.61375 7.536,14.71725 7.50675,14.83875 C7.416,15.21825 7.2135,16.03275 7.17375,16.2 C7.12125,16.419 6.99975,16.46625 6.7725,16.3605 C5.27325,15.66225 4.3365,13.4715 4.3365,11.71125 C4.3365,7.926 7.08675,4.44975 12.2655,4.44975 C16.428,4.44975 19.6635,7.416 19.6635,11.3805 C19.6635,15.516 17.05575,18.8445 13.43625,18.8445 C12.2205,18.8445 11.0775,18.21225 10.686,17.466 C10.686,17.466 10.0845,19.75725 9.93825,20.319 C9.6675,21.36075 8.93625,22.66725 8.4465,23.4645 C9.57,23.8125 10.76325,24 12,24 C18.62775,24 24,18.627 24,12 C24,5.37225 18.62775,0 12,0"}}]})(props);
};
GrPinterest.displayName = "GrPinterest";
var GrPlan = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18,4 L18,0 L18,4 Z M7,18 L5,18 L7,18 Z M19,18 L9,18 L19,18 Z M7,14 L5,14 L7,14 Z M19,14 L9,14 L19,14 Z M6,4 L6,0 L6,4 Z M1,9 L23,9 L1,9 Z M1,23 L23,23 L23,4 L1,4 L1,23 Z"}}]})(props);
};
GrPlan.displayName = "GrPlan";
var GrPlayFill = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z"}}]})(props);
};
GrPlayFill.displayName = "GrPlayFill";
var GrPlay = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"3 22 21 12 3 2"}}]})(props);
};
GrPlay.displayName = "GrPlay";
var GrPocket = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M12,2 L2,2 C0.8954305,2 0,2.8954305 0,4 C0,7 0,9 0,12 C0,17.9821415 6,23 12,23 C18,23 24,17.9821415 24,12 C24,9 24,7 24,4 C24,2.8954305 23.1045695,2 22,2 L12,2 Z"}},{"tag":"polyline","attr":{"stroke":"#FFF","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"3","points":"6 9 12.404 15 18 9"}}]}]})(props);
};
GrPocket.displayName = "GrPocket";
var GrPowerCycle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,8 C18.5343681,5.03213345 15.4860999,3 11.9637942,3 C7.01333514,3 3,7.02954545 3,12 M4,16 C5.4656319,18.9678666 8.51390007,21 12.0362058,21 C16.9866649,21 21,16.9704545 21,12 M9,16 L3,16 L3,22 M21,2 L21,8 L15,8"}}]})(props);
};
GrPowerCycle.displayName = "GrPowerCycle";
var GrPowerForceShutdown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,8 L12,16"}}]})(props);
};
GrPowerForceShutdown.displayName = "GrPowerForceShutdown";
var GrPowerReset = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"}}]})(props);
};
GrPowerReset.displayName = "GrPowerReset";
var GrPowerShutdown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12 1L12 9M6.99426725 4.51938959C6.50550683 4.84709741 6.05064133 5.22143661 5.63603897 5.63603897 4.00735931 7.26471863 3 9.51471863 3 12 3 16.9705627 7.02943725 21 12 21 16.9705627 21 21 16.9705627 21 12 21 9.51471863 19.9926407 7.26471863 18.363961 5.63603897 17.9493587 5.22143661 17.4944932 4.84709741 17.0057327 4.51938959"}}]})(props);
};
GrPowerShutdown.displayName = "GrPowerShutdown";
var GrPower = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,4 C19.3637732,5.43018182 22,8.98935065 22,13 C22,18.6008831 17.5273457,23 12,23 C6.47265429,23 2,18.6008831 2,13 C2,8.98935065 4.63622679,5.43018182 8,4 M12,1 L12,11"}}]})(props);
};
GrPower.displayName = "GrPower";
var GrPrevious = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"7 2 17 12 7 22","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
};
GrPrevious.displayName = "GrPrevious";
var GrPrint = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,19 L1,19 L1,7 L23,7 L23,19 L18,19 M3,16 L21,16 M6,16 L6,23 L6,23 L18,23 L18,16 M18,7 L18,1 L6,1 L6,7 L6,7 M17,12 L19,12 L19,11 L17,11 L17,12 Z"}}]})(props);
};
GrPrint.displayName = "GrPrint";
var GrProductHunt = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.59975,8.4 L13.59975,8.4 L10.2,8.4 L10.2,12 L13.59975,12 C14.59425,12 15.39975,11.19375 15.39975,10.2 C15.39975,9.20625 14.59425,8.4 13.59975,8.4 M13.59975,14.4 L13.59975,14.4 L10.2,14.4 L10.2,18 L7.8,18 L7.8,6 L13.59975,6 C15.9195,6 17.79975,7.88025 17.79975,10.2 C17.79975,12.51975 15.9195,14.4 13.59975,14.4 M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.627,24 24,18.62775 24,12 C24,5.37225 18.627,0 12,0"}}]})(props);
};
GrProductHunt.displayName = "GrProductHunt";
var GrProjects = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"}}]})(props);
};
GrProjects.displayName = "GrProjects";
var GrQr = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M13,14 L14,14 L14,15 L13,15 L13,14 Z M14,15 L15,15 L15,16 L14,16 L14,15 Z M14,16 L15,16 L15,17 L14,17 L14,16 Z M16,16 L17,16 L17,17 L16,17 L16,16 Z M16,17 L17,17 L17,18 L16,18 L16,17 Z M13,16 L14,16 L14,17 L13,17 L13,16 Z M15,16 L16,16 L16,17 L15,17 L15,16 Z M15,17 L16,17 L16,18 L15,18 L15,17 Z M18,16 L19,16 L19,17 L18,17 L18,16 Z M18,15 L19,15 L19,16 L18,16 L18,15 Z M19,14 L20,14 L20,15 L19,15 L19,14 Z M17,16 L18,16 L18,17 L17,17 L17,16 Z M17,17 L18,17 L18,18 L17,18 L17,17 Z M16,18 L17,18 L17,19 L16,19 L16,18 Z M15,18 L16,18 L16,19 L15,19 L15,18 Z M17,18 L18,18 L18,19 L17,19 L17,18 Z M18,18 L19,18 L19,19 L18,19 L18,18 Z M16,19 L17,19 L17,20 L16,20 L16,19 Z M14,19 L15,19 L15,20 L14,20 L14,19 Z M15,19 L16,19 L16,20 L15,20 L15,19 Z M13,19 L14,19 L14,20 L13,20 L13,19 Z M13,20 L14,20 L14,21 L13,21 L13,20 Z M14,21 L15,21 L15,22 L14,22 L14,21 Z M15,21 L16,21 L16,22 L15,22 L15,21 Z M17,21 L18,21 L18,22 L17,22 L17,21 Z M18,21 L19,21 L19,22 L18,22 L18,21 Z M17,19 L18,19 L18,20 L17,20 L17,19 Z M18,19 L19,19 L19,20 L18,20 L18,19 Z M19,18 L20,18 L20,19 L19,19 L19,18 Z M19,17 L20,17 L20,18 L19,18 L19,17 Z M19,20 L20,20 L20,21 L19,21 L19,20 Z M19,19 L20,19 L20,20 L19,20 L19,19 Z M20,18 L21,18 L21,19 L20,19 L20,18 Z M20,17 L21,17 L21,18 L20,18 L20,17 Z M21,20 L22,20 L22,21 L21,21 L21,20 Z M21,18 L22,18 L22,19 L21,19 L21,18 Z M21,19 L22,19 L22,20 L21,20 L21,19 Z M19,16 L20,16 L20,17 L19,17 L19,16 Z M13,17 L14,17 L14,18 L13,18 L13,17 Z M12,17 L13,17 L13,18 L12,18 L12,17 Z M12,18 L13,18 L13,19 L12,19 L12,18 Z M14,18 L15,18 L15,19 L14,19 L14,18 Z M11,18 L12,18 L12,19 L11,19 L11,18 Z M13,18 L14,18 L14,19 L13,19 L13,18 Z M11,19 L12,19 L12,20 L11,20 L11,19 Z M11,20 L12,20 L12,21 L11,21 L11,20 Z M11,1 L12,1 L12,2 L11,2 L11,1 Z M12,2 L13,2 L13,3 L12,3 L12,2 Z M11,4 L12,4 L12,5 L11,5 L11,4 Z M12,5 L13,5 L13,6 L12,6 L12,5 Z M11,6 L12,6 L12,7 L11,7 L11,6 Z M12,6 L13,6 L13,7 L12,7 L12,6 Z M12,7 L13,7 L13,8 L12,8 L12,7 Z M12,8 L13,8 L13,9 L12,9 L12,8 Z M11,9 L12,9 L12,10 L11,10 L11,9 Z M12,9 L13,9 L13,10 L12,10 L12,9 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M1,11 L2,11 L2,12 L1,12 L1,11 Z M2,12 L3,12 L3,13 L2,13 L2,12 Z M4,11 L5,11 L5,12 L4,12 L4,11 Z M4,12 L5,12 L5,13 L4,13 L4,12 Z M5,11 L6,11 L6,12 L5,12 L5,11 Z M6,12 L7,12 L7,13 L6,13 L6,12 Z M7,11 L8,11 L8,12 L7,12 L7,11 Z M8,12 L9,12 L9,13 L8,13 L8,12 Z M8,11 L9,11 L9,12 L8,12 L8,11 Z M9,11 L10,11 L10,12 L9,12 L9,11 Z M10,11 L11,11 L11,12 L10,12 L10,11 Z M11,12 L12,12 L12,13 L11,13 L11,12 Z M13,12 L14,12 L14,13 L13,13 L13,12 Z M14,11 L15,11 L15,12 L14,12 L14,11 Z M15,11 L16,11 L16,12 L15,12 L15,11 Z M16,11 L17,11 L17,12 L16,12 L16,11 Z M15,13 L16,13 L16,14 L15,14 L15,13 Z M13,22 L14,22 L14,23 L13,23 L13,22 Z M12,22 L13,22 L13,23 L12,23 L12,22 Z M12,13 L13,13 L13,14 L12,14 L12,13 Z M11,13 L12,13 L12,14 L11,14 L11,13 Z M11,14 L12,14 L12,15 L11,15 L11,14 Z M11,15 L12,15 L12,16 L11,16 L11,15 Z M22,14 L23,14 L23,15 L22,15 L22,14 Z M21,15 L22,15 L22,16 L21,16 L21,15 Z M22,17 L23,17 L23,18 L22,18 L22,17 Z M17,13 L18,13 L18,14 L17,14 L17,13 Z M18,12 L19,12 L19,13 L18,13 L18,12 Z M22,12 L23,12 L23,13 L22,13 L22,12 Z M22,13 L23,13 L23,14 L22,14 L22,13 Z M21,13 L22,13 L22,14 L21,14 L21,13 Z M22,21 L23,21 L23,22 L22,22 L22,21 Z M21,22 L22,22 L22,23 L21,23 L21,22 Z M19,22 L20,22 L20,23 L19,23 L19,22 Z M22,22 L23,22 L23,23 L22,23 L22,22 Z"}},{"tag":"path","attr":{"stroke":"#000","strokeWidth":"2","d":"M15,2 L22,2 L22,9 L15,9 L15,2 Z M2,2 L9,2 L9,9 L2,9 L2,2 Z M2,15 L9,15 L9,22 L2,22 L2,15 Z M18,5 L19,5 L19,6 L18,6 L18,5 Z M5,5 L6,5 L6,6 L5,6 L5,5 Z M5,18 L6,18 L6,19 L5,19 L5,18 Z"}}]}]})(props);
};
GrQr.displayName = "GrQr";
var GrRadialSelected = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z"}}]})(props);
};
GrRadialSelected.displayName = "GrRadialSelected";
var GrRadial = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"11","fill":"none","stroke":"#000","strokeWidth":"2"}}]})(props);
};
GrRadial.displayName = "GrRadial";
var GrRaspberry = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.08672829,0.000264753559 C7.96534395,0.00402127507 7.836217,0.0481047507 7.68796657,0.165057787 C7.32481529,0.0250230129 6.97132662,-0.0244169841 6.65646751,0.260682129 C6.17026232,0.197621263 6.01323276,0.328417777 5.89352494,0.480410812 C5.78679799,0.478115159 5.09388673,0.371256036 4.77657197,0.844591729 C3.97915982,0.750226517 3.7280781,1.31407319 4.01363634,1.83946446 C3.85077722,2.09159662 3.68159462,2.33945747 4.06246416,2.82009742 C3.9277233,3.08780523 4.01160503,3.37809391 4.32898241,3.72952345 C4.24521198,4.10585734 4.41005371,4.37099819 4.70536499,4.57791992 C4.65013021,5.09291119 5.1765302,5.39291118 5.3340328,5.4995616 C5.3945128,5.79964506 5.52094757,6.08354835 6.12342406,6.24011878 C6.22279101,6.6872631 6.58455099,6.76475179 6.93518749,6.85861613 C5.77626582,7.53228566 4.78203284,8.41722473 4.78878066,10.5919375 L4.61991804,10.8950888 C3.29104858,11.703207 2.09522952,14.3014816 3.96480852,16.4126885 C4.08692329,17.0735093 4.29107632,17.5474988 4.47343457,18.072856 C4.74617195,20.1897463 6.52675621,21.1823654 6.99623096,21.2995897 C7.68421005,21.8236175 8.41761523,22.3205844 9.40915603,22.668814 C10.3438551,23.6328278 11.3552638,23.9999583 12.4141375,24 C13.4730105,24.0000348 14.4844191,23.6328278 15.4191182,22.668814 C16.410659,22.3205844 17.1440781,21.8236175 17.8320432,21.2995897 C18.301518,21.1823654 20.0821022,20.1897463 20.3548396,18.072856 C20.5371909,17.5474988 20.741337,17.0735093 20.8634726,16.4126885 C22.7330377,14.3014816 21.5372187,11.703207 20.2083492,10.8950888 L20.0394935,10.5919375 C20.0462414,8.41722473 19.0520014,7.53228566 17.8930867,6.85861613 C18.2437093,6.76475179 18.6054832,6.6872631 18.7048571,6.24011878 C19.3073266,6.08354835 19.4337614,5.79964506 19.4942414,5.4995616 C19.651744,5.39291118 20.1781509,5.09291119 20.1229092,4.57791992 C20.4182135,4.37099819 20.5830553,4.10585734 20.4992918,3.72952345 C20.8166692,3.37809391 20.9005509,3.08780523 20.765817,2.82009742 C21.1466865,2.33945747 20.9775039,2.09159662 20.8146448,1.83946446 C21.1001891,1.31407319 20.8491213,0.750226517 20.0516953,0.844591729 C19.7343944,0.371256036 19.0414832,0.478129073 18.9347562,0.480410812 C18.8150414,0.328417777 18.6580189,0.197621263 18.1718067,0.260682129 C17.8569406,-0.0244169841 17.5034589,0.0250230129 17.1403076,0.165057787 C16.9920572,0.0481047507 16.8629164,0.00404214463 16.7415459,0.000264753559 C16.5099007,-0.00692133296 16.312572,0.133996919 16.0986381,0.201683872 C15.5762243,0.0310751865 15.4578869,0.26317952 15.2014208,0.358337775 C14.6320504,0.237996913 14.45948,0.500981245 14.186193,0.777454341 L13.8667774,0.771332603 C13.0081548,1.27731493 12.5837723,2.30648356 12.4141375,2.30648356 C12.244502,2.30648356 11.8201194,1.27731493 10.9614968,0.771332603 L10.6420812,0.777454341 C10.3687873,0.500981245 10.1962238,0.237996913 9.62685341,0.358337775 C9.37038734,0.26317952 9.25204996,0.0310751865 8.72963608,0.201683872 C8.51569522,0.133996919 8.31836654,-0.00692133296 8.08672829,0.000264753559 L8.08672829,0.000264753559 Z M8.11723959,0.608584717 C8.55334391,0.770163907 8.78002912,0.978497808 9.01650215,1.18435494 C9.09674562,1.07614653 9.21854039,0.995833459 9.06939258,0.734720431 C9.37908995,0.913196942 9.61296124,1.12368739 9.78554558,1.3593184 C9.97706557,1.2373358 9.89847774,1.07156913 9.89947948,0.917836942 C10.2213229,1.17960363 10.4266934,1.45753057 10.676662,1.72960012 C10.7270273,1.6928836 10.7699838,1.56820187 10.8089055,1.3715271 C11.5766551,2.11633401 12.661247,3.99280691 11.0876325,4.73661208 C9.74914906,3.63272346 8.15102046,2.83019829 6.37977187,2.2280627 C8.65689869,3.40221217 9.98173339,4.35076863 10.7071873,5.15979119 C10.3355282,6.64922484 8.39685001,6.7193257 7.68796657,6.67753788 C7.83314917,6.60997615 7.95432482,6.52719354 7.99721177,6.40288051 C7.81933352,6.27641095 7.18837008,6.38981616 6.74801533,6.14246313 C6.91716314,6.10741618 6.99650922,6.0740527 7.07557009,5.94918245 C6.65961881,5.81650767 6.21198753,5.70103637 5.94845364,5.48123813 C6.09067971,5.48297726 6.22252666,5.51436508 6.40825882,5.3856277 C6.03566059,5.1847651 5.63886757,5.02516859 5.32996324,4.71830252 C5.52261714,4.71357209 5.72937191,4.7159373 5.78976843,4.64506426 C5.44871801,4.43378776 5.16123977,4.19811473 4.92306239,3.941113 C5.19265542,3.97365561 5.30546933,3.94744344 5.37065193,3.90041735 C5.11287803,3.63638259 4.78767457,3.41396173 4.63212674,3.08865392 C4.8322937,3.15760001 5.01483282,3.18202435 5.14686064,3.08051479 C5.05925021,2.88290785 4.68341021,2.76718612 4.46732675,2.30536356 C4.67805369,2.32579487 4.90277718,2.35134617 4.94747283,2.30536356 C4.84966414,1.90687315 4.68279804,1.68304708 4.51819283,1.45086622 C4.96919109,1.44418796 5.65184844,1.45239666 5.62089887,1.41425405 L5.34217193,1.12942652 C5.7827006,1.01081085 6.23361536,1.14928711 6.56084316,1.25149232 C6.70777881,1.1355413 6.55701708,0.988174329 6.37774057,0.838483903 C6.75211967,0.888466509 7.09125704,0.974170851 7.39702398,1.09279348 C7.5604118,0.945287375 7.28933008,0.798831731 7.15898574,0.651304714 C7.73737874,0.76107869 7.98362569,0.914003898 8.22711089,1.06838305 C8.40385523,0.899019551 8.23647437,0.756063038 8.11723959,0.608584717 L8.11723959,0.608584717 Z M16.7110277,0.608584717 C16.5917929,0.756063038 16.4244259,0.899019551 16.6011633,1.06838305 C16.8446485,0.914003898 17.0908955,0.76107869 17.6692815,0.651304714 C17.5389511,0.798831731 17.2678624,0.945287375 17.4312433,1.09279348 C17.7370172,0.974170851 18.0761476,0.888466509 18.4505336,0.838483903 C18.271271,0.988174329 18.1204954,1.1355413 18.267438,1.25149232 C18.5946658,1.14928711 19.0455736,1.01081085 19.4861092,1.12942652 L19.2073753,1.41425405 C19.1764258,1.45236188 19.8590762,1.44422275 20.3100883,1.45086622 C20.1454692,1.68304708 19.9786101,1.90687315 19.8808014,2.30536356 C19.925497,2.35134617 20.1502205,2.32579487 20.3609474,2.30536356 C20.144864,2.76718612 19.769024,2.88290785 19.6814205,3.08051479 C19.8134414,3.18202435 19.9959805,3.15760001 20.1961544,3.08865392 C20.0405927,3.41396173 19.7154031,3.63638259 19.4576223,3.90041735 C19.5228049,3.94743648 19.6356188,3.97365561 19.9052118,3.941113 C19.6670414,4.19811473 19.3795562,4.43378776 19.0385127,4.64506426 C19.0989023,4.71589556 19.305664,4.71355122 19.498311,4.71830252 C19.1894136,5.02516859 18.7926206,5.1847651 18.4200223,5.3856277 C18.6057545,5.51436508 18.7376015,5.48299813 18.8798206,5.48123813 C18.6162867,5.70103637 18.1686554,5.81650767 17.7527041,5.94918245 C17.831765,6.0740527 17.911118,6.10741618 18.0802589,6.14246313 C17.6399041,6.38981616 17.0089337,6.27641095 16.8310624,6.40288051 C16.8739494,6.52719354 16.995125,6.60997615 17.1403076,6.67753788 C16.4314312,6.7193257 14.4927461,6.64922484 14.121087,5.15979119 C14.8465339,4.35076863 16.1713755,3.40221217 18.4485023,2.2280627 C16.6772538,2.83019829 15.0791182,3.63272346 13.7406418,4.73661208 C12.1670203,3.99280691 13.2516053,2.11633401 14.0193687,1.3715271 C14.0582835,1.56820187 14.101247,1.6928836 14.1516122,1.72960012 C14.4015878,1.45753057 14.6069513,1.17960363 14.9287947,0.917836942 C14.9297686,1.07156913 14.8512017,1.2373358 15.0427286,1.3593184 C15.2153199,1.12368739 15.4491843,0.913196942 15.7588816,0.734720431 C15.6097269,0.995833459 15.7315216,1.07614653 15.8117721,1.18435494 C16.0482451,0.978497808 16.2749233,0.770163907 16.7110277,0.608584717 L16.7110277,0.608584717 Z M12.4141375,6.77007353 C13.7727322,6.77007353 14.9056504,7.69321086 14.9084539,8.23597257 C14.9120017,8.91685587 13.9141096,9.61605583 12.4324471,9.63369061 C12.4262557,9.63371843 12.4203218,9.63366278 12.4141375,9.63369061 C12.4079462,9.63366278 12.4019907,9.63371843 12.3958272,9.63369061 C10.9141577,9.61605583 9.91632122,8.91685587 9.91982035,8.23597257 C9.92267253,7.69321086 11.0555421,6.77007353 12.4141375,6.77007353 L12.4141375,6.77007353 Z M8.60146217,7.21668915 C8.62928826,7.2159935 8.65689869,7.2159935 8.68487086,7.21668915 C8.90498911,7.2178022 9.13188996,7.23677263 9.36236647,7.27568741 C10.1386029,7.40612218 5.64137887,11.3335235 5.57207105,10.4576627 C5.51003975,8.4547969 6.85024141,7.24467524 8.60146217,7.21668915 L8.60146217,7.21668915 Z M16.1434033,7.21668915 C16.1713755,7.2159935 16.198986,7.2159935 16.226812,7.21668915 C17.9780328,7.24467524 19.3182414,8.4547969 19.2562032,10.4576627 C19.1868953,11.3335235 14.6896643,7.40612218 15.4659077,7.27568741 C15.6963773,7.23677263 15.9232851,7.21785785 16.1434033,7.21668915 L16.1434033,7.21668915 Z M9.31760821,9.71710625 C9.57666211,9.71515843 9.83913166,9.75334277 10.0947908,9.83917233 C11.4583247,10.2968767 12.1474377,11.8915618 11.6349229,13.3995756 C11.1223943,14.9075685 9.60082211,15.7595407 8.23728132,15.3018364 C6.87374054,14.8441251 6.18464145,13.24944 6.6971562,11.74144 C7.11358052,10.5161879 8.19509698,9.72545408 9.31760821,9.71710625 L9.31760821,9.71710625 Z M15.510666,9.71710625 C16.6331842,9.72545408 17.7146937,10.5161879 18.131125,11.74144 C18.6436328,13.24944 17.9545337,14.8441251 16.5909929,15.3018364 C15.2274591,15.7595407 13.70588,14.9075685 13.1933514,13.3995756 C12.6808366,11.8915618 13.3699496,10.2968767 14.7334834,9.83917233 C14.9891426,9.75334277 15.2516191,9.71521408 15.510666,9.71710625 L15.510666,9.71710625 Z M5.32996324,11.3996453 C6.39246752,11.4152557 5.60278409,16.4517006 4.64025891,16.0240902 C3.54755637,15.145252 3.19627293,12.5727583 5.22213716,11.4159235 C5.25074933,11.4082505 5.27710759,11.4032627 5.30351454,11.4016835 C5.31211976,11.4009879 5.32159454,11.399527 5.32996324,11.3996662 L5.32996324,11.3996453 Z M19.498311,11.3996453 C19.5066797,11.3996453 19.5161475,11.4010366 19.5247597,11.4016627 C19.5511736,11.4031931 19.5775318,11.4082714 19.6061371,11.4159166 C21.6319943,12.5727443 21.2807039,15.1452381 20.1880153,16.0240833 C19.2254832,16.4516867 18.4358067,11.4152418 19.498311,11.3996383 L19.498311,11.3996453 Z M12.4141298,14.8822955 C13.1302557,14.8822955 13.8011496,15.1418364 14.2879252,15.5826085 C14.80716,16.0527511 15.1097686,16.7222954 15.1057965,17.3933145 C15.1057965,18.0521743 14.8114591,18.7056142 14.3062348,19.1714925 C13.8097478,19.6292942 13.1160435,19.9007933 12.4141375,19.9100176 C11.7122238,19.9007933 11.0185333,19.6292942 10.5220394,19.1714925 C10.0168151,18.7056142 9.72247776,18.0521743 9.72247776,17.3933145 C9.71851254,16.7222954 10.0211073,16.0527511 10.540349,15.5826085 C11.0271177,15.1418364 11.6980047,14.8822955 12.4141298,14.8822955 L12.4141298,14.8822955 Z M6.14784145,16.1990606 C6.8512988,16.184598 7.71643962,16.739951 8.41631436,17.5520136 C9.19689866,18.4924177 9.55193863,20.1452246 8.90053694,20.6322576 C8.28421002,21.0040767 6.78638054,20.8502124 5.72262408,19.3220385 C5.00519108,18.0397082 5.09887456,16.734998 5.60258931,16.351645 C5.76736147,16.251318 5.9508745,16.2030676 6.14784145,16.1990606 L6.14784145,16.1990606 Z M18.6132954,16.1990606 C18.635591,16.198365 18.6584502,16.198365 18.6804397,16.1990606 C18.8774067,16.2030259 19.0609127,16.251318 19.2256919,16.351645 C19.7294066,16.734998 19.8230831,18.0397082 19.1056571,19.3220385 C18.0418798,20.8502124 16.5440503,21.0040767 15.9277373,20.6322576 C15.2763356,20.1452246 15.6313547,18.4924177 16.4119599,17.5520136 C17.0899563,16.7653284 17.9223389,16.2192554 18.6132954,16.1990606 L18.6132954,16.1990606 Z M12.4141375,20.7034715 C13.5040226,20.691068 15.1237165,21.1498297 15.1037652,21.7349775 C15.1211634,22.1401114 13.7921409,23.3091896 12.4365097,23.2506853 C12.4290036,23.2506853 12.4216366,23.2506296 12.4141375,23.2506853 C12.4066307,23.2506296 12.3992568,23.2506853 12.3917646,23.2506853 C11.0361264,23.3091896 9.70711776,22.1401114 9.72450906,21.7349775 C9.70455776,21.1498297 11.3242516,20.691068 12.4141375,20.7034715 L12.4141375,20.7034715 Z"}}]})(props);
};
GrRaspberry.displayName = "GrRaspberry";
var GrReactjs = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fillRule":"evenodd"},"child":[{"tag":"circle","attr":{"cx":"11.996","cy":"11.653","r":"2.142"}},{"tag":"path","attr":{"fillRule":"nonzero","d":"M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"}}]}]})(props);
};
GrReactjs.displayName = "GrReactjs";
var GrReddit = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.57,15.284 C14.673,15.284 13.91925,14.5565 13.91925,13.6595 C13.91925,12.7625 14.673,12.011 15.57,12.011 C16.467,12.011 17.1945,12.7625 17.1945,13.6595 C17.1945,14.5565 16.467,15.284 15.57,15.284 M15.951,18.437 C15.1155,19.27175 13.827,19.6775 12.012,19.6775 C12.00825,19.6775 12.00375,19.67675 11.99925,19.67675 C11.9955,19.67675 11.991,19.6775 11.9865,19.6775 C10.1715,19.6775 8.88375,19.27175 8.049,18.437 C7.7925,18.1805 7.7925,17.76575 8.049,17.51 C8.30475,17.25425 8.7195,17.25425 8.976,17.51 C9.552,18.086 10.53675,18.3665 11.9865,18.3665 C11.991,18.3665 11.9955,18.36725 11.99925,18.36725 C12.00375,18.36725 12.00825,18.3665 12.012,18.3665 C13.46175,18.3665 14.44725,18.086 15.024,17.51 C15.2805,17.2535 15.69525,17.25425 15.951,17.51 C16.20675,17.7665 16.20675,18.18125 15.951,18.437 M6.8055,13.6595 C6.8055,12.76325 7.55775,12.011 8.454,12.011 C9.351,12.011 10.0785,12.76325 10.0785,13.6595 C10.0785,14.5565 9.351,15.284 8.454,15.284 C7.55775,15.284 6.8055,14.5565 6.8055,13.6595 M19.998,3.311 C20.6055,3.311 21.09975,3.80525 21.09975,4.412 C21.09975,5.0195 20.6055,5.51375 19.998,5.51375 C19.3905,5.51375 18.89625,5.0195 18.89625,4.412 C18.89625,3.80525 19.3905,3.311 19.998,3.311 M24,11.87525 C24,10.2845 22.70625,8.99075 21.1155,8.99075 C20.427,8.99075 19.79475,9.23375 19.29825,9.638 C17.5395,8.5325 15.3075,7.8665 12.915,7.7255 L14.163,3.77975 L17.59275,4.5875 C17.68275,5.83625 18.72675,6.82475 19.998,6.82475 C21.32775,6.82475 22.41,5.7425 22.41,4.412 C22.41,3.08225 21.32775,2 19.998,2 C19.068,2 18.2595,2.5295 17.85675,3.30275 L13.87125,2.3645 C13.5375,2.28575 13.2,2.47775 13.0965,2.80475 L11.547,7.70225 C8.96925,7.76525 6.546,8.4335 4.65825,9.6035 C4.1685,9.22025 3.55275,8.99075 2.8845,8.99075 C1.29375,8.99075 0,10.2845 0,11.87525 C0,12.8585 0.495,13.72775 1.24875,14.24825 C1.21725,14.477 1.20075,14.70725 1.20075,14.9405 C1.20075,16.92875 2.3565,18.77825 4.455,20.14775 C6.4665,21.461 9.129,22.184 11.95125,22.184 C14.7735,22.184 17.436,21.461 19.4475,20.14775 C21.546,18.77825 22.70175,16.92875 22.70175,14.9405 C22.70175,14.72825 22.6875,14.5175 22.66125,14.30825 C23.46525,13.796 24,12.89675 24,11.87525"}}]})(props);
};
GrReddit.displayName = "GrReddit";
var GrRedhat = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd","transform":"translate(0 3)"},"child":[{"tag":"path","attr":{"d":"M5.83245745,3.12541039 C6.47698077,0.721248552 7.36320033,-0.240416184 8.49111613,0.240416184 C10.1829898,0.961664736 10.9080786,0.721248552 11.6331673,0.240416184 C12.1165598,-0.080138728 12.8416485,-0.080138728 13.8084335,0.240416184 L17.1921809,1.68291329 C18.1589659,2.0034682 18.8034892,3.12541039 19.1257509,5.04873986 C19.4480125,6.97206934 19.6897088,8.25428898 19.8508396,8.89539881 C22.267802,9.85706354 23.6374141,11.2995606 23.9596758,13.2228901 C24.4430682,16.1078843 20.5759283,18.9928785 12.5999523,17.5503814 C4.62397623,16.1078843 -0.451644897,11.5399768 0.0317475914,8.89539881 C0.35400925,7.13234679 1.88475213,6.25082078 4.62397623,6.25082078 L5.83245745,3.12541039 Z"}},{"tag":"path","attr":{"d":"M4.88723097,5.53846154 C6.34892389,8.04517453 9.02869424,9.61187015 12.926542,10.2385484 C16.8243898,10.8652266 19.0981343,10.2385484 19.7477756,8.35851365 C20.0254081,9.7752343 20.0254081,10.7152517 19.7477756,11.1785658 C18.8331342,12.7049226 16.3357442,13.1465566 13.6573885,12.8235962 C9.7595407,12.3535875 6.91736002,11.100231 5.13084646,9.06352668 C4.64361549,8.43684843 4.4,7.88850497 4.4,7.41849628 C4.4,6.9484876 4.56241032,6.32180935 4.88723097,5.53846154 Z"}}]}]})(props);
};
GrRedhat.displayName = "GrRedhat";
var GrRedo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.82,4,15.4,5.44,17.94,8H8.23a6,6,0,0,0,0,12h2V18h-2a4,4,0,0,1,0-8h9.71L15.4,12.51l1.41,1.41L21.77,9Z"}}]})(props);
};
GrRedo.displayName = "GrRedo";
var GrRefresh = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"}}]})(props);
};
GrRefresh.displayName = "GrRefresh";
var GrResources = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,3 L21,7.5 L12,12 L3,7.5 L12,3 Z M16.5,10.25 L21,12.5 L12,17 L3,12.5 L7.5,10.25 L7.5,10.25 M16.5,15.25 L21,17.5 L12,22 L3,17.5 L7.5,15.25 L7.5,15.25"}}]})(props);
};
GrResources.displayName = "GrResources";
var GrRestaurant = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,18 L5,18 L19,18 Z M12,18 L12,12 L12,18 Z M15,18 L15,14 L15,18 Z M9,18 L9,14 L9,18 Z M19,22 L19,11.3292943 C20.1651924,10.9174579 21,9.80621883 21,8.5 C21,6.84314575 19.6568542,5.5 18,5.5 C17.6192862,5.5 17.2551359,5.57091725 16.9200387,5.7002623 C16.5495238,3.87433936 14.4600194,2 12,2 C9.53998063,2 7.45047616,3.87433936 7.07996126,5.7002623 C6.74486408,5.57091725 6.38071384,5.5 6,5.5 C4.34314575,5.5 3,6.84314575 3,8.5 C3,9.80621883 3.83480763,10.9174579 5,11.3292943 L5,22 L19,22 Z"}}]})(props);
};
GrRestaurant.displayName = "GrRestaurant";
var GrRestroomMen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7,13.5 L11,8 L10,21 M17,13.5 L13,8 L14,21 M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z M11,8 L13,8 L13,13.5 L11,13.5 L11,8 Z"}}]})(props);
};
GrRestroomMen.displayName = "GrRestroomMen";
var GrRestroomWomen = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7,13.5 L11,8 L12,21 M17,13.5 L13,8 L12,21 M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z M11,8 L13,8 L14.5,16.5 L9.5,16.5 L11,8 Z"}}]})(props);
};
GrRestroomWomen.displayName = "GrRestroomWomen";
var GrRestroom = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M6,11 L18,11 M6,3 L18,3 M12,16 C14.7614237,16 17,13.7614237 17,11 C17,11 7,11 7,11 C7,13.7614237 9.23857625,16 12,16 Z M7,3 L17,3 L17,11 L7,11 L7,3 Z M7,6 L9.5,6 M14.5,15.5 L16,21.5 L8,21.5 L9.5,15.5"}}]})(props);
};
GrRestroom.displayName = "GrRestroom";
var GrResume = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,20 L6,20 L6,4 L1,4 L1,20 Z M11,19.0000002 L22,12 L11,5 L11,19.0000002 Z"}}]})(props);
};
GrResume.displayName = "GrResume";
var GrReturn = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,4 L4,9 L9,14 M18,19 L18,9 L5,9","transform":"matrix(1 0 0 -1 0 23)"}}]})(props);
};
GrReturn.displayName = "GrReturn";
var GrRevert = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,3 L3,8 L8,13 M12,20 L15,20 C18.3137085,20 21,17.3137085 21,14 C21,10.6862915 18.3137085,8 15,8 L4,8"}}]})(props);
};
GrRevert.displayName = "GrRevert";
var GrRewind = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"22 3.5 22 20 13 14 13 20 2 12 13 4 13 10"}}]})(props);
};
GrRewind.displayName = "GrRewind";
var GrRisk = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,10 L15,10 L15,9 L14,9 L14,10 Z M18,10 L19,10 L19,9 L18,9 L18,10 Z M18,6 L19,6 L19,5 L18,5 L18,6 Z M14,6 L15,6 L15,5 L14,5 L14,6 Z M9,19 L10,19 L10,18 L9,18 L9,19 Z M5,15 L6,15 L6,14 L5,14 L5,15 Z M10,10 L1,10 L1,23 L14,23 L14,14 M10,14 L23,14 L23,1 L10,1 L10,14 Z"}}]})(props);
};
GrRisk.displayName = "GrRisk";
var GrRobot = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18.3482396,15.9535197 C18.7664592,15.0561341 19,14.0553403 19,13 C19,9.13400675 15.8659932,6 12,6 C8.13400675,6 5,9.13400675 5,13 C5,14.1167756 5.2615228,15.1724692 5.72666673,16.1091793 L5.72666673,16.1091793 M12,3 C12.5522847,3 13,2.55228475 13,2 C13,1.44771525 12.5522847,1 12,1 C11.4477153,1 11,1.44771525 11,2 C11,2.55228475 11.4477153,3 12,3 Z M12,23 C12.5522847,23 13,22.5522847 13,22 C13,21.4477153 12.5522847,21 12,21 C11.4477153,21 11,21.4477153 11,22 C11,22.5522847 11.4477153,23 12,23 Z M12,6 L12,3 M9,14 C9.55228475,14 10,13.5522847 10,13 C10,12.4477153 9.55228475,12 9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 Z M15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 C14.4477153,12 14,12.4477153 14,13 C14,13.5522847 14.4477153,14 15,14 Z M6,18.9876876 L5,16 C5,16 5.07242747,15.2283988 5.5,15.5 C6.43069361,16.0911921 8.57396448,17 12,17 C15.5536669,17 17.6181635,16.0844828 18.5,15.5 C18.8589052,15.262117 19,16 19,16 L18,18.9876876 C18,18.9876876 17.0049249,20.9999997 12,21 C6.99507512,21.0000003 6,18.9876876 6,18.9876876 Z"}}]})(props);
};
GrRobot.displayName = "GrRobot";
var GrRotateLeft = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.52,3.43A9.09,9.09,0,0,0,5.7,5.55V2.35H4.07v6.5h6.5V7.21H6.3a7.46,7.46,0,1,1-1.47,8.65l-1.46.73A9.11,9.11,0,1,0,11.52,3.43Z"}}]})(props);
};
GrRotateLeft.displayName = "GrRotateLeft";
var GrRotateRight = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.48,3.43A9.09,9.09,0,0,1,18.3,5.55V2.35h1.64v6.5h-6.5V7.21H17.7a7.46,7.46,0,1,0,1.47,8.65l1.46.73A9.11,9.11,0,1,1,12.48,3.43Z"}}]})(props);
};
GrRotateRight.displayName = "GrRotateRight";
var GrRss = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M22,21 C22,10.5065898 13.4934102,2 3,2 M17,21 C17,13.2680135 10.7319865,7 3,7 M12,21 C12,16.0294373 7.97056275,12 3,12 M4,23 C5.65685425,23 7,21.6568542 7,20 C7,18.3431458 5.65685425,17 4,17 C2.34314575,17 1,18.3431458 1,20 C1,21.6568542 2.34314575,23 4,23 Z"}}]})(props);
};
GrRss.displayName = "GrRss";
var GrRun = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15,11 L18,13 M18,5 C18.5522847,5 19,4.55228475 19,4 C19,3.44771525 18.5522847,3 18,3 C17.4477153,3 17,3.44771525 17,4 C17,4.55228475 17.4477153,5 18,5 Z M9.5,9.5 L9.52493781,6 L14.0249378,6 L15,6 L8,17 L4,17 M15,8 L12,13 L12.5,14 L17,7.5 L15,6 M11,13 L16,16.5 L16,21.5"}}]})(props);
};
GrRun.displayName = "GrRun";
var GrSafariOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.5410065,11.8438452 C12.5626839,11.4304258 12.2112,11.0719742 11.7660387,11.0541677 C11.2961032,11.0348129 10.9392,11.3785548 10.9314581,11.8562323 C10.9244903,12.2789419 11.2682323,12.6141677 11.7219097,12.6281032 C12.1717161,12.6420387 12.5162323,12.3114581 12.5410065,11.8438452 M17.2140387,5.12152258 C17.1962323,5.1075871 17.1784258,5.09442581 17.1613935,5.08126452 C17.1079742,5.12616774 17.0522323,5.16874839 17.0019097,5.21674839 C15.0865548,7.0035871 13.1696516,8.78810323 11.2597161,10.5811355 C11.0398452,10.7886194 10.8277161,11.0208774 10.6721032,11.2771355 C9.2708129,13.5842323 7.88345806,15.8998452 6.49300645,18.2131355 C6.43649032,18.3068129 6.3908129,18.4074581 6.33971613,18.5050065 C6.42565161,18.5019097 6.47287742,18.4732645 6.51236129,18.4361032 C8.45171613,16.6237161 10.3949419,14.8152 12.3257806,12.9927484 C12.5773935,12.755071 12.7949419,12.4662968 12.975329,12.1690065 C14.3472,9.91300645 15.7066839,7.64771613 17.0684903,5.38552258 C17.1203613,5.2995871 17.1660387,5.20978065 17.2140387,5.12152258 M17.1443613,4.02836129 C19.1425548,5.42190968 20.3952,7.28461935 21.0339097,9.63507097 C20.8008774,9.69236129 20.5841032,9.72797419 20.3820387,9.80152258 C20.295329,9.83403871 20.2372645,9.94552258 20.1660387,10.0206194 C20.2604903,10.0624258 20.3588129,10.1452645 20.4486194,10.1375226 C20.6545548,10.1181677 20.8573935,10.0546839 21.1043613,9.99971613 C21.5533935,12.4066839 21.1717161,14.6286194 19.9206194,16.7290065 C19.7255226,16.6105548 19.5644903,16.4874581 19.3841032,16.4123613 C19.2648774,16.3620387 19.1177806,16.379071 18.983071,16.3666839 C19.0488774,16.4758452 19.0937806,16.6090065 19.1859097,16.6895226 C19.3337806,16.8188129 19.5126194,16.9140387 19.7185548,17.0502968 C18.3443613,19.0608774 16.5041032,20.3739097 14.1188129,21.011071 C14.0491355,20.7447484 13.9980387,20.4846194 13.9074581,20.2384258 C13.8741677,20.1478452 13.7495226,20.0905548 13.6659097,20.0177806 C13.6395871,20.1184258 13.5792,20.2237161 13.5923613,20.3181677 C13.6272,20.5604903 13.6945548,20.7981677 13.7611355,21.0915871 C11.3309419,21.5452645 9.07339355,21.1868129 6.92732903,19.9024258 C7.09145806,19.6461677 7.25636129,19.4185548 7.38487742,19.1715871 C7.43752258,19.0709419 7.40965161,18.9277161 7.41894194,18.8038452 C7.30590968,18.8642323 7.16036129,18.899071 7.0868129,18.9912 C6.92036129,19.1994581 6.78874839,19.4371355 6.61610323,19.7042323 C4.57842581,18.3075871 3.27545806,16.4293935 2.63442581,14.0247484 C2.94410323,13.9519742 3.20810323,13.9047484 3.45971613,13.8211355 C3.54487742,13.7932645 3.60061935,13.6748129 3.66952258,13.5973935 C3.56965161,13.5641032 3.46590968,13.4928774 3.37145806,13.5052645 C3.11829677,13.5377806 2.86900645,13.6051355 2.57403871,13.6686194 C2.12578065,11.2299097 2.51210323,8.97313548 3.82513548,6.84023226 C4.0148129,6.96023226 4.17894194,7.09029677 4.36474839,7.17390968 C4.50874839,7.23971613 4.67907097,7.24823226 4.83778065,7.28152258 C4.74178065,7.14216774 4.66590968,6.98113548 4.5435871,6.86965161 C4.3988129,6.7388129 4.21455484,6.65132903 4.01945806,6.52668387 C5.44397419,4.53545806 7.3035871,3.22552258 9.7268129,2.63249032 C9.78255484,2.87326452 9.81429677,3.1032 9.89249032,3.31532903 C9.93661935,3.43378065 10.0573935,3.5228129 10.143329,3.62578065 C10.1727484,3.50423226 10.2354581,3.3795871 10.2238452,3.26268387 C10.2013935,3.0435871 10.1363613,2.82913548 10.0782968,2.56513548 C12.4930065,2.14242581 14.7250065,2.53726452 16.8292645,3.82010323 C16.6798452,4.06165161 16.5265548,4.27997419 16.4088774,4.51532903 C16.367071,4.59739355 16.4119742,4.7228129 16.4173935,4.82810323 C16.5064258,4.78861935 16.6248774,4.77236129 16.679071,4.70500645 C16.8385548,4.50371613 16.9724903,4.28307097 17.1443613,4.02836129 M11.8450065,22.4201032 C17.7211355,22.4061677 22.431329,17.6595871 22.4220387,11.7610065 C22.4135226,5.98861935 17.639071,1.25442581 11.8333935,1.26216774 C5.9355871,1.26990968 1.24939355,6.00874839 1.26410323,11.9499097 C1.2788129,17.7021677 6.06100645,22.4340387 11.8450065,22.4201032 M11.8364903,0.000232258065 C18.3420387,-0.00673548387 23.6808774,5.30732903 23.6862968,11.7942968 C23.6917161,18.3532645 18.4217806,23.6502968 11.8604903,23.6828129 C5.32784516,23.7145548 0.000619354838,18.3780387 -0.00015483871,11.8012645 C-0.00015483871,5.30345806 5.3115871,0.0072 11.8364903,0.000232258065"}}]})(props);
};
GrSafariOption.displayName = "GrSafariOption";
var GrSatellite = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,17 C2.97059067,12.7941347 2.97059067,6.11763731 7,2 L22,17 C17.8823627,21.0294093 11.2058653,21.0294093 7,17 Z M7,17 C3.705,17 1,19.9491525 1,23 L13,23 C13,21.8610169 12.63,20.9661017 12,20 M15,9 L19,5 L15,9 Z M20.5,1 C19.119,1 18,2.119 18,3.5 C18,4.881 19.119,6 20.5,6 C21.881,6 23,4.881 23,3.5 C23,2.119 21.881,1 20.5,1 L20.5,1 Z"}}]})(props);
};
GrSatellite.displayName = "GrSatellite";
var GrSave = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,2 L3,21 L21,21 L21,3 L12,3 L12,14 M8,11 L12,15 L16,11"}}]})(props);
};
GrSave.displayName = "GrSave";
var GrScan = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,14 L20,21 L4,21 L4,14 L4,14 M1,12 L23,12 L1,12 Z M4,11 L4,8 L4,11 Z M20,8 L20,11 L20,8 Z M7,3 L4,3 L4,6 M20,6 L20,3 L17,3 M9,3 L15,3 L9,3 Z","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
};
GrScan.displayName = "GrScan";
var GrScheduleNew = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M12,19 L1,19 L1,3 L19,3 L19,13 M19,15 L19,24 M15,17 L23,22 M23,17 L15,22"}}]})(props);
};
GrScheduleNew.displayName = "GrScheduleNew";
var GrSchedulePlay = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M13,19 L1,19 L1,3 L19,3 L19,13 M18,23 C20.7614237,23 23,20.7614237 23,18 C23,15.2385763 20.7614237,13 18,13 C15.2385763,13 13,15.2385763 13,18 C13,20.7614237 15.2385763,23 18,23 Z M17.5,17 L19,18 L17.5,19 L17.5,17 Z"}}]})(props);
};
GrSchedulePlay.displayName = "GrSchedulePlay";
var GrSchedule = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L23,23 L23,4 L1,4 L1,23 Z M18,4 L18,0 L18,4 Z M6,4 L6,0 L6,4 Z M1,8.5 L23,8.5 L1,8.5 Z M6,14 C6.55643465,12.6666667 7.38976798,12 8.5,12 C9.7998158,12 10.5,13 10.5,14 C10.5,15 9.5,16 8.5,17 C8.11410094,17.3858991 7.44743428,18.0525657 6.5,19 L6.5,19.5 L11.9045742,19.5 M16.984409,20.5 L17,12 L16.5,12 C16,13.5 14.5,14 13.7573,14"}}]})(props);
};
GrSchedule.displayName = "GrSchedule";
var GrSchedules = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,7 L23,7 L23,23 L7,23 L7,19 M23,11 L17,11 M13,0 L13,3 M1,7 L17,7 M1,3 L17,3 L17,19 L1,19 L1,3 Z M5,0 L5,3 M4,11 L6,11 M8,11 L14,11 M4,15 L6,15 M8,15 L14,15"}}]})(props);
};
GrSchedules.displayName = "GrSchedules";
var GrSco = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.1601041,16.1052616 L24,16.1052616 C23.7531246,16.8514638 23.0107679,17.4724977 22.2065,17.4724977 L1.27284858,17.4724977 C0.469157559,17.4724977 -0.0563179315,16.8514638 0.00482411239,16.1052616 L14.7072237,16.1052616 C14.4878705,15.5269428 14.3890063,14.8374216 14.5068517,14.1475626 L14.5068517,14.1479472 L15.4658973,14.1479472 C15.4658973,14.3350264 15.4658973,14.4905733 15.4968529,14.6453511 C15.8058317,14.5517154 16.1153874,14.3657897 16.3934106,14.1479472 L17.0117528,14.1479472 C16.4862773,14.7072623 15.9915651,15.1733261 15.7439206,15.3600209 C15.8577181,15.6369483 16.0052874,15.8883615 16.1601041,16.1052616 L16.1601041,16.1052616 L16.1601041,16.1052616 Z M21.7427242,7.71466974 C20.6915809,7.27975369 19.3616453,7 17.8469377,7 C16.3012746,7 14.8167534,7.27975369 13.6414034,7.71466974 L13.6725512,7.77696541 L21.6817744,7.77696541 L21.7427242,7.71466974 L21.7427242,7.71466974 L21.7427242,7.71466974 Z M15.1260976,12.6562543 C15.1570531,12.5939587 15.1882009,12.531663 15.2189642,12.4384118 L4.42700896,12.4695596 L4.39605339,12.3449683 C7.0557323,11.816801 10.3641321,11.5060917 13.9203688,11.5060917 C14.4767998,11.5060917 15.0643787,11.5060917 15.5898542,11.5372396 C15.6208097,11.4126482 15.651573,11.3195893 15.6827209,11.1951902 L7.02554582,11.1951902 L6.99459026,11.101939 C9.31375797,10.6049195 12.2203123,10.2944025 15.3427865,10.2944025 L15.6832977,10.2944025 C15.6525344,10.2321069 15.6215788,10.1077078 15.5906233,10.0142643 L9.71541121,10.0142643 L9.68445565,9.92101308 C11.2301188,9.57915599 13.0547666,9.2994023 15.0651478,9.23710663 C14.9718965,9.11270757 14.8484588,9.01964861 14.7244443,8.92678192 L11.8486533,8.92678192 L11.7869344,8.83333842 C13.2714556,8.36727454 15.0651478,8.08771311 17.0134255,8.08771311 C18.8995999,8.08771311 20.5692776,8.39842237 21.8984441,8.83333842 L21.8676808,8.89563408 L15.3127923,8.92678192 C15.4048899,8.98888531 15.4977566,9.08232882 15.5906233,9.2059588 C15.9615132,9.17500323 16.3320186,9.17500323 16.7036776,9.17500323 C19.0536087,9.17500323 21.2179986,9.4549492 22.9493951,9.82795412 L22.9184395,10.0142643 L16.0232321,10.0142643 C16.0541876,10.1077078 16.0541876,10.2321069 16.0851432,10.3253581 C18.5902366,10.3566982 20.8780642,10.6358751 22.7948096,11.0084955 L22.7640463,11.1951902 L16.1472466,11.1951902 C16.1472466,11.3195893 16.1472466,11.4437961 16.1159065,11.536855 C18.5279409,11.6608695 20.7542419,11.9098599 22.6098453,12.2824803 L22.5786974,12.4380272 L18.4352665,12.4380272 C18.4043109,12.5314707 18.3425921,12.5935741 18.2802964,12.6558698 L17.7857765,12.6558698 C17.816732,12.5935741 17.8786431,12.5314707 17.909791,12.4380272 L15.9615132,12.4380272 C15.9305576,12.5314707 15.9305576,12.5935741 15.8992175,12.6558698 L15.1260976,12.6558698 L15.1260976,12.6562543 L15.1260976,12.6562543 L15.1260976,12.6562543 Z M14.5068517,14.1475626 C14.5378073,13.9920157 14.5689551,13.8374302 14.6308662,13.6814987 L6.83890877,13.6814987 L6.77718992,13.5570997 C9.09616536,13.0906512 11.9719564,12.779942 15.0642441,12.779942 C15.0642441,12.7487942 15.0951997,12.6872676 15.1261552,12.656312 L15.8986984,12.656312 C15.8986984,12.6872676 15.8675506,12.7487942 15.8675506,12.779942 C16.4553217,12.8110898 17.0738562,12.8110898 17.6302872,12.8733855 C17.6920061,12.8110898 17.7535327,12.7176463 17.784296,12.656312 L18.2790082,12.656312 C18.2480526,12.7487942 18.1861415,12.8110898 18.0930825,12.9045333 C19.7016182,12.9974 21.1544147,13.2152426 22.4533947,13.4636562 L22.4224391,13.6814987 L17.4435925,13.6814987 C17.289007,13.8372379 17.1649924,13.9914389 17.0109837,14.1475626 L16.3926415,14.1475626 C16.6095227,14.0231635 16.7950639,13.8374302 16.9498417,13.6814987 L15.5272317,13.6814987 C15.4962761,13.8372379 15.4651283,14.022779 15.4651283,14.1475626 L14.5068517,14.1475626 L14.5068517,14.1475626 L14.5068517,14.1475626 Z"}}]})(props);
};
GrSco.displayName = "GrSco";
var GrScorecard = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,18 L9,12 M12,18 L12,13 M15,18 L15,10 M17,3 L21,3 L21,23 L3,23 L3,3 L7,3 M7,1 L17,1 L17,5 L7,5 L7,1 Z"}}]})(props);
};
GrScorecard.displayName = "GrScorecard";
var GrSearchAdvanced = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,16 L21,22 L15,16 Z M10,18 C13.8659932,18 17,14.8659932 17,11 C17,7.13400675 13.8659932,4 10,4 C6.13400675,4 3,7.13400675 3,11 C3,14.8659932 6.13400675,18 10,18 Z M20,1 L20,7 M17,4 L23,4"}}]})(props);
};
GrSearchAdvanced.displayName = "GrSearchAdvanced";
var GrSearch = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"}}]})(props);
};
GrSearch.displayName = "GrSearch";
var GrSecure = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"}}]})(props);
};
GrSecure.displayName = "GrSecure";
var GrSelect = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,1 L14,1 L8,1 Z M19.188,19.472 L16,22 L12.5,17.5 L9.5,21 L7,7 L20,13.5 L15.5,15 L19.188,19.472 Z M19,4 L19,1 L16,1 M6,1 L3,1 L3,4 M3,14 L3,17 L6,17 M19,6 L19,10 L19,6 Z M3,12 L3,6 L3,12 Z"}}]})(props);
};
GrSelect.displayName = "GrSelect";
var GrSelection = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,18 L8,18 L8,6 L5,6 L5,18 Z M12,2 L12,22 L12,2 Z M1,22 L23,22 L23,2 L1,2 L1,22 Z"}}]})(props);
};
GrSelection.displayName = "GrSelection";
var GrSemantics = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,17 L12,12 L22,17 L22,21 L12,16 L2,21 L2,17 Z M2,8 L12,3 L22,8 L22,12 L12,7 L2,12 L2,8 Z"}}]})(props);
};
GrSemantics.displayName = "GrSemantics";
var GrSend = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M22,3 L2,11 L20.5,19 L22,3 Z M10,20.5 L13,16 M15.5,9.5 L9,14 L9.85884537,20.0119176 C9.93680292,20.5576204 10.0751625,20.5490248 10.1651297,20.009222 L11,15 L15.5,9.5 Z"}}]})(props);
};
GrSend.displayName = "GrSend";
var GrServerCluster = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,8 L23,8 L23,1 L1,1 L1,8 Z M11,5 L12,5 L12,4 L11,4 L11,5 Z M19,5 L20,5 L20,4 L19,4 L19,5 Z M15,5 L16,5 L16,4 L15,4 L15,5 Z M11,12 L12,12 L12,11 L11,11 L11,12 Z M19,12 L20,12 L20,11 L19,11 L19,12 Z M15,12 L16,12 L16,11 L15,11 L15,12 Z M11,19 L12,19 L12,18 L11,18 L11,19 Z M19,19 L20,19 L20,18 L19,18 L19,19 Z M15,19 L16,19 L16,18 L15,18 L15,19 Z M1,15 L23,15 L23,8 L1,8 L1,15 Z M1,22 L23,22 L23,15 L1,15 L1,22 Z M21,23 L3,23"}}]})(props);
};
GrServerCluster.displayName = "GrServerCluster";
var GrServer = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,19 L15,19 L15,18 L14,18 L14,19 Z M5,23 L19,23 L19,1 L5,1 L5,23 Z M8,5 L16,5 L8,5 Z M8,9 L16,9 L8,9 Z M8,13 L16,13 L8,13 Z"}}]})(props);
};
GrServer.displayName = "GrServer";
var GrServers = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,19 L8,19 L8,18 L7,18 L7,19 Z M18,19 L19,19 L19,18 L18,18 L18,19 Z M1,23 L12,23 L12,1 L1,1 L1,23 Z M12,23 L23,23 L23,1 L12,1 L12,23 Z M4,5 L9,5 L4,5 Z M15,5 L20,5 L15,5 Z M4,9 L9,9 L4,9 Z M15,9 L20,9 L15,9 Z M4,13 L9,13 L4,13 Z M15,13 L20,13 L15,13 Z"}}]})(props);
};
GrServers.displayName = "GrServers";
var GrServicePlay = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,13 C10.3137085,13 13,10.3137085 13,7 C13,3.6862915 10.3137085,1 7,1 C3.6862915,1 1,3.6862915 1,7 C1,10.3137085 3.6862915,13 7,13 Z M14.995457,16.6569808 L14.995457,16.6569808 C15.6222982,16.8791083 16.2970312,17 17,17 C20.3137085,17 23,14.3137085 23,11 C23,7.6862915 20.3137085,5 17,5 C15.5133616,5 14.1530044,5.54067366 13.1048383,6.43611087 M4.82356548,12.6921643 C3.69893809,13.7826979 3,15.3097261 3,17 C3,20.3137085 5.6862915,23 9,23 L9,23 C12.3137085,23 15,20.3137085 15,17 C15,14.4351166 13.3906156,12.2461251 11.1265973,11.3877758 M6.5,6 L8,7 L6.5,8 L6.5,6 Z"}}]})(props);
};
GrServicePlay.displayName = "GrServicePlay";
var GrServices = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"}}]})(props);
};
GrServices.displayName = "GrServices";
var GrSettingsOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,9 L12,0 M15,12 L24,12 M0,12 L9,12 M12,24 L12,15 M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M3.5,8.5 L1,7.5 M20.5,15.5 L23,16.5 M3,3 L5.5,5.5 M3,3 L5.5,5.5 M18,18 L20.5,20.5 M20.5,3 L18,5.5 M5.5,18 L3,20.5 M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M20.5,8.5 L23,7.5 M15.5,3.5 L16.5,1 M15.5,20.5 L16.5,23 M8.5,20.5 L7.5,23 M3.5,15.5 L1,16.5 M8.5,3.5 L7.5,1"}}]})(props);
};
GrSettingsOption.displayName = "GrSettingsOption";
var GrShareOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18,8 C19.6568542,8 21,6.65685425 21,5 C21,3.34314575 19.6568542,2 18,2 C16.3431458,2 15,3.34314575 15,5 C15,6.65685425 16.3431458,8 18,8 Z M6,15 C7.65685425,15 9,13.6568542 9,12 C9,10.3431458 7.65685425,9 6,9 C4.34314575,9 3,10.3431458 3,12 C3,13.6568542 4.34314575,15 6,15 Z M18,22 C19.6568542,22 21,20.6568542 21,19 C21,17.3431458 19.6568542,16 18,16 C16.3431458,16 15,17.3431458 15,19 C15,20.6568542 16.3431458,22 18,22 Z M16,18 L8,13 M16,6 L8,11"}}]})(props);
};
GrShareOption.displayName = "GrShareOption";
var GrShare = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,13 L19,23 L1,23 L1,5 L1,5 L11,5 M14,1 L23,1 L23,10 M10,14 L22.9999998,1 L10,14 Z"}}]})(props);
};
GrShare.displayName = "GrShare";
var GrShieldSecurity = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C12,22 2.99999999,18 3,11 L3,5 L12,2 L21,5 C21,5 21,11 21,11 C21,18 12,22 12,22 Z M12,14 C13.6568542,14 15,12.6568542 15,11 C15,9.34314575 13.6568542,8 12,8 C10.3431458,8 9,9.34314575 9,11 C9,12.6568542 10.3431458,14 12,14 Z M12,8 L12,5 M12,17 L12,14 M6,11 L9,11 M15,11 L18,11 M8,7 L10,9 M14,13 L16,15 M16,7 L14,9 M10,13 L8,15"}}]})(props);
};
GrShieldSecurity.displayName = "GrShieldSecurity";
var GrShield = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C12,22 3,18 3,5 C3,5 12,2 12,2 C12,2 21,5 21,5 C21,18 12,22 12,22 Z M4,11 L20,11 M12,2 L12,22"}}]})(props);
};
GrShield.displayName = "GrShield";
var GrShift = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,0 L12,24 M2,12 L12,12 M22,12 L12,12 M6,8 L2,12 L6,16 M18,8 L22,12 L18,16"}}]})(props);
};
GrShift.displayName = "GrShift";
var GrShop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9"}}]})(props);
};
GrShop.displayName = "GrShop";
var GrSidebar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,22 L23,22 L23,2 L1,2 L1,22 Z M16,2 L16,22 L16,2 Z"}}]})(props);
};
GrSidebar.displayName = "GrSidebar";
var GrSign = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,23 C10,23 12.9996892,23 15,23 C18,23 19,21 19,18 L19,6 C19,4.00000008 18,3.99999992 17.5,4 C17,4.00000008 15.9998779,4.00000008 15.9998779,5.99999984 L15.9998779,13 C15.9998777,12 16.0001888,10.9999999 14.5003109,10.9999999 C13.000433,10.9999999 13,13 13,13 C13,12 13,11 11.5,10.9999999 C10,10.9999999 10,12 10,12.9999999 L10,4 C10,3 10.029402,2 8.5,2 C7,2 7,3 7,4 L7,18 L7,14 C7,13 6.44999986,12 5.00000005,12 C5,12 4,12 4,12 C4,12 4.00000001,14.0384045 4,18 C3.99999999,21.9615955 6,23.023861 8,23 Z"}}]})(props);
};
GrSign.displayName = "GrSign";
var GrSkype = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.05175,18.85575 C8.025,18.85575 6.22425,16.8765 6.22425,15.393 C6.22425,14.63175 6.786,14.0985 7.56,14.0985 C9.2835,14.0985 8.83725,16.57275 12.05175,16.57275 C13.69725,16.57275 14.60625,15.67875 14.60625,14.7645 C14.60625,14.21475 14.33475,13.605 13.251,13.338 L9.66975,12.444 C6.786,11.721 6.2625,10.16175 6.2625,8.69625 C6.2625,5.65275 9.1275,4.5105 11.8185,4.5105 C14.2965,4.5105 17.2185,5.88 17.2185,7.7055 C17.2185,8.48775 16.54125,8.943 15.76725,8.943 C14.2965,8.943 14.56725,6.9075 11.6055,6.9075 C10.1355,6.9075 9.32175,7.5735 9.32175,8.526 C9.32175,9.47625 10.48275,9.78 11.49,10.0095 L14.14125,10.59825 C17.0445,11.24475 17.78025,12.93975 17.78025,14.5365 C17.78025,17.00925 15.88275,18.85575 12.05175,18.85575 M23.15025,13.9695 C23.14275,14.0115 23.1375,14.05425 23.12925,14.09625 L23.08875,13.85475 C23.1105,13.89225 23.12925,13.93125 23.15025,13.9695 C23.274,13.29525 23.33925,12.60525 23.33925,11.91525 C23.33925,10.38525 23.03925,8.901 22.44825,7.50375 C21.87675,6.1545 21.06075,4.9425 20.019,3.9015 C18.97875,2.8605 17.766,2.04375 16.41675,1.473 C15.02025,0.882 13.536,0.58275 12.00675,0.58275 C11.28525,0.58275 10.563,0.65025 9.86025,0.78525 C9.85875,0.78525 9.85725,0.78525 9.855,0.786 C9.89475,0.807 9.9345,0.82575 9.9735,0.8475 L9.735,0.81 C9.77475,0.8025 9.81525,0.79425 9.855,0.786 C8.8905,0.27375 7.80675,0 6.70875,0 C4.917,0 3.23175,0.6975 1.965,1.965 C0.69825,3.23175 0,4.917 0,6.7095 C0,7.8495 0.29325,8.97075 0.84375,9.96225 C0.8505,9.921 0.85575,9.879 0.864,9.8385 L0.90525,10.07625 C0.8835,10.03875 0.86475,9.99975 0.84375,9.96225 C0.732,10.6035 0.67275,11.25975 0.67275,11.91525 C0.67275,13.44525 0.97275,14.9295 1.5645,16.32675 C2.1345,17.67675 2.952,18.888 3.99225,19.929 C5.03325,20.96925 6.2445,21.7875 7.59525,22.35675 C8.99175,22.94925 10.47675,23.2485 12.00675,23.2485 C12.672,23.2485 13.3395,23.18775 13.99125,23.07225 C13.953,23.05125 13.914,23.03175 13.87575,23.00925 L14.118,23.052 C14.076,23.0595 14.034,23.06475 13.99125,23.07225 C14.99475,23.64075 16.131,23.94225 17.29125,23.94225 C19.08375,23.94225 20.7675,23.2455 22.035,21.97725 C23.3025,20.71125 24,19.026 24,17.2335 C24,16.089 23.70525,14.964 23.15025,13.9695"}}]})(props);
};
GrSkype.displayName = "GrSkype";
var GrSlack = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M5.04765714 15.1238095C5.04765714 16.5142857 3.92384762 17.6380952 2.53337143 17.6380952 1.14289524 17.6380952.0190857143 16.5142857.0190857143 15.1238095.0190857143 13.7333333 1.14289524 12.6095238 2.53337143 12.6095238L5.04765714 12.6095238 5.04765714 15.1238095zM6.30472381 15.1238095C6.30472381 13.7333333 7.42853333 12.6095238 8.81900952 12.6095238 10.2094857 12.6095238 11.3332952 13.7333333 11.3332952 15.1238095L11.3332952 21.4095238C11.3332952 22.8 10.2094857 23.9238095 8.81900952 23.9238095 7.42853333 23.9238095 6.30472381 22.8 6.30472381 21.4095238L6.30472381 15.1238095z"}},{"tag":"path","attr":{"d":"M8.81904762 5.02857143C7.42857143 5.02857143 6.3047619 3.9047619 6.3047619 2.51428571 6.3047619 1.12380952 7.42857143 0 8.81904762 0 10.2095238 0 11.3333333 1.12380952 11.3333333 2.51428571L11.3333333 5.02857143 8.81904762 5.02857143zM8.81904762 6.3048C10.2095238 6.3048 11.3333333 7.42860952 11.3333333 8.81908571 11.3333333 10.2095619 10.2095238 11.3333714 8.81904762 11.3333714L2.51428571 11.3333714C1.12380952 11.3333714 0 10.2095619 0 8.81908571 0 7.42860952 1.12380952 6.3048 2.51428571 6.3048L8.81904762 6.3048z"}},{"tag":"path","attr":{"d":"M18.895219 8.81902857C18.895219 7.42855238 20.0190286 6.30474286 21.4095048 6.30474286 22.799981 6.30474286 23.9237905 7.42855238 23.9237905 8.81902857 23.9237905 10.2095048 22.799981 11.3333143 21.4095048 11.3333143L18.895219 11.3333143 18.895219 8.81902857zM17.6380571 8.81902857C17.6380571 10.2095048 16.5142476 11.3333143 15.1237714 11.3333143 13.7332952 11.3333143 12.6094857 10.2095048 12.6094857 8.81902857L12.6094857 2.51426667C12.6094857 1.12379048 13.7332952-.0000190476191 15.1237714-.0000190476191 16.5142476-.0000190476191 17.6380571 1.12379048 17.6380571 2.51426667L17.6380571 8.81902857z"}},{"tag":"path","attr":{"d":"M15.1238286 18.8952C16.5143048 18.8952 17.6381143 20.0190095 17.6381143 21.4094857 17.6381143 22.7999619 16.5143048 23.9237714 15.1238286 23.9237714 13.7333524 23.9237714 12.6095429 22.7999619 12.6095429 21.4094857L12.6095429 18.8952 15.1238286 18.8952zM15.1238286 17.6381333C13.7333524 17.6381333 12.6095429 16.5143238 12.6095429 15.1238476 12.6095429 13.7333714 13.7333524 12.6095619 15.1238286 12.6095619L21.4285905 12.6095619C22.8190667 12.6095619 23.9428762 13.7333714 23.9428762 15.1238476 23.9428762 16.5143238 22.8190667 17.6381333 21.4285905 17.6381333L15.1238286 17.6381333z"}}]}]})(props);
};
GrSlack.displayName = "GrSlack";
var GrSnapchat = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.1511006,22.5316101 C12.0830801,22.5316101 12.0181804,22.5291262 11.9688209,22.5267697 C11.9296518,22.5301452 11.8892088,22.5316101 11.8487022,22.5316101 C10.4196979,22.5316101 9.46422593,21.8560541 8.62103883,21.259537 C8.01668787,20.8326253 7.44672931,20.4295973 6.77900716,20.3185226 C6.45106922,20.2641317 6.12485091,20.236554 5.8096509,20.236554 C5.24173041,20.236554 4.79290954,20.3246368 4.46522636,20.3887086 C4.26358497,20.4280051 4.08971226,20.4618243 3.95532713,20.4618243 C3.81457303,20.4618243 3.64356636,20.4306164 3.57229765,20.1872583 C3.51580495,19.9952977 3.47529834,19.809324 3.4361929,19.6302287 C3.33836562,19.1826816 3.26741536,18.9095168 3.09984793,18.8835951 C1.30755787,18.6070547 0.248590282,18.1996958 0.0376502063,17.7063558 C0.0155499024,17.6545125 0.00319411295,17.6023507 0.00045545858,17.5507621 C-0.00776050453,17.4037027 0.096053603,17.2747312 0.241011216,17.2507202 C1.66434721,17.0163423 2.92992398,16.2640403 4.00277591,15.0140038 C4.83386197,14.0462398 5.24198516,13.1215937 5.28580363,13.0194992 C5.28771432,13.0149135 5.28994346,13.0100731 5.29223629,13.0056785 C5.49903654,12.5860912 5.54018004,12.2235061 5.41490253,11.9283046 C5.18396391,11.3836946 4.41911506,11.141037 3.9131009,10.9804755 C3.78725018,10.9406695 3.66821425,10.9029652 3.57338038,10.8653246 C3.12481427,10.68814 2.38709721,10.3137724 2.48537032,9.79705834 C2.55695747,9.42027045 3.05532887,9.15786915 3.45810214,9.15786915 C3.56994114,9.15786915 3.66904221,9.17748555 3.75247564,9.21665468 C4.20760178,9.42988758 4.61706245,9.5379689 4.96920245,9.5379689 C5.40713239,9.5379689 5.61864568,9.37122943 5.66978845,9.32384434 C5.65717791,9.09023075 5.64176501,8.84324234 5.62686164,8.60962875 C5.62686164,8.609374 5.62654319,8.60657165 5.62654319,8.60657165 C5.52374812,6.97134023 5.39554088,4.93632897 5.91607628,3.76934376 C7.47405217,0.276158264 10.7780794,0.00452196419 11.7532952,0.00452196419 C11.7792805,0.00452196419 12.1783598,0.000573206729 12.1783598,0.000573206729 C12.196384,0.000254758546 12.2159367,0 12.23619,0 C13.2140807,0 16.5249864,0.271954748 18.0839176,3.767242 C18.604453,4.93499149 18.4761184,6.97172237 18.3730049,8.60867341 L18.3681645,8.68701166 C18.3540254,8.90928849 18.340969,9.11965536 18.3299507,9.32358958 C18.3781001,9.36791757 18.5716529,9.52077269 18.9654459,9.53624928 C19.301154,9.52338397 19.6869221,9.41581217 20.111732,9.21690944 C20.24306,9.15525787 20.3884635,9.14245625 20.4871824,9.14245625 C20.6364072,9.14245625 20.7882433,9.17149873 20.9147946,9.22429744 L20.9215457,9.22690871 C21.2820291,9.35486119 21.5181265,9.61057508 21.5232217,9.87921797 C21.5277437,10.1296456 21.3416426,10.5039496 20.4262951,10.865452 C20.332544,10.902583 20.2129348,10.9405421 20.0865746,10.9806029 C19.5801146,11.1413555 18.8159026,11.3838856 18.584964,11.9281773 C18.4594954,12.2233787 18.5007663,12.5858365 18.7076303,13.0052964 C18.7099231,13.0098821 18.7118975,13.0145314 18.7141266,13.0193718 C18.7778162,13.1686603 20.3194239,16.683755 23.758919,17.2504017 C23.9038129,17.2745401 24.0078181,17.403639 23.9995385,17.5504436 C23.9964814,17.6031786 23.9837434,17.6559137 23.9614521,17.7074386 C23.7519768,18.1980398 22.693073,18.6048256 20.9002734,18.8817481 C20.7320054,18.9077335 20.6611188,19.1796882 20.5641832,19.6248788 C20.5240587,19.8087507 20.4832336,19.9889924 20.4275052,20.1784054 C20.3753434,20.3565453 20.2593009,20.443609 20.072945,20.443609 L20.0448579,20.443609 C19.9235291,20.443609 19.7516308,20.4215724 19.5348313,20.3791551 C19.1558779,20.3054025 18.730877,20.2367451 18.1904067,20.2367451 C17.8752704,20.2367451 17.5491158,20.2643864 17.2207957,20.3187137 C16.5537741,20.4297884 15.9838793,20.8321795 15.380611,21.2586453 C14.535768,21.8559904 13.5799776,22.5316101 12.1511006,22.5316101"}}]})(props);
};
GrSnapchat.displayName = "GrSnapchat";
var GrSolaris = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.1802464,4.7643196 C9.30783675,4.45498283 8.90876565,3.63737375 8.90876565,3.63737375 C8.84089823,3.54283936 8.5558284,2.85816509 8.5562284,2.85789842 C8.25689174,2.06482294 7.71088568,1.82242025 7.71088568,1.82242025 C7.03954488,1.42788253 6.21046901,1.41801576 6.21046901,1.41801576 C6.24620274,1.4132157 6.70394115,1.62521806 6.70394115,1.62521806 C7.78395316,2.13989044 7.46048289,3.3691041 7.46048289,3.3691041 C7.39021545,3.70004111 7.37381526,4.33911488 7.37381526,4.33911488 C7.35914843,5.19085768 7.96582184,5.60659563 8.03302259,5.65099612 C8.3674263,5.44779386 8.7239636,5.26739186 9.09756775,5.1147235 C9.45570506,4.96832187 9.81744242,4.85138724 10.1802464,4.7643196 M5.59699552,8.17022411 C4.76098623,8.56862854 3.90111001,8.27249192 3.90111001,8.27249192 C3.78604207,8.25382504 3.10043445,7.97115524 3.10043445,7.97115524 C2.32802587,7.62208469 1.77081968,7.83648707 1.77081968,7.83648707 C1.0168113,8.03182258 0.423738042,8.61142902 0.423738042,8.61142902 C0.445338282,8.58276203 0.919076879,8.40889343 0.919076879,8.40889343 C2.04668941,8.00915566 2.68682985,9.10716786 2.68682985,9.10716786 C2.87149857,9.39063767 3.31177013,9.85410949 3.31177013,9.85410949 C3.9033767,10.4670496 4.62685141,10.3319815 4.70538562,10.3161146 C4.79818665,9.93531039 4.9228547,9.55610618 5.0791231,9.18383538 C5.2288581,8.82703141 5.40166002,8.48876099 5.59699552,8.17022411 M4.76458627,13.8196202 C4.45511617,14.6924299 3.63764042,15.0916344 3.63764042,15.0916344 C3.54310603,15.1592351 2.85843176,15.4444383 2.85816509,15.4443049 C2.06508961,15.7436416 1.82268692,16.2895143 1.82268692,16.2895143 C1.42788253,16.9605885 1.41854909,17.7897977 1.41854909,17.7897977 C1.41361571,17.7540639 1.62535139,17.2963255 1.62535139,17.2963255 C2.14002378,16.2163135 3.36950411,16.5401838 3.36950411,16.5401838 C3.70004111,16.6097846 4.33898154,16.6264514 4.33898154,16.6264514 C5.19085768,16.6415182 5.6068623,16.0343115 5.65099612,15.9676441 C5.4479272,15.6325737 5.26765853,15.2763031 5.1151235,14.9026989 C4.96832187,14.5444283 4.8512539,14.1826909 4.76458627,13.8196202 M8.17075745,18.4032711 C8.56889521,19.2391471 8.27315859,20.0994233 8.27315859,20.0994233 C8.25435838,20.2138246 7.97155524,20.9000989 7.97128857,20.8999656 C7.62195136,21.6722408 7.83675374,22.2297137 7.83675374,22.2297137 C8.03195591,22.9835887 8.61169569,23.5767953 8.61169569,23.5767953 C8.5830287,23.5549284 8.40902677,23.0813231 8.40902677,23.0813231 C8.00942233,21.9535773 9.1077012,21.3135702 9.1077012,21.3135702 C9.39103768,21.1287681 9.85464283,20.6884965 9.85464283,20.6884965 C10.4673163,20.09689 10.3325148,19.3735486 10.3163813,19.2951477 C9.9357104,19.2019467 9.55610618,19.077412 9.18370204,18.9211436 C8.82703141,18.7716752 8.48876099,18.5984733 8.17075745,18.4032711 M13.8200202,19.2359471 C14.6929633,19.5448838 15.0917677,20.3626263 15.0917677,20.3626263 C15.1596351,20.4571606 15.4445716,21.1421016 15.4441716,21.1423682 C15.7435083,21.9353104 16.289781,22.1777131 16.289781,22.1777131 C16.9609885,22.5727841 17.7900643,22.5822509 17.7900643,22.5822509 C17.7545973,22.5869176 17.2967255,22.3749153 17.2967255,22.3749153 C16.2163135,21.8602429 16.5403171,20.6311626 16.5403171,20.6311626 C16.6103179,20.3000922 16.6264514,19.6612851 16.6264514,19.6612851 C16.6416516,18.8092757 16.0344448,18.393271 15.9680441,18.3492705 C15.6328404,18.5524728 15.2767031,18.7326081 14.9026989,18.8852765 C14.5448283,19.0319448 14.1833576,19.1488794 13.8200202,19.2359471 M18.4035378,15.8299092 C19.2394138,15.4312381 20.09969,15.7275081 20.09969,15.7275081 C20.2146246,15.7463083 20.9002322,16.0291114 20.8999656,16.0293781 C21.6726408,16.3783153 22.2299803,16.1636463 22.2299803,16.1636463 C22.984122,15.9681774 23.5769286,15.3887043 23.5769286,15.3887043 C23.5551951,15.4175046 23.0818565,15.5911066 23.0818565,15.5911066 C21.9538439,15.990711 21.3135702,14.8928321 21.3135702,14.8928321 C21.1287681,14.6093623 20.6887632,14.1460238 20.6887632,14.1460238 C20.0970233,13.532817 19.3736819,13.6680185 19.2952811,13.6838854 C19.2023467,14.0645563 19.0775453,14.4441605 18.9214102,14.816298 C18.7720752,15.1731019 18.5988733,15.5113723 18.4035378,15.8299092 M19.2364804,10.1802464 C19.5455505,9.30757008 20.3628929,8.90849898 20.3628929,8.90849898 C20.4574273,8.84063156 21.1426349,8.55542839 21.1429016,8.55596173 C21.9351771,8.25662507 22.1777131,7.71101901 22.1777131,7.71101901 C22.5726508,7.03927821 22.5826509,6.21046901 22.5826509,6.21046901 C22.587051,6.24593607 22.3753153,6.70367449 22.3753153,6.70367449 C21.8606429,7.78368649 20.6312959,7.46021622 20.6312959,7.46021622 C20.3003589,7.39034878 19.6615518,7.37368193 19.6615518,7.37368193 C18.809409,7.35848176 18.393671,7.96582184 18.3492705,8.03235592 C18.5527395,8.36729297 18.7330081,8.72383026 18.8854098,9.09756775 C19.0323448,9.45557173 19.1488794,9.81730908 19.2364804,10.1802464 M15.8303092,5.59659552 C15.4316381,4.76111957 15.7273747,3.90084334 15.7273747,3.90084334 C15.7464416,3.78604207 16.0289781,3.09990111 16.0296448,3.10030111 C16.378582,2.32789253 16.1639129,1.77055301 16.1639129,1.77055301 C15.9681774,1.01641129 15.3892377,0.423471372 15.3892377,0.423471372 C15.417638,0.445338282 15.5916399,0.918810209 15.5916399,0.918810209 C15.9909777,2.04642274 14.8928321,2.68669652 14.8928321,2.68669652 C14.609629,2.87163191 14.1464238,3.31150346 14.1464238,3.31150346 C13.5330837,3.9029767 13.6684185,4.62658474 13.6844187,4.70525228 C14.0649563,4.79791998 14.4445605,4.92298803 14.8164313,5.07885643 C15.1732353,5.22819142 15.511639,5.40139335 15.8301759,5.59659552 M7.58741764,5.98366649 C6.66234069,6.02633363 5.98473316,5.41926021 5.98473316,5.41926021 C5.88633207,5.35752619 5.36419294,4.83058701 5.36432627,4.830187 C4.78831987,4.2085801 4.19124657,4.19017989 4.19124657,4.19017989 C3.42070467,4.07711197 2.64896277,4.38084868 2.64896277,4.38084868 C2.68016311,4.36271514 3.18416871,4.38658207 3.18416871,4.38658207 C4.37844865,4.45618285 4.5417838,5.71699686 4.5417838,5.71699686 C4.60205113,6.04966722 4.82752031,6.6478072 4.82752031,6.6478072 C5.13472372,7.44248269 5.85366504,7.5987511 5.93233258,7.61448461 C6.16580184,7.30021445 6.42793809,6.99874443 6.71660796,6.71660796 C6.99314437,6.44580495 7.2839476,6.20113557 7.58741764,5.98366649 M4.6256514,10.8662541 C4.00151113,11.5502617 3.0933677,11.6003956 3.0933677,11.6003956 C2.97989978,11.6261292 2.23829154,11.6227958 2.23829154,11.6223958 C1.39108212,11.5899954 0.955743953,11.9990667 0.955743953,11.9990667 C0.331337015,12.4642718 0,13.2248136 0,13.2248136 C0.00946677185,13.1897466 0.382670919,12.8502761 0.382670919,12.8502761 C1.27641418,12.0552006 2.2833587,12.8309426 2.2833587,12.8309426 C2.56109512,13.0237447 3.14363493,13.2873476 3.14363493,13.2873476 C3.92271025,13.6320181 4.5417838,13.234147 4.60845121,13.1896132 C4.5513839,12.8021422 4.52338359,12.4037378 4.52805031,12.0002667 C4.53218369,11.612929 4.56498406,11.2343915 4.6256514,10.8662541 M5.98393315,16.4127157 C6.02646696,17.3377926 5.41952688,18.0155335 5.41952688,18.0155335 C5.35752619,18.1140679 4.83058701,18.6360737 4.83032034,18.6359404 C4.2085801,19.2119468 4.19004656,19.8090201 4.19004656,19.8090201 C4.07711197,20.5794287 4.38084868,21.3513039 4.38084868,21.3513039 C4.36284848,21.3201036 4.38658207,20.8162313 4.38658207,20.8162313 C4.45631618,19.6216847 5.71673019,19.4584829 5.71673019,19.4584829 C6.04966722,19.3982155 6.6478072,19.1728797 6.6478072,19.1728797 C7.44248269,18.8658096 7.59901777,18.1466016 7.61461794,18.0680674 C7.30021445,17.8343315 6.9990111,17.5721952 6.7167413,17.2836587 C6.44580495,17.007389 6.2012689,16.7163191 5.98393315,16.4127157 M10.8663874,19.3746153 C11.550395,19.9987555 11.6002622,20.906899 11.6002622,20.906899 C11.6262625,21.0203669 11.6227958,21.7622418 11.6225291,21.7622418 C11.5902621,22.6090512 11.9993333,23.0446561 11.9993333,23.0446561 C12.4644052,23.6693297 13.2248136,24 13.2248136,24 C13.1900132,23.9905332 12.8504094,23.6175958 12.8504094,23.6175958 C12.0552006,22.7237192 12.8310759,21.7170413 12.8310759,21.7170413 C13.023878,21.4391715 13.2873476,20.8566317 13.2873476,20.8566317 C13.6320181,20.0775564 13.2340137,19.4584829 13.1900132,19.3916821 C12.8022756,19.4491494 12.4038712,19.4767497 12.0001333,19.4722164 C11.6131957,19.4679496 11.2345248,19.4354159 10.8663874,19.3746153 M16.4129824,18.0166002 C17.3380593,17.9740664 18.0155335,18.5810065 18.0155335,18.5810065 C18.1140679,18.6427405 18.6363404,19.1696797 18.6359404,19.1699463 C19.2119468,19.7916866 19.8092868,19.8104868 19.8092868,19.8104868 C20.5798287,19.923288 21.3514372,19.6195513 21.3514372,19.6195513 C21.3202369,19.6372849 20.8162313,19.6136846 20.8162313,19.6136846 C19.621818,19.5439505 19.4584829,18.2834031 19.4584829,18.2834031 C19.3983489,17.9505995 19.1727464,17.3525928 19.1727464,17.3525928 C18.8656763,16.557784 18.1466016,16.4012489 18.0682008,16.3855154 C17.8345982,16.7001856 17.5723286,17.0013889 17.2836587,17.2835254 C17.007389,17.5544617 16.7164524,17.7989978 16.4129824,18.0166002 M19.3748819,13.1341459 C19.9988889,12.4497383 20.9070323,12.3998711 20.9070323,12.3998711 C21.0206336,12.3740042 21.7625085,12.3772042 21.7625085,12.3780042 C22.6093179,12.4098712 23.0446561,12.0008 23.0446561,12.0008 C23.669463,11.5355948 24.0004,10.7755864 24.0004,10.7755864 C23.9907999,10.8102534 23.6177291,11.1498572 23.6177291,11.1498572 C22.7239858,11.9451994 21.7167746,11.1693241 21.7167746,11.1693241 C21.4391715,10.9763886 20.8568984,10.7130524 20.8568984,10.7130524 C20.0775564,10.3682485 19.4584829,10.7659863 19.3919488,10.8102534 C19.4491494,11.1978578 19.4767497,11.5965289 19.472083,12 C19.4683496,12.3869376 19.4354159,12.7654752 19.3748819,13.1341459 M18.0167335,7.5872843 C17.973933,6.66220736 18.5808731,5.98473316 18.5808731,5.98473316 C18.6430071,5.88619874 19.1699463,5.36379293 19.170213,5.3640596 C19.7916866,4.78831987 19.8104868,4.19124657 19.8104868,4.19124657 C19.9231547,3.42030467 19.619818,2.64896277 19.619818,2.64896277 C19.6375515,2.68002978 19.6136846,3.18416871 19.6136846,3.18416871 C19.5439505,4.37844865 18.2835365,4.54165046 18.2835365,4.54165046 C17.9505995,4.6019178 17.3527261,4.82752031 17.3527261,4.82752031 C16.557784,5.13445705 16.4013822,5.85366504 16.3853821,5.93206591 C16.7000522,6.16553517 17.0013889,6.42820476 17.2835254,6.71647463 C17.5547284,6.9928777 17.7989978,7.28354759 18.0167335,7.5872843 M13.1341459,4.62551806 C12.450005,4.00164446 12.3997378,3.09323437 12.3997378,3.09323437 C12.3742708,2.97963311 12.3773375,2.23789153 12.3778709,2.23789153 C12.4101379,1.39094879 12.0012,0.955743953 12.0012,0.955743953 C11.5358615,0.330803676 10.7757197,0 10.7757197,0 C10.8103868,0.00946677185 11.1499906,0.382537584 11.1499906,0.382537584 C11.9451994,1.27654752 11.1693241,2.2833587 11.1693241,2.2833587 C10.976522,2.56122846 10.713319,3.14336826 10.713319,3.14336826 C10.3681152,3.92271025 10.766253,4.54165046 10.8103868,4.60858454 C11.1979911,4.5509839 11.5965289,4.52365026 12,4.52818365 C12.3869376,4.53191702 12.7656085,4.56485072 13.1340126,4.62551806"}}]})(props);
};
GrSolaris.displayName = "GrSolaris";
var GrSort = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,3 L22,3 M7,9 L16,9 M7,15 L22,15 M2,2 L4,2 L4,4 L2,4 L2,2 Z M2,8 L4,8 L4,10 L2,10 L2,8 Z M2,14 L4,14 L4,16 L2,16 L2,14 Z M2,20 L4,20 L4,22 L2,22 L2,20 Z M7,21 L16,21"}}]})(props);
};
GrSort.displayName = "GrSort";
var GrSoundcloud = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M20.727,11.676925 C22.4007273,11.676925 23.7572727,13.04505 23.7572727,14.73245 C23.7572727,16.4204 22.4007273,17.788525 20.727,17.788525 C20.673,17.788525 12.3349091,17.7844 12.327,17.783575 C12.1461818,17.765425 12.0021818,17.6095 12,17.4225 L12,7.72435 C12.0021818,7.54615 12.0627273,7.454575 12.2915455,7.3652 C12.8803636,7.135575 13.5463636,7 14.2300909,7 C17.0236364,7 19.3137273,9.1604 19.5550909,11.913975 C19.9156364,11.761625 20.3119091,11.676925 20.727,11.676925 Z M10.2361478,18 L9.26385224,18 C9.11873351,18 9,17.8782028 9,17.7293396 L9,7.77066041 C9,7.62152652 9.11873351,7.5 9.26385224,7.5 L10.2361478,7.5 C10.3812665,7.5 10.5,7.62152652 10.5,7.77066041 L10.5,17.7293396 C10.5,17.8782028 10.3812665,18 10.2361478,18 Z M1.23614776,16.4971721 L0.263852243,16.4971721 C0.118733509,16.4971721 0,16.3760415 0,16.2279931 L0,13.7663511 C0,13.6183026 0.118733509,13.4971721 0.263852243,13.4971721 L1.23614776,13.4971721 C1.38126649,13.4971721 1.5,13.6183026 1.5,13.7663511 L1.5,16.2279931 C1.5,16.3760415 1.38126649,16.4971721 1.23614776,16.4971721 Z M7.23614776,18 L6.26385224,18 C6.11873351,18 6,17.8844164 6,17.7431475 L6,11.2568525 C6,11.1155836 6.11873351,11 6.26385224,11 L7.23614776,11 C7.38126649,11 7.5,11.1155836 7.5,11.2568525 L7.5,17.7431475 C7.5,17.8844164 7.38126649,18 7.23614776,18 Z M4.23614776,18 L3.26385224,18 C3.11873351,18 3,17.8871563 3,17.7492363 L3,12.7507637 C3,12.6128437 3.11873351,12.5 3.26385224,12.5 L4.23614776,12.5 C4.38126649,12.5 4.5,12.6128437 4.5,12.7507637 L4.5,17.7492363 C4.5,17.8871563 4.38126649,18 4.23614776,18 Z"}}]})(props);
};
GrSoundcloud.displayName = "GrSoundcloud";
var GrSpa = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C13.5,22 16,21 16,16.5 C16,12 12,6 12,6 C12,6 8,12 8,16.5 C8,21 10.5,22 12,22 Z M12,22 C10.5,22 9.04678627,21.7792414 7,20.5 C3,18 2.5,10 2.5,10 C2.5,10 7,10.5 9,12 M12,22 C13.5,22 14.9532137,21.7792414 17,20.5 C21,18 21.5,10 21.5,10 C21.5,10 17,10.5 15,12"}}]})(props);
};
GrSpa.displayName = "GrSpa";
var GrSpectrum = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M22.131075,23.3986125 L13.12545,23.3986125 C12.3297,23.3986125 11.6187,22.7794875 11.6217,21.9822375 C11.64045,17.0236125 10.7442,15.3979875 8.8692,13.7584875 C6.900075,12.0372375 3.455325,11.7034875 1.49445,11.6641125 C0.6732,11.6476125 0.01695,10.9801125 0.01545,10.1573625 L7.5e-05,1.5331125 C-0.001425,0.7279875 0.627825,0.0582375 1.431075,0.0222375 C4.380825,-0.1097625 11.063325,0.2063625 16.521825,4.9786125 C20.9547,8.8538625 23.345325,14.5204875 23.639325,21.8378625 C23.67345,22.6906125 22.983075,23.3986125 22.131075,23.3986125"}}]})(props);
};
GrSpectrum.displayName = "GrSpectrum";
var GrSplit = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,22 L23,22 L23,2 L1,2 L1,22 Z M12,2 L12,22 L12,2 Z"}}]})(props);
};
GrSplit.displayName = "GrSplit";
var GrSplits = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,22 L23,22 L23,2 L1,2 L1,22 Z M8,2 L8,22 L8,2 Z M16,2 L16,22 L16,2 Z"}}]})(props);
};
GrSplits.displayName = "GrSplits";
var GrSpotify = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"}}]})(props);
};
GrSpotify.displayName = "GrSpotify";
var GrSquare = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.4444444,8.33333333 L9.55555556,8.33333333 C8.88088889,8.33333333 8.33333333,8.88088889 8.33333333,9.55555556 L8.33333333,14.4444444 C8.33333333,15.1191111 8.88088889,15.6666667 9.55555556,15.6666667 L14.4444444,15.6666667 C15.1191111,15.6666667 15.6666667,15.1191111 15.6666667,14.4444444 L15.6666667,9.55555556 C15.6666667,8.88088889 15.1191111,8.33333333 14.4444444,8.33333333 M18.1111111,22 L5.88888889,22 C3.74128475,22 2,20.2587153 2,18.1111111 L2,5.88888889 C2,3.74128475 3.74128475,2 5.88888889,2 L18.1111111,2 C20.2587153,2 22,3.74128475 22,5.88888889 L22,18.1111111 C22,20.2587153 20.2587153,22 18.1111111,22 L18.1111111,22 Z M18.1111111,24 C21.3632847,24 24,21.3632847 24,18.1111111 L24,5.88888889 C24,2.63671525 21.3632847,0 18.1111111,0 L5.88888889,0 C2.63671525,0 0,2.63671525 0,5.88888889 L0,18.1111111 C0,21.3632847 2.63671525,24 5.88888889,24 L18.1111111,24 L18.1111111,24 Z"}}]})(props);
};
GrSquare.displayName = "GrSquare";
var GrStackOverflow = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.4137208,0.131625 C11.7902208,-0.043875 12.2252208,-0.043875 12.6017208,0.131625 L23.4227208,5.187375 C23.7467208,5.338875 23.7459708,5.800875 23.4204708,5.950875 L12.5154708,10.968375 C12.1929708,11.116875 11.8217208,11.116875 11.4992208,10.968375 L0.594970771,5.950875 C0.269470771,5.800875 0.267970771,5.338875 0.592720771,5.187375 L11.4137208,0.131625 Z M23.4227208,11.6582856 C23.7474708,11.8097856 23.7459708,12.2717856 23.4204708,12.4217856 L12.5162208,17.4392856 C12.1937208,17.5877856 11.8224708,17.5877856 11.4999708,17.4392856 L0.594970771,12.4217856 C0.269470771,12.2717856 0.267970771,11.8097856 0.592720771,11.6582856 L2.82772077,10.6142856 C3.15172077,10.4627856 3.52597077,10.4620356 3.85072077,10.6112856 L11.4999708,14.1302856 C11.8224708,14.2787856 12.1937208,14.2787856 12.5162208,14.1302856 L20.1647208,10.6112856 C20.4894708,10.4620356 20.8637208,10.4627856 21.1877208,10.6142856 L23.4227208,11.6582856 Z M23.4227208,18.1582856 C23.7474708,18.3097856 23.7459708,18.7717856 23.4204708,18.9217856 L12.5162208,23.9392856 C12.1937208,24.0877856 11.8224708,24.0877856 11.4999708,23.9392856 L0.594970771,18.9217856 C0.269470771,18.7717856 0.267970771,18.3097856 0.592720771,18.1582856 L2.82772077,17.1142856 C3.15172077,16.9627856 3.52597077,16.9620356 3.85072077,17.1112856 L11.4999708,20.6302856 C11.8224708,20.7787856 12.1937208,20.7787856 12.5162208,20.6302856 L20.1647208,17.1112856 C20.4894708,16.9620356 20.8637208,16.9627856 21.1877208,17.1142856 L23.4227208,18.1582856 Z"}}]})(props);
};
GrStackOverflow.displayName = "GrStackOverflow";
var GrStakeholder = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M14,9 L18.5,11 L23,9 L23,4 L18.5,2 L14,4 L14,9 Z M7,7 C4.791,7 3,8.791 3,11 C3,13.209 4.791,15 7,15 C9.209,15 11,13.209 11,11 C11,8.791 9.209,7 7,7 L7,7 Z M1,23 L1,21 C1,17 3.5,15 7,15 C10.5,15 13,17 13,21 L13,23 L1,23 Z M14,4 L18.5,6 L23,4 M18.5,6 L18.5,11 L18.5,6 Z"}}]})(props);
};
GrStakeholder.displayName = "GrStakeholder";
var GrStarHalf = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"polygon","attr":{"fillOpacity":".2","points":"12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"}},{"tag":"polygon","attr":{"points":"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"}}]}]})(props);
};
GrStarHalf.displayName = "GrStarHalf";
var GrStar = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fillRule":"evenodd","points":"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(props);
};
GrStar.displayName = "GrStar";
var GrStatusCriticalSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","stroke":"#000","d":"M6.71239638,1.26313029 C6.31895072,0.869684641 5.68347072,0.867263198 5.28760362,1.26313029 L1.26313029,5.28760362 C0.869684641,5.68104928 0.867263198,6.31652928 1.26313029,6.71239638 L5.28760362,10.7368697 C5.68104928,11.1303154 6.31652928,11.1327368 6.71239638,10.7368697 L10.7368697,6.71239638 C11.1303154,6.31895072 11.1327368,5.68347072 10.7368697,5.28760362 L6.71239638,1.26313029 Z"}}]})(props);
};
GrStatusCriticalSmall.displayName = "GrStatusCriticalSmall";
var GrStatusCritical = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12.7031806,2.70318058 C12.3148247,2.31482467 11.6897542,2.31024575 11.2968194,2.70318058 L2.70318058,11.2968194 C2.31482467,11.6851753 2.31024575,12.3102458 2.70318058,12.7031806 L11.2968194,21.2968194 C11.6851753,21.6851753 12.3102458,21.6897542 12.7031806,21.2968194 L21.2968194,12.7031806 C21.6851753,12.3148247 21.6897542,11.6897542 21.2968194,11.2968194 L12.7031806,2.70318058 Z M8.98264552,14.7001725 L14.7001725,8.98264552 M8.98264552,8.98264552 L14.7001725,14.7001725"}}]})(props);
};
GrStatusCritical.displayName = "GrStatusCritical";
var GrStatusDisabledSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"rect","attr":{"width":"10","height":"10","x":"1","y":"1","fillRule":"evenodd","stroke":"#000","rx":"1"}}]})(props);
};
GrStatusDisabledSmall.displayName = "GrStatusDisabledSmall";
var GrStatusDisabled = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M18,12 L6,12"}}]})(props);
};
GrStatusDisabled.displayName = "GrStatusDisabled";
var GrStatusGoodSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"circle","attr":{"cx":"6","cy":"6","r":"5","fillRule":"evenodd","stroke":"#000"}}]})(props);
};
GrStatusGoodSmall.displayName = "GrStatusGoodSmall";
var GrStatusGood = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"}}]})(props);
};
GrStatusGood.displayName = "GrStatusGood";
var GrStatusInfoSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"rect","attr":{"width":"10","height":"10","x":"1","y":"1","fillRule":"evenodd","stroke":"#000","rx":"1"}}]})(props);
};
GrStatusInfoSmall.displayName = "GrStatusInfoSmall";
var GrStatusInfo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,10 L12,18 M12,6 L12,8"}}]})(props);
};
GrStatusInfo.displayName = "GrStatusInfo";
var GrStatusPlaceholderSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"rect","attr":{"width":"10","height":"10","x":"1","y":"1","fillRule":"evenodd","stroke":"#000","rx":"1"}}]})(props);
};
GrStatusPlaceholderSmall.displayName = "GrStatusPlaceholderSmall";
var GrStatusPlaceholder = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"width":"20","height":"20","x":"2","y":"2","fill":"none","stroke":"#000","strokeWidth":"2","rx":"2"}}]})(props);
};
GrStatusPlaceholder.displayName = "GrStatusPlaceholder";
var GrStatusUnknownSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"rect","attr":{"width":"10","height":"10","x":"1","y":"1","fillRule":"evenodd","stroke":"#000","rx":"1"}}]})(props);
};
GrStatusUnknownSmall.displayName = "GrStatusUnknownSmall";
var GrStatusUnknown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"}}]})(props);
};
GrStatusUnknown.displayName = "GrStatusUnknown";
var GrStatusWarningSmall = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 12 12"},"child":[{"tag":"polygon","attr":{"fillRule":"evenodd","stroke":"#000","strokeLinejoin":"round","points":"6 1 11 10 1 10"}}]})(props);
};
GrStatusWarningSmall.displayName = "GrStatusWarningSmall";
var GrStatusWarning = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinejoin":"round","strokeWidth":"2","d":"M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18"}}]})(props);
};
GrStatusWarning.displayName = "GrStatusWarning";
var GrStepsOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M24,9 L19,9 L19,14 L14,14 L14,19 L9,19 L9,24 M1,24 L1,16.9970301 C1,16.4463856 1.31329632,15.6867037 1.70336215,15.2966378 L15.2966378,1.70336215 C15.685094,1.31490596 16.4530363,1 16.9970301,1 L24,1"}}]})(props);
};
GrStepsOption.displayName = "GrStepsOption";
var GrSteps = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"16 6 11 6 11 11 6 11 6 16 1 16 1 23 23 23 23 1 16 1"}}]})(props);
};
GrSteps.displayName = "GrSteps";
var GrStopFill = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z"}}]})(props);
};
GrStopFill.displayName = "GrStopFill";
var GrStop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"width":"16","height":"16","x":"4","y":"4","fill":"none","stroke":"#000","strokeWidth":"2"}}]})(props);
};
GrStop.displayName = "GrStop";
var GrStorage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000000","strokeWidth":"2","d":"M2,5.07692308 C2,5.07692308 3.66666667,2 12,2 C20.3333333,2 22,5.07692308 22,5.07692308 L22,18.9230769 C22,18.9230769 20.3333333,22 12,22 C3.66666667,22 2,18.9230769 2,18.9230769 L2,5.07692308 Z M2,13 C2,13 5.33333333,16 12,16 C18.6666667,16 22,13 22,13 M2,7 C2,7 5.33333333,10 12,10 C18.6666667,10 22,7 22,7"}}]})(props);
};
GrStorage.displayName = "GrStorage";
var GrStreetView = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,5 C16,7.209 14.209,9 12,9 C9.791,9 8,7.209 8,5 C8,2.791 9.791,1 12,1 C14.209,1 16,2.791 16,5 L16,5 Z M15,23 L15,17 L18,17 L18,15 C18,11.66 15.24,9.03 12,9 C8.79,9.03 6,11.66 6,15 L6,17 L9,17 L9,23 M3.5,23 L20.5,23 L3.5,23 Z"}}]})(props);
};
GrStreetView.displayName = "GrStreetView";
var GrStrikeThrough = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"5.77","y":"12.17","width":"12.46","height":"1.09"}},{"tag":"path","attr":{"d":"M16.7,13.65H12.89c.59.34,1,.6,1.18.74a3.39,3.39,0,0,1,1,1.07,2.38,2.38,0,0,1,.31,1.14,2.3,2.3,0,0,1-.82,1.76,3.18,3.18,0,0,1-2.22.74,4.7,4.7,0,0,1-2.23-.54A3.77,3.77,0,0,1,8.56,17.2a7.41,7.41,0,0,1-.79-2.46H7.36V20h.41a1.35,1.35,0,0,1,.24-.7.59.59,0,0,1,.44-.17,6.5,6.5,0,0,1,1.39.35,12.63,12.63,0,0,0,1.45.41,7.26,7.26,0,0,0,1.25.1A4.87,4.87,0,0,0,16,18.72a4,4,0,0,0,1.34-3A3.8,3.8,0,0,0,16.92,14C16.86,13.87,16.78,13.77,16.7,13.65Z"}},{"tag":"path","attr":{"d":"M8.89,11.21c.21.17.49.36.81.57h4.87c-.48-.29-1.07-.62-1.76-1A12.49,12.49,0,0,1,9.48,8.54,1.93,1.93,0,0,1,9,7.26a2.18,2.18,0,0,1,.77-1.63,2.72,2.72,0,0,1,1.93-.71,4.14,4.14,0,0,1,2,.53,3.78,3.78,0,0,1,1.49,1.43,6.6,6.6,0,0,1,.73,2.42h.41V4h-.41a1.39,1.39,0,0,1-.3.7.67.67,0,0,1-.48.17,2.64,2.64,0,0,1-.89-.28A6.45,6.45,0,0,0,11.68,4,4.49,4.49,0,0,0,8.47,5.21,3.75,3.75,0,0,0,7.21,8a3.57,3.57,0,0,0,.43,1.73A4.72,4.72,0,0,0,8.89,11.21Z"}}]})(props);
};
GrStrikeThrough.displayName = "GrStrikeThrough";
var GrStripe = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1,1 L23,1 L23,23 L1,23 L1,1 Z M11.1196337,9.18908425 C11.1196337,8.58622711 11.6142857,8.35435897 12.4335531,8.35435897 C13.6083516,8.35435897 15.0923077,8.70989011 16.2671062,9.343663 L16.2671062,5.71106227 C14.9841026,5.20095238 13.7165568,5 12.4335531,5 C9.2956044,5 7.20879121,6.6385348 7.20879121,9.37457875 C7.20879121,13.6409524 13.0827839,12.9608059 13.0827839,14.800293 C13.0827839,15.5113553 12.4644689,15.7432234 11.5988278,15.7432234 C10.3158242,15.7432234 8.67728938,15.2176557 7.37882784,14.5065934 L7.37882784,18.1855678 C8.81641026,18.8038828 10.2694505,19.0666667 11.5988278,19.0666667 C14.8140659,19.0666667 17.0245421,17.4745055 17.0245421,14.7075458 C17.0090842,10.1010989 11.1196337,10.9203663 11.1196337,9.18908425 L11.1196337,9.18908425 Z"}}]})(props);
};
GrStripe.displayName = "GrStripe";
var GrSubscript = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.74,3.63l.19,4.07h-.49a4.92,4.92,0,0,0-.38-1.54A2.58,2.58,0,0,0,17,5.07a3.68,3.68,0,0,0-1.73-.35H12.83V18a3.54,3.54,0,0,0,.35,2,1.92,1.92,0,0,0,1.5.54h.6V21H7.92V20.5h.61a1.76,1.76,0,0,0,1.56-.67A3.88,3.88,0,0,0,10.38,18V4.72H8.29a5.79,5.79,0,0,0-1.73.18,2.37,2.37,0,0,0-1.14.93A3.78,3.78,0,0,0,4.86,7.7H4.38l.21-4.07Z"}},{"tag":"path","attr":{"d":"M22.48,16.68h.33v5.59a1.13,1.13,0,0,0,.06.4.41.41,0,0,0,.17.21.63.63,0,0,0,.28.08h.4v.27H20.76V23l.45,0a.62.62,0,0,0,.29-.1.38.38,0,0,0,.15-.22,1.4,1.4,0,0,0,0-.37V18.42a4.45,4.45,0,0,0,0-.64c0-.15-.1-.23-.24-.23a.82.82,0,0,0-.28,0l-.3.13-.18-.25Z"}}]})(props);
};
GrSubscript.displayName = "GrSubscript";
var GrSubtractCircle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M6,12 L18,12"}}]})(props);
};
GrSubtractCircle.displayName = "GrSubtractCircle";
var GrSubtract = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,12 L22,12"}}]})(props);
};
GrSubtract.displayName = "GrSubtract";
var GrSuperscript = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.74,3.63l.19,4.07h-.49a4.9,4.9,0,0,0-.38-1.54A2.57,2.57,0,0,0,17,5.07a3.68,3.68,0,0,0-1.73-.35H12.83V18a3.56,3.56,0,0,0,.34,2,1.92,1.92,0,0,0,1.5.54h.6V21H7.92V20.5h.61a1.76,1.76,0,0,0,1.56-.67A3.88,3.88,0,0,0,10.38,18V4.72H8.29a5.82,5.82,0,0,0-1.73.18,2.37,2.37,0,0,0-1.14.93A3.78,3.78,0,0,0,4.86,7.7H4.38l.21-4.07Z"}},{"tag":"path","attr":{"d":"M22.48,1h.33V6.62a1.13,1.13,0,0,0,.06.4.41.41,0,0,0,.17.21.63.63,0,0,0,.28.08h.4V7.6H20.76V7.33l.45,0a.62.62,0,0,0,.29-.1A.38.38,0,0,0,21.65,7a1.4,1.4,0,0,0,0-.37V2.77a4.45,4.45,0,0,0,0-.64c0-.15-.1-.23-.24-.23a.82.82,0,0,0-.28,0l-.3.13-.18-.25Z"}}]})(props);
};
GrSuperscript.displayName = "GrSuperscript";
var GrSupport = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M15,23 L15,17 M9,23 L9,17 M15,7 L15,1 M9,7 L9,1 M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z M1,15 L7,15 M1,9 L7,9 M17,15 L23,15 M17,9 L23,9","transform":"rotate(45 12 12)"}}]})(props);
};
GrSupport.displayName = "GrSupport";
var GrSuse = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M24,8.28528691 C22.5804639,5.99050902 20.3366451,4.34898102 17.9130991,3.93053502 C15.8761713,3.57729259 12.1607377,3.53965483 10.1932153,7.25267133 C9.3714001,8.80307066 9.42181398,10.8206616 10.3230483,12.5212667 C11.241893,14.2615813 12.8841423,15.3796644 14.8274936,15.5927148 C16.7549611,15.8023122 18.2031515,15.3565292 19.0170248,14.3047439 C19.8367683,13.2419089 19.9887005,11.7961356 19.4075597,10.6179702 C18.7825658,9.35278909 17.8402407,8.68083428 16.531897,8.56964751 C15.5332879,8.48125058 14.7950354,8.8966471 14.5267369,9.32033084 C14.4504255,9.45292624 14.3098881,9.69739901 14.3085069,10.0565116 C14.3085069,11.0067786 15.1759018,11.2667899 15.3523504,11.2785301 C15.4062173,11.2764583 15.6676098,11.2712788 16.0139462,11.1839178 L16.1817623,11.1276338 L16.381346,11.0720404 C17.0132459,10.9570553 17.6199389,11.3299799 17.7970781,11.9439242 C17.8281551,12.0575281 17.8454202,12.1704413 17.8454202,12.2819734 C17.8454202,12.6897733 17.6375493,13.0709851 17.2138655,13.3534409 C17.0315468,13.4677354 16.8644214,13.5319613 16.6890087,13.5868641 C16.1928119,13.7481194 15.7546255,13.8227043 15.3157486,13.8227043 C13.8112742,13.8209778 11.7163359,12.5278274 11.6900931,10.0989835 C11.6759358,8.72779515 12.3627385,7.48091497 13.5747433,6.67705536 C14.9690668,5.75475767 17.377538,5.4419154 19.61474,6.81379436 C22.365404,8.4957532 23.0836291,11.7950997 22.365404,14.0447326 C21.3219058,17.3022977 18.3851249,19.0436482 14.5118889,18.6973118 C11.7667498,18.4531843 9.21705077,17.003958 7.70014558,14.8233852 C7.02715487,13.8575797 6.52888622,12.7805874 6.25920651,11.7042856 C5.63939208,9.24816303 6.26645782,6.6380364 6.73192292,5.48231556 C7.53228768,3.50084082 8.72510717,1.66935452 10.2982381,6.09512441e-14 L1.0005,-1.26217745e-29 C0.44775,-1.26217745e-29 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,8.28528691 Z"}}]})(props);
};
GrSuse.displayName = "GrSuse";
var GrSwift = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18.1029473,21.0182797 C15.2758951,22.6513915 11.388774,22.8191853 7.4780286,21.143065 C4.31157263,19.7958689 1.6842374,17.43767 -1.77635684e-15,14.7432778 C0.808438798,15.4168759 1.7515972,15.9559966 2.76211541,16.4272729 C6.80079604,18.320253 10.8386286,18.1906218 13.6802189,16.432119 C13.6784016,16.4303017 13.6771901,16.4290902 13.6759786,16.4272729 C9.63378462,13.3282374 6.19795002,9.28604337 3.63803517,5.98529182 C3.09885386,5.44629224 2.69463446,4.77257305 2.29041506,4.16627424 C5.38939007,6.99574946 10.3075644,10.5660614 12.0587981,11.5770642 C8.35400892,7.6693475 5.05265163,2.81907816 5.18712893,2.95355547 C11.0484011,8.88206627 16.5056356,12.2506622 16.5056356,12.2506622 C16.6861501,12.3524288 16.8254735,12.4372343 16.9375379,12.5129535 C17.0556599,12.2124997 17.1592437,11.9005366 17.2464723,11.5770642 C18.1896307,8.14122958 17.1119949,4.23351289 14.7537961,1 C20.2104248,4.30105442 23.4445434,10.4988227 22.0967416,15.6864968 C22.0616079,15.8264259 22.0234454,15.9645377 21.9822542,16.1002266 C21.9980037,16.1190049 22.0137533,16.138389 22.0295029,16.1583789 C24.7238951,19.5269749 23.9830584,23.0972868 23.6462594,22.4236887 C22.1845759,19.5633201 19.4786744,20.4380283 18.1030079,21.0183403 L18.1029473,21.0182797 Z"}}]})(props);
};
GrSwift.displayName = "GrSwift";
var GrSwim = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11,13 C11.5,13.5 13.1299859,12.8876287 14.2620192,12.5 C15.7222222,12 17.5,12.5 17,12 C15.3609614,10.3609614 15,10 15,10 C15,10 10.5,12.5 11,13 Z M2,20 C4,20 5,19 7,19 C9,19 10,20 12,20 C14,20 15,19 17,19 C19,19 20,20 22,20 M2,16 C4,16 5,15 7,15 C9,15 10,16 12,16 C14,16 15,15 17,15 C19,15 20,16 22,16 M17.5,4 L12.2222222,7 L15.5,10.5 L12,12 M19.2222222,10 C19.774507,10 20.2222222,9.55228475 20.2222222,9 C20.2222222,8.44771525 19.774507,8 19.2222222,8 C18.6699375,8 18.2222222,8.44771525 18.2222222,9 C18.2222222,9.55228475 18.6699375,10 19.2222222,10 Z"}}]})(props);
};
GrSwim.displayName = "GrSwim";
var GrSync = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,19 L16,19 C19.866,19 23,15.866 23,12 L23,9 M8,15 L4,19 L8,23 M19,5 L8,5 C4.134,5 1,8.134 1,12 L1,15 M16,1 L20,5 L16,9"}}]})(props);
};
GrSync.displayName = "GrSync";
var GrSystem = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,19 L23,19 L23,1 L1,1 L1,19 Z M5,23 L19,23 L5,23 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z M7.757,5.757 L9.879,7.879 L7.757,5.757 Z M9,10 L6,10 L9,10 Z M9.879,12.121 L7.757,14.243 L9.879,12.121 Z M12,13 L12,16 L12,13 Z M14.121,12.121 L16.243,14.243 L14.121,12.121 Z M18,10 L15,10 L18,10 Z M16.243,5.757 L14.121,7.879 L16.243,5.757 Z M12,7 L12,4 L12,7 Z M12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 L12,7 Z"}}]})(props);
};
GrSystem.displayName = "GrSystem";
var GrTableAdd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,5 L8,23 M16,5 L16,11 M1,11 L17,11 M1,5 L23,5 M1,17 L11,17 M17,23 L1,23 L1,1 L23,1 L23,17 M17,23 C20.3137085,23 23,20.3137085 23,17 C23,13.6862915 20.3137085,11 17,11 C13.6862915,11 11,13.6862915 11,17 C11,20.3137085 13.6862915,23 17,23 Z M17,14 L17,20 M17,14 L17,20 M14,17 L20,17"}}]})(props);
};
GrTableAdd.displayName = "GrTableAdd";
var GrTable = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,5 L8,23 M16,5 L16,23 M1,11 L23,11 M1,5 L23,5 M1,17 L23,17 M1,1 L23,1 L23,23 L1,23 L1,1 Z"}}]})(props);
};
GrTable.displayName = "GrTable";
var GrTag = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11.7058543,22.2941457 C11.3160217,22.6839783 10.6897542,22.6897542 10.2968194,22.2968194 L1.70318058,13.7031806 C1.31482467,13.3148247 1.32097101,12.679029 1.70585426,12.2941457 L13,1 L23,1 L23,11 L11.7058543,22.2941457 Z M6,12 L12,18 M9,9 L15,15 M17,6 C17,5.4475 17.4475,5 18,5 C18.5525,5 19,5.4475 19,6 C19,6.5525 18.5525,7 18,7 C17.4475,7 17,6.5525 17,6"}}]})(props);
};
GrTag.displayName = "GrTag";
var GrTapeOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,2 L22,2 L22,22 L2,22 L2,7 M12,19 C8.13409091,19 5,15.8659091 5,12 M12,19 C15.8659091,19 19,15.8659091 19,12 C19,8.13409091 15.8659091,5 12,5 L1,5 M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z"}}]})(props);
};
GrTapeOption.displayName = "GrTapeOption";
var GrTape = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,2 L22,2 L22,22 L2,22 L2,2 Z M19,12 C19,15.8659091 15.8659091,19 12,19 C8.13409091,19 5,15.8659091 5,12 C5,8.13409091 8.13409091,5 12,5 C15.8659091,5 19,8.13409091 19,12 L19,12 Z M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z"}}]})(props);
};
GrTape.displayName = "GrTape";
var GrTarget = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 C18.075,1 23,5.925 23,12 L23,12 Z M18,12 C18,8.691 15.309,6 12,6 C8.691,6 6,8.691 6,12 C6,15.309 8.691,18 12,18 C15.309,18 18,15.309 18,12 L18,12 Z M13,12 C13,11.448 12.552,11 12,11 C11.448,11 11,11.448 11,12 C11,12.552 11.448,13 12,13 C12.552,13 13,12.552 13,12 L13,12 Z"}}]})(props);
};
GrTarget.displayName = "GrTarget";
var GrTask = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,20 L24,20 M12,12 L24,12 M12,4 L24,4 M1,19 L4,22 L9,17 M1,11 L4,14 L9,9 M9,1 L4,6 L1,3"}}]})(props);
};
GrTask.displayName = "GrTask";
var GrTasks = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z"}}]})(props);
};
GrTasks.displayName = "GrTasks";
var GrTechnology = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"}}]})(props);
};
GrTechnology.displayName = "GrTechnology";
var GrTemplate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"}}]})(props);
};
GrTemplate.displayName = "GrTemplate";
var GrTerminal = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,5 L8,11 L2,17 M9,17 L23,17"}}]})(props);
};
GrTerminal.displayName = "GrTerminal";
var GrTestDesktop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18.218,1 L23,1 L23,19 L1,19 L1,1 L6,1 M16.9999996,9.99999996 C13,6.99999996 11,13 7.00000002,9.99999996 M5,23 L19,23 L5,23 Z M10,1 L10,5.773 L5,12.955 L5,15 L19,15 L19,12.955 L14,5.773 L14,1 M8,1 L16,1 L8,1 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z"}}]})(props);
};
GrTestDesktop.displayName = "GrTestDesktop";
var GrTest = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8.9997,0.99999995 L8.9997,8.0003 L1.9997,20.0003 L1.9997,23.0003 L21.9997,23.0003 L21.9997,20.0003 L14.9997,8.0003 L14.9997,0.99999995 M15,18 C15.5522847,18 16,17.5522847 16,17 C16,16.4477153 15.5522847,16 15,16 C14.4477153,16 14,16.4477153 14,17 C14,17.5522847 14.4477153,18 15,18 Z M9,20 C9.55228475,20 10,19.5522847 10,19 C10,18.4477153 9.55228475,18 9,18 C8.44771525,18 8,18.4477153 8,19 C8,19.5522847 8.44771525,20 9,20 Z M18,13 C11,9.99999996 12,17.0000002 6,14 M5.9997,1.0003 L17.9997,1.0003"}}]})(props);
};
GrTest.displayName = "GrTest";
var GrTextAlignCenter = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"0.46","y":"3.06","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"4.1","y":"8.29","width":"15.81","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"13.53","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"4.1","y":"18.76","width":"15.81","height":"2.18"}}]})(props);
};
GrTextAlignCenter.displayName = "GrTextAlignCenter";
var GrTextAlignFull = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"0.46","y":"3.06","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"8.29","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"13.53","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"18.76","width":"15.81","height":"2.18"}}]})(props);
};
GrTextAlignFull.displayName = "GrTextAlignFull";
var GrTextAlignLeft = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"0.46","y":"3.06","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"8.29","width":"15.81","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"13.53","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"18.76","width":"15.81","height":"2.18"}}]})(props);
};
GrTextAlignLeft.displayName = "GrTextAlignLeft";
var GrTextAlignRight = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"0.46","y":"3.06","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"7.73","y":"8.29","width":"15.81","height":"2.18"}},{"tag":"rect","attr":{"x":"0.46","y":"13.53","width":"23.08","height":"2.18"}},{"tag":"rect","attr":{"x":"7.73","y":"18.76","width":"15.81","height":"2.18"}}]})(props);
};
GrTextAlignRight.displayName = "GrTextAlignRight";
var GrTextWrap = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,10 L24,10 L17,10 L17,10 Z M1,14 L14,14 L14,2 L1,2 L1,14 Z M6,6 C6,6.5525 5.5525,7 5,7 C4.4475,7 4,6.5525 4,6 C4,5.4475 4.4475,5 5,5 C5.5525,5 6,5.4475 6,6 M17,6 L24,6 L17,6 L17,6 Z M17,2 L24,2 L17,2 L17,2 Z M17,14 L24,14 L17,14 L17,14 Z M0,18 L24,18 L0,18 L0,18 Z M0,22 L24,22 L0,22 L0,22 Z M14,14 L14,13 L10,8 L7,11 L6,10 L2,14 L14,14 Z"}}]})(props);
};
GrTextWrap.displayName = "GrTextWrap";
var GrThreats = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M9,23 C12.8659932,23 16,19.8659932 16,16 C16,12.1340068 12.8659932,9 9,9 C5.13400675,9 2,12.1340068 2,16 C2,19.8659932 5.13400675,23 9,23 Z M9,6 C9,6 9,8 9,5 C9,2 11,1 13,1 C15,1 17,2 17,5 L17,8 C17,9 17,11 19,11 C21,11 21,9 21,8 C21,6 22,6 23,6 M12,13 L6,19 M6,13 L12,19 M6,10 L6,6 L12,6 L12,10"}}]})(props);
};
GrThreats.displayName = "GrThreats";
var GrThreeDEffects = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"11 3 13 3 22 6 22 17 12 20.5 2 17 2 6.5 4 6 13 8.5 11 9 2 6.5"}}]})(props);
};
GrThreeDEffects.displayName = "GrThreeDEffects";
var GrThreeD = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,5.5 L2,18.5 L12,22.5 L22,18.5 L22,5.5 L12,1.5 L2,5.5 Z M13,12 L18,12 L18,17 M2,5.5 L12,9.5 L22,5.5 M6,14 C6,14 12,20.5 18,12"}}]})(props);
};
GrThreeD.displayName = "GrThreeD";
var GrTicket = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,16 L17,16 L17,8 L7,8 L7,16 Z M20,12 C20,14 21,15 23,15 L23,20 L1,20 L1,15 C3,15 4,14 4,12 C4,10 3,9 1,9 L1,4 L23,4 L23,9 C21,9 20,10 20,12 Z"}}]})(props);
};
GrTicket.displayName = "GrTicket";
var GrTip = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16.0073529,18 L22,18 L22,2 L2,2 L2,18 L8.24264706,18 L12.125,22 L16.0073529,18 Z"}}]})(props);
};
GrTip.displayName = "GrTip";
var GrToast = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,2 C5.790861,2 4,3.790861 4,6 C4,7.48056471 4.80439726,8.77325238 6,9.46487122 L6,16 L18,16 L18,9.46487122 C19.1956027,8.77325238 20,7.48056471 20,6 C20,3.790861 18.209139,2 16,2 L8,2 Z M11.3212774,6.87413911 C11.600007,6.39136541 12.209917,6.22167659 12.700101,6.50468445 L14.4159244,7.49531555 C14.8986981,7.77404508 15.0683869,8.38395511 14.7853791,8.87413911 L13.794748,10.5899625 C13.5160184,11.0727362 12.9061084,11.242425 12.4159244,10.9594172 L10.700101,9.96878606 C10.2173273,9.69005654 10.0476385,9.0801465 10.3306463,8.58996251 L11.3212774,6.87413911 Z M8,18 L8,20 M12,18 L12,23 M16,18 L16,21"}}]})(props);
};
GrToast.displayName = "GrToast";
var GrTools = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M11,2 L22,13 L17.5,17.5 L6.5,6.5 L11,2 Z M16,6 L17,5 L19,7 L18,8 M13,13 L4,22 L2,20 L11,11 M5,18 L6,19"}}]})(props);
};
GrTools.displayName = "GrTools";
var GrTooltip = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16.5,18 L12,22.5 L7.5,18 L1,18 L1,1 L23,1 L23,18 L16.5,18 Z M6,10 L7,10 L7,9 L6,9 L6,10 Z M11.5,10 L12.5,10 L12.5,9 L11.5,9 L11.5,10 Z M17,10 L18,10 L18,9 L17,9 L17,10 Z"}}]})(props);
};
GrTooltip.displayName = "GrTooltip";
var GrTopCorner = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"4 16 16 16 16 4","transform":"rotate(180 10 10)"}}]})(props);
};
GrTopCorner.displayName = "GrTopCorner";
var GrTrain = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,1 L19,1 L19,1 C20.1045695,1 21,1.8954305 21,3 L21,18 L21,18 C21,19.1045695 20.1045695,20 19,20 L5,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,3 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M9,2 L15,2 M3,5 L21,5 M4,23 L20,23 M3,12 L21,12 M7,17 C7.55228475,17 8,16.5522847 8,16 C8,15.4477153 7.55228475,15 7,15 C6.44771525,15 6,15.4477153 6,16 C6,16.5522847 6.44771525,17 7,17 Z M17,17 C17.5522847,17 18,16.5522847 18,16 C18,15.4477153 17.5522847,15 17,15 C16.4477153,15 16,15.4477153 16,16 C16,16.5522847 16.4477153,17 17,17 Z M12,5 L12,12 M9,20 L7,23 M15,20 L17,23"}}]})(props);
};
GrTrain.displayName = "GrTrain";
var GrTransaction = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M2,7 L20,7 M16,2 L21,7 L16,12 M22,17 L4,17 M8,12 L3,17 L8,22"}}]})(props);
};
GrTransaction.displayName = "GrTransaction";
var GrTrash = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,5 L20,5 L20,23 L4,23 L4,5 Z M1,5 L23,5 M9,1 L15,1 L15,5 L9,5 L9,1 Z M9,1 L15,1 L15,5 L9,5 L9,1 Z M15,9 L15,19 M9,9 L9,19"}}]})(props);
};
GrTrash.displayName = "GrTrash";
var GrTreeOption = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M7,13 L11.375,6 L9,6 L12,2 L15,6 L12.625,6 L17,13 L15,13 L19,19.6666667 L5,19.6666667 L9,13 L7,13 Z M12,24 L12,20"}}]})(props);
};
GrTreeOption.displayName = "GrTreeOption";
var GrTree = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M4,1 L10,1 L10,7 L4,7 L4,1 Z M16,11 L20,11 L20,15 L16,15 L16,11 Z M16,19 L20,19 L20,23 L16,23 L16,19 Z M7,7 L7,21 L16,21 M7,13 L16,13"}}]})(props);
};
GrTree.displayName = "GrTree";
var GrTrigger = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"4 14 10 14 7 23 9 23 20 9 14 9 18 1 7 1"}}]})(props);
};
GrTrigger.displayName = "GrTrigger";
var GrTrophy = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,15 C8.686,15 6,12.314 6,9 L6,1 L18,1 L18,9 C18,12.314 15.314,15 12,15 Z M6,3 L1,3 L1,7 C1,9.509 2.791,11 5,11 L6,11 L6,3 Z M18,11 L19,11 C21.209,11 23,9.509 23,7 L23,3 L18,3 L18,11 Z M5,23 L19,23 L19,19 L5,19 L5,23 Z M16,19 C16,16.790861 14.209139,15 12,15 C9.790861,15 8,16.790861 8,19"}}]})(props);
};
GrTrophy.displayName = "GrTrophy";
var GrTroubleshoot = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,5 C1,3.00000024 2,1 3,1 C3,1 5,5 5,5 L7,5 C7,5 9,1 9,1 C10,1 11,3.00000006 11,5 C11,7.25400025 10,9.0000003 8,10 L8,21 C8,22 8,23 6,23 C4,23 4,22 4,21 L4,10 C2,9.0000003 1,7.25400042 1,5 Z M19,12 L19,18 M17,18 L18,23 L20,23 L21,18 L17,18 Z M14,12 L24,12 L14,12 Z M21,12 L21,3 C21,1.895 20.105,1 19,1 C17.895,1 17,1.895 17,3 L17,12"}}]})(props);
};
GrTroubleshoot.displayName = "GrTroubleshoot";
var GrTty = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeWidth":"2","d":"M7,19 L17,19 L17,19 C17.5522847,19 18,19.4477153 18,20 L18,20 L18,20 C18,20.5522847 17.5522847,21 17,21 L7,21 L7,21 C6.44771525,21 6,20.5522847 6,20 L6,20 L6,20 C6,19.4477153 6.44771525,19 7,19 Z M7,10 C7.55228475,10 8,9.55228475 8,9 C8,8.44771525 7.55228475,8 7,8 C6.44771525,8 6,8.44771525 6,9 C6,9.55228475 6.44771525,10 7,10 Z M7,5 C7.55228475,5 8,4.55228475 8,4 C8,3.44771525 7.55228475,3 7,3 C6.44771525,3 6,3.44771525 6,4 C6,4.55228475 6.44771525,5 7,5 Z M7,15 C7.55228475,15 8,14.5522847 8,14 C8,13.4477153 7.55228475,13 7,13 C6.44771525,13 6,13.4477153 6,14 C6,14.5522847 6.44771525,15 7,15 Z M12,10 C12.5522847,10 13,9.55228475 13,9 C13,8.44771525 12.5522847,8 12,8 C11.4477153,8 11,8.44771525 11,9 C11,9.55228475 11.4477153,10 12,10 Z M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z M12,15 C12.5522847,15 13,14.5522847 13,14 C13,13.4477153 12.5522847,13 12,13 C11.4477153,13 11,13.4477153 11,14 C11,14.5522847 11.4477153,15 12,15 Z M17,10 C17.5522847,10 18,9.55228475 18,9 C18,8.44771525 17.5522847,8 17,8 C16.4477153,8 16,8.44771525 16,9 C16,9.55228475 16.4477153,10 17,10 Z M17,5 C17.5522847,5 18,4.55228475 18,4 C18,3.44771525 17.5522847,3 17,3 C16.4477153,3 16,3.44771525 16,4 C16,4.55228475 16.4477153,5 17,5 Z M17,15 C17.5522847,15 18,14.5522847 18,14 C18,13.4477153 17.5522847,13 17,13 C16.4477153,13 16,13.4477153 16,14 C16,14.5522847 16.4477153,15 17,15 Z"}}]})(props);
};
GrTty.displayName = "GrTty";
var GrTumblr = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.6389798,19.1699694 C17.1927306,19.3822191 16.3392319,19.5682188 15.7024829,19.5847188 C13.781736,19.6357187 13.4089866,18.2354709 13.3924866,17.2184725 L13.3924866,9.74773446 L18.2119789,9.74773446 L18.2119789,6.11399025 L13.4104866,6.11399025 L13.4104866,0 L9.8944922,0 C9.83674229,0 9.73624245,0.0509999187 9.72199247,0.179999713 C9.5164928,2.05124673 8.6404942,5.33474149 5,6.6472394 L5,9.74773446 L7.42849613,9.74773446 L7.42849613,17.588972 C7.42849613,20.2739677 9.40924297,24.0877116 14.6374846,23.9984617 C16.4014818,23.9677118 18.3597287,23.229713 18.793228,22.592964 L17.6389798,19.1699694 Z"}}]})(props);
};
GrTumblr.displayName = "GrTumblr";
var GrTurbolinux = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.41886316,6.22224 L9.96581053,7.45268211 L6.61541053,7.45268211 L6,6.22224 L9.41886316,6.22224 Z M13.1110105,12.1706526 L7.09383158,0 L14.1364421,4.17056842 L14.5465895,6.15397895 L17.8971158,6.15397895 L17.1449053,8.20509474 L14.9569895,8.20509474 L16.7346316,16.4785263 L12.5636842,14.4267789 L14.6833895,24 L8.18785263,10.8034105 L13.1110105,12.1706526 Z"}}]})(props);
};
GrTurbolinux.displayName = "GrTurbolinux";
var GrTwitter = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"}}]})(props);
};
GrTwitter.displayName = "GrTwitter";
var GrUbuntu = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M24,12.000127 C24,18.6272309 18.6273155,23.9999153 11.999873,23.9999153 C5.37243046,23.9999153 0,18.6273155 0,12.000127 C0,5.37251513 5.37234579,0 11.9997883,0 C18.6272309,0 24,5.37251513 24,12.000127 L24,12.000127 Z M3.84013547,10.3980668 C2.95511615,10.3980668 2.23799058,11.1151924 2.23799058,12.0002117 C2.23799058,12.8848923 2.95511615,13.6021026 3.84013547,13.6021026 C4.72481611,13.6021026 5.44202635,12.8848923 5.44202635,12.0002117 C5.44202635,11.1151077 4.72490078,10.3980668 3.84013547,10.3980668 L3.84013547,10.3980668 Z M15.2791773,17.6795583 C14.5128605,18.121941 14.2505636,19.1013635 14.6927769,19.8673416 C15.1352442,20.6336585 16.114582,20.8961247 16.8808989,20.4537421 C17.6469617,20.0114441 17.909428,19.0320216 17.4670453,18.2657894 C17.0247473,17.4998113 16.0452402,17.2372603 15.2791773,17.6795583 L15.2791773,17.6795583 Z M7.32009948,11.9999577 C7.32009948,10.4166088 8.10690561,9.01808689 9.31010178,8.17125218 L8.1388249,6.20927451 C6.73674704,7.14602508 5.69382463,8.57807489 5.26058596,10.255319 C5.76663786,10.6678144 6.08997936,11.2959554 6.08997936,12.000127 C6.08997936,12.7041293 5.76663786,13.3322703 5.2605013,13.744681 C5.6936553,15.4220944 6.73666237,16.8541443 8.13874023,17.7908102 L9.31010178,15.8286632 C8.10690561,14.9819978 7.32009948,13.5835606 7.32009948,11.9999577 L7.32009948,11.9999577 Z M12.0000423,7.32001482 C14.4449579,7.32001482 16.4504542,9.19461662 16.6606812,11.5849223 L18.9439684,11.5515637 C18.8316159,9.78677438 18.0607271,8.20198614 16.8759882,7.03722858 C16.2668971,7.26735223 15.5632336,7.23246962 14.9550738,6.88127282 C14.3461521,6.52973736 13.964052,5.93673293 13.8594042,5.29318258 C13.2674157,5.12935283 12.6443547,5.04002963 12.000127,5.04002963 C10.8921807,5.04002963 9.84544829,5.30012524 8.91564038,5.7607112 L10.0286667,7.75545482 C10.6278518,7.47664791 11.2955321,7.32001482 12.0000423,7.32001482 L12.0000423,7.32001482 Z M12.0000423,16.6799852 C11.2954474,16.6799852 10.6278518,16.5233521 10.028582,16.2445452 L8.91538638,18.2394581 C9.84527896,18.6998748 10.892096,18.960055 12.0000423,18.960055 C12.64427,18.960055 13.2673311,18.8707318 13.8594042,18.7069021 C13.964052,18.0633517 14.3462367,17.4703473 14.9552432,17.1185578 C15.5634029,16.7675304 16.2670665,16.7326478 16.8761576,16.9628561 C18.0608117,15.7980139 18.8317006,14.2132256 18.9438837,12.4484363 L16.6605965,12.4150777 C16.4505389,14.805722 14.4449579,16.6799852 12.0000423,16.6799852 L12.0000423,16.6799852 Z M15.2789233,6.32027234 C16.0451555,6.76282433 17.0246627,6.5002734 17.466876,5.73429524 C17.9093433,4.96797841 17.6470464,3.98855591 16.8807295,3.54608858 C16.114582,3.10379059 15.1351595,3.36625686 14.6926922,4.13257369 C14.2503942,4.89855185 14.5128605,5.87805902 15.2789233,6.32027234 L15.2789233,6.32027234 Z"}}]})(props);
};
GrUbuntu.displayName = "GrUbuntu";
var GrUnderline = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.41,4.53V4.18h4.66v.36h-.49a1.34,1.34,0,0,0-1.19.65,3,3,0,0,0-.2,1.4v5.33A9.45,9.45,0,0,1,16.78,15a3.85,3.85,0,0,1-1.54,1.87,5.49,5.49,0,0,1-3.13.78,5.89,5.89,0,0,1-3.27-.75,4,4,0,0,1-1.58-2A11.14,11.14,0,0,1,7,11.64V6.5a2.58,2.58,0,0,0-.33-1.59,1.38,1.38,0,0,0-1.08-.38H5V4.18h5.68v.36h-.5A1.3,1.3,0,0,0,9.06,5,2.87,2.87,0,0,0,8.81,6.5v5.73A12.52,12.52,0,0,0,9,14a3.71,3.71,0,0,0,.51,1.54,2.77,2.77,0,0,0,1.06.91,3.68,3.68,0,0,0,1.7.36,4.69,4.69,0,0,0,2.31-.56,3,3,0,0,0,1.39-1.44,8.33,8.33,0,0,0,.37-3V6.5A2.72,2.72,0,0,0,16,5a1.43,1.43,0,0,0-1.12-.43Z"}},{"tag":"path","attr":{"d":"M4.93,20V19H19v1Z"}}]})(props);
};
GrUnderline.displayName = "GrUnderline";
var GrUndo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.18,4,8.6,5.44,6.06,8h9.71a6,6,0,0,1,0,12h-2V18h2a4,4,0,0,0,0-8H6.06L8.6,12.51,7.18,13.92,2.23,9Z"}}]})(props);
};
GrUndo.displayName = "GrUndo";
var GrUnlink = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M17,11 L21.5856815,15.5856815 C22.366788,16.366788 22.3692352,17.6307648 21.5856815,18.4143185 L18.4143185,21.5856815 C17.633212,22.366788 16.3692352,22.3692352 15.5856815,21.5856815 L11,17 M17,8 L21,8 M16,7 L16,3 M8,21 L8,17 M3,16 L7,16 M7,13 L2.4143185,8.4143185 C1.63321196,7.63321196 1.63076481,6.36923519 2.4143185,5.5856815 L5.5856815,2.4143185 C6.36678804,1.63321196 7.63076481,1.63076481 8.4143185,2.4143185 L13,7"}}]})(props);
};
GrUnlink.displayName = "GrUnlink";
var GrUnlock = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M23,23 L23,11 L9,11 L9,23 L23,23 Z M14,17 L18,17 M11,11 L11,7 C11,4 11,1 6,1 C1,1 1,4 1,7 L1,11"}}]})(props);
};
GrUnlock.displayName = "GrUnlock";
var GrUnorderedList = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"rect","attr":{"x":"5.94","y":"6.42","width":"18.06","height":"1.75"}},{"tag":"rect","attr":{"x":"5.94","y":"11.71","width":"18.06","height":"1.75"}},{"tag":"rect","attr":{"x":"5.94","y":"16.99","width":"18.06","height":"1.75"}},{"tag":"circle","attr":{"cx":"1.85","cy":"7.29","r":"1.52"}},{"tag":"circle","attr":{"cx":"1.85","cy":"12.58","r":"1.52"}},{"tag":"circle","attr":{"cx":"1.85","cy":"17.87","r":"1.52"}}]})(props);
};
GrUnorderedList.displayName = "GrUnorderedList";
var GrUp = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polyline","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"7.086 1.174 17.086 11.174 7.086 21.174","transform":"rotate(-89 12.086 11.174)"}}]})(props);
};
GrUp.displayName = "GrUp";
var GrUpdate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"}}]})(props);
};
GrUpdate.displayName = "GrUpdate";
var GrUpgrade = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,18 L12,8 L12,18 Z M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M17,12 L12,7 L7,12"}}]})(props);
};
GrUpgrade.displayName = "GrUpgrade";
var GrUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,9 L12,2 L19,9"}}]})(props);
};
GrUpload.displayName = "GrUpload";
var GrUserAdd = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M5,24 L5,19 M11,24 L11,19 M1,24 L1,18 C1,13.0294373 4.13400675,11 8,11 C11.8659932,11 15,13 15,18 L15,24 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M16,11 L24,11 M20,7 L20,15"}}]})(props);
};
GrUserAdd.displayName = "GrUserAdd";
var GrUserAdmin = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"}}]})(props);
};
GrUserAdmin.displayName = "GrUserAdmin";
var GrUserExpert = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M14.6431888,15.6961461 C14.3091703,14.6675626 13.7524493,13.7598949 13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L11,23 M12,18.8235294 L16.1904762,22 L23,13"}}]})(props);
};
GrUserExpert.displayName = "GrUserExpert";
var GrUserFemale = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,24 L20,19 C19.9999999,15 15.9403581,14 15,14 C18.9475,14 20,12 20,12 C20,12 16.942739,10.031 17,6 C16.942739,3 14.8497684,1 12,1 C9.01190309,1 6.91893246,3 7,6 C6.91893246,9.969 4,12 4,12 C4,12 4.91417116,14 9,14 C7.92131306,14 4,15 4,19 L4,24 M16,19 L16,24 M8,19 L8,24"}}]})(props);
};
GrUserFemale.displayName = "GrUserFemale";
var GrUserManager = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M18,7 C16.5,7 15,7.3599999 13,5 C11,7.3599999 8.5,8 6,7 M7,13 L12.0249378,18.2571942 L17,13 M12,18 L12,23"}}]})(props);
};
GrUserManager.displayName = "GrUserManager";
var GrUserNew = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18,24 L18,12 M23,22 L13,15 M23,15 L13,22 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L11,23"}}]})(props);
};
GrUserNew.displayName = "GrUserNew";
var GrUserPolice = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,14 C18.3736719,15.1826446 20,17.6506255 20,21 L20,23 L4,23 L4,21 C4,17.6457258 5.6310898,15.1754259 8,14 M12,15 C15.2602409,15 17.9031883,12.3141492 17.9031883,9.00098429 C17.9031883,8.29933805 18.1210147,7.62582606 17.9031883,7 M6.09318017,7 C5.88352479,7.61511425 6.09318017,8.31344562 6.09318017,9.00098429 C6.09318017,12.3141492 8.73775349,15 12,15 L12,15 M6,8 L18,8 L21,4 C19.0884181,2.26537447 15.7904958,1 12,1 C8.16364606,1 4.83185613,2.29617718 3,4 L6,8 L6,8 L6,8 Z M12,5 C12.5522847,5 13,4.55228475 13,4 C13,4 11,4 11,4 C11,4.55228475 11.4477153,5 12,5 L12,5 L12,5 Z"}}]})(props);
};
GrUserPolice.displayName = "GrUserPolice";
var GrUserSettings = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M18.0003,20.9998 C16.3453,20.9998 15.0003,19.6538 15.0003,17.9998 C15.0003,16.3458 16.3453,14.9998 18.0003,14.9998 C19.6543,14.9998 21.0003,16.3458 21.0003,17.9998 C21.0003,19.6538 19.6543,20.9998 18.0003,20.9998 L18.0003,20.9998 Z M24.0003,17.9998 L21.0003,17.9998 L24.0003,17.9998 Z M20.1213,20.1218 L22.2423,22.2428 L20.1213,20.1218 Z M18.0003,23.9998 L18.0003,20.9998 L18.0003,23.9998 Z M13.7573,22.2428 L15.8783,20.1208 L13.7573,22.2428 Z M12.0003,17.9998 L15.0003,17.9998 L12.0003,17.9998 Z M15.8783,15.8788 L13.7573,13.7578 L15.8783,15.8788 Z M18.0003,14.9998 L18.0003,11.9998 L18.0003,14.9998 Z M20.1213,15.8788 L22.2423,13.7578 L20.1213,15.8788 Z M12.5,12.5 C11.2660678,11.4458897 9.77508483,11 8,11 C4.13400675,11 1,13.0294373 1,18 L1,23 L11,23 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z"}}]})(props);
};
GrUserSettings.displayName = "GrUserSettings";
var GrUserWorker = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,6 L21,6 L3,6 Z M10,2 L10,4 M14,2 L14,4 M16,12 C18.3736719,13.1826446 20,15.6506255 20,19 L20,23 L4,23 L4,19 C4,15.6457258 5.6310898,13.1754259 8,12 M12,16.5 L12,23 M12,13 C15.3137085,13 18,10.3137085 18,7 C18,3.6862915 15.3137085,1 12,1 C8.6862915,1 6,3.6862915 6,7 C6,10.3137085 8.6862915,13 12,13 Z M8,12 C8,14.209139 9.790861,16 12,16 L12,16 C14.209139,16 16,14.209139 16,12"}}]})(props);
};
GrUserWorker.displayName = "GrUserWorker";
var GrUser = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M8,24 L8,19 M16,24 L16,19 M3,24 L3,19 C3,14.0294373 7.02943725,11 12,11 C16.9705627,11 21,14.0294373 21,19 L21,24 M12,11 C14.7614237,11 17,8.76142375 17,6 C17,3.23857625 14.7614237,1 12,1 C9.23857625,1 7,3.23857625 7,6 C7,8.76142375 9.23857625,11 12,11 Z"}}]})(props);
};
GrUser.displayName = "GrUser";
var GrValidate = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"}}]})(props);
};
GrValidate.displayName = "GrValidate";
var GrVend = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M3,2.00246167 C3,1.44881738 3.44494629,1 3.99339768,1 L20.0066023,1 C20.5552407,1 21,1.43945834 21,2.00246167 L21,23 L3,23 L3,2.00246167 Z M15,1 L15,23 M3,16 L15,16 M8,17 L10,17 M7,16 L7,12 M7,9 L7,5 M11,16 L11,12 M11,9 L11,5 M17,12 L18,12 M17,9 L19,8.99999994 M17,20 L19,19.9999999 M3,9 L15,9"}}]})(props);
};
GrVend.displayName = "GrVend";
var GrVideo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,9 L23,5 L23,19 L15,15 L15,9 Z M1,5 L15,5 L15,19 L1,19 L1,5 Z"}}]})(props);
};
GrVideo.displayName = "GrVideo";
var GrView = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"}}]})(props);
};
GrView.displayName = "GrView";
var GrVimeo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.9883358,6.80210856 C23.8810843,9.13839127 22.2498115,12.336436 19.0937673,16.3969929 C15.8304716,20.6368022 13.069683,22.7570819 10.8121514,22.7570819 C9.41263176,22.7570819 8.22836518,21.4663138 7.26160165,18.8840277 C6.61584261,16.5162445 5.97083358,14.1484614 5.32432453,11.7806783 C4.60581447,9.19914212 3.8363037,7.90687403 3.01204216,7.90687403 C2.83203964,7.90687403 2.20428086,8.28487932 1.12801579,9.03713985 L0,7.58286949 C1.18426658,6.54260493 2.35203292,5.50234037 3.50179902,4.45982578 C5.08132113,3.09555668 6.26858775,2.37779663 7.0583488,2.30504561 C8.92587495,2.1257931 10.075641,3.40231097 10.5068971,6.13459922 C10.9734036,9.08289049 11.2966581,10.9166662 11.4774107,11.6344262 C12.0166682,14.0809605 12.6091765,15.3027276 13.2556856,15.3027276 C13.7574426,15.3027276 14.5127032,14.5092164 15.5184672,12.9214442 C16.5234813,11.335172 17.0619888,10.1284051 17.1339898,9.2981435 C17.2779919,7.92937434 16.7394843,7.24311474 15.5184672,7.24311474 C14.9439592,7.24311474 14.3514509,7.37511658 13.7424424,7.63612024 C14.9222089,3.77356617 17.1752404,1.89778991 20.501537,2.0042914 C22.9675715,2.07704242 24.1308378,3.6760648 23.9883358,6.80210856"}}]})(props);
};
GrVimeo.displayName = "GrVimeo";
var GrVirtualMachine = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,23 L14,23 L14,10 L1,10 L1,23 Z M10,19 L23,19 L23,6 L10,6 L10,19 Z M5,14 L18,14 L18,1 L5,1 L5,14 Z"}}]})(props);
};
GrVirtualMachine.displayName = "GrVirtualMachine";
var GrVirtualStorage = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000000","strokeWidth":"2","d":"M12,22 C16.9705627,22 21,19.7614237 21,17 C21,14.2385763 16.9705627,12 12,12 C7.02943725,12 3,14.2385763 3,17 C3,19.7614237 7.02943725,22 12,22 Z M12,17.5 C16.9705627,17.5 21,15.2614237 21,12.5 C21,9.73857625 16.9705627,7.5 12,7.5 C7.02943725,7.5 3,9.73857625 3,12.5 C3,15.2614237 7.02943725,17.5 12,17.5 Z M12,12 C16.9705627,12 21,9.76142375 21,7 C21,4.23857625 16.9705627,2 12,2 C7.02943725,2 3,4.23857625 3,7 C3,9.76142375 7.02943725,12 12,12 Z"}}]})(props);
};
GrVirtualStorage.displayName = "GrVirtualStorage";
var GrVisa = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.75604904,6.3421103 C4.34405863,5.55921989 2.73289927,4.92988052 0.93115208,4.49372953 L0.98977571,4.14310685 L8.39658295,4.14310685 C9.39421768,4.18029541 10.2006584,4.49872244 10.4787118,5.56582745 L12.0890953,13.309165 C12.0891819,13.3094435 12.0892685,13.3097219 12.0893551,13.3100003 L12.5685021,15.6453901 L17.065563,4.15352309 L21.9311521,4.15352309 L14.6996992,20.9731676 L9.8397917,20.9787631 L5.75604904,6.3421103 L5.75604904,6.3421103 Z"}}]})(props);
};
GrVisa.displayName = "GrVisa";
var GrVmMaintenance = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,9.9999 L19,1.9999 L7,1.9999 L7,13.9999 L14,13.9999 L14,6.9999 L2,6.9999 L2,18.9999 L10,18.9999 M14,23 L20,17 M21,14 C19.8954305,14 19,14.8954305 19,16 C19,17.1045695 19.8954305,18 21,18 C22.1045695,18 23,17.1045695 23,16"}}]})(props);
};
GrVmMaintenance.displayName = "GrVmMaintenance";
var GrVmware = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.57403651,0 C4.61501014,0 3.84584178,0.753590264 3.84584178,1.67951318 L3.84584178,7.42393509 L1.72819473,7.42393509 C0.769168365,7.42393486 0,8.18044625 0,9.10344828 L0,21.5415822 C0,22.4675058 0.769168357,23.2210953 1.72819473,23.2210953 L14.5801217,23.2210953 C15.5391481,23.2210946 16.3326572,22.4675051 16.3326572,21.5415822 L16.3326572,19.4969574 L22.2718053,19.4969574 C23.229858,19.4969582 24,18.7404462 24,17.8174442 L24,5.37931034 C24,4.45533461 23.229858,3.72413793 22.2718053,3.72413793 L20.1541582,3.72413793 L20.1541582,1.67951318 C20.1541582,0.753590287 19.3830426,0 18.4259635,0 L5.57403651,0 L5.57403651,0 Z M5.57403651,0.949290061 L18.4259635,0.949290061 C18.8455976,0.949290139 19.1805274,1.2725355 19.1805274,1.67951318 L19.1805274,3.72413793 L9.4198783,3.72413793 C8.46279919,3.72413785 7.6673428,4.45533469 7.6673428,5.37931034 L7.6673428,7.42393509 L4.81947262,7.42393509 L4.81947262,1.67951318 C4.81947246,1.2725355 5.15148073,0.949290061 5.57403651,0.949290061 L5.57403651,0.949290061 Z M9.4198783,4.64908722 L19.1805274,4.64908722 L19.1805274,14.0933063 C19.1805274,14.5002848 18.8455984,14.8478702 18.4259635,14.8478702 L16.3326572,14.8478702 L16.3326572,9.10344828 C16.332658,8.18044625 15.5391481,7.42393509 14.5801217,7.42393509 L8.64097363,7.42393509 L8.64097363,5.37931034 C8.64097363,4.97330621 9.00024341,4.64908722 9.4198783,4.64908722 L9.4198783,4.64908722 Z M20.1541582,4.64908722 L22.2718053,4.64908722 C22.6924138,4.64908707 23.0263692,4.97330629 23.0263692,5.37931034 L23.0263692,17.8174442 C23.0263692,18.2234483 22.6924138,18.5476673 22.2718053,18.5476673 L16.3326572,18.5476673 L16.3326572,15.7971602 L18.4259635,15.7971602 C19.3830418,15.7971595 20.1541582,15.0192292 20.1541582,14.0933063 L20.1541582,4.64908722 L20.1541582,4.64908722 Z M1.72819473,8.37322515 L3.84584178,8.37322515 L3.84584178,14.0933063 C3.84584178,15.01923 4.61501014,15.7971602 5.57403651,15.7971602 L7.6673428,15.7971602 L7.6673428,17.8174442 C7.66734295,18.7404462 8.46279919,19.4969574 9.4198783,19.4969574 L15.3590264,19.4969574 L15.3590264,21.5415822 C15.3590271,21.947587 15.0026775,22.2718053 14.5801217,22.2718053 L1.72819473,22.2718053 C1.30271805,22.2718045 0.973630832,21.9475862 0.973630832,21.5415822 L0.973630832,9.10344828 C0.97363091,8.69841785 1.30271805,8.37322515 1.72819473,8.37322515 L1.72819473,8.37322515 Z M4.81947262,8.37322515 L7.6673428,8.37322515 L7.6673428,14.8478702 L5.57403651,14.8478702 C5.15148073,14.8478702 4.81947262,14.500284 4.81947262,14.0933063 L4.81947262,8.37322515 L4.81947262,8.37322515 Z M8.64097363,8.37322515 L14.5801217,8.37322515 C15.0026775,8.37322515 15.3590264,8.69841785 15.3590264,9.10344828 L15.3590264,14.8478702 L8.64097363,14.8478702 L8.64097363,8.37322515 L8.64097363,8.37322515 Z M8.64097363,15.7971602 L15.3590264,15.7971602 L15.3590264,18.5476673 L9.4198783,18.5476673 C9.00024341,18.5476673 8.64097363,18.2234483 8.64097363,17.8174442 L8.64097363,15.7971602 L8.64097363,15.7971602 Z"}}]})(props);
};
GrVmware.displayName = "GrVmware";
var GrVolumeControl = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z M8,8 L11,11 M12,22 C15.4612937,22 18.5118579,20.2414583 20.3069882,17.5690793 C21.3761716,15.9774047 22,14.0615538 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12"}}]})(props);
};
GrVolumeControl.displayName = "GrVolumeControl";
var GrVolumeLow = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,16 L15,16 C17.209139,16 19,14.209139 19,12 C19,9.790861 17.209139,8 15,8"}}]})(props);
};
GrVolumeLow.displayName = "GrVolumeLow";
var GrVolumeMute = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,9 L21,15 M21,9 L15,15"}}]})(props);
};
GrVolumeMute.displayName = "GrVolumeMute";
var GrVolume = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12"}}]})(props);
};
GrVolume.displayName = "GrVolume";
var GrVulnerability = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,0 L12,24 L12,0 Z M0,12 L24,12 L0,12 Z M17,12 C17,9.243 14.757,7 12,7 C9.243,7 7,9.243 7,12 C7,14.757 9.243,17 12,17 C14.757,17 17,14.757 17,12 L17,12 Z M12,21 C7.038,21 3,16.963 3,12 C3,7.037 7.038,3 12,3 C16.962,3 21,7.037 21,12 C21,16.963 16.962,21 12,21 L12,21 Z"}}]})(props);
};
GrVulnerability.displayName = "GrVulnerability";
var GrWaypoint = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","points":"3 11 11 13 13 21 21 3"}}]})(props);
};
GrWaypoint.displayName = "GrWaypoint";
var GrWheelchairActive = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7,6 L10,3 L17,6 L17,8 L14,11 M9,22 C12.3137085,22 15,19.3137085 15,16 C15,12.6862915 12.3137085,10 9,10 C5.6862915,10 3,12.6862915 3,16 C3,19.3137085 5.6862915,22 9,22 Z M9,17 C9.55228475,17 10,16.5522847 10,16 C10,15.4477153 9.55228475,15 9,15 C8.44771525,15 8,15.4477153 8,16 C8,16.5522847 8.44771525,17 9,17 Z M14,12 L19,15 L17,21 M19,4 C19.5522847,4 20,3.55228475 20,3 C20,2.44771525 19.5522847,2 19,2 C18.4477153,2 18,2.44771525 18,3 C18,3.55228475 18.4477153,4 19,4 Z M13,10 L17,6 M11,10 L15,6"}}]})(props);
};
GrWheelchairActive.displayName = "GrWheelchairActive";
var GrWheelchair = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10,3 L10,12 L17,12 L19,18 L21,18 M15,9 L9,9 C5.6862915,9 3,11.6862915 3,15 C3,18.3137085 5.6862915,21 9,21 C12.3137085,21 15,18.3137085 15,15 M11,4 C11.5522847,4 12,3.55228475 12,3 C12,2.44771525 11.5522847,2 11,2 C10.4477153,2 10,2.44771525 10,3 C10,3.55228475 10.4477153,4 11,4 Z"}}]})(props);
};
GrWheelchair.displayName = "GrWheelchair";
var GrWifiLow = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"stroke":"#000","strokeWidth":"2","d":"M12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 C10.8954305,16 10,16.8954305 10,18 C10,19.1045695 10.8954305,20 12,20 Z M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593"}},{"tag":"path","attr":{"stroke":"#000","strokeOpacity":".2","strokeWidth":"2","d":"M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322 M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506","opacity":".8"}}]}]})(props);
};
GrWifiLow.displayName = "GrWifiLow";
var GrWifiMedium = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"stroke":"#000","strokeWidth":"2","d":"M12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 C10.8954305,16 10,16.8954305 10,18 C10,19.1045695 10.8954305,20 12,20 Z M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593 M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322"}},{"tag":"path","attr":{"stroke":"#000","strokeOpacity":".2","strokeWidth":"2","d":"M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506","opacity":".8"}}]}]})(props);
};
GrWifiMedium.displayName = "GrWifiMedium";
var GrWifiNone = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"18","r":"2","stroke":"#000","strokeWidth":"2"}},{"tag":"path","attr":{"stroke":"#000","strokeOpacity":".2","strokeWidth":"2","d":"M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593 M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322 M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506","opacity":".8"}}]}]})(props);
};
GrWifiNone.displayName = "GrWifiNone";
var GrWifi = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 C10.8954305,16 10,16.8954305 10,18 C10,19.1045695 10.8954305,20 12,20 Z M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593 M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322 M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506"}}]})(props);
};
GrWifi.displayName = "GrWifi";
var GrWindowsLegacy = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{"fill":"none","fillRule":"evenodd","transform":"translate(0 1)"},"child":[{"tag":"path","attr":{"d":"M2.61341757,9.09629841 C2.7158178,8.7382976 2.805018,8.42456355 2.89541821,8.11136284 C3.56075305,5.80989096 4.22662122,3.50828575 4.8912894,1.2065472 C4.91715612,1.11628032 4.94488952,1.04348016 5.04795642,1.0020134 C6.19889236,0.54067902 7.37476169,0.176944863 8.61343117,0.0430778925 C10.2790349,-0.137189183 11.8078384,0.252278367 13.2198416,1.13694704 C13.4037087,1.25228063 13.5815758,1.37681425 13.7695762,1.48414783 C13.8894431,1.55294798 13.9063765,1.62561481 13.8678431,1.75601511 C13.3153085,3.65268607 12.7681072,5.55149038 12.2195727,7.44962801 C12.0282389,8.11136284 11.8315718,8.77229768 11.6463714,9.43629918 C11.6051713,9.58403285 11.5710379,9.60896624 11.4346376,9.51576603 C10.6210357,8.96309811 9.7627671,8.49949706 8.80209826,8.25256316 C7.58996218,7.94109579 6.3794261,8.00362927 5.1699567,8.26842987 C4.30822141,8.45709696 3.47768619,8.74189761 2.61341757,9.09629841"}},{"tag":"path","attr":{"d":"M17.2771841,12.0252117 C15.748114,12.0356117 14.3994443,11.4986772 13.1433081,10.673742 C12.7882406,10.4397415 12.7886406,10.4422748 12.9053076,10.0392072 C13.6165092,7.58053497 14.3261108,5.12119607 15.0394457,2.66292383 C15.1090459,2.42198995 15.0575791,2.37798985 15.3281131,2.5593236 C16.2241151,3.15892495 17.1677172,3.65252607 18.2365196,3.8690599 C19.3649222,4.09746041 20.4851914,4.01946024 21.5987939,3.77025967 C22.2990622,3.61345932 22.9791971,3.39345882 23.6470652,3.13545823 C23.7433321,3.09852482 23.841999,3.03665801 23.9410659,3.12825822 C24.0378661,3.21772509 23.993066,3.31839198 23.9631993,3.42092555 C23.2499977,5.88613113 22.5371961,8.35133672 21.8289278,10.8178756 C21.7963944,10.9330759 21.7361276,10.9893427 21.629594,11.0320095 C20.4671914,11.4973439 19.2778553,11.8633447 18.0245192,11.982945 C17.7765186,12.0066783 17.5266514,12.0116117 17.2771841,12.0252117"}},{"tag":"path","attr":{"d":"M21.3774601,12.3517725 C21.2214597,12.8916403 21.0781261,13.3883081 20.9345258,13.8851093 C20.3333244,15.9657806 19.7294564,18.0467187 19.133855,20.1296567 C19.0849216,20.2995238 18.999188,20.3868573 18.8355877,20.4499241 C17.8101187,20.8453917 16.767183,21.1704591 15.6730472,21.3241928 C13.9798433,21.5615267 12.4050398,21.2415259 10.9429031,20.3605906 C10.7010359,20.2151236 10.4675687,20.0545899 10.2238348,19.9119229 C10.1034345,19.8412561 10.0921012,19.7668559 10.1301013,19.638989 C10.6530358,17.8428516 11.1705036,16.0445808 11.6902381,14.2472434 C11.9013053,13.5156418 12.1131724,12.7837734 12.3247729,12.0528384 C12.3922397,11.8223046 12.3930397,11.8233713 12.6042402,11.9623049 C13.3642419,12.4640394 14.1561104,12.8985737 15.0387791,13.1489743 C16.3118486,13.5093751 17.5858515,13.4499083 18.8613211,13.1671076 C19.7098563,12.9795072 20.5285248,12.6953732 21.3774601,12.3517725"}},{"tag":"path","attr":{"d":"M11.1789303,11.0465695 C11.0506634,11.4885705 10.9317298,11.8983048 10.8131962,12.3081724 C10.1897281,14.4641772 9.56425999,16.6203155 8.94679192,18.7783204 C8.8931918,18.9633874 8.84385836,18.9676541 8.69425802,18.8655205 C7.83718941,18.2809859 6.92972068,17.8009848 5.9074517,17.5680509 C4.74984908,17.3036503 3.5983798,17.3749838 2.44904386,17.6268511 C1.72917556,17.7844514 1.03050731,18.0113853 0.342905756,18.2757859 C0.252505551,18.3104526 0.159972008,18.3605861 0.0658384616,18.2835192 C-0.0394951104,18.1976524 0.00623832657,18.0928521 0.0351717255,17.9928519 C0.746506671,15.5340463 1.45837495,13.0755074 2.16810989,10.6163019 C2.19837663,10.5137683 2.24971008,10.4544348 2.35291031,10.4131014 C3.53371299,9.93803365 4.74171573,9.56909948 6.01571861,9.45123255 C7.58705551,9.30656555 9.0422588,9.66336636 10.3882619,10.4799015 C10.618129,10.6195019 10.8451962,10.7648355 11.0723967,10.9100359 C11.1302635,10.9475026 11.2103971,10.980036 11.1789303,11.0465695"}}]}]})(props);
};
GrWindowsLegacy.displayName = "GrWindowsLegacy";
var GrWindows = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M23.923,0 L10.959,1.893 L10.959,11.481 L23.923,11.379 L23.923,0 Z M0,3.398 L0.009,11.553 L9.782,11.498 L9.778,2.066 L0,3.398 Z M0.008,20.681 L9.781,22.025 L9.773,12.585 L0.007,12.522 L0.008,20.681 Z M10.959,22.171 L23.923,24 L23.927,12.674 L10.941,12.652 L10.959,22.171 Z"}}]})(props);
};
GrWindows.displayName = "GrWindows";
var GrWordpress = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M0,11.99925 C0,16.749 2.76,20.85375 6.76275,22.7985 L1.03875,7.116 C0.3735,8.60775 0,10.25925 0,11.99925 M20.10015,11.394 C20.10015,9.9105 19.5669,8.88375 19.1109,8.085 C18.50265,7.09575 17.9319,6.25875 17.9319,5.27025 C17.9319,4.167 18.76815,3.14025 19.94715,3.14025 C20.0004,3.14025 20.05065,3.147 20.1024,3.15 C17.9679,1.194 15.12315,0 11.9994,0 C7.8069,0 4.11915,2.151 1.9734,5.40825 C2.2554,5.41725 2.5209,5.4225 2.7459,5.4225 C4.00065,5.4225 5.9439,5.27025 5.9439,5.27025 C6.5904,5.232 6.6669,6.183 6.0204,6.25875 C6.0204,6.25875 5.37015,6.33525 4.64715,6.3735 L9.01665,19.371 L11.64315,11.49525 L9.77415,6.3735 C9.12765,6.33525 8.5149,6.25875 8.5149,6.25875 C7.8684,6.2205 7.94415,5.232 8.5914,5.27025 C8.5914,5.27025 10.5729,5.4225 11.7519,5.4225 C13.00665,5.4225 14.9499,5.27025 14.9499,5.27025 C15.59715,5.232 15.6729,6.183 15.0264,6.25875 C15.0264,6.25875 14.3754,6.33525 13.65315,6.3735 L17.98965,19.272 L19.1874,15.273 C19.7049,13.6125 20.10015,12.42075 20.10015,11.394 M12.21015,13.04895 L8.6094,23.5107 C9.6849,23.8272 10.8219,23.9997 11.9994,23.9997 C13.39665,23.9997 14.7369,23.7582 15.98415,23.31945 C15.95265,23.2677 15.92265,23.2137 15.89865,23.15445 L12.21015,13.04895 Z M22.52925,6.242475 C22.581,6.624975 22.61025,7.034475 22.61025,7.476225 C22.61025,8.693475 22.38225,10.062225 21.6975,11.774475 L18.03225,22.371225 C21.6,20.291475 23.99925,16.425975 23.99925,11.999475 C23.99925,9.912975 23.466,7.951725 22.52925,6.242475"}}]})(props);
};
GrWordpress.displayName = "GrWordpress";
var GrWorkshop = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M19,7 C19,7 14,14 6.5,14 C4.5,14 1,15 1,19 L1,23 L12,23 L12,19 C12,16.5 15,18 19,11 L17.5,9.5 M3,5 L3,2 L23,2 L23,16 L20,16 M11,1 L15,1 L15,3 L11,3 L11,1 Z M6.5,14 C8.43299662,14 10,12.4329966 10,10.5 C10,8.56700338 8.43299662,7 6.5,7 C4.56700338,7 3,8.56700338 3,10.5 C3,12.4329966 4.56700338,14 6.5,14 Z"}}]})(props);
};
GrWorkshop.displayName = "GrWorkshop";
var GrYoga = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12,11 L11,14 L12,17 L10.5,17 L9,14 L9.5,9.5 L12,11 Z M13,2 L9,6 L9,11 L9,14 L10,17 L6,17 L3,22 M20.5,22 L15.5,18.5 L12,17 L11,14 L12,11 L15.5,13 L15.5,18.5 M14,8.5 C13.4477153,8.5 13,8.05228475 13,7.5 C13,6.94771525 13.4477153,6.5 14,6.5 C14.5522847,6.5 15,6.94771525 15,7.5 C15,8.05228475 14.5522847,8.5 14,8.5 Z M11,10.5 L10,17 L10,13.5 L11,10.5 Z"}}]})(props);
};
GrYoga.displayName = "GrYoga";
var GrYoutube = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"}}]})(props);
};
GrYoutube.displayName = "GrYoutube";
var GrZoomIn = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,16 L23,23 L16,16 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M10,15 L10,5 M5,10 L15,10"}}]})(props);
};
GrZoomIn.displayName = "GrZoomIn";
var GrZoomOut = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#000","strokeWidth":"2","d":"M16,16 L23,23 L16,16 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M5,10 L15,10"}}]})(props);
};
GrZoomOut.displayName = "GrZoomOut";

// EXTERNAL MODULE: ./src/pages/basket/styles/item.style.less
var item_style = __webpack_require__(59);

// CONCATENATED MODULE: ./src/pages/basket/item.js








function item_createSuper(Derived) { var hasNativeReflectConstruct = item_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function item_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var item_BasketItem = /*#__PURE__*/function (_Component) {
  inherits_default()(BasketItem, _Component);

  var _super = item_createSuper(BasketItem);

  function BasketItem(props) {
    var _this;

    classCallCheck_default()(this, BasketItem);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "delFromBasket", function () {
      var info = _this.props.info;

      _this.props.dispatch({
        type: "REMOVE_ITEM",
        data: _this.props.items.filter(function (item) {
          return item.id != info.id;
        })
      });
    });

    _this.state = {};
    return _this;
  }

  createClass_default()(BasketItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(es_Card, null, /*#__PURE__*/react_default.a.createElement(es_CardImg, {
        src: this.props.info.src,
        className: "basketItemImg"
      }), /*#__PURE__*/react_default.a.createElement(es_CardBody, null, /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", null, this.props.info.title)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", {
        className: "description"
      }, this.props.info.altText)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", {
        className: "description"
      }, this.props.info.status)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(GrCurrency, null), /*#__PURE__*/react_default.a.createElement("span", null, "\u0426\u0435\u043D\u0430 : ", this.props.info.price, " ")), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(es_Button, {
        onClick: this.delFromBasket
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B")))))));
    }
  }]);

  return BasketItem;
}(react["Component"]);

var item_mapStateFromProps = function mapStateFromProps(state) {
  return {
    items: state.items
  };
};

/* harmony default export */ var basket_item = (connect_connect(item_mapStateFromProps)(item_BasketItem));
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Portal.js





var Portal_propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

var Portal_Portal =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(react_default.a.Component);

Portal_Portal.propTypes = Portal_propTypes;
/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Fade.js









var Fade_propTypes = _objectSpread({}, react_transition_group["Transition"].propTypes, {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  tag: tagPropType,
  baseClass: prop_types_default.a.string,
  baseClassActive: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
});

var Fade_defaultProps = _objectSpread({}, react_transition_group["Transition"].defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return react_default.a.createElement(react_transition_group["Transition"], transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classnames_default()(className, baseClass, isActive && baseClassActive), cssModule);
    return react_default.a.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = Fade_propTypes;
Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var es_Fade = (Fade);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Modal.js











function Modal_noop() {}

var FadePropTypes = prop_types_default.a.shape(es_Fade.propTypes);
var Modal_propTypes = {
  isOpen: prop_types_default.a.bool,
  autoFocus: prop_types_default.a.bool,
  centered: prop_types_default.a.bool,
  scrollable: prop_types_default.a.bool,
  size: prop_types_default.a.string,
  toggle: prop_types_default.a.func,
  keyboard: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  labelledBy: prop_types_default.a.string,
  backdrop: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['static'])]),
  onEnter: prop_types_default.a.func,
  onExit: prop_types_default.a.func,
  onOpened: prop_types_default.a.func,
  onClosed: prop_types_default.a.func,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  wrapClassName: prop_types_default.a.string,
  modalClassName: prop_types_default.a.string,
  backdropClassName: prop_types_default.a.string,
  contentClassName: prop_types_default.a.string,
  external: prop_types_default.a.node,
  fade: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  zIndex: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func]),
  unmountOnClose: prop_types_default.a.bool,
  returnFocusAfterClose: prop_types_default.a.bool
};
var propsToOmit = Object.keys(Modal_propTypes);
var Modal_defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: Modal_noop,
  onClosed: Modal_noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true
};

var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    }

    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen) {
        this.close();
      }
    }

    this._isMounted = false;
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || Modal_noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || Modal_noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      document.body.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classnames_default()(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
    }

    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      document.body.removeChild(this._element);
      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return react_default.a.createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classnames_default()(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), react_default.a.createElement("div", {
      className: mapToCssModules(classnames_default()('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread({}, es_Fade.defaultProps, {}, this.props.modalTransition, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread({}, es_Fade.defaultProps, {}, this.props.backdropTransition, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? react_default.a.createElement(es_Fade, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classnames_default()('modal-backdrop', backdropClassName), cssModule)
      })) : react_default.a.createElement("div", {
        className: mapToCssModules(classnames_default()('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return react_default.a.createElement(es_Portal, {
        node: this._element
      }, react_default.a.createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, react_default.a.createElement(es_Fade, _extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classnames_default()('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(react_default.a.Component);

Modal_Modal.propTypes = Modal_propTypes;
Modal_Modal.defaultProps = Modal_defaultProps;
Modal_Modal.openCount = 0;
/* harmony default export */ var es_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/ModalHeader.js






var ModalHeader_propTypes = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: prop_types_default.a.func,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  closeAriaLabel: prop_types_default.a.string,
  charCode: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  close: prop_types_default.a.object
};
var ModalHeader_defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader_ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

  var classes = mapToCssModules(classnames_default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = react_default.a.createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('close', cssModule),
      "aria-label": closeAriaLabel
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }

  return react_default.a.createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), react_default.a.createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
};

ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ var es_ModalHeader = (ModalHeader_ModalHeader);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/ModalFooter.js






var ModalFooter_propTypes = {
  tag: tagPropType,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var ModalFooter_defaultProps = {
  tag: 'div'
};

var ModalFooter_ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames_default()(className, 'modal-footer'), cssModule);
  return react_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalFooter_ModalFooter.propTypes = ModalFooter_propTypes;
ModalFooter_ModalFooter.defaultProps = ModalFooter_defaultProps;
/* harmony default export */ var es_ModalFooter = (ModalFooter_ModalFooter);
// CONCATENATED MODULE: ./src/components/modal/index.js






function modal_createSuper(Derived) { var hasNativeReflectConstruct = modal_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function modal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var modal_ModalBox = /*#__PURE__*/function (_Component) {
  inherits_default()(ModalBox, _Component);

  var _super = modal_createSuper(ModalBox);

  function ModalBox(props) {
    classCallCheck_default()(this, ModalBox);

    return _super.call(this, props);
  }

  createClass_default()(ModalBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          toggle = _this$props.toggle,
          header = _this$props.header,
          fnOk = _this$props.fnOk,
          fnCancel = _this$props.fnCancel,
          button = _this$props.button;
      return /*#__PURE__*/react_default.a.createElement(es_Modal, {
        isOpen: isOpen,
        toggle: toggle
      }, /*#__PURE__*/react_default.a.createElement(es_ModalHeader, null, header), /*#__PURE__*/react_default.a.createElement(es_ModalFooter, null, button.ok != undefined ? /*#__PURE__*/react_default.a.createElement(es_Button, {
        color: "success",
        onClick: fnOk
      }, button.ok) : null, /*#__PURE__*/react_default.a.createElement(es_Button, {
        color: "secondary",
        onClick: fnCancel
      }, button.cancel)));
    }
  }]);

  return ModalBox;
}(react["Component"]);


// EXTERNAL MODULE: ./src/pages/catalog/items.json
var catalog_items = __webpack_require__(10);

// EXTERNAL MODULE: ./src/pages/catalog/styles/item.style.less
var styles_item_style = __webpack_require__(60);

// CONCATENATED MODULE: ./src/pages/catalog/item.js








function catalog_item_createSuper(Derived) { var hasNativeReflectConstruct = catalog_item_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function catalog_item_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var item_CatalogItem = /*#__PURE__*/function (_Component) {
  inherits_default()(CatalogItem, _Component);

  var _super = catalog_item_createSuper(CatalogItem);

  function CatalogItem(props) {
    var _this;

    classCallCheck_default()(this, CatalogItem);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "addToBasket", function () {
      if (_this.props.items.length == 0) {
        _this.setState({
          showModal: true
        });

        _this.props.dispatch({
          type: "ADD_ITEM",
          data: _this.props.inf
        });
      } else if (!_this.props.items.includes(_this.props.inf)) {
        _this.setState({
          showModal: true
        });

        _this.props.dispatch({
          type: "ADD_ITEM",
          data: _this.props.inf
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleModal", function () {
      _this.setState({
        showModal: !_this.state.showModal
      });
    });

    _this.state = {
      showModal: undefined
    };
    return _this;
  }

  createClass_default()(CatalogItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, this.state.showModal ? /*#__PURE__*/react_default.a.createElement(modal_ModalBox, {
        isOpen: this.state.showModal,
        toggle: this.handleModal,
        fnCancel: this.handleModal,
        button: {
          cancel: "Ok"
        },
        header: "Товар успешно добавлен в корзину"
      }) : null, /*#__PURE__*/react_default.a.createElement(es_Card, null, /*#__PURE__*/react_default.a.createElement(Link, {
        to: "/product/".concat(this.props.inf.id)
      }, /*#__PURE__*/react_default.a.createElement(es_CardImg, {
        src: this.props.inf.src
      })), /*#__PURE__*/react_default.a.createElement(es_CardBody, null, /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12
      }, this.props.inf.title), /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12
      }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", {
        className: "description"
      }, this.props.inf.description)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(GrCurrency, null), /*#__PURE__*/react_default.a.createElement("span", null, "\u0426\u0435\u043D\u0430 : ", this.props.inf.price)), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(GrGallery, null), /*#__PURE__*/react_default.a.createElement("a", {
        href: "#",
        id: "showPhoto"
      }, "\u0413\u0430\u043B\u043B\u0435\u0440\u0435\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439")), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(es_Button, {
        onClick: this.addToBasket
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))))));
    }
  }]);

  return CatalogItem;
}(react["Component"]);

var catalog_item_mapStateFromProps = function mapStateFromProps(state) {
  return {
    items: state.items
  };
};

console.log(catalog_items, "items");
/* harmony default export */ var catalog_item = (connect_connect(catalog_item_mapStateFromProps)(item_CatalogItem));
// EXTERNAL MODULE: ./src/pages/catalog/styles/index.style.less
var catalog_styles_index_style = __webpack_require__(61);

// CONCATENATED MODULE: ./src/pages/catalog/index.js








function catalog_createSuper(Derived) { var hasNativeReflectConstruct = catalog_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function catalog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var catalog_Catalog = /*#__PURE__*/function (_Component) {
  inherits_default()(Catalog, _Component);

  var _super = catalog_createSuper(Catalog);

  function Catalog(props) {
    var _this;

    classCallCheck_default()(this, Catalog);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "StatusSwitch", function () {
      var val = document.querySelector("select[name=status]").value;
      var arrItems = [];
      catalog_items.map(function (item) {
        item.status === val ? arrItems.push(item) : null;

        _this.setState({
          items: arrItems,
          defaultItems: false
        });

        if (val == "all") {
          _this.setState({
            defaultItems: true
          });
        }
      });
      document.querySelector("select[name=price]").value = "";
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "PriceSwitch", function () {
      var val = document.querySelector("select[name=price]").value;

      if (val === "ascending") {
        catalog_items.sort(function (a, b) {
          return a.price - b.price;
        });

        _this.setState({
          items: catalog_items
        });
      } else if (val === "descending") {
        catalog_items.sort(function (a, b) {
          return b.price - a.price;
        });

        _this.setState({
          items: catalog_items
        });
      }

      document.querySelector("select[name=status]").value = "";
      document.querySelector("select[name=alpha]").value = "";
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "AlphaSwitch", function () {
      var val = document.querySelector("select[name=alpha]").value;

      if (val === "ascending") {
        catalog_items.sort(function (a, b) {
          var titleA = a.title.toLowerCase(),
              titleB = b.title.toLowerCase();
          if (titleA > titleB) return 1;
          if (titleA < titleB) return -1;
        });

        _this.setState({
          items: catalog_items
        });
      } else if (val === "descending") {
        catalog_items.sort(function (a, b) {
          var titleA = a.title.toLowerCase(),
              titleB = b.title.toLowerCase();
          if (titleB > titleA) return 1;
          if (titleB < titleA) return -1;
        });

        _this.setState({
          items: catalog_items
        });
      }

      document.querySelector("select[name=status]").value = "";
      document.querySelector("select[name=price]").value = "";
    });

    _this.state = {
      items: [],
      defaultItems: true
    };
    return _this;
  } // static getDerivedStateFromProps(state,props) {
  //     console.log("getDerivedStateFromProps");
  //     return null
  // }
  // componentWillMount() {
  //     console.log("componentWillMount")
  // }


  createClass_default()(Catalog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12,
        className: "catalogHeading"
      }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")), /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: {
          offset: 1
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "sel"
      }, /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443"), /*#__PURE__*/react_default.a.createElement("select", {
        name: "status",
        onChange: function onChange() {
          return _this2.StatusSwitch();
        }
      }, /*#__PURE__*/react_default.a.createElement("option", {
        value: "all"
      }, "\u0412\u0441\u0435"), /*#__PURE__*/react_default.a.createElement("option", {
        value: "top"
      }, "\u0422\u043E\u043F"), /*#__PURE__*/react_default.a.createElement("option", {
        value: "sale"
      }, "\u0420\u0430\u0441\u043F\u0440\u043E\u0434\u0430\u0436\u0430"), /*#__PURE__*/react_default.a.createElement("option", {
        value: "new"
      }, "\u041D\u043E\u0432\u044B\u0435"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "sel"
      }, /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E \u0446\u0435\u043D\u0435"), /*#__PURE__*/react_default.a.createElement("select", {
        name: "price",
        onChange: function onChange() {
          return _this2.PriceSwitch();
        }
      }, /*#__PURE__*/react_default.a.createElement("option", {
        value: "ascending"
      }, "\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E"), /*#__PURE__*/react_default.a.createElement("option", {
        value: "descending"
      }, "\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "sel"
      }, /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443"), /*#__PURE__*/react_default.a.createElement("select", {
        name: "alpha",
        onChange: function onChange() {
          return _this2.AlphaSwitch();
        }
      }, /*#__PURE__*/react_default.a.createElement("option", {
        value: "ascending"
      }, "\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E"), /*#__PURE__*/react_default.a.createElement("option", {
        value: "descending"
      }, "\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E")))), /*#__PURE__*/react_default.a.createElement(es_Col, null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "catalogCards"
      }, this.state.defaultItems ? catalog_items.map(function (item) {
        return /*#__PURE__*/react_default.a.createElement(catalog_item, {
          inf: item,
          key: item.id
        });
      }) : this.state.items ? this.state.items.map(function (item) {
        return /*#__PURE__*/react_default.a.createElement(catalog_item, {
          inf: item,
          key: item.id
        });
      }) : null))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector("select[name=status]").selectedIndex = 0;
      document.querySelector("select[name=price]").selectedIndex = -1;
      document.querySelector("select[name=alpha]").selectedIndex = -1;
    }
  }]);

  return Catalog;
}(react["Component"]);


// CONCATENATED MODULE: ./src/pages/basket/index.js






function basket_createSuper(Derived) { var hasNativeReflectConstruct = basket_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function basket_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var basket_BasketPage = /*#__PURE__*/function (_Component) {
  inherits_default()(BasketPage, _Component);

  var _super = basket_createSuper(BasketPage);

  function BasketPage(props) {
    var _this;

    classCallCheck_default()(this, BasketPage);

    _this = _super.call(this, props);
    _this.state = {
      info: 1
    };
    return _this;
  }

  createClass_default()(BasketPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "catalogCards"
      }, this.props.items.map(function (item) {
        return /*#__PURE__*/react_default.a.createElement(basket_item, {
          key: item.id,
          info: item
        });
      }));
    }
  }]);

  return BasketPage;
}(react["Component"]);

var basket_mapStateFromProps = function mapStateFromProps(state) {
  return {
    items: state.items
  };
};

/* harmony default export */ var basket = (connect_connect(basket_mapStateFromProps)(basket_BasketPage));
// CONCATENATED MODULE: ./src/pages/404/index.js






function _404_createSuper(Derived) { var hasNativeReflectConstruct = _404_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _404_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var _404_Page404 = /*#__PURE__*/function (_Component) {
  inherits_default()(Page404, _Component);

  var _super = _404_createSuper(Page404);

  function Page404(props) {
    classCallCheck_default()(this, Page404);

    return _super.call(this, props);
  }

  createClass_default()(Page404, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("h1", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 "));
    }
  }]);

  return Page404;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/reactstrap/es/Form.js








var Form_propTypes = {
  children: prop_types_default.a.node,
  inline: prop_types_default.a.bool,
  tag: tagPropType,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var Form_defaultProps = {
  tag: 'form'
};

var Form_Form =
/*#__PURE__*/
function (_Component) {
  Object(inheritsLoose["a" /* default */])(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames_default()(className, inline ? 'form-inline' : false), cssModule);
    return react_default.a.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react["Component"]);

Form_Form.propTypes = Form_propTypes;
Form_Form.defaultProps = Form_defaultProps;
/* harmony default export */ var es_Form = (Form_Form);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Input.js





/* eslint react/prefer-stateless-function: 0 */




var Input_propTypes = {
  children: prop_types_default.a.node,
  type: prop_types_default.a.string,
  size: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  valid: prop_types_default.a.bool,
  invalid: prop_types_default.a.bool,
  tag: tagPropType,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func, prop_types_default.a.string]),
  plaintext: prop_types_default.a.bool,
  addon: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object
};
var Input_defaultProps = {
  type: 'text'
};

var Input_Input =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames_default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return react_default.a.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(react_default.a.Component);

Input_Input.propTypes = Input_propTypes;
Input_Input.defaultProps = Input_defaultProps;
/* harmony default export */ var es_Input = (Input_Input);
// CONCATENATED MODULE: ./src/pages/auth/index.js








function auth_createSuper(Derived) { var hasNativeReflectConstruct = auth_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function auth_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var auth_Auth = /*#__PURE__*/function (_Component) {
  inherits_default()(Auth, _Component);

  var _super = auth_createSuper(Auth);

  function Auth(props) {
    var _this;

    classCallCheck_default()(this, Auth);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "submit", function (e) {
      e.preventDefault();
      var formData = new FormData(e.target);
      var log = document.querySelector("input[name=login]").value;
      var pas = document.querySelector("input[name=password]").value;

      if (log === "Admin" && pas == 12345) {
        localStorage.setItem("auth", btoa("auth." + true + ".private"));

        _this.props.setUser({
          login: formData.get("login"),
          pass: formData.get("password")
        });
      } else {
        _this.setState({
          showModal: true
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleModal", function () {
      _this.setState({
        showModal: !_this.state.showModal
      });
    });

    _this.state = {
      showModal: false
    };
    return _this;
  }

  createClass_default()(Auth, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(es_Container, null, this.state.showModal ? /*#__PURE__*/react_default.a.createElement(modal_ModalBox, {
        isOpen: this.state.showModal,
        toggle: this.handleModal,
        fnCancel: this.handleModal,
        button: {
          cancel: "Ok"
        },
        header: "Неверно введены данные(login:Admin,pass:12345)"
      }) : null, /*#__PURE__*/react_default.a.createElement(es_Form, {
        onSubmit: this.submit
      }, /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12
      }, /*#__PURE__*/react_default.a.createElement(es_Input, {
        type: "text",
        name: "login"
      })), /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12
      }, /*#__PURE__*/react_default.a.createElement(es_Input, {
        type: "password",
        name: "password"
      })), /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 12
      }, /*#__PURE__*/react_default.a.createElement(es_Button, null, "\u0412\u043E\u0439\u0442\u0438")))));
    }
  }]);

  return Auth;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(22);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(33);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/pages/product/styles/style.product.less
var style_product = __webpack_require__(63);

// CONCATENATED MODULE: ./src/pages/product/index.js








function product_createSuper(Derived) { var hasNativeReflectConstruct = product_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function product_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var product_ProdPage = /*#__PURE__*/function (_Component) {
  inherits_default()(ProdPage, _Component);

  var _super = product_createSuper(ProdPage);

  function ProdPage(props) {
    var _this;

    classCallCheck_default()(this, ProdPage);

    _this = _super.call(this, props);
    _this.state = {
      prodItem: 1
    };
    return _this;
  }

  createClass_default()(ProdPage, [{
    key: "render",
    value: function render() {
      var info = this.state.prodItem;
      return /*#__PURE__*/react_default.a.createElement(es_Container, null, /*#__PURE__*/react_default.a.createElement(es_Row, {
        className: "head"
      }, /*#__PURE__*/react_default.a.createElement(es_Col, {
        lg: 4
      }, /*#__PURE__*/react_default.a.createElement(es_CardImg, {
        src: info.src,
        className: "prodImg"
      })), /*#__PURE__*/react_default.a.createElement(es_Col, null, /*#__PURE__*/react_default.a.createElement("p", {
        className: "title"
      }, info.title))), /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(GrCurrency, null), "Price : ", info.price, "$"), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(GrStatusInfo, null), "Status : ", info.status))), /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement("h4", null, "Gallery")), /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Col, null, /*#__PURE__*/react_default.a.createElement("p", null, info.description))), /*#__PURE__*/react_default.a.createElement(es_Row, null, /*#__PURE__*/react_default.a.createElement(es_Button, null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")));
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                catalog_items.forEach(function (item) {
                  var x = 1;

                  if (item.id == _this2.props.match.params.id) {
                    x = item;

                    _this2.setState({
                      prodItem: x
                    });
                  } // item.id == this.props.match.params.id ? x = item : console.log(0);
                  //     this.setState({
                  //     prodItem : x
                  // })


                  console.log(11111, _this2);
                  console.log(_this2.state);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }]);

  return ProdPage;
}(react["Component"]);


// CONCATENATED MODULE: ./src/pages/App.js








function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var App_App = /*#__PURE__*/function (_Component) {
  inherits_default()(App, _Component);

  var _super = App_createSuper(App);

  function App(props) {
    var _this;

    classCallCheck_default()(this, App);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "setUser", function (info) {
      _this.setState({
        user: info,
        auth: true
      });
    });

    console.log(atob(localStorage.getItem("auth")));
    _this.state = {
      user: null,
      auth: localStorage.getItem("auth") == "true" ? true : false
    };
    return _this;
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          auth = _this$state.auth,
          user = _this$state.user;
      console.log(this.props);
      return /*#__PURE__*/react_default.a.createElement(react_router_dom_BrowserRouter, null, /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(Header, {
        auth: auth
      }), /*#__PURE__*/react_default.a.createElement(react_router_Switch, null, /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        exact: true,
        path: "/react/",
        component: pages_index
      }), /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        exact: true,
        path: "/catalog/",
        component: catalog_Catalog
      }), /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        exact: true,
        path: "/product/:id",
        component: product_ProdPage
      }), /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        exact: true,
        path: "/basket/",
        component: basket
      }), !auth ? /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        exact: true,
        path: "/auth"
      }, /*#__PURE__*/react_default.a.createElement(auth_Auth, {
        setUser: this.setUser
      })) : /*#__PURE__*/react_default.a.createElement(Redirect, {
        to: "/basket/"
      }), /*#__PURE__*/react_default.a.createElement(react_router_Route, {
        component: _404_Page404
      })), /*#__PURE__*/react_default.a.createElement(Footer, null)));
    } // addItem = (e,data)=>{
    //     this.setState({
    //
    //     })
    // }

  }]);

  return App;
}(react["Component"]);

var App_mapStateFromProps = function mapStateFromProps(state) {
  console.log(state, 33333);
  return {
    items: state.items
  };
};

/* harmony default export */ var pages_App = (connect_connect(App_mapStateFromProps)(App_App)); //dispatch == update()
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(34);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/reducer/items.js

function Items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_ITEM":
      {
        return [].concat(toConsumableArray_default()(state), [action.data]);
        break;
      }

    case "REMOVE_ITEM":
      {
        return action.data;
        break;
      }

    default:
      {
        return state;
        break;
      }
  }
}
// CONCATENATED MODULE: ./src/reducer/index.js


/* harmony default export */ var src_reducer = (combineReducers({
  items: Items
}));
// CONCATENATED MODULE: ./src/app.js







var app_store = createStore(src_reducer); //reducer

if (document.getElementById("app")) {
  react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(components_Provider, {
    store: app_store
  }, /*#__PURE__*/react_default.a.createElement(pages_App, null)), document.getElementById("app"));
}

/***/ })
/******/ ]);