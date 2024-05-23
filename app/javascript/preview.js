/*
document.addEventListener('DOMContentLoaded', () => {
  const MAX_FILES = 3;

  const previewImages = () => {
    console.log("preview.jsが読み込まれました");

    const newPostForm = document.getElementById('new_post');
    const editPostForm = document.getElementById('edit_post');

    if (!newPostForm && !editPostForm) {
      console.log("新規投稿フォームも編集投稿フォームも見つかりませんでした");
      return;
    } else {
      if (newPostForm) {
        console.log("新規投稿フォームが見つかりました");
      }
      if (editPostForm) {
        console.log("編集投稿フォームが見つかりました");
      }
    }

    const previews = document.getElementById('previews');
    if (!previews) {
      console.error('プレビューコンテナが見つかりませんでした');
      return;
    }

    
    if (editPostForm) {
      console.log("編集投稿フォームが見つかりました");
      const existingImages = editPostForm.querySelectorAll('.existing-image');
      console.log(`既存の画像の数: ${existingImages.length}`);
      previews.innerHTML = ''; 
      existingImages.forEach((img) => {
        console.log(`画像ID: ${img.dataset.id}, 画像SRC: ${img.dataset.src}`);
        const imgContainer = createImageContainer(img.dataset.src, null, img.dataset.id);
        previews.appendChild(imgContainer);
      });
    }

    
    if (!document.querySelector('.file-input')) {
      console.log("ファイル入力が見つかりません。新しいファイル入力を追加します。");
      addFileInput();
    }
  };

  const addFileInput = () => {
    const inputContainer = document.getElementById('input-container');
    const input = document.createElement('input');
    input.type = 'file';
    input.name = 'post[images][]';
    input.classList.add('file-input');
    input.addEventListener('change', handleFileSelect);

    inputContainer.appendChild(input);
  };

  const handleFileSelect = (event) => {
    console.log('ファイルが選択されました');
    const files = event.target.files;
    const previews = document.getElementById('previews');
    const existingFiles = previews.querySelectorAll('.img-preview');

    if (existingFiles.length + files.length > MAX_FILES) {
      displayErrorMessage(`画像は最大${MAX_FILES}枚までアップロードできます`);
      event.target.value = ''; 
      return;
    }

    clearErrorMessage(); 
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('ファイルが読み込まれました');
        const imgContainer = createImageContainer(e.target.result, event.target);
        previews.appendChild(imgContainer);
      };
      reader.readAsDataURL(file);
    });

    
    event.target.style.display = 'none';
    addFileInput();
  };

  const createImageContainer = (src, fileInput, imageId = null) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = src;
    img.classList.add('img-preview');

    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
    removeButton.classList.add('remove-button');
    removeButton.type = 'button'; 
    removeButton.addEventListener('click', () => {
      imgContainer.remove();
      if (fileInput) {
        fileInput.remove();
      }
      if (imageId) {
        const removeImageInput = document.createElement('input');
        removeImageInput.type = 'hidden';
        removeImageInput.name = 'post[remove_images][]';
        removeImageInput.value = imageId;
        document.getElementById('input-container').appendChild(removeImageInput);
      }
      const inputContainer = document.getElementById('input-container');
      const inputs = inputContainer.querySelectorAll('.file-input');
      if (inputs.length === 0) {
        addFileInput();
      }
    });

    imgContainer.appendChild(img);
    imgContainer.appendChild(removeButton);

    return imgContainer;
  };

  const displayErrorMessage = (message) => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  };

  const clearErrorMessage = () => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  };

  
  document.addEventListener('turbo:load', previewImages);
  document.addEventListener('turbo:render', previewImages);
  previewImages(); 
});


*/