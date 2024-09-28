// Show Sign Up Form
document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
});

// Show Sign In Form
document.getElementById('showSignIn').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
});

// Handle Plan Purchase
const buyPlanButtons = document.querySelectorAll('.buyPlan');
buyPlanButtons.forEach(button => {
    button.addEventListener('click', function() {
        const rate = parseFloat(this.dataset.rate);
        startMining(rate);
    });
});

// Start Mining Animation
function startMining(rate) {
    document.getElementById('miningAnimation').style.display = 'block';
    let profit = 0;
    const profitBalanceElement = document.getElementById('profitBalance');

    const interval = setInterval(() => {
        profit += rate; // Update profit based on plan rate
        profitBalanceElement.textContent = `Profit Balance: $${profit.toFixed(2)}`;
    }, 1000); // Update every second

    // Stop mining after 10 seconds (for demonstration)
    setTimeout(() => {
        clearInterval(interval);
        alert('Congratulations on your purchase! Your mining is complete.');
        document.getElementById('miningAnimation').style.display = 'none'; // Hide animation
    }, 10000); // Stop after 10 seconds
}

// Placeholder functions for About Us and Contact Us
document.getElementById('aboutUs').addEventListener('click', function() {
    alert("About Us: We provide the best crypto mining services.");
});

document.getElementById('contactUs').addEventListener('click', function() {
    alert("Contact Us: You can reach us at support@moneramining.com.");
});