"use strict";


/* Kevin Nelson
03-04-24 */


/* Modlog 02-04-24

Added dialog plugin and added functionality based on which buy button was clicked

*/

$(document).ready( () => {

  /* Below plugin assists with when the user clicking the buy button. Dialog popup shows when user
  clicks Buy Now button and uses an item switch case to say the name of the phone when clicked. */
  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      }
    });
 
    $( ".buy" ).on( "click", function() {
  /* https://stackoverflow.com/questions/27802014/writing-a-switch-that-checks-this-id-as-case 
      assisted with below code
  */
     let item = "unknownPhone";
      switch (this.id) {
        case "buy-s24u":
          item = "Samsung S24 Ultra";
          break;
        case "buy-1+12":
          item = "OnePlus 12";
          break;
        case "buy-ai15p":
          item = "Apple iPhone 15 Pro";
          break;
        default:
          item = "unknown error";
          break;
        } 



      $("#dialog").html(`Your ${item} has been added to the cart successfully!`);
      $( "#dialog" ).dialog( "open" );

    });
    /*End of dialog plugin*/
  } );

  /* Below plugin assists by adding a section of tabs in each phone div */
    $( function() {
        $( ".tabs" ).tabs({
            // active: false,
          collapsible: true
        });
      } );


 
/* Below plugin assists by adding carousel pictures */
    $('.carousel').slick({
      centerMode: true,
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1
    // variableWidth: true
    }
    );

});
