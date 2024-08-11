// script.js
function calculateInterest() {
    // Get the values from the form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;

    // Calculate simple interest
    var interest = (principal * rate * time) / 100;

    // Calculate the total amount
    var total = parseFloat(principal) + parseFloat(interest);

    // Display the result
    document.getElementById("interest").innerHTML = "Simple Interest: $" + interest.toFixed(2);
    document.getElementById("total").innerHTML = "Total Amount: $" + total.toFixed(2);
    document.getElementById("result").style.display = "block";
}
