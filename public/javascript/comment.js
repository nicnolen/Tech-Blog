/* ADD COMMENTS */
// REFERENCES

// Comment form handler
async function commentFormHandler(event) {
  event.preventDefault();

  // grabbing the value of `textarea`
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // grabbing the value of the post id from the URL
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // clear error messages
      errorEl.innerHTML = '';
      document.location.reload();
    } else {
      errorEl.innerHTML = response.statusText;
    }
  }
}

// Comment form event listener
document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);
