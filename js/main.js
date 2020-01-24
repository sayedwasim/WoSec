$(document).ready(function () {
	/*---------- LOAD PARTICLES ----------*/
	particlesJS.load('particles', 'js/particles-config.json');
	
	/*---------- NAVIGATION HAMBURGER ----------*/
	$(".navigation-hamburger").on("click", function(){
		if($(this).hasClass('-open')){
			$(this).removeClass('-open').addClass('-close');
			$('body').removeClass('menu-open');
		}
		else{
			$(this).removeClass('-close').addClass('-open');
			$('body').addClass('menu-open');
		}
	});
	
	/*--- SCROLLING ---*/
  var $header = $('header');
  var offset = 70;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $header.addClass('scrolling');
    } else {
      $header.removeClass('scrolling');
    }
  });
	
	/*---------- HOME SLIDER ----------*/
	if($('.home-slider').length){
		$(".home-slider").owlCarousel({
			loop: true,
			autoplay: true,
			responsiveRefreshRate:0,
			items: 1,
			nav: false,
			dots: false,
			margin:0,
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
			margin:90,
			responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
					autoWidth:false
        },
        // breakpoint from 570 up
        570: {
          items: 1
        },
        // breakpoint from 670 up
        670: {
          items: 4,
					autoWidth:false
        },
        // breakpoint from 940 up
        940: {
          items: 5,
					margin:60,
					autoWidth:false					
        },
        // breakpoint from 1100 up
        1100: {
					autoWidth:true
        }
      }
		});
	}

}) //End of document ready