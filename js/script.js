document.addEventListener('DOMContentLoaded', () => {

	const headerLinkParent = document.querySelector('.headerLinks');
	const headerLink = document.querySelectorAll('.headerLink');
	const mainContent = document.querySelectorAll('.mainContent');

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

	hideMainContent();
	showMainContent();

	headerLinkParent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains('headerLink')) {
			headerLink.forEach((item, i) => {
				if (target == item) {
					hideMainContent();
					showMainContent(i);
				};
			});
		};
	});








});