<template>
  <div id="app">
    <myList></myList>
  </div>
</template>

<script>
import myList from './components/myList.vue'

export default {
  name: 'app',
  components: {
    myList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '../node_modules/bootstrap/dist/css/bootstrap.css'
</style>
