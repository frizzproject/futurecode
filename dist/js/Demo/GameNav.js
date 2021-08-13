/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports GameNav, initialize */
const NAV = document.getElementById("game-nav");
const BGS = NAV.querySelectorAll(".bg > div");
const TXT = NAV.querySelector(".text");

function randomText(length){
  let str = "";
  for (let i = 0; i < length; i++)
    if (Math.random() < .3)
      str += ' ';
    else str += String.fromCharCode(97+Math.floor(Math.random()*25));

  return str;
}

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              var data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

class GameNav{
  constructor(){
    this.texts = null;
    fetchJSONFile("../content/texts.json", (d)=>{this.texts=d;});
   }

  showText(id){
    if (!this.texts || !this.texts[id])
      return;

    TXT.innerHTML = this.texts[id];
    let ht = TXT.getBoundingClientRect().height;
    BGS[0].style.transform = `translateY(${-ht}px)`;
    let sc = 1 + ht/BGS[1].getBoundingClientRect().height;
    BGS[1].style.transform = `translateY(${-ht}px) scaleY(${sc})`;
    NAV.classList.add("active");
  }

  hideText(){
    BGS[0].style.transform = "";
    BGS[1].style.transform = "";
    NAV.classList.remove("active");
  }
}

function initialize(){
  const g = new GameNav();
  window.game_nav = g;
}

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
/******/ 	__webpack_require__(605);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;