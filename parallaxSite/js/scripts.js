/* Mod Log 

04/14/24
Removed experimental code that was supposed to make it light or dark mode depending on set computer preference
Updated file name from main.js to scripts.js
Updated file location to ./js/scripts.js

04/12/24
Added specific navbar classes so it would also become light or dark mode with button press
*/


"use strict";


document.addEventListener("DOMContentLoaded", () => {
// Code from https://stackoverflow.com/questions/63082529/how-to-properly-introduce-a-light-dark-mode-in-bootstrap
    document.getElementById('btnSwitch').addEventListener('click',()=>{
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
            $("#navigation").removeClass("navbar-dark bg-dark");
            $("#navigation").addClass("navbar-light bg-light");
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
            $("#navigation").removeClass("navbar-light bg-light");
            $("#navigation").addClass("navbar-dark bg-dark");
        }
    })
  }); // Allows for light and dark mode switching

$(document).ready(() => {

  $("#navigation").hide(); // Hides navbar on load
  
   // From W3 Schools
let mybutton = document.getElementById("myBtn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

$("#navigation").hide(); // Hides navbar on load
let firstScroll = true; 
//Above code used to determine if the user scrolling from the top is first time

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#myBtn").fadeIn(500);
    mybutton.style.display = "block";
  } else {
    $("#myBtn").fadeOut(500);
    // mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    if (firstScroll == true) {
      $("#navigation").fadeIn(750);
      firstScroll = false;
    }
  }
};


    const copyrightYear = new Date().getFullYear();
    $("#copyrightDate").text(copyrightYear);

    

    // Code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
    // When the user clicks on the button, scroll to the top of the document
    $("#myBtn").click(topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

   
// Below Code From https://www.geeksforgeeks.org/how-to-set-active-class-to-nav-menu-from-bootstrap/

/* Code for changing active  
      link on clicking */ 
      var btns =  
          $("#navigation .navbar-nav .nav-link"); 
      for (var i = 0; i < btns.length; i++) { 
          btns[i].addEventListener("click", 
                                function () { 
              var current = document
                  .getElementsByClassName("active"); 
              current[0].className = current[0] 
                  .className.replace(" active", ""); 
              this.className += " active"; 
          }); 
      } 
      /* Code for changing active  
      link on Scrolling */ 
       $(window).scroll(function () { 
          var distance = $(window).scrollTop(); 
          $('.page-section').each(function (i) { 
              if ($(this).position().top  
                  <= distance + 250) { 
                    
                      $('.navbar-nav a.active') 
                          .removeClass('active'); 
                      $('.navbar-nav a').eq(i) 
                          .addClass('active'); 
              } 
          }); 
      }); 
                  



  });