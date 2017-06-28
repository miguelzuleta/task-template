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
func1(3, 5, 6, 2, 2);

},{}],3:[function(require,module,exports){
'use strict';

console.log('zzzzz');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2NvbXBvbmVudHMvanMvbWFpbi5qcyIsInNpdGUvY29tcG9uZW50cy9qcy9zY3JpcHQxLmpzIiwic2l0ZS9jb21wb25lbnRzL2pzL3NjcmlwdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7OztBQ0RBLFNBQVMsS0FBVCxHQUF1QjtBQUFBLG1DQUFMLElBQUs7QUFBTCxNQUFLO0FBQUE7O0FBRXRCLE1BQUssT0FBTCxDQUFhLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDaEMsVUFBUSxHQUFSLENBQWUsUUFBUSxDQUF2QixnQkFBOEIsVUFBVSxDQUF4QztBQUNBLFVBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxFQUhEO0FBS0E7QUFDRCxNQUFNLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEI7Ozs7O0FDUkEsUUFBUSxHQUFSLENBQVksT0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgczEgZnJvbSAnLi9zY3JpcHQxLmpzJ1xuaW1wb3J0IHMyIGZyb20gJy4vc2NyaXB0Mi5qcydcbiIsImZ1bmN0aW9uIGZ1bmMxKC4uLmFyZ3Mpe1xuIFxuXHRhcmdzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coYCR7aW5kZXggKyAxfSDihpIgJHtlbGVtZW50IC8gN31gKVxuXHRcdGNvbnNvbGUubG9nKGVsZW1lbnQpXG5cdH0pXG5cbn1cbmZ1bmMxKDMsIDUsIDYsIDIsIDIpXG4iLCJjb25zb2xlLmxvZygnenp6enonKVxuIl19
