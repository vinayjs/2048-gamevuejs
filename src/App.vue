<template>
<MainContainer />
</template>

<script>
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #faf8ef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
