
/* Kevin Nelson
03-04-24 */

/* 
ModLog 
03-04-24

Removed form submission and replaced it with
a thank you message that appears after submit button is clicked
email validation added from textbook
*/

"use strict";

function validateEmailList() {
    // get values user entered in text boxes
    const email1 = $("#email1").val();
    const email2 = $("#email2").val();
    const firstName = $("#firstName").val();
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

    let isValid = true;

    // check user entries 
    if (email1 == "") { 
        isValid = false;
        $("#email1").next().text("First Email is required.");
    } else if (!emailPattern.test(email1)) {
        $("#email1").next().text("Email must be valid. Example: grace@yahoo.com");
    } else {
        $("#email1").next().text("");
    }

    if (email2 == "") { 
        isValid = false;
        $("#email2").next().text("Please confirm your email.");
    } else if (email1 != email2) { 
        isValid = false;
        $("#email2").next().text("Both email entries must match.");
    } else {
        $("#email2").next().text("");
    }

    if (firstName === "") {
        isValid = false;
        $("#firstName").next().text("First name is required.");
    } else {
        $("#firstName").next().text("");
    }

    // replace form with confirmation text if form entries are valid
    if (isValid === true) {          
        // $("#emailForm").submit();
        $("#emailForm").hide();
        $("#messageLabel").html("You are successfully signed up for our email list! Click <a href='./index.html'>here</a> to go to the homepage.")
    }
}

$(document).ready(() => {

    const messageValue = $("#message");


    $("#joinList").click(() => {
        validateEmailList();    
    });


        
    

    $("#clearForm").click(() => {
        messageValue.text("");
        $("#email1").val("")
        $("#email2").val("");
        $("#firstName").val("");

        $("#email1").next().text("");
        $("#email2").next().text("");
        $("#firstName").next().text("");



        $("#email1").focus();
    });
    
    $("#email_1").focus();
});
