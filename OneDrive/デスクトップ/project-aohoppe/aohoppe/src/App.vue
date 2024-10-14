<template>
  <MainHeader />
  <router-view />
  <MainFooter />
</template>

<script>
import MainHeader from './components/Header.vue';
import MainFooter from './components/Footer.vue';
import "./assets/css/style.css";
import "./assets/js/header.js";

export default {
  name: 'App',
  components: {  
    MainHeader,
    MainFooter
  }
};
</script>

