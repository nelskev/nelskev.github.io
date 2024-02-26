"use strict";

$(document).ready( () => {

	$("#sentenceA1").hide();
	$("#sentenceA2").hide();
	$("#sentenceB1").hide();
	$("#sentenceB2").hide();

    
	
	
	// runs when an h2 heading is clicked
	$("#faqs h2").click( evt => {
		const h2 = evt.currentTarget;

		// $(h2).toggleClass("minus");

		if ($(h2).attr("class") != "minus") {
		
			$(h2).next().hide(); 
			}
	   	else {

			   $(h2).next().show(); 
		   }
		   
		   $(h2).toggleClass("minus");
				

    });


	// Fades in first question on FAQ.html when first clicked
	$("#faqs h2#A").click( evt => {
		
		
		$('#sentenceA1').fadeIn(1000);
		$('#sentenceA1').show();

			
		setTimeout(function() {
			$('#sentenceA2').fadeIn(1000);
			$('#sentenceA2').show();
		}, 1500);
				

    }); // end click


	// Fades in second question on FAQ.html when first clicked
	$("#faqs h2#B").click( evt => {
		$('#sentenceB1').fadeIn(1000);
		$('#sentenceB1').show();
	
		setTimeout(function() {
			$('#sentenceB2').fadeIn(1000);
			$('#sentenceB2').show();
		}, 1500);
	});
	 // end click
    
    
}); // end ready
