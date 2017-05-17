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