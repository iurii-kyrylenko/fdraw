<template>
  <div id="app">
    <h3 class="header">
      <span>Fractal Explorer</span>
      <a href="https://twitter.com/iurii_kyrylenko" target="_blank" title="Twitter"><img src="./assets/twitter-logo.svg"></a>
      <a href="https://github.com/iurii-kyrylenko" target="_blank" title="GitHub"><img src="./assets/github-logo.svg"></a>
    </h3>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    margin: 10px;
  }
  .header {
    font-family: monospace;
    color: #000;
  }
  .header img {
    vertical-align: middle;
  }
  .header a {
    float: right;
    margin-left: 24px;
  }
</style>
