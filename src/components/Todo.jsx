function Todo({ todo }) {
  return <li className={todo.completed ? 'completed' : ''}>{todo.title}</li>;
}

export default Todo;
