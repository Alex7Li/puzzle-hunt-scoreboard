/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-levenshtein/index.js":
/*!**********************************************!*\
  !*** ./node_modules/js-levenshtein/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nmodule.exports = (function()\n{\n  function _min(d0, d1, d2, bx, ay)\n  {\n    return d0 < d1 || d2 < d1\n        ? d0 > d2\n            ? d2 + 1\n            : d0 + 1\n        : bx === ay\n            ? d1\n            : d1 + 1;\n  }\n\n  return function(a, b)\n  {\n    if (a === b) {\n      return 0;\n    }\n\n    if (a.length > b.length) {\n      var tmp = a;\n      a = b;\n      b = tmp;\n    }\n\n    var la = a.length;\n    var lb = b.length;\n\n    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {\n      la--;\n      lb--;\n    }\n\n    var offset = 0;\n\n    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {\n      offset++;\n    }\n\n    la -= offset;\n    lb -= offset;\n\n    if (la === 0 || lb < 3) {\n      return lb;\n    }\n\n    var x = 0;\n    var y;\n    var d0;\n    var d1;\n    var d2;\n    var d3;\n    var dd;\n    var dy;\n    var ay;\n    var bx0;\n    var bx1;\n    var bx2;\n    var bx3;\n\n    var vector = [];\n\n    for (y = 0; y < la; y++) {\n      vector.push(y + 1);\n      vector.push(a.charCodeAt(offset + y));\n    }\n\n    var len = vector.length - 1;\n\n    for (; x < lb - 3;) {\n      bx0 = b.charCodeAt(offset + (d0 = x));\n      bx1 = b.charCodeAt(offset + (d1 = x + 1));\n      bx2 = b.charCodeAt(offset + (d2 = x + 2));\n      bx3 = b.charCodeAt(offset + (d3 = x + 3));\n      dd = (x += 4);\n      for (y = 0; y < len; y += 2) {\n        dy = vector[y];\n        ay = vector[y + 1];\n        d0 = _min(dy, d0, d1, bx0, ay);\n        d1 = _min(d0, d1, d2, bx1, ay);\n        d2 = _min(d1, d2, d3, bx2, ay);\n        dd = _min(d2, d3, dd, bx3, ay);\n        vector[y] = dd;\n        d3 = d2;\n        d2 = d1;\n        d1 = d0;\n        d0 = dy;\n      }\n    }\n\n    for (; x < lb;) {\n      bx0 = b.charCodeAt(offset + (d0 = x));\n      dd = ++x;\n      for (y = 0; y < len; y += 2) {\n        dy = vector[y];\n        vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);\n        d0 = dy;\n      }\n    }\n\n    return dd;\n  };\n})();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvanMtbGV2ZW5zaHRlaW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL015TGlicmFyeS8uL25vZGVfbW9kdWxlcy9qcy1sZXZlbnNodGVpbi9pbmRleC5qcz8zMWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKClcbntcbiAgZnVuY3Rpb24gX21pbihkMCwgZDEsIGQyLCBieCwgYXkpXG4gIHtcbiAgICByZXR1cm4gZDAgPCBkMSB8fCBkMiA8IGQxXG4gICAgICAgID8gZDAgPiBkMlxuICAgICAgICAgICAgPyBkMiArIDFcbiAgICAgICAgICAgIDogZDAgKyAxXG4gICAgICAgIDogYnggPT09IGF5XG4gICAgICAgICAgICA/IGQxXG4gICAgICAgICAgICA6IGQxICsgMTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKVxuICB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChhLmxlbmd0aCA+IGIubGVuZ3RoKSB7XG4gICAgICB2YXIgdG1wID0gYTtcbiAgICAgIGEgPSBiO1xuICAgICAgYiA9IHRtcDtcbiAgICB9XG5cbiAgICB2YXIgbGEgPSBhLmxlbmd0aDtcbiAgICB2YXIgbGIgPSBiLmxlbmd0aDtcblxuICAgIHdoaWxlIChsYSA+IDAgJiYgKGEuY2hhckNvZGVBdChsYSAtIDEpID09PSBiLmNoYXJDb2RlQXQobGIgLSAxKSkpIHtcbiAgICAgIGxhLS07XG4gICAgICBsYi0tO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgd2hpbGUgKG9mZnNldCA8IGxhICYmIChhLmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gYi5jaGFyQ29kZUF0KG9mZnNldCkpKSB7XG4gICAgICBvZmZzZXQrKztcbiAgICB9XG5cbiAgICBsYSAtPSBvZmZzZXQ7XG4gICAgbGIgLT0gb2Zmc2V0O1xuXG4gICAgaWYgKGxhID09PSAwIHx8IGxiIDwgMykge1xuICAgICAgcmV0dXJuIGxiO1xuICAgIH1cblxuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgeTtcbiAgICB2YXIgZDA7XG4gICAgdmFyIGQxO1xuICAgIHZhciBkMjtcbiAgICB2YXIgZDM7XG4gICAgdmFyIGRkO1xuICAgIHZhciBkeTtcbiAgICB2YXIgYXk7XG4gICAgdmFyIGJ4MDtcbiAgICB2YXIgYngxO1xuICAgIHZhciBieDI7XG4gICAgdmFyIGJ4MztcblxuICAgIHZhciB2ZWN0b3IgPSBbXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBsYTsgeSsrKSB7XG4gICAgICB2ZWN0b3IucHVzaCh5ICsgMSk7XG4gICAgICB2ZWN0b3IucHVzaChhLmNoYXJDb2RlQXQob2Zmc2V0ICsgeSkpO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSB2ZWN0b3IubGVuZ3RoIC0gMTtcblxuICAgIGZvciAoOyB4IDwgbGIgLSAzOykge1xuICAgICAgYngwID0gYi5jaGFyQ29kZUF0KG9mZnNldCArIChkMCA9IHgpKTtcbiAgICAgIGJ4MSA9IGIuY2hhckNvZGVBdChvZmZzZXQgKyAoZDEgPSB4ICsgMSkpO1xuICAgICAgYngyID0gYi5jaGFyQ29kZUF0KG9mZnNldCArIChkMiA9IHggKyAyKSk7XG4gICAgICBieDMgPSBiLmNoYXJDb2RlQXQob2Zmc2V0ICsgKGQzID0geCArIDMpKTtcbiAgICAgIGRkID0gKHggKz0gNCk7XG4gICAgICBmb3IgKHkgPSAwOyB5IDwgbGVuOyB5ICs9IDIpIHtcbiAgICAgICAgZHkgPSB2ZWN0b3JbeV07XG4gICAgICAgIGF5ID0gdmVjdG9yW3kgKyAxXTtcbiAgICAgICAgZDAgPSBfbWluKGR5LCBkMCwgZDEsIGJ4MCwgYXkpO1xuICAgICAgICBkMSA9IF9taW4oZDAsIGQxLCBkMiwgYngxLCBheSk7XG4gICAgICAgIGQyID0gX21pbihkMSwgZDIsIGQzLCBieDIsIGF5KTtcbiAgICAgICAgZGQgPSBfbWluKGQyLCBkMywgZGQsIGJ4MywgYXkpO1xuICAgICAgICB2ZWN0b3JbeV0gPSBkZDtcbiAgICAgICAgZDMgPSBkMjtcbiAgICAgICAgZDIgPSBkMTtcbiAgICAgICAgZDEgPSBkMDtcbiAgICAgICAgZDAgPSBkeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKDsgeCA8IGxiOykge1xuICAgICAgYngwID0gYi5jaGFyQ29kZUF0KG9mZnNldCArIChkMCA9IHgpKTtcbiAgICAgIGRkID0gKyt4O1xuICAgICAgZm9yICh5ID0gMDsgeSA8IGxlbjsgeSArPSAyKSB7XG4gICAgICAgIGR5ID0gdmVjdG9yW3ldO1xuICAgICAgICB2ZWN0b3JbeV0gPSBkZCA9IF9taW4oZHksIGQwLCBkZCwgYngwLCB2ZWN0b3JbeSArIDFdKTtcbiAgICAgICAgZDAgPSBkeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGQ7XG4gIH07XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/js-levenshtein/index.js\n");

/***/ }),

