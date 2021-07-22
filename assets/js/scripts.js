(function($){

	'use strict';

    /**
     * Table Of Content
     * 
     *  1. [Preloader]          - Loading Page
     *
     */
    
    //1. [Preloader]          - Loading Page
	$(window).on('load', function() {
        // Animate loader off screen
        $("#section-preloader").fadeOut("slow");
        // Remove [d-none] class from swiper slider after page load
        $('.swiper-wrapper').removeClass('d-none');
    });

	$(document).ready(function () {
		// 2. [Navigation Menu] - Header Menu
		$('.dropdown-menu .dropdown-toggle').on('click', function(e) {
			if (!$(this).next().hasClass('show')) {
				$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
			}
			$(this).next(".dropdown-menu").toggleClass('show');
			return false;
		});
		//for product mega menu
		$('.product-heading').on( 'click', function(){
			if (!$(this).next().hasClass('active')) {
				$('.product-dropdown-list').removeClass('active');
				$(this).next().addClass('active');
			}
			else if ($(this).next().hasClass('active')) {
				$(this).next().removeClass('active');
			}
			return false;
		});
		$('.carousel-control-prev, .carousel-control-next').click(function(e){
			e.preventDefault();
			$(this).parent().parents('.dropdown-menu').addClass('active')

		});

		// 3. [Navigation Menu]	- Burger Menu
		$('#sidebarCollapse').on('click', function () {
            $('.collapse.in').toggleClass('in');
            // Change icon collapse
            $(this).toggleClass('active');
        });

        //4. [CSS Animate, Waypoint, EZ Animate]		- Animate
		InitWaypointAnimations({
	        animateClass: "ez-animate"
	    });

		//5. [Show hide Selected Price]	-	Section Pricing 1
		$('#section-pricing1').on( 'mouseover', '.item', function(){
			$('#section-pricing1 .item.selected').toggleClass('selected');
		});

		$('#section-pricing1').on( 'mouseleave', '.item', function(){
			$('#section-pricing1 .item.active').addClass('selected');
		});

		// 6. [SCROLL] - Smooth Scroll
		if( $(window).width() ){
			$('a.scroll-down').on('click',function() {
			    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			        var target = $(this.hash);
			        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			        if (target.length) {
				        $('html, body').animate({
				            scrollTop: target.offset().top-0
				        }, 500);
				        return false;
			        }
			    }
		    });
		}

		// 7. [Color Switcher] - Theme Color
		$('#color-switcher').on( 'click', '.switcher-content .list-color span', function(){
			$('#color-switcher .switcher-content .list-color span').removeClass('active');
			$(this).addClass('active');

			// Change Color By Click Class
			var schemeClass = ('scheme1 scheme2 scheme3 scheme4');
		    var $this = $(this);

		    if( $this.hasClass('scheme1') ) {
		        $('body').removeClass(schemeClass);
		    }
		    else if( $this.hasClass('scheme2') ) {
		    	$('body').removeClass(schemeClass);
		        $('body').addClass('scheme2');
		    }
		    else if( $this.hasClass('scheme3') ) {
		    	$('body').removeClass(schemeClass);
		        $('body').addClass('scheme3');
		    }
		    else if( $this.hasClass('scheme4') ) {
		    	$('body').removeClass(schemeClass);
		        $('body').addClass('scheme4');
		    }
		    
		});
		// Toggle Panel (Open/Closed)
		$('#color-switcher').on( 'click', '.switcher-panel', function(){
			$('#color-switcher').toggleClass('closed');
		});

    });

	// XX. [Navigation Menu] - Add Background on SCroll
	$(document).on( 'scroll', function(){
		if( $(this).scrollTop() > 10 ){
				
			$( '#section-navbar1, #section-navbar2' ).addClass( 'sticky-menu' );
			
		}else{

			$( '#section-navbar1, #section-navbar2' ).removeClass( 'sticky-menu' );
			
		}
	});


})(jQuery);
        
   