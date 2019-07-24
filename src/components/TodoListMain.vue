<template>
  <div id="todoListMain">
    <!-- <router-view></router-view> -->
    <a-button @click="handleBack">返回</a-button>
    <h2>>{{$route.params.name}}</h2>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template> 

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Body from "./Body.vue";

export default {
  name: "TodoListMain",
  components: {
    Header,
    Footer,
    Body
  },
  methods: {
    handleBack() {
      this.$confirm({
        title: "Do you want to go back?",
        content: "",
        onOk: () => { //用箭头函数后this指向改变，如果用function()会报错
          console.log("123");
          //   return new Promise((resolve, reject) => {
          //     setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          //   }).catch(() => console.log("Oops errors!"));
          this.$router.push("/");
        },
        onCancel() {}
      });
    }
  }
};
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

