<template>
  <div class="page-start"></div>
  <div class="admin-page">
    <h1>管理画面</h1>

    <h2>新規投稿を追加</h2>
    <form @submit.prevent="addPost">
      <div>
        <label for="title">タイトル:</label>
        <input type="text" v-model="newPostTitle" required />
      </div>
      <div>
        <label for="content">内容:</label>
        <textarea v-model="newPostContent" required></textarea>
      </div>
      <div>
        <label for="thumbnail">サムネイル画像:</label>
        <input type="file" @change="handleImageUpload" />
        <div v-if="imagePreview">
          <img :src="imagePreview" alt="Image Preview" style="max-width: 300px;" />
        </div>
      </div>
      <button type="submit">投稿を追加</button>
    </form>

    <h2>投稿リスト</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <span class="post-date">{{ post.date }}</span>
        <h3 class="post-title">{{ post.title }}</h3>
        <button @click="startEdit(post)">編集</button>
        <button @click.prevent="confirmDelete(post.id)">削除</button>
      </li>
    </ul>

    <h2>ゴミ箱</h2>
    <ul class="trash-list">
      <li v-for="post in trash" :key="post.id" class="trash-item">
        <span class="post-date">{{ post.date }}</span>
        <h3 class="post-title">{{ post.title }}</h3>
        <button @click.prevent="restorePost(post.id)">復元</button>
        <button @click.prevent="confirmDeleteFromTrash(post.id)">完全に削除</button>
      </li>
    </ul>

    <h2 v-if="isEditing">投稿を編集</h2>
    <form v-if="isEditing" @submit.prevent="updatePost">
      <div>
        <label for="editTitle">タイトル:</label>
        <input type="text" v-model="editPostTitle" required />
      </div>
      <div>
        <label for="editContent">内容:</label>
        <textarea v-model="editPostContent" required></textarea>
      </div>
      <div>
        <label for="editThumbnail">サムネイル画像:</label>
        <input type="file" @change="handleEditImageUpload" />
        <div v-if="editImagePreview">
          <img :src="editImagePreview" alt="Image Preview" style="max-width: 300px;" />
        </div>
      </div>
      <button type="submit">投稿を更新</button>
      <button type="button" @click="cancelEdit">キャンセル</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AdminPage',
  data() {
    return {
      newPostTitle: '',
      newPostContent: '',
      imageFile: null,
      imagePreview: null,
      isEditing: false,
      editPostId: null,
      editPostTitle: '',
      editPostContent: '',
      editImagePreview: null,
    };
  },
  computed: {
    ...mapGetters(['getPosts', 'getTrash']),
    posts() {
      return this.getPosts;
    },
    trash() {
      return this.getTrash;
    },
  },
  methods: {
    addPost() {
      const newPost = {
        id: Date.now(),
        title: this.newPostTitle,
        content: this.newPostContent,
        thumbnail: this.imageFile,
        date: new Date().toLocaleDateString(),
      };

      this.$store.dispatch('addPost', newPost);
      this.resetForm();
    },
    startEdit(post) {
      this.isEditing = true;
      this.editPostId = post.id;
      this.editPostTitle = post.title;
      this.editPostContent = post.content;
      this.editImagePreview = post.thumbnail;
    },
    updatePost() {
      const updatedPost = {
        id: this.editPostId,
        title: this.editPostTitle,
        content: this.editPostContent,
        thumbnail: this.editImagePreview,
        date: new Date().toLocaleDateString(),
      };

      this.$store.dispatch('updatePost', updatedPost);
      this.cancelEdit();
    },
    resetForm() {
      this.newPostTitle = '';
      this.newPostContent = '';
      this.imageFile = null;
      this.imagePreview = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageFile = e.target.result;
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleEditImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editImagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    confirmDelete(id) {
      if (confirm("削除しますか？")) {
        this.$store.dispatch('deletePost', id);
      }
    },
    confirmDeleteFromTrash(id) {
      if (confirm("完全に削除しますか？")) {
        this.$store.dispatch('deleteFromTrash', id);
      }
    },
    restorePost(id) {
      this.$store.dispatch('restorePost', id);
    },
    cancelEdit() {
      this.isEditing = false;
      this.editPostId = null;
      this.editPostTitle = '';
      this.editPostContent = '';
      this.editImagePreview = null;
    },
  },
};
</script>

<style scoped>
/* スタイルを追加する場合はここに記述 */
</style>
