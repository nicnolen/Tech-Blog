/* LOGOUT ROUTES */
// EVENT HANDLERS
// Event handler for logout route
async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // clear error messages
    errorEl.innerHTML = '';
    document.location.replace('/');
  } else {
    errorEl.innerHTML = response.statusText;
  }
}

// EVENT LISTENERS
document.querySelector('#logout').addEventListener('click', logout);
