import React, {useState} from 'react';

const TodosPage = ({ todo, updateTodo, deleteTodo }) => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = () => {
        if (newTitle.trim()) {
            updateTodo({ ...todo, title: newTitle });
        }
    };

    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                checked={todo.status}
                onChange={(e) => updateTodo({ ...todo, status: e.target.checked })}
            />
            <span className={todo.status ? "active" : ""}>{todo.title}</span>
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Update title"
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};


export default TodosPage;