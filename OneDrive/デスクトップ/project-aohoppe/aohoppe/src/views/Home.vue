<template>
  <div class="mv">
    <div class="inner">
      <p class="main__lead">触ってみる？</p>
    </div>
  </div>
  <div class="inner">
    <section class="news">
      <h2 class="section__title">お知らせ</h2>
      <ul class="news__list">
        <!-- すべてのニュース記事を表示 -->
        <li v-for="post in posts" :key="post.id" class="news__item">
          <router-link :to="{ name: 'news-detail', params: { id: post.id } }" class="news-link">
            <!-- サムネイルが存在する場合に表示 -->
            <div v-if="post.thumbnail" class="news-thumbnail">
              <img :src="post.thumbnail" alt="News Thumbnail" class="thumbnail-img" />
            </div>
            <div class="news-text">
              <span class="news-date">{{ post.date }}</span>
              <span class="news-title">{{ post.title }}</span>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- ニュースが4つ以上ある場合、「もっと見る」リンクを表示（必要に応じて） -->
      <router-link v-if="posts.length > 3" class="more-link" :to="{ name: 'news-list' }">
        もっと見る
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import '../assets/css/style.css';

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['getPosts']), // Vuexからのgetterをマップ
    posts() {
      return this.getPosts; // Vuexからすべてのニュースを取得
    },
  },
};
</script>
