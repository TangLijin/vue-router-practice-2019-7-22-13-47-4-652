<template>
  <div id="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
  </div>
</template> 

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';

export default {
    name: 'app',
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

