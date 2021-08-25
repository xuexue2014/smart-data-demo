<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "./components/head/nav.vue";
export default {
  components: {
    navbar,
  },
};
</script>
<style>
#app {
  min-width: 800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

* {
  margin: 0;
  padding: 0;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983; */
/* } */
</style>
