document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('user-type').value;
  
    // You can add your login authentication logic here
    
    // For now, just displaying an error message
    document.getElementById('error-message').textContent = "Login functionality not implemented yet.";
  });
  