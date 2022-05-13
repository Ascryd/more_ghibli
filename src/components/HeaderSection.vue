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
  // background-color: rgba(255, 0, 0, 0.589);
  height: 150px;

  .title {
    width: 50%;
    background-color: white;
    // object-fit: cover;
    // box-shadow: 40px -10px 80px rgba(255, 255, 255, 0.918), -40px -10px 80px rgba(255, 255, 255, 0.918);
    // z-index: 2;
  }

  .side_pics {
    width: 25%;
    object-fit: cover;
  }

}

</style>
