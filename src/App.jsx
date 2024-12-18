import { useState, useEffect } from 'react';
import Todo from './components/Todo.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default App;
