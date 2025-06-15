// register a new user
function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    alert("Username already exists.");
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered successfully!");
  window.location.href = "index.html";
}

// login user
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username] === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "tribute.html";
  } else {
    alert("Invalid credentials.");
  }
}

// tribute page access check
window.onload = function () {
  if (location.pathname.includes("tribute.html")) {
    const user = sessionStorage.getItem("loggedInUser");
    if (!user) {
      alert("You must log in first.");
      window.location.href = "index.html";
    } else {
      document.getElementById(
        "welcome-message"
      ).textContent = `Welcome, ${user}!`;
    }
  }
};

// logout
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
