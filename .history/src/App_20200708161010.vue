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
#app {
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
}
</style>
