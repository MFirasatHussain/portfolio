function copyEmail() {
    var emailIcon = document.getElementById('emailIcon');
    var email = 'mfirasathussain@gmail.com'; // Replace with your email
    navigator.clipboard.writeText(email);
    
    // Display a message
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = 'Email copied!';
    emailIcon.appendChild(tooltip);
    
    // Remove the message after a few seconds
    setTimeout(function() {
        tooltip.remove();
    }, 3000);
}