// You are not using todos right now
export const genId = todos => {
  const randomInt = () => Math.floor(Math.random() * 100);

  let id = randomInt();

  // TODO You need to add it here
  while (existTodo(id)) id = randomInt();

  return id;
};

const existTodo = (todos, searchTodo) => {
  let response = false;

  for (let i = 0; i < todos.length; i++) {
    response = todos[i].id === searchTodo.id;
  }

  return response;
};

export const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  return todos || [];
};

export const saveTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
