export default {
  addTodo (state, newTodo) {
    state.todos.unshift({
      title: newTodo,
      completed: false,
      editable: false
    });
  },
  setVisibility (state, str) {
    state.visibility = str;
  }
}
