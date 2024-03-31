import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
import modalForm from "./modules/modalForm";
import sliders from "./modules/slider";
import sliderModalForm from "./modules/sliderModalForm";
import calendar from "./modules/calendar";
import fetchData from "./modules/fetchData";
document.addEventListener('DOMContentLoaded', () => {
	mainMenuTabs('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive')
	roomTabs('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive')
	modalForm();
	sliders('.discription', '.discriptionImageAbout', '.prevArrow', '.nextArrow');
	sliders('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
	sliders('.roomMainContent', '.discriptionImage', '.prevArrow', '.nextArrow');
	sliderModalForm('.attractionImage');
	calendar();
	// fetchData()
});