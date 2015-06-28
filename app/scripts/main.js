$(function(){
	// initialize material theme
	$.material.init();

	// tabs
	$('#flightSearchTab a[href="#return"]').tab('show');

	// Price range slider 
	$("#priceRefine").noUiSlider({
		start: [0, 200],
		connect: true,
		range: {
			'min': 0,
			'max': 200
		}
	});

	$('#priceRefine').Link('lower').to($('.priceLow'));
	$('#priceRefine').Link('upper').to($('.priceHigh'));

	// Datepicker
	$('#flightSearchTab .input-group.date').datepicker({
		format: "dd/mm/yyyy",
    	startDate: "today",
	    todayHighlight: true
	});

	
	// Replace name with short code when screen size is between 970px and 1500px
	function textReplace() {
		var $airport = $('.airport'); 
		var win = $(window);
		if (win.width()>970 && win.width()<1500 ) {
			$airport.each(function() {
				var $this = $(this);
				var replaceText = $this.attr('data-airport-code');
				if (replaceText){
					$this.text(replaceText);
				}
			});
		} else {
			$airport.each(function() {
				var $this = $(this);
				var originalText = $this.attr('data-airport-name');
				if(originalText) {
					$this.text(originalText);
				}
			});
		}
	}
	textReplace();
	$(window).on('resize', textReplace);
	
	

})