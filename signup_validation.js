function validateSignup() {
    var phoneNumber = document.getElementById("phoneInput").value;
    var email = document.getElementById("emailInput").value;

    // Check if the phone number is empty or doesn't have the required length
    if (phoneNumber === "" || phoneNumber.length !== 10) {
        alert("Please enter a valid phone number with 10 digits");
        return;
    }

    // Check if the email is empty or doesn't have the required length
    if (email === "" || email.length < 6) {
        alert("Please enter a valid email address");
        return;
    }



    // If all validations pass, you can proceed with further actions (e.g., form submission)
    alert("Verification successful! Proceeding with signup.");
}
