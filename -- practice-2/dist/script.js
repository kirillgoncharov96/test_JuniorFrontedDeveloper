/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/showContent.js":
/*!***************************************!*\
  !*** ./src/js/modules/showContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/requests */ "./src/js/service/requests.js");


const showContent = () => {
    const _url = "https://jsonplaceholder.typicode.com/posts",
          tableContent = document.querySelector(".table__data.content");
    
    (0,_service_requests__WEBPACK_IMPORTED_MODULE_0__["default"])(_url)
    .then(res => createTableContent(res))
    .catch(error => console.log(error));

    
    const createTableContent = (response) => {
        response.map(item => {
            const line = document.createElement("tr");
            line.innerHTML = `
            <td class="userId" key='${item.id}'>${item.userId}</td>
            <td class="id" key='${item.id}'>${item.id}</td>
            <td class="title" key='${item.id}'>${item.title}</td>
            <td class="body" key='${item.id}'>${item.body}</td>
            `
            tableContent.appendChild(line);
        })
    };
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContent);

/***/ }),

/***/ "./src/js/service/requests.js":
/*!************************************!*\
  !*** ./src/js/service/requests.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResource);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showContent */ "./src/js/modules/showContent.js");

 
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

	(0,_modules_showContent__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
});





})();

/******/ })()
;
//# sourceMappingURL=script.js.map