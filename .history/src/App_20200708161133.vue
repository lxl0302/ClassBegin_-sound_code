<template>
  <div id="app">
    <HelloWorld />
    1
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
#app {
 width: 100%;
 height: 100%;
 background-color: yellow;
}
</style>
