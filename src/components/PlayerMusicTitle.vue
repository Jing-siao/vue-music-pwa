<template>
  <div class="current-track">
    <div class="song-title">Become Human</div>
    <div class="song-artist">P!nk</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.current-track{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 20vh;
  .song-title{
    width: 100vw;
    text-align: center;
    font-size: 2.4rem;
  }
  .song-artist{
    width: 100vw;
    text-align: center;
    font-size: 1.4rem;
    padding: 5px 0;
  }
}
</style>
