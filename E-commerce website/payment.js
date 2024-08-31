document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the payment details
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('cardHolder').value;

    // Placeholder for payment processing logic
    // Example: Integrate with PayPal or Stripe here
    // For now, just simulate a successful payment
    setTimeout(() => {
        document.getElementById('payment-status').textContent = "Payment Successful!";
        document.getElementById('payment-status').style.color = "green";
    }, 1000);

    // Reset the form fields
    document.getElementById('payment-form').reset();
});
