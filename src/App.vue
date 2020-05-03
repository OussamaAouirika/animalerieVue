<template>
  <div id="app">
    <h1 id="myHeader">Mon animalerie</h1>
    <div class="conteneur-flex">
      <Listing></Listing>
      <Add></Add>
    </div>
  </div>
</template>

<script>
import Listing from "./Listing";
import Add from "./Add";
import tuto from "./tuto";
export default {
  name: "app",
  components: { Listing, Add, tuto },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
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
  background-image: url(pic.jpg);
}
</style>
