<template>
  <div class="page-start"></div>
  <div class="inner">
  <div class="login-page">
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">ユーザー名:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      // ユーザー名とパスワードの確認
      if (this.username === 'a' && this.password === 'a') {
        console.log('ログイン成功。AdminPageへ遷移します。'); // デバッグメッセージ
        this.$router.push({ name: 'admin-page' }); // 'admin-page' に変更
      } else {
        this.errorMessage = 'ユーザー名またはパスワードが間違っています。';
      }
    },
  },
};
</script>

