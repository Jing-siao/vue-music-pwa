<template>
  <div class="vinyl">
    <div class="vinyl-container">
      <div class="vinyl-record">
          <div class="vibyl-record-image">
             <div class="vibyl-record-hole">

             </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .vinyl{
    @include flex;
    width: 100vw;
    height: 50vh;
    .vinyl-container{
      border-radius: 50%;
      padding: 16px;
      background-color: #eee;
      box-shadow: inset 0 1px 2px rgba($color: #000000, $alpha: .4) 
      0 -1px 1px #fff
      0 1px 0 #fff;
      border-bottom: 1px solid#ddd;
        .vinyl-record{
        @include flex;
        border-radius: 50%;
        width: 40vh;
        height: 40vh;
        background: 
        linear-gradient(90deg, transparent 50%, rgba($color: #333, $alpha: .8) 40%) no-repeat 100% 0,
      
        repeating-radial-gradient(#333,#333 9px,#ccc 10px, #333 11px);
          .vibyl-record-image{
            @include flex;
            border: 1px solid #000;
            border-radius: 50%;
            width: calc(40vh - 60%);
            height: calc(40vh - 60%);
            background: url('../assets/Daxten.jpg') no-repeat center;
            background-size: cover;
            .vibyl-record-hole{
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #E0E5EC;
            }
          }
      }
    }
     
  }
</style>
