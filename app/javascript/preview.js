document.addEventListener('turbo:load', function() {
  const postForm = document.getElementById('new_post') || document.getElementById('edit_post');
  if (!postForm) return;

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const dataIndex = fileInput.getAttribute('data-index');
    const file = fileInput.files[0];

    if (file) {
      const blob = window.URL.createObjectURL(file);
      document.getElementById(`preview-${dataIndex}`).src = blob;
      document.getElementById(`preview-${dataIndex}`).style.display = 'block';
      document.querySelector(`.delete-image-button[data-index="${dataIndex}"]`).style.display = 'block';
    } else {
      document.getElementById(`preview-${dataIndex}`).src = '';
      document.getElementById(`preview-${dataIndex}`).style.display = 'none';
      document.querySelector(`.delete-image-button[data-index="${dataIndex}"]`).style.display = 'none';
    }
  };

  const handleDeleteClick = (event) => {
    const dataIndex = event.target.getAttribute('data-index');
    document.querySelector(`input[data-index="${dataIndex}"]`).value = '';
    document.getElementById(`preview-${dataIndex}`).src = '';
    document.getElementById(`preview-${dataIndex}`).style.display = 'none';
    event.target.style.display = 'none';

    // 隠しフィールドを更新
    const removeImageField = document.getElementById(`remove_image_ids_${dataIndex}`);
    removeImageField.value = removeImageField.value ? `${removeImageField.value},${removeImageField.dataset.id}` : removeImageField.dataset.id;
  };

  document.querySelectorAll('input[type="file"][name="post[images][]"]').forEach(fileInput => {
    fileInput.addEventListener('change', handleFileChange);
  });

  document.querySelectorAll('.delete-image-button').forEach(deleteButton => {
    deleteButton.addEventListener('click', handleDeleteClick);
  });
});
