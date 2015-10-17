/*global document, $ */
/* Even though we have our script placed at the bottom of the page we should wait until the document is ready i.e.
 ** completely loaded before creating the carousel.  The primary reason? In this case - to ensure our images have loaded.
 */
(function () {
	'use strict';
	$(document).ready(function () {

		$('#menu-show').click(function (e) {
			e.preventDefault();

			$('#menu-bar').show();
		});

		$('#menu-bar ul li a').click(function (e) {
			e.preventDefault();
			$('#menu-bar').hide();
		});

		$('#navigation li a').click(function (e) {

			if (e.target.innerHTML !== 'Locations') {
				e.preventDefault();

			}

			if (e.target.innerHTML !== 'Menu' || e.target.innerHTML !== 'Locations') {
				$('#menu-bar').hide();
			}
		});

		/* Autoplay 3 seconds below */
		$('.carousel').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000
		});
	});
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 80
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
}());