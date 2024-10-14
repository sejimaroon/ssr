<template>
  <div class="page-start"></div>
  <div class="inner">
  <div class="news-detail">
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.date }}</p>
      <div v-html="post.content"></div>
      <div v-if="post.image" class="image-container">
        <img :src="post.image" alt="News Image" />
      </div>
      
      <!-- 編集ボタンをh1タグの下に移動 -->
      <button v-if="isAdmin" @click="toggleEdit">{{ isEditing ? 'キャンセル' : '編集' }}</button>

      <div v-if="isEditing" class="edit-form">
        <textarea v-model="updatedContent" placeholder="ニュース内容を編集"></textarea>
        <div class="image-upload" @drop.prevent="handleDrop" @dragover.prevent>
          <h2>画像をここにドロップするか、クリックして選択</h2>
          <input type="file" @change="handleFileUpload" accept="image/*" hidden ref="fileInput" />
          <div @click="selectFile" class="drop-zone">
            <p>ファイルを選択</p>
          </div>
          <div v-if="imageUrl">
            <img :src="imageUrl" alt="Uploaded Image" class="uploaded-image" />
          </div>
        </div>
        <button @click="saveChanges">保存</button>
      </div>
    </div>
    <div v-else>
      <p>投稿が見つかりません。</p>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import '../assets/css/style.css';

export default {
  name: 'NewsDetail',
  data() {
    return {
      isEditing: false,
      updatedContent: '',
      imageUrl: null, // アップロードした画像のURLを保存
    };
  },
  computed: {
    ...mapGetters(['getPosts']),
    post() {
      const postId = this.$route.params.id;
      return this.getPosts.find(p => p.id === parseInt(postId)); // ID を整数に変換
    },
    isAdmin() {
      // 管理者のログイン状態を判定するロジックを追加
      return this.$store.getters.isAdmin; // Vuexストアから管理者情報を取得
    },
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.updatedContent = this.post.content;
        this.imageUrl = this.post.image || ''; // 既存の画像URLを表示
      }
    },
    saveChanges() {
      const updatedPost = {
        ...this.post,
        content: this.updatedContent,
        image: this.imageUrl, // アップロードされた画像URLを使用
      };
      this.$store.dispatch('updatePost', updatedPost); // Vuex アクションを呼び出す
      this.isEditing = false; // 編集モードを終了
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.loadImage(file);
      this.post.thumbnail = this.imageUrl;
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      this.loadImage(file);
    },
    loadImage(file) {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // 読み込んだ画像をimageUrlに保存
        };
        reader.readAsDataURL(file);
      } else {
        alert('画像ファイルを選択してください。');
      }
    },
    selectFile() {
      this.$refs.fileInput.click(); // ファイル選択のダイアログを開く
    },
  },
};
</script>
