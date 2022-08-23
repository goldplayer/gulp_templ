(function ($) {
	$(function() {


	});
})(jQuery);


// 
jQuery(document).ready(function() {
	jQuery("a.scrollto").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
	return false;
	});
});



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))