<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './views/index'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>