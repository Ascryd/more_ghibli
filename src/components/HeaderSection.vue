<template>
  <div class="header">
    <img class="side_pics" src="../assets/mononoke.jpg" alt="pics of princess Mononoke">
    <img class="title" src="../assets/title.svg" alt="Logo of ghibli's studio">
    <img class="side_pics" src="../assets/LTDL.jpg" alt="pics of Hotaru no haka">
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  display: flex;
  height: 150px;
  transition: all 0.7s;
  @include mobile {
    height: 60px;
  }

  .title {
    width: 50%;

  }

  .side_pics {
    width: 25%;
    object-fit: cover;

    &:nth-child(1) {
      border-radius: 0 0 20px 0;
      @include mobile {
        border-radius: 0 0 10px 0;
      }
    }

    &:nth-child(3) {
      border-radius: 0 0 0 20px;
      @include mobile {
        border-radius: 0 0 0 10px;
      }
    }
  }

}

</style>
