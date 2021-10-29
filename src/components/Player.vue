<template>
<div id="player">
  <PlayerMusicTitle/>
  <PlayerAnimation/>

</div>
</template>

<script>
import PlayerMusicTitle from './PlayerMusicTitle.vue'
import PlayerAnimation from './PlayerAnimation.vue'

export default {
  components:{
    PlayerMusicTitle,
    PlayerAnimation

  }
}
</script>


<style scoped lang="scss">
#player{
  width: 100vw;
  min-height: 100vh;
  background-color: #e0e5ec;
}
</style>
