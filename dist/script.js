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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_sliderModalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderModalForm */ "./src/js/modules/sliderModalForm.js");
/* harmony import */ var _modules_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calendar */ "./src/js/modules/calendar.js");
/* harmony import */ var _modules_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchData */ "./src/js/modules/fetchData.js");







document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_mainTabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive');
  Object(_modules_roomTabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive');
  Object(_modules_modalForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.discription', '.discriptionImageAbout', '.prevArrow', '.nextArrow');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.roomMainContent', '.discriptionImage', '.prevArrow', '.nextArrow');
  Object(_modules_sliderModalForm__WEBPACK_IMPORTED_MODULE_4__["default"])('.attractionImage');
  Object(_modules_calendar__WEBPACK_IMPORTED_MODULE_5__["default"])();
  // fetchData()
});

/***/ }),

/***/ "./src/js/modules/calendar.js":
/*!************************************!*\
  !*** ./src/js/modules/calendar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ "./src/js/modules/fetchData.js");

const calendar = () => {
  const rooms = document.querySelectorAll('.roomMainContent');
  rooms.forEach(room => {
    const firstChildClass = room.firstElementChild.className;
    const calendarContainer = document.createElement('div');
    calendarContainer.id = firstChildClass;
    room.appendChild(calendarContainer);
    const months = ['Июнь', 'Июль', 'Август'];
    const daysInMonth = [30, 31, 31];
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const calendarDiv = document.createElement('div');
    calendarDiv.classList.add('month-container');
    calendarContainer.appendChild(calendarDiv);
    months.forEach((month, index) => {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      const headerRow = document.createElement('tr');
      weekdays.forEach(weekday => {
        const weekdayHeader = document.createElement('th');
        weekdayHeader.textContent = weekday;
        headerRow.appendChild(weekdayHeader);
      });
      thead.appendChild(headerRow);
      const firstDay = new Date(new Date().getFullYear(), index + 5, 1);
      const startingDay = (firstDay.getDay() + 6) % 7;
      let currentRow = document.createElement('tr');
      for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement('td');
        currentRow.appendChild(emptyCell);
      }
      for (let day = 1; day <= daysInMonth[index]; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;
        currentRow.appendChild(cell);
        if ((day + startingDay) % 7 === 0 || day === daysInMonth[index]) {
          tbody.appendChild(currentRow);
          currentRow = document.createElement('tr');
        }
      }
      table.appendChild(thead);
      table.appendChild(tbody);
      const monthDiv = document.createElement('div');
      monthDiv.classList.add('month');
      const monthNameHeader = document.createElement('h3');
      monthNameHeader.textContent = month;
      monthDiv.appendChild(monthNameHeader);
      monthDiv.appendChild(table);
      calendarDiv.appendChild(monthDiv);
      Object(_fetchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (data) {
        data.forEach(function (item) {
          let roomName = item.roomName;
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.endDate);
          if (roomName === calendarContainer.id) {
            const cells = tbody.querySelectorAll('td'); // Используем tbody, чтобы найти ячейки только в текущем месяце
            cells.forEach(cell => {
              const day = parseInt(cell.textContent);
              const cellDate = new Date(firstDay.getFullYear(), index + 5, day);

              // Проверяем, принадлежит ли день текущему месяцу
              if (cellDate.getMonth() === index + 5) {
                // Если день находится в промежутке между startDate и endDate, закрашиваем его красным
                if (cellDate >= startDate && cellDate <= endDate) {
                  cell.style.backgroundColor = 'red';
                }
              }
            });
          }
        });
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (calendar);

/***/ }),

/***/ "./src/js/modules/fetchData.js":
/*!*************************************!*\
  !*** ./src/js/modules/fetchData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchData = callback => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/assets/server.php", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      var data = JSON.parse(this.responseText);
      callback(data); // Вызываем колбэк с полученными данными
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (fetchData);

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
  function showTabContent(i = 1) {
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
    item.addEventListener('mouseenter', () => {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    });

    //обработчик события удаления стрелок слайдера при наведении мышкой на фото
    item.addEventListener('mouseleave', () => {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    });
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
    updateSlider();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

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
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliderModalForm);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map