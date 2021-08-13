/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SETTINGS */

const S = {
  "BACK_COLOR": [0,0,0],
  "LINE_COLOR": [32,32,32,0.5225225225225225],
  "DOTS_COLOR": [125, 227, 252],
  "STRO_COLOR": [32,32,32],
  "ACNT_COLOR": [125, 227, 252],
  "WAVE_COLOR": [255,255,255,0],

  "LINE_THICK": 0.6086956521739131,
  "DOTS_RADIUS": 40,
  "DOTS_STROKE": 0,

  "WAVE_ACTIVE": false,
  "WAVE_DELAY": 4.6,
  "WAVE_DURATION": 0.4,
  "WAVE_SCALE": -0.01,
  "WAVE_THICK": -0.4,
  "WAVE_RADIUS": 0,

  "GEN_COUNT": 879,
  "GEN_HEIGHT": 10000,
  "GEN_HEIGHT_LIM": 696,
  "GEN_ZSCALE": 0.1,
  "GEN_CIRCLE": true,
  "GEN_TUNNEL": 10,
  "GEN_SKIP_R": 1.0,
  "GEN_DEGREE": 15,
  "GEN_RADIUS": 5,
  "GEN_SPEC_RX": 0.43478260869565216,
  "GEN_SPEC_RY": 1.2173913043478262,
  "GEN_SPEC_MX": 0.8043478260869565,
  "GEN_SPEC_MY": 0.391304347826087,

  "PAT_ROTATE": 66.52173913043481,
  "PAT_SCALE": 2,
  "PAT_TEXT_OX": 1.6,
  "PAT_TEXT_OY": 0,
  "PAT_TEXT_RX": false,
  "PAT_TEXT_RY": false,

  "CAM_FOV": 60,
  "CAM_ZNEAR": 1,
  "CAM_ZFAR": 50
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(869);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;