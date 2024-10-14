document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    // ハンバーガーボタンが存在する場合にクリックイベントを設定
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('show'); // メニューの開閉
      hamburger.classList.toggle('active'); // ハンバーガーボタンのアクティブ状態を切り替え
    });
  }
});
