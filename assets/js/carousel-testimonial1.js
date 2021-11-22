(function($){

	'use strict';

	var $owl = $('#section-testimonial1 .owl-carousel');

	$owl.children().each( function( index ) {
	  	$(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
	});

	$owl.owlCarousel({
	  	loop:true,
	    margin:30,
	    nav:false,
	    center: true,
	    dots:true,
	    items:3,
	    stagePadding: 30,
	    smartSpeed:800,
	    responsive:{
	    	992:{
	            items:3,
	        },
	        0:{
	            items:1,
	        }
	    }
	   
	});

	$(document).on('click', '#section-testimonial1 .owl-item>div', function() {
	  	$owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
	});
	
})(jQuery);