document.addEventListener('turbo:load', function() {
  const postForm = document.getElementById('new_post');
  if (!postForm) return;

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const dataIndex = fileInput.getAttribute('data-index');
    const file = fileInput.files[0];

    if (file) {
      const blob = window.URL.createObjectURL(file);
      document.getElementById(`preview-${dataIndex}`).src = blob;
      document.querySelector(`.delete-image-button[data-index="${dataIndex}"]`).style.display = 'block';
    } else {
      document.getElementById(`preview-${dataIndex}`).src = '';
      document.querySelector(`.delete-image-button[data-index="${dataIndex}"]`).style.display = 'none';
    }
  };

  const handleDeleteClick = (event) => {
    const dataIndex = event.target.getAttribute('data-index');
    document.querySelector(`input[data-index="${dataIndex}"]`).value = '';
    document.getElementById(`preview-${dataIndex}`).src = '';
    event.target.style.display = 'none';
  };

  document.querySelectorAll('input[type="file"][name="post[images][]"]').forEach(fileInput => {
    fileInput.addEventListener('change', handleFileChange);
  });

  document.querySelectorAll('.delete-image-button').forEach(deleteButton => {
    deleteButton.addEventListener('click', handleDeleteClick);
  });
});
