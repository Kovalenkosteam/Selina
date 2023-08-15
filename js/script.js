document.addEventListener('DOMContentLoaded', () => {

	// const headerLinkParent = document.querySelector('.headerLinks');
	// const headerLink = document.querySelectorAll('.headerLink');
	// const mainContent = document.querySelectorAll('.mainContent');
	// const roomLinksParent = document.querySelector('.roomLinks');
	// const roomLink = document.querySelectorAll('.roomLink');
	// const roomMainContent = document.querySelectorAll('.roomMainContent');

	// function hideMainContent() {
	// 	mainContent.forEach(item => {
	// 		item.classList.add('hide');
	// 		item.classList.remove('fade','show');
	// 	});
	// 	headerLink.forEach(item => { item.classList.remove('headerLinkActive') });
	// };
	// function showMainContent(i = 0) {
	// 	mainContent[i].classList.add('show','fade');
	// 	mainContent[i].classList.remove('hide');
	// 	headerLink[i].classList.add('headerLinkActive');
	// };

	// hideMainContent();
	// showMainContent();

	// headerLinkParent.addEventListener('click', (event) => {
	// 	const target = event.target;
	// 	if (target && target.classList.contains('headerLink')) {
	// 		headerLink.forEach((item, i) => {
	// 			if (target == item) {
	// 				hideMainContent();
	// 				showMainContent(i);
	// 			};
	// 		});
	// 	};
	// });

	const headerLinkParent = document.querySelector('.headerLinks');
	const headerLink = document.querySelectorAll('.headerLink');
	const mainContent = document.querySelectorAll('.mainContent');
	const roomLinksParent = document.querySelector('.roomLinks');
	const roomLink = document.querySelectorAll('.roomLink');
	const roomMainContent = document.querySelectorAll('.roomMainContent');

	function hideMainContent() {
		mainContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('fade','show');
		});
		headerLink.forEach(item => { item.classList.remove('headerLinkActive') });
	};
	function showMainContent(i = 0) {
		mainContent[i].classList.add('show','fade');
		mainContent[i].classList.remove('hide');
		headerLink[i].classList.add('headerLinkActive');
	};

	function hideRoomMainContent() {
		roomMainContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('fade','show');
		});
		roomLink.forEach(item => { item.classList.remove('headerLinkActive') });
	};
	function showRoomMainContent(i = 1) {
		roomMainContent[i].classList.add('show','fade');
		roomMainContent[i].classList.remove('hide');
		roomLink[i].classList.add('headerLinkActive');
	};

	hideMainContent();
	showMainContent();
	hideRoomMainContent();
	showRoomMainContent();

	headerLinkParent.addEventListener('click', (event) => {
		const target = event.target;
		if (target  &&target.classList.contains('headerLink')) {
			headerLink.forEach((item, i) => {
				if (target == item) {
					hideMainContent();
					showMainContent(i);
				};
			});
		};
	});

	roomLinksParent.addEventListener('click', (event) => {
		const targetRoom = event.target;
		if (targetRoom  && targetRoom.classList.contains('roomLink')) {
			roomLink.forEach((item, i) => {
				if (targetRoom == item) {
					hideRoomMainContent();
					showRoomMainContent(i);
				};
			});
		};
	});






});