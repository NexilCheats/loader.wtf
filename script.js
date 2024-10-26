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

// Initial display setup to show login form by default
window.onload = function() {
  document.getElementById('login-box').classList.add('active');
};
