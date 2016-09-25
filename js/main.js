$(document).ready(function() {
	init();
});
$(window).resize(function() {
	init();
});

function init(){
	var trans = $(window).width() - $('.social h2').outerWidth();
	trans = 'translate(' + trans + 'px)';
	$('.social').css('transform', trans);
	$('.social').mouseover(function(event) {
		var trans = $(window).width() - $('.social').outerWidth();
		trans = 'translate(' + trans + 'px)';
		$(this).css('transform', trans);
	})
	.mouseout(function(event) {
		var trans = $(window).width() - $('.social h2').outerWidth();
		trans = 'translate(' + trans + 'px)';
		$(this).css('transform', trans);
	});
}

function hideloader() {
	$('body').addClass('loaded');
}