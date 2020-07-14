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
    height: 100%;
    width: 100%;
    border: hidden;
    overflow: hidden;
    background-color: black;
  }
</style>