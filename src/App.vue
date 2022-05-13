<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
html,body,ul,li,h1,h2,h3,h4,h5,p,img {margin: 0; padding: 0; font-weight: normal;}
body {font-size: 16px; font-weight: normal;}
h1,h2,h3,h4,h5,p {font-size: 1rem;}
img {display: block;}
a {color: black; text-decoration: none;}
ul {list-style-type: none;}

body {
    background-color: $background-color; // PROVISOIRE
}

</style>
