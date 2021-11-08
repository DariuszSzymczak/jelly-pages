<template>
  <div class="LoginAdmin">
    <Lucek></Lucek>
    <h1>Jelly Pages</h1>
    <div class="LoginAdmin-login-box">
      <input placeholder="Login:" type="text" v-model="pies" />
      <input placeholder="Password:" type="text" />
      <button @click="changePies">{{pies}}</button>
    </div>
  </div>
</template>

<script setup>
import Lucek from "./../components/Lucek.vue";
import animate from "./../composables/animate.js";
import {ref} from 'vue';

let pies = ref(" piesek ");
function changePies () { pies.value = "kot"; console.log('dasdasdasdasd') }

const lucekAnimation = [
  { x: "-30vw", y: "1vw", reverse: false },
  { x: "130vw", y: "80vh", reverse: true },
  { x: "-30vw", y: "85vh", reverse: true },
  { x: "130vw", y: "20vh", reverse: true },
];

animate("lucek-box", lucekAnimation, 6);


</script>

<style lang="scss" scoped>
h1 {
  display: block;
  padding-top: 3vw;
  font-size: 5vw;
}
.LoginAdmin {
  background: url("./../assets/LoginBackground/LoginBackground.jpg");
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  flex-wrap: wrap;
}

.LoginAdmin-login-box {
  width: auto;
  background: #262626a3;
  padding: 1vw;
  border-radius: 0.2vw;
}
.LoginAdmin-login-box * {
  display: block;
  margin: auto;
  color: #005738;

  font-weight: bold;
}

.LoginAdmin-login-box input {
  padding: 1vw;
  margin: 1vw;
  width: 18vw;
  background: #fff;
}

.LoginAdmin-login-box button {
  background: #00b7ff;
  padding: 1vw 3vw;
  border-radius: 0.4vw;
}
</style>
