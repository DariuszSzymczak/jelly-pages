<script setup>
import Overlock from './assets/fonts/Overlock/Overlock-Regular.ttf'



</script>

<template>

  <router-view/>
</template>

<style >


@font-face {
  font-family: "Overlock";
  src: local("Overlock"),   url(./assets/fonts/Overlock/Overlock-Regular.ttf) format("truetype");
}

*{
  font-family: Overlock;
}

body {
  overflow-x: hidden;
    overflow-y: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
