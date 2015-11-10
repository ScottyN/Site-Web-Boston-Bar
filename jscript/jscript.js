var main = function(){
	$('#topSideContent').hover(function() {
		$(this).fadeTo(600, 0.4);
	});
	$('#topSideContent').mouseout(function(){
		$(this).fadeTo(600, 1);
	});
	$('#bottomSideContent').hover(function(){
		$(this).fadeTo(600, 0.4);
	});
	$('#bottomSideContent').mouseout(function(){
		$(this).fadeTo(600, 1);
	});
	$('body').click(function(){
		$('#yt').hide();
		$('body > *').css("opacity", 1);
	});
};


$(document).ready(main);