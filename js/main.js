$(document).ready(function() {

	// Add inputed item
	$('#add').click(function() {		
		if ($('#item').val() !== "") {
			$('#list').append('<li><button class="btn btn-xs btn-danger single-remove">delete</button> <button class="btn btn-xs btn-primary done">Done</button> ' + $('#item').val() + '</li>');
			$('#item').val('');
		}

	});
	// Same as above but by pressing "enter"
	$(document).keydown(function() {
		if (event.which === 13) {
			$('#add').trigger('click');
		}
	});

	// Remove completed tasks
	$('#remove-completed').click(function() {	
		$('#list li.completed').fadeOut(1000, function(){
			$(this).remove();
		});
	});

	// Remove indivual item
	$('#list').on('click', '.single-remove', function() {		
		$(this).parent().hide(400, function(){
			$(this).remove();
		});		
	});

	// User defines completed or ongoing task
	$('#list').on('click', '.done' , function(){
		$(this).parent().toggleClass('completed');
	});



});