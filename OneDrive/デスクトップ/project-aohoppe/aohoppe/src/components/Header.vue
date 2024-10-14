<template>
  <header>
    <div class="main-header">
    <div class="header__contents">
      <h1><a href="/">青ほっぺ</a></h1>
      <ul class="header__list-pc">
          <li><a href="/">ホーム</a></li>
          <li><a href="/news">お知らせ</a></li>
        </ul>
      <!-- ハンバーガーボタン -->
      <div
        id="hamburger"
        class="hamburger"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="{ show: isMenuOpen }">
        <ul class="nav__list">
          <li><a href="/">ホーム</a></li>
          <li><a href="/news">お知らせ</a></li>
        </ul>
      </nav>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isMenuOpen: false, // メニューが開いているかどうかのフラグ
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // メニューの開閉状態を切り替える
    },
  },
};
</script>

