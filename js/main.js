$(document).ready(function() {
	$('#add').click(function() {		
		if ($('#item').val() !== "") {
			$('#list').append('<li class="thing">' + $('#item').val() + '</li>');
		}
	});

	$(document).keydown(function() {
		if (event.which === 13) {
			$('#add').trigger('click');
		}
	});

	$('#remove-completed').click(function() {
		$('#list li.completed').remove();
	});

	$('.single-remove').click(function() {
		$(this).parent().remove();
	});

	$('#done').click(function(){
		$('#list li').addClass('completed');
	});

});