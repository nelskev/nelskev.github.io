"use strict";

/* Kevin Nelson
03-04-24 */

/*
ModLog
03-04-24

Added third FAQ section and support jQuery to add fade in animation */

$(document).ready( () => {


	

    
	
	
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
		$("#sentenceA1").hide();
		$("#sentenceA2").hide();
		
		
		$('#sentenceA1').fadeIn(1000);
		$('#sentenceA1').show();

			
		setTimeout(function() {
			$('#sentenceA2').fadeIn(1000);
			$('#sentenceA2').show();
		}, 1500);
				

    }); // end click


	// Fades in second question on FAQ.html when first clicked
	$("#faqs h2#B").click( evt => {

		$("#sentenceB1").hide();
		$("#sentenceB2").hide();

		$('#sentenceB1').fadeIn(1000);
		$('#sentenceB1').show();
	
		setTimeout(function() {
			$('#sentenceB2').fadeIn(1000);
			$('#sentenceB2').show();
		}, 1500);
	});
	 // end click
    
	 $("#faqs h2#C").click( evt => {

		$("#sentenceC1").hide();
		$("#sentenceC2").hide();
		$("#sentenceC3").hide();
		$("#sentenceC4").hide();


		$('#sentenceC1').fadeIn(1000);
		$('#sentenceC1').show();
	
		setTimeout(function() {
			$('#sentenceC2').fadeIn(1000);
			$('#sentenceC2').show();
		}, 1500);
		setTimeout(function() {
			$('#sentenceC3').fadeIn(1000);
			$('#sentenceC3').show();
		}, 3000);
		setTimeout(function() {
			$('#sentenceC4').fadeIn(1000);
			$('#sentenceC4').show();
		}, 4500);
	});
    
}); // end ready
