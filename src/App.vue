<template>
  <Player msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Player
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Open Sans',sans-serif,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1rem;

}
</style>
