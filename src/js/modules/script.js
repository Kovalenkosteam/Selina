const fun = ()=>{


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
		function showMainContent(i = 0) {
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

	

	//модалка для окна связи
	const contact = document.querySelector('.contact');
	contact.addEventListener('click', () => openModalThanks());
	const modalThanks = document.querySelector('.modalThanks');

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


	const modalTimerId = setTimeout(openModalThanks, 300000);

	function showModalByScroll() {
		if ((window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) && mainContent[2].classList.contains('show')) {
			openModalThanks();

			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

	//обработка запроса

	const getResource = async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`нельзя зафетчить ${url}, status ${res.status}`);
		}
		console.log(res.json());
		return await res.json();

	};


	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: data
		});

		return await res.json();
	};

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);

					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				})

		});
	}


	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModalThanks();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
		document.querySelector('.modalThanks').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModalThanks();
		}, 4000);
	}
}

export default fun;