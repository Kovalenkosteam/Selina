'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const headerLinkParent = document.querySelector('.headerLinks');
	const headerLink = document.querySelectorAll('.headerLink');
	const mainContent = document.querySelectorAll('.mainContent');

	const roomLinksParent = document.querySelector('.roomLinks');
	const roomLink = document.querySelectorAll('.roomLink');
	const roomMainContent = document.querySelectorAll('.roomMainContent');


	function viewElements(link, parentLink, elementContent) {

		function hideMainContent() {
			elementContent.forEach(item => {
				item.classList.add('hide');
				item.classList.remove('fade', 'show');
			});
			link.forEach(item => { item.classList.remove('headerLinkActive') });
		};
		function showMainContent(i = 2) {
			elementContent[i].classList.add('show', 'fade');
			elementContent[i].classList.remove('hide');
			link[i].classList.add('headerLinkActive');
		};

		hideMainContent();
		showMainContent();

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

	attractionImages.forEach((element, i) => {
		const attractionImage = element.querySelectorAll('.attractionImages img')
		attractionImage.forEach((item,i)=>{
			if(i>0){
				item.style.display='none';
			}
			// if(i==0){
			// console.log(item);	
			// }
			
		});

	});



























});