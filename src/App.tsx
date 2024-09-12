import { useEffect, useState } from "react";

import "./App.css";
import { Todo } from "./components/models/todo";

import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function App() {
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
    function clearAll() {
        setTodos([]);
    }

    return (
        <div className="container p-0 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <TodoForm addTodo={addTodo} />
                </div>
            </div>
            <div className="container p-0">
                <div className="d-flex justify-content-between my-3">
                    {todos.filter((todos) => todos.pinned).length > 0 && (
                        <>
                            <h4 className="m-0">Pinned Tasks</h4>
                            <button
                                type="button"
                                className="btn btn-light btn-sm"
                                onClick={clearAll}
                            >
                                Clear All
                            </button>
                        </>
                    )}
                </div>
                <div className="p-0">
                    {todos
                        .filter((todo) => todo.pinned)
                        .map((todo) => (
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
            </div>
            <div className="container p-0">
                <div className="d-flex justify-content-between my-3">
                    <h4 className="m-0">Your Tasks</h4>
                    {todos.length > 0 ? (
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={clearAll}
                        >
                            Clear All
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            disabled
                            onClick={clearAll}
                        >
                            Clear All
                        </button>
                    )}
                </div>
                <div className="p-0">
                    {todos.length > 0 ? (
                        todos
                            .filter((todo) => !todo.pinned)
                            .map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                    deleteTodo={deleteTodo}
                                    editTodo={editTodo}
                                    pinTodo={pinTodo}
                                />
                            ))
                    ) : (
                        <div className="d-flex justify-content-center text-secondary">
                            You don't have any tasks
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
