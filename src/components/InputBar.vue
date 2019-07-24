<template>
    <div id="InputBar">
        <input 
        type="text" 
        class="input-text"
        v-model="newTodo"
        @keydown.enter="handleClickAdd"
        >
        <button @click="handleClickAdd">add</button>
    </div>
</template>

<script>
export default {
    name: "InputBar",
    data() {
        return {
            newTodo: ''
        };
    },
    methods: {
        handleClickAdd() {
            if(!this.newTodo) {
                return;
            }
            let todo = this.newTodo;
            this.$store.commit('addTodo', todo);
            this.newTodo = '';
        }
    }
};
</script>

<style>

.input-text{
    width: 70%;
}

input{
    padding: 4px 15px 4px 0;
    
}

button{
display: inline-block;
background-color:#fc999b;
color:#ffffff;
border-radius: 5px;
text-align:center;
margin-top:2px;
padding: 5px 15px;
}

button:hover{
cursor: pointer;
opacity: .8;
}

</style>


