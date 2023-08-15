import $ from 'jquery';
import './../styles/index.scss';

/* =============================================
            preloader
================================================*/
$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('#preloader-gif, #preloader').fadeOut(8000, function () {});
});

/* =============================================
            header and navigation
================================================*/
$(function () {
	console.log('document is ready!');
	const navbar_navigation = document.querySelector(
		'.header__navbar__contents__nav'
	);
	const hamburger = document.querySelector(
		'.header__navbar__contents__hamburger'
	);
	const sections = document.querySelectorAll('.js-section');
	const list_links = document.querySelectorAll(
		'.header__navbar__contents__nav__list__item__link'
	);

	console.log(navbar_navigation);
	console.log(hamburger);
	console.log(sections);
	console.log(list_links);

	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('header__navbar__contents__hamburger--open');
		navbar_navigation.classList.toggle('header__navbar__contents__nav--open');
	});

  
});
