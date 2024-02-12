"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const contactClear = document.getElementById("contactClear");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    contactClear.addEventListener("click", () => {
      name.value = "";
      email.value = "";
      message.value = "";
  
      name.focus();
    });
  
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      let errorMessage = '';
  
      if (!name.value) {
        errorMessage += 'Name is required.\n';
      }
  
      if (!email.value) {
        errorMessage += 'Email is required.\n';
      }
  
      if (!message.value) {
        errorMessage += 'Message is required.\n';
      }
  
      if (errorMessage !== "") {
        alert(errorMessage);
        event.preventDefault();
      }
    });
  });