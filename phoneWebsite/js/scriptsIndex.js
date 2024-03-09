"use strict";

/* Kevin Nelson
03-04-24 */

/* 
ModLog
03-04-24

No new changes
*/

let slideshowInterval; // Variable to store the interval

$(document).ready(() => {
    let nextSlide = $("#slides img:first-child");

    // Function to start the slideshow
    const startSlideshow = () => {
        slideshowInterval = setInterval(() => {
            $("#caption").fadeOut(1500);
            $("#phone").fadeOut(1500, () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#phones img:first-child");
                } else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#phone").attr("src", nextSlideSource).fadeIn(1500);
                $("#caption").text(nextCaption).fadeIn(1500);
            }); // end fadeOut()
        }, 6000); // end setInterval()
    };

    // Start the slideshow initially
    startSlideshow();

    // Toggle the slideshow when the pause button is clicked
    $("#pause").click(() => {
        if ($("#pause").val() == "Pause Slideshow") {
            clearInterval(slideshowInterval);
            $("#pause").val("Play Slideshow");
        } else {
            startSlideshow();
            $("#pause").val("Pause Slideshow");
        }
    });
});