/***/ "./src/lev.js":
/*!********************!*\
  !*** ./src/lev.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLev\": () => (/* binding */ checkLev)\n/* harmony export */ });\n/* harmony import */ var js_levenshtein__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-levenshtein */ \"./node_modules/js-levenshtein/index.js\");\n/* harmony import */ var js_levenshtein__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_levenshtein__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction checkLev() {\n  const true_password = \"aaaaaa\"\n  const guess = document.getElementById('levguess')\n  alert(true_password)\n  alert(guess.value)\n  alert(js_levenshtein__WEBPACK_IMPORTED_MODULE_0___default()(true_password, guess.value))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGV2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUN6QztBQUNBLHdCQUF3QixRQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2xldi5qcz9hYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZXZlbnNodGVpbiBmcm9tICdqcy1sZXZlbnNodGVpbic7XG5mdW5jdGlvbiBjaGVja0xldigpIHtcbiAgY29uc3QgdHJ1ZV9wYXNzd29yZCA9IHByb2Nlc3MuZW52Lmxldl9wYXNzd29yZFxuICBjb25zdCBndWVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZndWVzcycpXG4gIGFsZXJ0KHRydWVfcGFzc3dvcmQpXG4gIGFsZXJ0KGd1ZXNzLnZhbHVlKVxuICBhbGVydChsZXZlbnNodGVpbih0cnVlX3Bhc3N3b3JkLCBndWVzcy52YWx1ZSkpXG59XG5leHBvcnQge1xuICBjaGVja0xldixcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lev.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lev.js");
/******/ 	window.MyLibrary = __webpack_exports__;
/******/ 	
/******/ })()
;