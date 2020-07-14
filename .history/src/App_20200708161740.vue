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
  html,body{
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>