<template>
<div>
    <ul id="filters">
        <li>
            <a href="#/" :class="{ selected: dataFilter === 'all' }" @click="changeDataFilter('all')">ALL</a>
        </li>
        <li>
            <a href="#/active" :class="{ selected: dataFilter === 'active' }" @click="changeDataFilter('active')">Active</a>
        </li>
        <li>
            <a href="#/completed" :class="{ selected: dataFilter === 'completed'}" @click="changeDataFilter('completed')">Complete</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        changeDataFilter(str) {
            this.$store.commit('setVisibility', str);
        }
    }
}
</script>

<style>
.selected {
    color: #999;
    text-decoration: line-through;
}

 #filters{
     text-align: center;
     margin-bottom: -10px;
     margin-top: 40px;
 
 }

#filters li a {
    color: #fc999b;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}

#filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}
#filters li a.selected, #filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

#filters li {
	display: inline;
	margin: 0 0 5px 0;
	padding: 8px;
	list-style: none;
    outline: none;
 }


</style>

