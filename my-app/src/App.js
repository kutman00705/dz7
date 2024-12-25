import React, { useState, useEffect } from 'react';
import "./todosPage/TodoPage"
import TodoPage from "./todosPage/TodoPage";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const updateTodo = (updatedTodo) => {
    fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
        .then((response) => response.json())
        .then((data) => {
          setTodos((prevTodos) =>
              prevTodos.map((todo) => (todo.id === data.id ? data : todo))
          );
        });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
        .then(() => {
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        });
  };

  return (
      <div>
        <h1>Todo List</h1>
        <TodoPage todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
  );
};

export default App;