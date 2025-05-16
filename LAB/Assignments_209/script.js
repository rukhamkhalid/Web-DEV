// Switch between login and signup forms
function showSignup() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
  }
  
  function showLogin() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  }
  
  // Validate login form
  function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    alert("Login successful!");
    return true;
  }
  
  // Validate signup form
  function validateSignup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    alert("Signup successful!");
    return true;
  }
  
  // Validate email format
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  