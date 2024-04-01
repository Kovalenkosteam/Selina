const sliders = (imageContainer, sliderImage, prevBtn, nextBtn) => {
	const container = document.querySelectorAll(imageContainer);
	container.forEach(item => {

		const slider = item.querySelector(sliderImage);
		const prevButton = item.querySelector(prevBtn);
		const nextButton = item.querySelector(nextBtn);
		const slides = Array.from(slider.querySelectorAll('img'));

		item.addEventListener('mouseenter', () => {
			prevButton.style.display = 'block';
			nextButton.style.display = 'block';
		});

		item.addEventListener('mouseleave', () => {
			prevButton.style.display = 'none';
			nextButton.style.display = 'none';
		});

		const slideCount = slides.length;
		let slideIndex = 0;

		function showPreviousSlide() {
			slideIndex = (slideIndex - 1 + slideCount) % slideCount;
			updateSlider();
		}

		function showNextSlide() {
			slideIndex = (slideIndex + 1) % slideCount;
			updateSlider();
		}

		prevButton.addEventListener('click', showPreviousSlide);
		nextButton.addEventListener('click', showNextSlide);

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