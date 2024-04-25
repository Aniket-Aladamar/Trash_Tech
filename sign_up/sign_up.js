document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    
    if (password.length < 6) {
        document.getElementById('error-message').innerText = 'Password must be at least 6 characters long.';
        document.getElementById('error-message').style.display = 'block';
    } else if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Passwords do not match.';
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').innerText = 'You are successfully registered!';
        document.getElementById('success-message').style.display = 'block';
    }
});
