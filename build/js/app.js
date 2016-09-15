(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// entry point for app

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Main = (function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: 'run',
    value: function run() {
      console.log('Start App!!!!!');
    }
  }]);

  return Main;
})();

module.exports = Main;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MainJs = require('./Main.js');

var _MainJs2 = _interopRequireDefault(_MainJs);

var main = new _MainJs2['default']();
main.run();

},{"./Main.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYjA3MDk3L3dvcmtzcGFjZS92ZXJ5dGlyZC9zYW5kYm94LXBpeGkuanMvc3JjL2pzL01haW4uanMiLCIvVXNlcnMvYjA3MDk3L3dvcmtzcGFjZS92ZXJ5dGlyZC9zYW5kYm94LXBpeGkuanMvc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lDR00sSUFBSTtXQUFKLElBQUk7MEJBQUosSUFBSTs7O2VBQUosSUFBSTs7V0FDTCxlQUFHO0FBQ0osYUFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQy9COzs7U0FIRyxJQUFJOzs7QUFNVixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Ozs7OztzQkNUTCxXQUFXOzs7O0FBRTVCLElBQU0sSUFBSSxHQUFHLHlCQUFVLENBQUM7QUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gZW50cnkgcG9pbnQgZm9yIGFwcFxuXG5jbGFzcyBNYWluIHtcbiAgcnVuKCkge1xuICAgIGNvbnNvbGUubG9nKCdTdGFydCBBcHAhISEhIScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFpbjtcbiIsImltcG9ydCBNYWluIGZyb20gJy4vTWFpbi5qcyc7XG5cbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xubWFpbi5ydW4oKTtcbiJdfQ==
