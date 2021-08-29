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
html,
body {
  width: 100%;
}

#app {
  min-width: 800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  background: url(./assets/bcimg.jpg) no-repeat;
  background-size: cover;
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
