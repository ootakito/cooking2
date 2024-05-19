const previewImages = () => {
  console.log("preview.jsが読み込まれました");
  
  // 新規投稿・編集ページのフォームを取得
  const postForm = document.getElementById('new_post');

  // 新規投稿・編集ページのフォームがないならここで終了
  if (!postForm) {
    console.log("投稿フォームが見つかりませんでした");
    return null;
  }
  
  console.log("投稿フォームが見つかりました");

  const input = document.getElementById('post-images');
  const previews = document.getElementById('previews');

  if (!input || !previews) {
    console.error('ファイル入力またはプレビューコンテナが見つかりませんでした');
    return;
  }

  // 既存のイベントリスナーを削除
  input.removeEventListener('change', handleFileSelect);

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
