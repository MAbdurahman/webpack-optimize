import $ from 'jquery';
import './../styles/index.scss';

/* ============================================
            preloader
===============================================*/
$(window).on('load', function () {
  // makes sure that whole site is loaded
  $('#preloader-gif, #preloader').fadeOut(8000, function() {});
});

$(function () {
  console.log('document is ready!');
});