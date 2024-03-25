import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
import modalForm from "./modules/modalForm";
import sliders from "./modules/slider";
import sliderModalForm from "./modules/sliderModalForm";
document.addEventListener('DOMContentLoaded', () => {

	mainMenuTabs('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive')
	roomTabs('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive')
	modalForm();
	sliders('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
	sliders('.roomMainContent', '.discriptionImage', '.prevArrow', '.nextArrow');
	sliderModalForm('.attractionImage');
});