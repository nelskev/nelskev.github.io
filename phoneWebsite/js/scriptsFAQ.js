"use strict";

const toggle = evt => {
    const aElement = evt.currentTarget;                 // get the clicked h2 element
    const h2Element = aElement.parentElement;
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div
  
    // aElement.classList.toggle("minus");
  if(h2Element.hasAttribute("class")){
    h2Element.removeAttribute("class");
  }
  else {
    h2Element.className="minus";
  }
  
  // divElement.classList.toggle("open");
  
  if(divElement.className == ("closed")) {
    divElement.className="open";
  }
  else {
    divElement.className="closed";
  }
  
  
  
    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const aElements = faqs.querySelectorAll("#faqs h2 a");
    
    
    // attach event handler for each h2 tag	    
    for (let aElement of aElements) {
        aElement.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    aElements[0].focus();       
  });