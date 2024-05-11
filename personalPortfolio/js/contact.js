"use strict";

$(document).ready(() => {
    const form = $("#form");

// Function to validate the form
const validateForm = () => {
    // Get values entered by the user
    const company = $("#company").val();
    const contactPerson = $("#contactperson").val();
    const email = $("#email").val();
    const phoneNumber = $("#phone").val();
    const textBox = $("#textBox").val();

    // Regular expression for email validation
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    let isValid = true;

    // Validate each field
    if (company.trim() === "") {
        isValid = false;
        $("#company").next().text("Company name is required.");
    } else {
        $("#company").next().text("");
    }

    if (contactPerson.trim() === "") {
        isValid = false;
        $("#contactperson").next().text("Contact person's name is required.");
    } else {
        $("#contactperson").next().text("");
    }

    if (email.trim() === "") {
        isValid = false;
        $("#email").next().text("Email is required.");
    } else if (!emailPattern.test(email)) {
        isValid = false;
        $("#email").next().text("Please enter a valid email address.");
    } else {
        $("#email").next().text("");
    }

    if (phoneNumber.trim() === "") {
        isValid = false;
        $("#phone").next().text("Phone number is required.");
     } else if (!phonePattern.test(phoneNumber)) {
            $("#phone").next().text("Please enter a valid phone number Example: 123-456-7890");
        }
     else {
        $("#phone").next().text("");
    }

    if (textBox.trim() === "") {
        isValid = false;
        $("#textBox").next().text("Please provide additional information.");
    } else {
        $("#textBox").next().text("");
    }

    return isValid;
}

$("#submit").click((event) => {
    // Prevent the default form submission
    // Validate the form
    if (!validateForm()) {
        // If form is valid, submit the form
        event.preventDefault();
    }
    else {
        form.submit();
    }
});

$("#clear").click((event) => {
    $("#company").val("");
    $("#contactperson").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#textBox").val("");

    $("#company").next().text("*");
    $("#contactperson").next().text("*");
    $("#email").next().text("*");
    $("#phone").next().text("*");
    $("#textBox").next().text("*");

    
})
});
