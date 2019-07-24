<template>
    <div id="ListContainer">
        <ol class="todo-list">
          <li
            v-for="(item, index) in this.$store.getters.getFilteredTodos"
            :key="index"
            :class="{completed: item.completed}"
          >
            <input type="checkbox" v-model="item.completed" :class="{ done: item.completed }">
            <span :contentEditable="item.editable" @keydown.enter.prevent="changeNotAble($event, item)"  @dblclick="changeName(item)">{{item.title}}</span>
          </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "ListContianer",
    methods: {
      changeName (item) {
          item.editable = true;
      },
      changeNotAble (e, item) {
          item.title = e.target.innerText;
      }
    }
}
</script>

<style>
.completed {
    color: #999;
    text-decoration: line-through;
}

.done {
    color: #999;
    text-decoration: line-through;
}

 input[type=checkbox].done { 
	
    margin: 5px 5px 2px 0; 
}

ol {
    padding-left: 20px;
}

ol li {
    padding: 5px;color:#000;
}

ol li span{
    word-break:break-all; 
    width: 70%;
}

ol li:nth-child(even){
    background: #f4ecec;
}

li:hover{
  cursor: pointer;
 }

</style>
