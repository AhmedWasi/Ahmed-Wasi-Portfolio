(function($){
	'use strict'
	/*typing plugin*/
	var typed = new Typed('.typing', {
	  strings: ["Student.","web designer.", "Font End Developer."],
	  loop: true,
	  typeSpeed: 70
	});

	new WOW().init();
		
	/*Venobox plugin*/
	$(document).ready(function(){
    $('.venobox').venobox(); 
	});

/*SCroll btn*/
	$(window).scroll(function(){
		var topBtn = $(window).scrollTop();

		if(topBtn > 550) {
			$('.top').fadeIn();
		} 
		else{
			$('.top').fadeOut();
		}
	});
	$('.top').on('click', function(){
		$('html').animate({'scrollTop' : 0}, 1000)
	});
/*Menu bar*/
	$('.menu-icon i').click(function(){
		$('.sidebar').animate({
			'left' : 0
		});
	});
	$('.close-icon i').click(function(){
		$('.sidebar').animate({
			'left' : -350
		});
	});
	
})(jQuery);