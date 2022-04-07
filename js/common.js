"use strict"

history.scrollRestoration = "manual";

// $(window).on('beforeunload', function () {
// 	$(window).scrollTop(0);
// })
document.addEventListener("DOMContentLoaded", () => {
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
});

const popupCloseBtn = document.querySelector('.popup__close-btn'),
	protectedPopup = document.querySelector('.protected-popup'),
	body = document.querySelector('#body'),
	olderPosts = document.querySelector('.main-content__btn'),
	mainContentThumbnail = document.querySelectorAll('.main-content__thumbnail');


if (popupCloseBtn) {
	popupCloseBtn.addEventListener('click', () => {
		protectedPopup.classList.remove('active-flex');
		body.classList.remove('active-body');
	});
};

if (olderPosts) {
	olderPosts.addEventListener('click', (e) => {
		mainContentThumbnail.forEach(elem => {
			elem.style.display = 'flex';
		});
	});
}


});



