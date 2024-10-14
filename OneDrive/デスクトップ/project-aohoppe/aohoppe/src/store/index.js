import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
    trash: JSON.parse(localStorage.getItem('trash')) || [],
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex(p => p.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
    deletePost(state, postId) {
      const postIndex = state.posts.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        const [deletedPost] = state.posts.splice(postIndex, 1);
        state.trash.push(deletedPost);
        localStorage.setItem('posts', JSON.stringify(state.posts));
        localStorage.setItem('trash', JSON.stringify(state.trash));
      }
    },
    restorePost(state, postId) {
      const postIndex = state.trash.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        const [restoredPost] = state.trash.splice(postIndex, 1);
        state.posts.push(restoredPost);
        localStorage.setItem('posts', JSON.stringify(state.posts));
        localStorage.setItem('trash', JSON.stringify(state.trash));
      }
    },
    deleteFromTrash(state, postId) {
      state.trash = state.trash.filter(post => post.id !== postId);
      localStorage.setItem('trash', JSON.stringify(state.trash));
    },
  },
  actions: {
    addPost({ commit }, post) {
      commit('addPost', post);
    },
    updatePost({ commit }, updatedPost) {
      commit('updatePost', updatedPost);
    },
    deletePost({ commit }, postId) {
      commit('deletePost', postId);
    },
    restorePost({ commit }, postId) {
      commit('restorePost', postId);
    },
    deleteFromTrash({ commit }, postId) {
      commit('deleteFromTrash', postId);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getTrash(state) {
      return state.trash;
    },
  },
});
