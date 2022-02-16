/* FRONT END LOGIC TO DELETE A POST */
// Function handler to delete a post
async function deleteFormHandler(event) {
  event.preventDefault();

  // capture the id of the post
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  // make delete request to /api/posts/:id
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    // clear error
    errorEl.innerHTML = '';
    // if request is successful, redirect the user
    document.location.replace('/dashboard/');
  } else {
    errorEl.innerHTML = response.statusText;
  }
}

// Event listener to delete a post
document
  .querySelector('.delete-post-btn')
  .addEventListener('click', deleteFormHandler);
