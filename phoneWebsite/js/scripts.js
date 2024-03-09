/* Kevin Nelson 
03-04-24 */

/*
ModLog
03-04-24

Changed dynamic year to jQuery since all html pages reference jQuery
*/


"use strict";

// The current year is retrieved and is placed in the span tag with the id "year" in the footer
const currentYear = new Date().getFullYear();
// document.getElementById("year").textContent = currentYear;
$("#year").text(currentYear);








