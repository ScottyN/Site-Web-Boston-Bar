var main = function(){
	$('.fading').hover(function() {
		$(this).stop(true).fadeTo(200, 0.4);
	});
	$('.fading').mouseout(function(){
		$(this).fadeTo(200, 1);
	});;
	$('body').click(function(){
		$('#yt').hide();
		$('body > *').css("opacity", 1);
	});
};


$(document).ready(main);