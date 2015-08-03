$(document).ready(function(){
	$('#add').click(function(){
		$('#list').append('<li class="thing">' + $('#item').val() + '</li>');
		$('#item').val();
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