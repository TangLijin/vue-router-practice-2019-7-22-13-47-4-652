<template>
  <div>
      <a-button style="margin-left:auto;margin-right:auto; " type="primary" @click="jumpToTodoListMain">开始使用</a-button>
       <a-input size="large" placeholder="请输入姓名" />
  </div>
</template> 

<script>

export default {
    name: 'Main',
    // components: {
    //     // Header, Footer, Body
    // }
    methods:{
        jumpToTodoListMain:function(){
            //这里写一个跳转语句
            // console.log("122");
            this.$router.push('/todoList');
        }
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

