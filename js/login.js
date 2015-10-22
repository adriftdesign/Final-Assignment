/*global document, $ */

function check(form) { /*function to check email address*/
			/*the following code checkes whether the entered email address is authorised*/
			/*var alert;*/
	'use strict';
	if (form.emailadd.value === "password") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "claire.whyntie@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "damien.burnham@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "amie.whitehead@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "brittney.mackenzie@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "ben.litchfield@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "nikola.valova@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "louise.hush@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "rochelle.fernance@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else if (form.emailadd.value === "madonna.bullock-dinte@aue.salvationarmy.org") {
		/*alert("Success - - loading Aged Care Plus Locations page");*/

		window.location.href = ' ./locations.html';
	} else {
		window.alert('Unauthorised email address'); /*displays error message*/
	}
}