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
	};

	modalThanks.addEventListener('click', (e) => {
		if (e.target === modalThanks || e.target.getAttribute('data-close') == "") {
			closeModalThanks();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modalThanks.classList.contains('showModalThanks')) {
			closeModalThanks();
		}
	});

	// const modalTimerId = setTimeout(openModalThanks, 3000);

	function showModalByScroll() {
		if ((window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) && mainContent[2].style.display=='block') {
			openModalThanks();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);
}
export default modalForm;