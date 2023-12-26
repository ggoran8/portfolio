const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const autoplay = document.querySelector('.autoplay');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active');
	mobileNav.classList.toggle('is-active');
});

mobileNav.addEventListener('click', () => {
	hamburger.classList.remove('is-active');
	mobileNav.classList.remove('is-active');
});

$(document).ready(function () {
	$('.slickTest').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
	});
});
