<template>
  <MainContainer />
</template>

<script>
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "App",
  components: {
    MainContainer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #faf8ef;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
@media (min-width: 280px) and (max-width: 800px) {
  #app {
    padding-left:6px;
  }
}
</style>
