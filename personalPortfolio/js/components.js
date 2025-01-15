"use strict";

const footer = footerComponent();
let currentYear = new Date().getFullYear();
// const navbar = navbarComponent();


function footerComponent() {
  
    const footer = document.getElementById("footer");
    footer.innerHTML = `
    
    <hr>
    <a href="https://www.linkedin.com"><img src="./images/linkedin.png"class="image-1" alt="LinkedIn Logo"></a>
<a href="https://www.github.com"><img src="./images/github.png" class="image-1" alt="GitHub Logo"></a>

   <p> © ${currentYear} nelskev.github.io. All rights reserved. </p>
   
   
   `;
  
  
    return footer;
  }
  

 /* function navbarComponent() {
  
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = `
    
    <ul>
    <div class="topnav">
    <li><a href="index.html">Home</a></li>
    <li><a href="classes.html">Classes</a></li>
    <li><a href="experience.html">Experience</a></li>
    <li><a href="contact.html">Contact</a></li>

    </div>
</ul> 
    
    
    
    
    
    
    
    `;
  
  
    return footer;
  }*/
  
