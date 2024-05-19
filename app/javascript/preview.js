const previewImages = () => {
  console.log("preview.jsが読み込まれました");

  const newPostForm = document.getElementById('new_post');
  const editPostForm = document.getElementById('edit_post');

  if (!newPostForm && !editPostForm) {
    console.log("投稿フォームが見つかりませんでした");
    return;
  }

  const input = document.getElementById('post-images');
  const previews = document.getElementById('previews');

  if (!input || !previews) {
    console.error('File input or preview container not found');
    return;
  }

  // 既存のイベントリスナーを削除
  input.removeEventListener('change', handleFileSelect);

  // 新規投稿フォームが存在する場合の処理
  if (newPostForm) {
    console.log("新規投稿フォームが見つかりました");
  }

  // 編集投稿フォームが存在する場合の処理
  if (editPostForm) {
    console.log("編集投稿フォームが見つかりました");

    // 既存の画像を初期表示 (編集ページ)
    const existingImages = editPostForm.querySelectorAll('.img-preview');
    previews.innerHTML = ''; // 以前のプレビューをクリア
    existingImages.forEach((img) => {
      previews.appendChild(img.cloneNode(true));
    });
  }

  // 新しいイベントリスナーを追加
  input.addEventListener('change', handleFileSelect);
};

const handleFileSelect = (event) => {
  console.log('ファイルが選択されました');
  const files = event.target.files;
  const previews = document.getElementById('previews');
  previews.innerHTML = ''; // 以前のプレビューをクリア

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('ファイルが読み込まれました');
      const img = document.createElement('img');
      img.src = e.target.result;
      img.classList.add('img-preview'); // CSSクラスを追加してスタイルを適用
      previews.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
};

window.addEventListener('turbo:load', previewImages);
window.addEventListener('turbo:render', previewImages);
document.addEventListener('DOMContentLoaded', previewImages);
