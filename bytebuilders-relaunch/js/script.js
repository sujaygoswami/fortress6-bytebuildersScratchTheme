


;(function ($) {

	'use strict';
	
 // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.backtop').addClass('reveal');
    } else {
        $('.backtop').removeClass('reveal');
    }
});
 
	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:6,
		        slidesToScroll: 6,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow:4,
		        slidesToScroll: 4
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical:true,
		verticalSwiping:true,
		autoplaySpeed: 6000,
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow:2,
		        slidesToScroll:2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});



	

})(jQuery);

// 
jQuery(document).ready(function(){


//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();

// set back

jQuery('.set-back').each(function(){

	var SETBACK = jQuery(this).find('img').attr('src');
	 jQuery(this).css('background-image', 'url(' + SETBACK + ')');
   
   });


// sub menu for touch
jQuery('body.touch header .navbar-nav .dropdown').each(function(){
	jQuery(this).find('.dropdown-toggle i').detach().appendTo(this);
});
jQuery('.dropdown i').click(function(){
	jQuery(this).parent().find('.dropdown-menu').toggleClass('mobile-sub-open');
	jQuery(this).toggleClass('open');
});

// default-button
jQuery('.default-button').addClass('btn btn-main-2 btn-round-full');
jQuery('.form-navigation .btn').addClass('btn btn-main-2 btn-round-full');

// appoinment form
jQuery('.frame-type-form_formframework').addClass('contact-form-wrap');


});



// 