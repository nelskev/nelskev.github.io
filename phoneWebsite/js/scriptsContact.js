"use strict";

function validateContactForm() {

  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

  let isValid = true;
  
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();

  if (name === "") {
      isValid = false;
      $("#name").next().text("Please enter a name.");
  }
  else {
    $("#name").next().text("");
  }

  if (email === "") {
      isValid = false;
      $("#email").next().text("Please enter an email.");
  }
  else if (!emailPattern.test(email)) {
    isValid = false;
    $("#email").next().text("Email must be valid. Example: grace@yahoo.com");
  }
  else {
    $("#email").next().text("");
  }

  if (message === "") {
      isValid = false;
      $("#message").next().text("Please enter a message.");
  }
  else {
    $("#message").next().text("");
  }

  if (isValid === true) {
      $("#contactForm").hide();
      $("#messageLabel").html("We have received your message and will get back to you as soon as we can! <br> Click <a href='./index.html'>here</a> to go back to the homepage.")
    } 
}

$(document).ready(() => {
    

    

  $("#submit").click(() => {
      validateContactForm();
  });

  $("#contactForm").keydown(() => {
      if (event.key === "Enter") { 
          validateContactForm();
      }
  });

    $("#contactClear").click(() => {
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      $("#name").focus();

      $("#name").next().text("*");
      $("#email").next().text("*");
      $("#message").next().text("*");
    });
  
});
