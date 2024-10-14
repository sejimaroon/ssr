import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index'; // 追加

const app = createApp(App);

app.use(router);
app.use(store); // 追加

app.mount('#app');
