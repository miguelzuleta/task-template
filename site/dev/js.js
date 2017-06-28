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
func1(3, 5, 6, 2, 11);

},{}],3:[function(require,module,exports){
'use strict';

console.log('a');
console.log('neee');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2NvbXBvbmVudHMvanMvbWFpbi5qcyIsInNpdGUvY29tcG9uZW50cy9qcy9zY3JpcHQxLmpzIiwic2l0ZS9jb21wb25lbnRzL2pzL3NjcmlwdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7OztBQ0RBLFNBQVMsS0FBVCxHQUF1QjtBQUFBLG1DQUFMLElBQUs7QUFBTCxNQUFLO0FBQUE7O0FBRXRCLE1BQUssT0FBTCxDQUFhLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDaEMsVUFBUSxHQUFSLENBQWUsUUFBUSxDQUF2QixnQkFBOEIsVUFBVSxDQUF4QztBQUNBLFVBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxFQUhEO0FBS0E7QUFDRCxNQUFNLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsRUFBbEI7Ozs7O0FDUkEsUUFBUSxHQUFSLENBQVksR0FBWjtBQUNBLFFBQVEsR0FBUixDQUFZLE1BQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHMxIGZyb20gJy4vc2NyaXB0MS5qcydcbmltcG9ydCBzMiBmcm9tICcuL3NjcmlwdDIuanMnXG4iLCJmdW5jdGlvbiBmdW5jMSguLi5hcmdzKXtcbiBcblx0YXJncy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGAke2luZGV4ICsgMX0g4oaSICR7ZWxlbWVudCAvIDd9YClcblx0XHRjb25zb2xlLmxvZyhlbGVtZW50KVxuXHR9KVxuXG59XG5mdW5jMSgzLCA1LCA2LCAyLCAxMSk7XG4iLCJjb25zb2xlLmxvZygnYScpXG5jb25zb2xlLmxvZygnbmVlZScpXG4iXX0=
