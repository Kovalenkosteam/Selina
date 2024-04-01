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
	})
}
export default sliderModalForm;