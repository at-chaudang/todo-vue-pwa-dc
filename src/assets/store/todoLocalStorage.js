export const todoLocalStorage = {
  get: (key) => {
    let todos = JSON.parse(localStorage.getItem(key) || '[]');

    todos.forEach((todo, index) => {
      todo.id = index
    });
    return todos;
  },
  set: (key, todos) => {
    localStorage.setItem(key, JSON.stringify(todos));
  }
}
