// JavaScript code for handling login and account creation
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

// Mock user data
const users = [
  { username: 'john', password: 'password' },
  { username: 'pujan', password: '123' }
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    loginError.textContent = ''; // Clear error message
    alert(`Welcome, ${username}! You are logged in.`);
    // Redirect to the user's dashboard or desired page
  } else {
    loginError.textContent = 'Invalid username or password.';
  }
  loginForm.reset();
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUsername = signupForm.newUsername.value;
  const newPassword = signupForm.newPassword.value;
  const existingUser = users.find(u => u.username === newUsername);
  if (existingUser) {
    signupError.textContent = 'Username already exists.';
  } else {
    users.push({ username: newUsername, password: newPassword });
    signupError.textContent = ''; // Clear error message
    alert('Account created successfully! You can now login.');
  }
  signupForm.reset();
});