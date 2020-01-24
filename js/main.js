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
	
	/*---------- PARTNERS SLIDER ----------*/
	if($('.partners').length){
		$(".partners").owlCarousel({
			loop: true,
			autoplay: true,
			autoWidth:true,
			responsiveRefreshRate:0,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			margin:90
		});
	}

}) //End of document ready