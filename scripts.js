function checkVisa() {
  const passportNumber = document.getElementById("passportNumber").value;

  // Assuming a simple verification process for demonstration
  // You can replace this with your actual verification logic
  const isValid = true; // Example: Assume passport number is always valid

  // Reload the page
  location.reload();

  // Show a pop-up message after the page reloads
  setTimeout(function() {
    if (isValid) {
      alert(`Passport number ${passportNumber} is valid and verified.`);
    } else {
      alert(`Passport number ${passportNumber} is not valid.`);
    }
  }, 500); // Adjust the delay time as needed
}
