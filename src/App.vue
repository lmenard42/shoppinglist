<template>
  <div id="app">
    <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="nav-item">Home</router-link>  
      <router-link to="/myLists" class="nav-item ml-3">My Lists</router-link>
      <router-link to="/addlist" class="nav-item ml-3">ADD</router-link>
    </div>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  display: block !important; 
}

@import '../node_modules/bootstrap/dist/css/bootstrap.css'
</style>
