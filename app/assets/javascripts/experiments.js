jQuery(document).ready(function($) {
	$('.new').click(function(event) {
		$('.popup').toggle();
	});

	$('.close').click(function(event) {
		$('.popup').hide();
	});
});