(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _script = require('./script1.js');

var _script2 = _interopRequireDefault(_script);

var _script3 = require('./script2.js');

var _script4 = _interopRequireDefault(_script3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./script1.js":2,"./script2.js":3}],2:[function(require,module,exports){
"use strict";

function func1() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.forEach(function (element, index) {
		console.log(index + 1 + " \u2192 " + element / 7);
		console.log(element);
	});
}
func1(3, 5, 6, 89, 11);

},{}],3:[function(require,module,exports){
'use strict';

console.log('yadd kj nkjn kjn a');

},{}]},{},[1]);
