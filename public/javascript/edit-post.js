/* FRONT END LOGIC TO EDIT A POST */
// Reference error messages
const errorEl = document.getElementById('error-message');

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id,
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // clear error
    errorEl.innerHTML = '';
    document.location.replace('/dashboard/');
  } else {
    errorEl.innerHTML = response.statusText;
  }
}

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
