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
	})


}
export default sliders;