// Form handler to grab post-title and port-url values and send them with a POST request to /api/posts
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    errorEl.innerHTML = '';
    document.location.replace('/dashboard');
  } else {
    errorEl.innerHTML = response.statusText;
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
