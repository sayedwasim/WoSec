$(document).ready(function () {
	/*---------- LOAD PARTICLES ----------*/
	particlesJS.load('particles', 'js/particles-config.json');
	
	/*---------- HOME SLIDER ----------*/
	if($('.home-slider').length){
		$(".home-slider").owlCarousel({
			loop: true,
			autoplay: true,
			items: 1,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut'
		});
	}

}) //End of document ready