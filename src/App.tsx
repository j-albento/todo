import { useEffect, useState } from "react";

import "./App.css";
import { Todo } from "./components/models/todo";

import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo: Todo) {
        setTodos((prevTodos) => {
            return [todo, ...prevTodos];
        });
    }

    function deleteTodo(id: string) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function editTodo(id: string, name: string) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, name: name } : todo
            )
        );
    }

    function completeTodo(id: string) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    }

    function pinTodo(id: string) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
            )
        );
    }

    return (
        <div className="container">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    pinTodo={pinTodo}
                />
            ))}
        </div>
    );
}

export default App;
