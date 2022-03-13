<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/bingo.png">
    <bingoManager/>
  </div>
</template>

<script>
import BingoManager from './components/BingoManager.vue'


export default {
  name: 'App',
  components: {
    BingoManager
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  max-width: 700px;
}
</style>
