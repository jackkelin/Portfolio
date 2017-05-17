(function($){
	$('.js_contact_button').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('is_fixed');
		$('.js_contact_button').toggleClass('is_open');
		$('.js_overlay').toggleClass('is_open');
	});
	$('#contact').on('submit', function(e){
		e.preventDefault();
		submitContact();
	});
	function submitContact() {
		var name = $('#contact input[name="fullname"]').val();
		var email = $('#contact input[name="email"]').val();
		var data = {
			"name": name,
			"email": email
		};
		data = JSON.stringify(data);

		//send
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: data,
			dataType: 'json',
			success: function(response) {
				alert('success');
			},
			completed: function(){
				alert('completed');
			},
			error: function(e){
				console.log('error logged');
				console.log(e);
			}
		})
		.done(function(response) {
			console.log('done response');
			console.log(response);
		})
		.fail(function(data){
			console.log('fail data');
			console.log(data);
		});

	}
	function validateContact() {

	}

})(jQuery);
(function($){

	function init_slide_up(){
		var $svg_desktop = $('.work-svg--desktop');
		var $svg_tablet = $('.work-svg--tablet');
		var $svg_mobile = $('.work-svg--mobile');
		setTimeout(function(){
			$svg_desktop.addClass('animate-slideUp');
		},100);
		setTimeout(function(){
			$svg_tablet.addClass('animate-slideUp');
		},500);
		setTimeout(function(){
			$svg_mobile.addClass('animate-slideUp');
		},1000);
	}
	
	$(window).on('load', function(){
		setTimeout(function(){
			$('body').removeClass('preloading');
			$('.preloader').addClass('is_loaded');
			init_slide_up();
		},500);
	});

})(jQuery);
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
			}, 200);
			// Active
			$(active_image).animate({
				'opacity': '1',
			}, 200);
			// Change Color
			$('.work-pane').css('background-color', active_hex);
		}

		// INIT
		slideChangeEffect();
	});

})(jQuery);