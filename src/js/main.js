// import fun from "./modules/script";
import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
import attraction from "./modules/attraction";
import modalForm from "./modules/modalForm";
document.addEventListener('DOMContentLoaded', () => {
	// fun();
	mainMenuTabs('.headerLinks','.headerLink','.mainContent','headerLinkActive')
	roomTabs('.roomLinks','.roomLink','.roomMainContent','headerLinkActive')
	attraction();
	modalForm();
});