$(document).ready(function() {

	$('.featuredstreamer').not(':eq(0)').hide();
	$('.featuredimgpreview').click(function() {
		var index = $(this).index();
		$('.featuredstreamer').not(':eq(' + index + ')').hide();
		$('.featuredstreamer').eq(index).show();
	});

});