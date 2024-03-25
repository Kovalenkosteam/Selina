import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
import attraction from "./modules/attraction";
import modalForm from "./modules/modalForm";
import sliders from "./modules/slider";
document.addEventListener('DOMContentLoaded', () => {

	mainMenuTabs('.headerLinks','.headerLink','.mainContent','headerLinkActive')
	roomTabs('.roomLinks','.roomLink','.roomMainContent','headerLinkActive')
	// attraction();
	modalForm();
	sliders('.attractionTabs','.attractionImages','.prevArrow','.nextArrow');
});