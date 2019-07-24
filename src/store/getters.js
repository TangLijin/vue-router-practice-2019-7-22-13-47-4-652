export default {
  getFilteredTodos (state) {
    let filters = {
      all: todos => todos,
      active: todos => todos.filter(todo => !todo.completed),
      completed: todos => todos.filter(todo => todo.completed)
    };
    return filters[state.visibility](state.todos);
  },
  getVisibility (state) { 
    return state.visibility;
  }
}
