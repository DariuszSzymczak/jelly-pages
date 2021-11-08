<script setup>
import Overlock from './assets/fonts/Overlock/Overlock-Regular.ttf'



</script>

<template>
  <div id="nav">
    <router-link to="/">Login </router-link>  |  
    <router-link to="/about"> About</router-link>
  </div>
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

#nav {
  padding: 30px;
  position: fixed;
  top: 0px;
  right: 100px ;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
