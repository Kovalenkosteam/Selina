// import fun from "./modules/script";
import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
document.addEventListener('DOMContentLoaded', () => {
	// fun();
	mainMenuTabs('.headerLinks','.headerLink','.mainContent','headerLinkActive')
	roomTabs('.roomLinks','.roomLink','.roomMainContent','headerLinkActive')
});