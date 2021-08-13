/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports applyPerspective, newPerspective, applyScreen, binSearch, cross, crossS, normalize, rnd2dCircle, rnd2d, download, upload, rgb, rgba, clamp, mix, mix3 */
function applyPerspective(perspective, p3)
{
  const inv = p3[2]*perspective[11];
  const pinv = 1/inv;
  return [(p3[0]*perspective[0])*pinv,(p3[1]*perspective[5])*pinv,(p3[2]*perspective[10]+perspective[14])*pinv];
}

function newPerspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new Float32Array(16);

  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);

  dst[0]  = f / aspect;
  dst[1]  = 0;
  dst[2]  = 0;
  dst[3]  = 0;

  dst[4]  = 0;
  dst[5]  = f;
  dst[6]  = 0;
  dst[7]  = 0;

  dst[8]  = 0;
  dst[9]  = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;

  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;

  return dst;
}

function applyScreen(p3, w, h) {
  let cx = w * .5;
  let cy = h * .5;
  return [p3[0]*cx + cx, p3[1]*cy + cy];
}

/**
* Binary search element
* from a flat array of integers.
*
* @param {array} arr The array. Needs to be sorted.
* @param {function} key Cmp function: value => value - search
*/
function binSearch(arr, key) {
 let l = 0;
 let r = arr.length;
 while (l<r) {
  const m = l + r >> 1;
  const v = key(arr[m]);
  if (v < 0) l = m + 1;
  else r = m;
 }
 return l;
}

function cross(a,b) {
  return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
}
function crossS(a,b) {
  const d = cross(a,b);
  return d[0]*d[0]+d[1]*d[1]+d[2]*d[2];
}
function normalize(a) {
  let l = 1/Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);
  return [a[0]*l,a[1]*l,a[2]*l];
}

function rnd2dCircle(srand=Math) {
  const a = srand.random() * 2.0 * Math.PI;
  let r = srand.random() + srand.random();
  r = r > 1 ? 2 - r : r;
  r = 1 - r ; r = 1 - r*r;

  return [Math.cos(a)*r, Math.sin(a)*r];
}

function rnd2d(srand=Math) {
  return [srand.random() * 2.0 - 1.0, srand.random() * 2.0 - 1.0];
}

function download(data, filename, type) {
  if ('chooseFileSystemEntries' in window) {
    const opts = {
      type: 'save-file',
      accepts: [{
        description: filename,
        extensions: [type],
        mimeTypes: ['text/json'],
      }],
    };
    let fileHandle = window.chooseFileSystemEntries(opts).then(h => {
      h.createWritable().then(w => {
        w.write(data).then(w2=>w.close().then(()=>{}));
      })
    });
  } else {
    var file = new Blob([data], {type: type});

    var a = document.createElement("a"),
            url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
  }
}

function upload() {
  return new Promise((r,j)=>{
    let inp = document.createElement("input");
    inp.type = "file";
    inp.onchange = (e) => {
      let f = inp.files[0];
      if (f && f.text) r(f.text());
      else j(new Error('AbortError'));
    };
    inp.click();
  });
}

function rgb(r,g,b) { return "rgb("+Math.floor(r)+","+Math.floor(g)+","+Math.floor(b)+")"; }
function rgba(r,g,b,a) { return "rgba("+Math.floor(r)+","+Math.floor(g)+","+Math.floor(b)+","+a+")"; }
function clamp(num, min, max) { return num <= min ? min : num >= max ? max : num; }
function mix(x,y,a) { return x + (y-x)*a; }
function mix3(x1,x2,x3,y1,y2,y3,a) { return [mix(x1,y1,a),mix(x2,y2,a),mix(x3,y3,a)]; }

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
/******/ 	__webpack_require__(812);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;