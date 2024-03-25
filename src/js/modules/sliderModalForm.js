const sliderModalForm = (container) => {
	const tab = document.querySelectorAll(container)
	tab.forEach(item => {
		item.addEventListener("click", (e) => {
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
	})
}
export default sliderModalForm;