"use strict";

// The current year is retrieved and is placed in the span tag with the id "year" in index.html
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;






