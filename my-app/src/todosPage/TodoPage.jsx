import React from 'react';
import "./TodosPage"

const TodoPage = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoPage
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoPage;
