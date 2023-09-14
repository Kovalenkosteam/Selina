'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const headerLinkParent = document.querySelector('.headerLinks');
	const headerLink = document.querySelectorAll('.headerLink');
	const mainContent = document.querySelectorAll('.mainContent');
	const roomLinksParent = document.querySelector('.roomLinks');
	const roomLink = document.querySelectorAll('.roomLink');
	const roomMainContent = document.querySelectorAll('.roomMainContent');

	// функция показа главной страницы 
	function viewElements(link, parentLink, elementContent) {

		// скрытие ненужных элементов
		function hideMainContent() {
			elementContent.forEach(item => {
				item.classList.add('hide');
				item.classList.remove('fade', 'show');
			});
			link.forEach(item => { item.classList.remove('headerLinkActive') });
		};

		//показ активной ссылки при загрузке
		function showMainContent(i = 2) {
			elementContent[i].classList.add('show', 'fade');
			elementContent[i].classList.remove('hide');
			link[i].classList.add('headerLinkActive');
		};

		hideMainContent();
		showMainContent();

		//обработчик события для показа вкладок на главной странице
		parentLink.addEventListener('click', (event) => {
			const target = event.target;
			link.forEach((item, i) => {
				if (target == item) {
					hideMainContent();
					showMainContent(i);
				};
			});
		});
	};

	viewElements(headerLink, headerLinkParent, mainContent);
	viewElements(roomLink, roomLinksParent, roomMainContent);

	const attractionImages = document.querySelectorAll('.attractionImages');

	// вкладка достопремечательности
	attractionImages.forEach((element, i) => {
		const attractionImage = element.querySelectorAll('.attractionImage')
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

		showSlide(1)

		//слайдер
		function showSlide(n) {
			if (n > attractionImage.length) {
				imageIndex = 1;
			};
			if (n < 1) {
				imageIndex = attractionImage.length;
			};
			attractionImage.forEach(item => item.style.display = 'none');
			attractionImage[imageIndex - 1].style.display = 'block';
		};
		function plusImageIndex(n) {
			showSlide(imageIndex = imageIndex + n);
		};

		//добавление обработчика события на клик по картике из слайдера
		element.addEventListener("click", (e) => {
			if (e.target.classList.contains('attractionImage')) {
				const modal = document.getElementById("modal");
				var modalImg = document.getElementById("modal-img");
				var modalPrev = document.getElementsByClassName("prev")[0];
				var modalNext = document.getElementsByClassName("next")[0];
				var photos = e.target.parentNode.getElementsByClassName('attractionImage');
				var currentPhotoIndex = Array.from(photos).indexOf(e.target);

				//запрещаем скролл при показе модалки 
				document.body.style.overflow = 'hidden';
				console.log(modal);

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



	function showModalByScroll() {
		if ((window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) && mainContent[2].classList.contains('show')) {
			// openModal();
			alert('hi');
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);









});