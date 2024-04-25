document.querySelector('.account-section').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
      // If the username and password are correct, redirect to another page
      window.location.href = '../first_page/index.html';
  } else {
      // If the username and password are incorrect, display an alert
      alert('Incorrect username or password');
  }
});