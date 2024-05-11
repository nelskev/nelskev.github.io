"use strict";

// Navbar code taken from W3Schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav
function navbarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }