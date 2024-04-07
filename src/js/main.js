import mainMenuTabs from "./modules/mainTabs";
import roomTabs from "./modules/roomTabs";
import modalForm from "./modules/modalForm";
// import sliders from "./modules/slider";
import sliderModalForm from "./modules/sliderModalForm";
// import calendar from "./modules/calendar";
document.addEventListener('DOMContentLoaded', () => {
	mainMenuTabs('.headerLinks', '.headerLink', '.mainContent', 'headerLinkActive')
	roomTabs('.roomLinks', '.roomLink', '.roomMainContent', 'headerLinkActive')
	modalForm();
	// sliders('.discription', '.discriptionImageAbout', '.prevArrow', '.nextArrow');
	// sliders('.attractionTabs', '.attractionImages', '.prevArrow', '.nextArrow');
	// sliders('.roomMainContent', '.discriptionImage', '.prevArrow', '.nextArrow');
	sliderModalForm('.attractionImage');
	// calendar();
	// const isMobile = {
    //     Android: function() {
    //         return navigator.userAgent.match(/Android/i);
    //     },
    //     BlackBerry: function() {
    //         return navigator.userAgent.match(/BlackBerry/i);
    //     },
    //     iOS: function() {
    //         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //     },
    //     Opera: function() {
    //         return navigator.userAgent.match(/Opera Mini/i);
    //     },
    //     Windows: function() {
    //         return navigator.userAgent.match(/IEMobile/i);
    //     },
    //     any: function() {
    //         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    //     }
    // };
	// if (isMobile.any()) {
	// 	alert("is mobile !");
	// }else{
	// 	alert("is no mobile !");
	// }

	
});