<template>
  <div id="todoListMain">
      <!-- <router-view></router-view> -->
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
  </div>
</template> 

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Body from './Body.vue';

export default {
    name: 'TodoListMain',
    components: {
        Header, Footer, Body
    }
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

