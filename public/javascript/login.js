/* FRONT END JAVASCRIPT CODE FOR THE LOGIN PAGE */
// HANDLER FUNCTIONS
// Function to handle login submissions
function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      console.log(response);
    });
  }
}

// EVENT LISTENERS
// Event listener for the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
