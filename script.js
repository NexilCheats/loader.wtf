let keys = [];

// Predefined usernames and passwords for validation
const validCredentials = {
  'user1': 'password1',
  'user2': 'password2',
  // Add more valid usernames and passwords here
};

// Fetch keys from the text file when the page loads
window.onload = function() {
  document.getElementById('login-box').classList.add('active');
  
  fetch('keys.txt') // URL of your keys.txt in GitHub repository
    .then(response => response.text())
    .then(data => {
      keys = data.split('\n').map(key => key.trim()).filter(key => key !== '');
    })
    .catch(error => console.error('Error fetching keys:', error));
};

// Function to show the register form and hide the login form
function showRegister() {
  document.getElementById('login-box').classList.remove('active');
  document.getElementById('register-box').classList.add('active');
}

// Function to show the login form and hide the register form
function showLogin() {
  document.getElementById('register-box').classList.remove('active');
  document.getElementById('login-box').classList.add('active');
}

// Validate the registration key
document.querySelector('.register-button').onclick = function() {
  const keyInput = document.querySelector('input[name="key"]').value;
  
  if (keys.includes(keyInput)) {
    alert('Registration successful!');
    // Proceed with registration logic (e.g., saving the user)
  } else {
    alert('Invalid key. Please try again.');
  }
};

// Validate login credentials
document.querySelector('.login-button').onclick = function() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const errorMessage = document.getElementById('error-message');

  // Clear previous error messages
  errorMessage.style.display = 'none';

  // Check if the username and password are valid
  if (validCredentials[username] === password) {
    alert('Login successful!');
    // Proceed with login logic (e.g., redirecting the user)
  } else {
    errorMessage.textContent = 'Login failed: invalid username or password.';
    errorMessage.style.display = 'block'; // Show the error message
  }
};
