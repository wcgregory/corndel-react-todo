import { useState, useEffect } from 'react';
import Todo from './components/Todo.jsx';
import User from './components/User.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([])

  async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  }

  async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchTodos();
    fetchUsers();
  }, [], []);

  /*
  {todos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ))} 
  */

  return (
    <>
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </>
  );
}

export default App;
