$(document).ready(function(){
	$('#add').click(function(){		
		if ($('#item').val() !== "") {
			$('#list').append('<li class="thing">' + $('#item').val() + '</li>');
		}
	});
	$(document).keyup(function(keypressed) {
		if (keypressed.keyCode === 13) {
			$('#add').trigger('click');
		}
	});
	$('#delete').click(function(){
		$('#list li:last-child').remove();
	});
});