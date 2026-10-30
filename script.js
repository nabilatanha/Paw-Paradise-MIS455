
// Name: Nabila | ID: 2321177

// Home Page Button

function showWelcome() {

    alert("Welcome to Paw Paradise! Explore our lovely pet products.");

}


// Products Page Button

function addToCart() {

    alert("Thank you for choosing Paw Paradise! Your product has been selected.");

}


// Contact Page Button

function sendMessage() {

    var name = document.getElementById("nameBox").value;

    var message = document.getElementById("messageBox").value;

    if (name == "" || message == "") {

        alert("Please enter your name and message.");

    }

    else {

        alert("Thank you " + name + "! Your message has been received.");

    }

}
