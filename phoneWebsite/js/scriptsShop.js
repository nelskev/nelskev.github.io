"use strict";

$(document).ready( () => {

    $( function() {
        $( ".tabs" ).tabs({
            // active: false,
          collapsible: true
        });
      } );


   /*     $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });

    
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    }); */

    $('.carousel').slick({
      centerMode: true,
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1
    // variableWidth: true
    }
    );
// $('.single-item').slick();

    // Lightbox functionality
    // $('.carousel').magnificPopup({
    //     delegate: 'img',
    //     type: 'image',
    //     gallery:{
    //         enabled: true
    //     }
    // });
});
