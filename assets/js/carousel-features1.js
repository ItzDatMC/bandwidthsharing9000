(function($){

	'use strict';

	var swiper = new Swiper('.swiper-container.features1', {
      	slidesPerView: 1,
      	spaceBetween: 30,
      	width: 370,
      	navigation: {
		    nextEl: "#section-features1 .fa-long-arrow-right",
		    prevEl: "#section-features1 .fa-long-arrow-left"
		  },
      
    });
	
})(jQuery);