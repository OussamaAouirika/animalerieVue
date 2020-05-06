<template>
  <div id="app">
    <h1 id="myHeader">Mon animalerie</h1>
    <div class="conteneur-flex">
      <div>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/add">ADD</router-link>
        <router-link to="/listing">LISTING</router-link>
        <router-link to="/edit/:anim">edit</router-link>
        <router-link to="/user">User</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  /* background: url(Background.jpg) no-repeat center top ; */
  background-size: cover;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

#myHeader {
  font-size: 48px;
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  font-family: "Segoe print", Arial, Helvetica, sans-serif;
  color: #6bf;
  padding: 24px 32px 32px 32px;
  font-weight: lighter;
  -moz-box-shadow: 2px 2px 6px #888;
  -webkit-box-shadow: 2px 2px 6px #888;
  box-shadow: 2px 2px 6px #888;
  text-align: center;
  display: inline;
  line-height: 150px;
}
</style>
