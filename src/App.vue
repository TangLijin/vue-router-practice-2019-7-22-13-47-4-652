<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template> 

<script>
export default {
    name: 'app',
}
  
</script>

<style>
body {
    font: normal normal 13px/16px "Open Sans", sans-serif;
    background: #ccc;
}
#app {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
    border-radius: 5px;
}
</style>

