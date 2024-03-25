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
/* harmony import */ var _modules_attraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attraction */ "./src/js/modules/attraction.js");
/* harmony import */ var _modules_modalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalForm */ "./src/js/modules/modalForm.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");





document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_mainTabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive');
  Object(_modules_roomTabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive');
  // attraction();
  Object(_modules_modalForm__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
});

/***/ }),

/***/ "./src/js/modules/attraction.js":
/*!**************************************!*\
  !*** ./src/js/modules/attraction.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attraction = () => {
  const attractionImages = document.querySelectorAll('.attractionImages');

  // вкладка достопремечательности
  attractionImages.forEach((element, i) => {
    const attractionImage = element.querySelectorAll('.attractionImage');
    const prevArrow = element.querySelector('.prevArrow');
    const nextArrow = element.querySelector('.nextArrow');
    //обработчик события показа стрелок слайдера при наведении мышкой на фото
    element.addEventListener('mouseenter', () => {
      prevArrow.style.display = 'block';
      nextArrow.style.display = 'block';
    });

    //обработчик события удаления стрелок слайдера при наведении мышкой на фото
    element.addEventListener('mouseleave', () => {
      prevArrow.style.display = 'none';
      nextArrow.style.display = 'none';
    });

    //при клике на стрелку слайдера меняем индекс фото
    prevArrow.addEventListener('click', () => {
      plusImageIndex(-1);
    });
    nextArrow.addEventListener('click', () => {
      plusImageIndex(1);
    });
    let imageIndex = 1;
    showSlide(1);

    //слайдер
    function showSlide(n) {
      if (n > attractionImage.length) {
        imageIndex = 1;
      }
      ;
      if (n < 1) {
        imageIndex = attractionImage.length;
      }
      ;
      attractionImage.forEach(item => item.style.display = 'none');
      attractionImage[imageIndex - 1].style.display = 'block';
    }
    ;
    function plusImageIndex(n) {
      showSlide(imageIndex = imageIndex + n);
    }
    ;

    //добавление обработчика события на клик по картике из слайдера
    element.addEventListener("click", e => {
      if (e.target.classList.contains('attractionImage')) {
        const modal = document.getElementById("modal");
        var modalImg = document.getElementById("modal-img");
        var modalPrev = document.getElementsByClassName("prev")[0];
        var modalNext = document.getElementsByClassName("next")[0];
        var photos = e.target.parentNode.getElementsByClassName('attractionImage');
        var currentPhotoIndex = Array.from(photos).indexOf(e.target);

        //запрещаем скролл при показе модалки 
        document.body.style.overflow = 'hidden';

        // Устанавливаем изображение в модальное окно
        modalImg.src = e.target.src;

        // Устанавливаем ширину и высоту 
        modalImg.style.width = "60%";
        modalImg.style.height = "auto";

        // Показываем модальное окно
        modal.style.display = "flex";

        // Показываем стрелки и позиционируем их рядом с картинкой
        modalPrev.style.display = "block";
        modalNext.style.display = "block";
        modalPrev.style.left = "10%";
        modalNext.style.right = "10%";

        // Обработчик клика на кнопку закрытия модального окна
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

        // Обработчик клика на кнопку "Предыдущая"
        modalPrev.addEventListener("click", function () {
          currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
          modalImg.src = photos[currentPhotoIndex].src;
        });

        // Обработчик клика на кнопку "Следующая"
        modalNext.addEventListener("click", function () {
          currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
          modalImg.src = photos[currentPhotoIndex].src;
        });
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (attraction);

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
          hideTabContent();
          showTabContent(i);
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
  //модалка для окна связи
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
  const modalTimerId = setTimeout(openModalThanks, 30000);
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

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (imageContainer, sliderImage, prevBtn, nextBtn) => {
  const container = document.querySelectorAll(imageContainer);
  container.forEach(item => {
    // Получаем элементы слайдера
    const slider = item.querySelector(sliderImage);
    const prevButton = item.querySelector(prevBtn);
    const nextButton = item.querySelector(nextBtn);
    const slides = Array.from(slider.querySelectorAll('img'));
    const slideCount = slides.length;
    let slideIndex = 0;

    // Функция для показа предыдущего слайда
    function showPreviousSlide() {
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      updateSlider();
    }

    // Функция для показа следующего слайда
    function showNextSlide() {
      slideIndex = (slideIndex + 1) % slideCount;
      updateSlider();
    }
    // Устанавливаем обработчики событий для кнопок
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Функция для обновления отображения слайдера
    function updateSlider() {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

    // Инициализация слайдера
    updateSlider();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map