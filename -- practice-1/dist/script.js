/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/checkInputsLang.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkInputsLang.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkInputsLang = (selector) => {

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-][a-zA-Z0-9])?\.)+[a-zA-Z]/ig)) {
                event.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            if (input.value.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-][a-zA-Z0-9])?\.)+[a-zA-Z]/ig)) {
               input.value = '';
            }
        });
    });


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputsLang);

/***/ }),

/***/ "./src/js/modules/checkInputsLength.js":
/*!*********************************************!*\
  !*** ./src/js/modules/checkInputsLength.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkInputsLength = (selector, selectorForlabel) => {

    const inputs = document.querySelector(selector),
          labels = document.querySelector(selectorForlabel);

          

    inputs.addEventListener('input', () => {
        if (inputs.value.length > 0) {
           labels.style.opacity = 0;
        } else {
            labels.style.opacity = 1;
        } 
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputsLength);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (event) => {
            if (event.key.match(/[^а-яё 0-9]/ig)) {
                event.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            if (input.value.match(/[^а-яё]/ig)) {
               input.value = '';
            }
         });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const drop = () => {

    const fileInputs = document.querySelectorAll('[name="upload"]'),
          span = document.querySelector('.placeholder');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.modal__input-label').style.backgroundColor = "grey";
        item.closest('.modal__input-label').style.borderRadius = "5px";
        item.closest('.modal__input-label').style.border = "2px solid black";
    }

    function unhighlight(item) {
        item.closest('.modal__input-label').style.border = "none";
        item.closest('.modal__input-label').style.backgroundColor = "#fff";
        item.closest('.modal__input-label').style.borderRadius = "0px";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].lenght > 6 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 10) + dots + arr[1];
            span.textContent = name;
            span.classList.add('image');
        });
    });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/requests */ "./src/js/service/requests.js");


const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelector('[name="upload"]'),
          span = document.querySelector('.placeholder'),
          labels = document.querySelectorAll('label'),
          btn = document.querySelector('.btn__close'),
          head = document.querySelector('h2'),
          btnDelete = document.querySelector('.upload-icon__delete');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с Вами свяжемся...',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };   

    const path = {
        server: 'assets/server.php'
    };



    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        span.classList.remove('image');
        span.textContent = "Логотип (jpeg, png)";
        labels.forEach(label => {
           label.style.opacity = 1; 
        });
    };

    
    upload.addEventListener('input', () => {
        console.log(upload.files[0]);
        let dots;
        const arr = upload.files[0].name.split('.');
        arr[0].length > 6 ? dots = "..." : dots = '.';
        const name = arr[0].substring(0, 10) + dots + arr[1];
        span.textContent = name;
        span.classList.add('image');
    });

    btnDelete.addEventListener('click', () => {
        upload.value = '';
        span.classList.remove('image');
        span.textContent = "Логотип (jpeg, png)";
    });
    
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.style.textAlign = 'center';
            statusMessage.style.justifyContent = 'center';
            item.parentNode.appendChild(statusMessage);
            item.style.display = 'none';
            btn.style.opacity = 0;
            head.style.display = 'none';

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

        
            const formData = new FormData(item);
            let api = path.server;
            

            for (let key of formData.entries()) {
                console.log(key);
            }

            (0,_service_requests__WEBPACK_IMPORTED_MODULE_0__["default"])(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    formData.delete('upload');
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        btn.style.opacity = 1;
                        head.style.display = 'block';
                    }, 5000);
                });
        });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);




/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.addEventListener('click', () => {
			elem.selectionStart = elem.selectionEnd = elem.value.length;
		});
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos,pos);
        } else if (elem.creatTextRange) {
            let range = elem.creatTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function creatMask(event) {
        let matrix = '+7 ___ ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }
    
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length < 16) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }    

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', creatMask);
        input.addEventListener('focus', creatMask);
        input.addEventListener('blur', creatMask);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

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
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

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
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkInputsLength */ "./src/js/modules/checkInputsLength.js");
/* harmony import */ var _modules_checkInputsLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkInputsLang */ "./src/js/modules/checkInputsLang.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");







window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    (0,_modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="nameOrganization"]', '.text');
    (0,_modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="phone"]', '.phone');
    (0,_modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="email"]', '.email');
    (0,_modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="direction-company"]', '.direction');
    (0,_modules_checkInputsLength__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="name"]', '.name');
    (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_1__["default"])('[name="name"]');
    (0,_modules_checkInputsLang__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="address"]');
    (0,_modules_mask__WEBPACK_IMPORTED_MODULE_0__["default"])('[name="phone"]');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_drop__WEBPACK_IMPORTED_MODULE_5__["default"])();

    const trigger = document.querySelector(".open__modal"),
          modal = document.querySelector(".modal"),
          close = document.querySelector(".btn__close");

        
        trigger.addEventListener('click', () => {
            modal.classList.toggle('is-active');
        }); 

        close.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });

}); 
})();

/******/ })()
;
//# sourceMappingURL=script.js.map