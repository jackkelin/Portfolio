(function($){

	$(document).ready(function(){

		$('.js_bottom_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: $('.slider-arrows'),
			prevArrow: $('.slider-arrow--prev'),
			nextArrow: $('.slider-arrow--next'),
			dots: true,
			appendDots: $('.slider-dots'),
			draggable: false,
			fade: true,
			speed: 700,
		});

		$('.js_bottom_slider').on('afterChange', function(event, slick, direction){
		  slideChangeEffect();
		});

		function slideChangeEffect(){
			// --- Change Image
			var active_index = $('.slick-slide.slick-active').attr('data-index'),
					svg_image = 'svg image',
					active_image = svg_image + '[data-index="'+active_index+'"]',
					active_hex = $('.slick-slide.slick-active').attr('data-hex');
			// Reset
			$(svg_image).animate({
				'opacity': '0',
			}, 300);
			// Active
			$(active_image).animate({
				'opacity': '1',
			}, 300);
			// Change Color
			$('.work-pane').css('background-color', active_hex);
		}

		// INIT
		slideChangeEffect();
	});

})(jQuery);
