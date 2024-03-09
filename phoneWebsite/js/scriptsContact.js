

/* Kevin Nelson 
03-08-24 */

/*
ModLog

03-08-24
Added date and time section and adjusted thank you message depending on phone or email selection


03-04-24

Removed form submission and replaced it with label message confirming entries
were correct and the message was received  
Email validation added from textbook
*/

"use strict";

function validateContactForm() {
  let isValid = true;


  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  const phonePattern = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
  /* Above pattern taken from https://stackoverflow.com/questions/27055321/regex-for-validating-us-phone-number-format */
  const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
  /* Above pattern taken from Account Profile Chapter 13 Exercise */

  
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();
  const phone = $("#phoneEntry").val();
  const phoneOrEmail = $("input[name='phoneOrEmail']:checked").val(); 
  const dateEntry = $("#dateEntry").val();
  const timeEntry = $("#timeEntry").val();
  /* Above code taken from https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery */



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

  if (phone === "") {
    isValid = false;
    $("#phoneEntry").next().text("Please enter a phone number");
  }else if (!phonePattern.test(phone)) {
    isValid = false;
    $("#phoneEntry").next().text("Phone number must be valid example: 123-456-7890");

  }
  else {
$("#phoneEntry").next().text("");
  }

if (phoneOrEmail == undefined) {
  isValid = false;
  $("#phoneOrEmailSpan").text("Please select phone or email");
}
else {
  $("#phoneOrEmailSpan").text("");
}


function compareTime(dateEntry) {
  return new Date() >= new Date(dateEntry);
}

if ($(":radio:checked").val() == "Phone") {
  if (dateEntry === "") {
    isValid = false;
    $("#dateEntrySpan").text("Please enter a date");
  }
  else if (!datePattern.test(dateEntry)) {
    isValid = false;
    $("#dateEntrySpan").text("Please enter date in MM/DD/YYYY format");
  }
  else {
     if (compareTime(dateEntry) == true) {
      isValid = false;
      $("#dateEntrySpan").text("Please enter a future date");
     }
     else {
      $("#dateEntrySpan").text("");
     }
  }

  if (timeEntry === "") {
    isValid = false;
    $("#timeEntrySpan").text("Please select a time");
  }
  else {
    $("#timeEntrySpan").text("");

  }
  



   
}

if (isValid === true) {
  $("#contactForm").hide();
  if ($(":radio:checked").val() == "Phone")
  $("#messageLabel").html("We have received your message and will get contact you on the specified date and time! <br> Click <a href='./index.html'>here</a> to go back to the homepage.");
}
else{
  $("#messageLabel").html("We have received your message and will get back to you as soon as we can! <br> Click <a href='./index.html'>here</a> to go back to the homepage.");
} 
}




  


function validateEmail() {

}

$(document).ready(() => {
  $("#dateEntry").attr("disabled", true);
  $("#dateEntrySpan").text("");
  $("#timeEntry").attr("disabled", true);
  $("#timeEntrySpan").text("");

  
  $(":radio").change( () => {
    const radioButton = $(":radio:checked").val();
    if (radioButton == "Phone") {
        $("#dateEntry").attr("disabled", false);
        $("#dateEntrySpan").text("*");
        $("#timeEntry").attr("disabled", false);
        $("#timeEntrySpan").text("*");
    } else {
        $("#dateEntry").attr("disabled", true);
        $("#dateEntrySpan").text("");
        $("#timeEntry").attr("disabled", true);
        $("#timeEntrySpan").text("");
    }
  
});


$('#timeEntry').timepicker({
  timeFormat: 'h:mm p',
    interval: 30,
    minTime: '8:00AM',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '8:00am',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});
$("#timeEntry").val("")



  $("#submit").click(() => {
      validateContactForm();
  });



    $("#contactClear").click(() => {
      $("#name").val("");
      $("#email").val("");
      $("phoneEntry").val("")
      $("#message").val("");
      $('input[name="phoneOrEmail"]').prop('checked', false);
      /* Above code taken from https://stackoverflow.com/questions/977137/how-to-reset-radiobuttons-in-jquery-so-that-none-is-checked */
      $("#dateEntry").val("")
      $("#timeEntry").val("")
      $("#dateEntry").attr("disabled", true);
$("#timeEntry").attr("disabled", true);
      $("#name").focus();

      $("#name").next().text("*");
      $("#email").next().text("*");
      $("#phoneEntry").next().text("*");
      $("#message").next().text("*");
      $("#phoneOrEmailSpan").text("*");
      $("#dateEntrySpan").text("*");
      $("#timeEntrySpan").text("*");
    });
  
});
