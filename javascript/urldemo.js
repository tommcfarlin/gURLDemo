/**
 * Google URL Shortener API Example
 * Tom McFarlin / tom@tommcfarlin.com / 2010 - 2012
 *
 * Simple demonstration of how to use the the Google URL API shortener.
 */
 
$(function() {

	$('#shorten-url').click(function(evt) {
		evt.preventDefault();
		if($('#long-url').length === 0 || $('#long-url').val() === '') {
			alert('You need to enter a URL to shorten.');
		} else {
			$.ajax({
				type: 'POST',
				url: 'php/curl.php',
				data: 'longUrl=' + $('#long-url').val(),
				success: function(data) {
					$('#shortened-url').html(data);
				}
			});
		} // end if/else
	});
	
	$('#expand-url').click(function(evt) {
		evt.preventDefault();
		if($('#short-url').length === 0 || $('#short-url').val() === '') {
			alert('You need to enter a URL to expand.');
		} else {
			$.ajax({
				type: 'GET',
				url: 'php/curl.php',
				data: 'shortUrl=' + $('#short-url').val(),
				success: function(data) {
					$('#lengthened-url').html(data);
				}
			});
		} // end if/else
	});
	
});