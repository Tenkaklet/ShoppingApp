$(document).ready(function() {

	$('#remove-completed').hide();

	// Add inputed item
	$('#add').click(function() {		
		if ($('#item').val() !== "") {
			$('#list').append('<li><button class="btn btn-xs btn-danger single-remove">delete</button> <button class="btn btn-xs btn-primary done">Done</button> ' + $('#item').val() + '</li>');
			$('#item').val('');

			$('#remove-completed').show();
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
		if ($('li').size() <= 1) {
			console.log($('li').size());
		$('#remove-completed').hide();
		console.log('remove hidden');
	} else {
		$('#remove-completed').show();
		console.log('remove show');
	}
		$('#list li.completed').hide(400, function(){
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