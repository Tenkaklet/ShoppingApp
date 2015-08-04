$(document).ready(function() {
	$('#add').click(function() {		
		if ($('#item').val() !== "") {
			$('#list').append('<li><button class="btn btn-xs btn-danger single-remove">delete</button> <button class="btn btn-xs btn-primary done">Done</button> ' + $('#item').val() + '</li>');
			$('#item').val('');
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

	$('#list').on('click', '.single-remove', function() {		
		$(this).parent().remove();
	});

	$('#list').on('click', '.done' , function(){
		$(this).parent().toggleClass('completed');
	});

});