<template>
  <div id="app">
    <a href='#/'> <h1> D3.js vs Vue.js examples </h1> </a>
    <h2>{{ $route.name }}</h2>
    <top-nav />
    <router-view></router-view>
  </div>
</template>

<script>

import topNav from './components/demos-navigation'

export default {
  name: 'app',
  components: { topNav }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
