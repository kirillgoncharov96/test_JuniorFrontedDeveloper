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



const showContent = async () => {
    
    const _url = "https://jsonplaceholder.typicode.com/posts",
          tableContent = document.querySelector(".table__data.content"),
          searchInput = document.querySelector(".search"),
          tableBtn = document.querySelectorAll(".table__button");

          console.log(tableBtn)
          
    const data =  await (0,_service_requests__WEBPACK_IMPORTED_MODULE_0__["default"])(_url).then(data => data).catch(error => console.log(error));
   
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length >= 3) {
            createTableContent(
                data.filter(item => item.body.includes(value) || item.title.includes(value))
            );
        } else {
            createTableContent(data);
        }
    });


    const onLoadLine = (obj) => {
        
        const line = document.createElement("tr");
        const keys = Object.keys(obj);
        const values = Object.values(obj);

        keys.map((key) => {
            const cell = document.createElement("td");
            cell.setAttribute("key", values[1]);
            cell.setAttribute("class", key);
            cell.innerHTML = obj[key];
            line.appendChild(cell);
        });

        return line;
    };
    
    const createTableContent = (data) => {
        console.log(data)
        tableContent.innerHTML = "";
        
        data.map((item) => {
           
            const row = onLoadLine(item);
            tableContent.appendChild(row);
        });
    };


    const sortData = (data, param, direction = "asc") => {
        const sortedData =
          direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                    return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (a[param] > b[param]) {
                return -1;
                }
                if (a[param] < b[param]) {
                return 1;
                }
                return 0;
            });
    
        createTableContent(sortedData);
    };
    
    const resetBtn = (event) => {
        tableBtn.forEach((button) => {
            if (button !== event.target) {
                button.removeAttribute("sort");
            }
        });
    };
    

    tableBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          resetBtn(e);
          if (e.target.getAttribute("sort") == "desc") {
            sortData(data, e.target.id, "desc");
            e.target.setAttribute("sort", "asc");
          } else {
            sortData(data, e.target.id, "asc");
            e.target.setAttribute("sort", "desc");
          }
        });
    });

    createTableContent(data)

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