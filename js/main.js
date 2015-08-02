$(document).ready(function(){
	$('#add').click(function(){
		$('#list').append('<li>' + $('#item').val() + '</li>');
		$('#item').val('');
	});
});