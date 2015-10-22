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

		/* Hamburger effect */
		$(document).ready(function () {
			/* Find the hamburger li and attach a click handler */
			$('#navigation ul:first-child').click(function () {
				/* toggle the class menu-expanded on the ul
				 ** be careful with the "this" context as our selector is a pseudo element and "this" refers to the ul
				 **/
				$(this).toggleClass('menu-expanded');
			});
		});
		/* I would like to add in an input button which references and if else statement with a list of emial addresses that are able to have access to the wesite. This will allow a form of security to the site even though all the information contained within is accessable to the public. */


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