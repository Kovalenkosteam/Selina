/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mainTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mainTabs */ "./src/js/modules/mainTabs.js");
/* harmony import */ var _modules_roomTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/roomTabs */ "./src/js/modules/roomTabs.js");
/* harmony import */ var _modules_modalForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalForm */ "./src/js/modules/modalForm.js");
/* harmony import */ var _modules_sliderModalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderModalForm */ "./src/js/modules/sliderModalForm.js");



// import sliders from "./modules/slider";

// import calendar from "./modules/calendar";
document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_mainTabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive');
  Object(_modules_roomTabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive');
  Object(_modules_modalForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // sliders('.discription', '.discriptionImageAbout', '.prevArrow', '.nextArrow');
  // sliders('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
  // sliders('.roomMainContent', '.discriptionImage', '.prevArrow', '.nextArrow');
  Object(_modules_sliderModalForm__WEBPACK_IMPORTED_MODULE_3__["default"])('.attractionImage');
  // calendar();
  // const isMobile = {
  //     Android: function() {
  //         return navigator.userAgent.match(/Android/i);
  //     },
  //     BlackBerry: function() {
  //         return navigator.userAgent.match(/BlackBerry/i);
  //     },
  //     iOS: function() {
  //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  //     },
  //     Opera: function() {
  //         return navigator.userAgent.match(/Opera Mini/i);
  //     },
  //     Windows: function() {
  //         return navigator.userAgent.match(/IEMobile/i);
  //     },
  //     any: function() {
  //         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  //     }
  // };
  // if (isMobile.any()) {
  // 	alert("is mobile !");
  // }else{
  // 	alert("is no mobile !");
  // }
});

/***/ }),

/***/ "./src/js/modules/mainTabs.js":
/*!************************************!*\
  !*** ./src/js/modules/mainTabs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mainMenuTabs = (headerSelecor, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelecor);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  ;
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  ;
  hideTabContent();
  showTabContent();
  header.addEventListener('click', e => {
    const target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          const burger = document.querySelector('.burger');
          const headerLinks = document.querySelector('.headerLinks');
          hideTabContent();
          showTabContent(i);
          burger.classList.remove('active');
          headerLinks.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mainMenuTabs);

/***/ }),

/***/ "./src/js/modules/modalForm.js":
/*!*************************************!*\
  !*** ./src/js/modules/modalForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalForm = () => {
  const contact = document.querySelector('.contact');
  contact.addEventListener('click', () => openModalThanks());
  const modalThanks = document.querySelector('.modalThanks');
  const mainContent = document.querySelectorAll('.mainContent');
  function closeModalThanks() {
    modalThanks.classList.add('hide');
    modalThanks.classList.remove('showModalThanks');
    document.body.style.overflow = '';
    clearInterval(modalTimerId);
  }
  function openModalThanks() {
    modalThanks.classList.add('showModalThanks');
    modalThanks.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }
  ;
  modalThanks.addEventListener('click', e => {
    if (e.target === modalThanks || e.target.getAttribute('data-close') == "") {
      closeModalThanks();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modalThanks.classList.contains('showModalThanks')) {
      closeModalThanks();
    }
  });

  // const modalTimerId = setTimeout(openModalThanks, 3000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && mainContent[2].style.display == 'block') {
      openModalThanks();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
};
/* harmony default export */ __webpack_exports__["default"] = (modalForm);

/***/ }),

/***/ "./src/js/modules/roomTabs.js":
/*!************************************!*\
  !*** ./src/js/modules/roomTabs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const roomTabs = (headerSelecor, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelecor);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  ;
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  ;
  hideTabContent();
  showTabContent();
  header.addEventListener('click', e => {
    const target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (roomTabs);

/***/ }),

/***/ "./src/js/modules/sliderModalForm.js":
/*!*******************************************!*\
  !*** ./src/js/modules/sliderModalForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliderModalForm = container => {
  const tab = document.querySelectorAll(container);
  tab.forEach(item => {
    item.addEventListener("click", e => {
      const modal = document.getElementById("modal");
      var modalImg = document.getElementById("modal-img");
      var modalPrev = document.getElementsByClassName("prev")[0];
      var modalNext = document.getElementsByClassName("next")[0];
      var photos = e.target.parentNode.getElementsByClassName('attractionImage');
      var currentPhotoIndex = Array.from(photos).indexOf(e.target);
      document.body.style.overflow = 'hidden';
      modalImg.src = e.target.src;
      modalImg.style.width = "60%";
      modalImg.style.height = "auto";
      modal.style.display = "flex";
      modalPrev.style.display = "block";
      modalNext.style.display = "block";
      modalPrev.style.left = "10%";
      modalNext.style.right = "10%";
      document.getElementsByClassName("close")[0].addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = '';
      });
      window.addEventListener('click', function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
      modalPrev.addEventListener("click", function () {
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        modalImg.src = photos[currentPhotoIndex].src;
      });
      modalNext.addEventListener("click", function () {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        modalImg.src = photos[currentPhotoIndex].src;
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliderModalForm);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map