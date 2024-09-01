import { useState } from "react";

import "./App.css";
import { Todo } from "./components/models/todo";

import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import shortid from "shortid";

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: shortid.generate(),
            name: "test todo",
            complete: false,
            pinned: false,
        },
    ]);

    // useEffect(() => {
    //     // dummy todos array
    //     setTodos([]);
    // }, []);

    function addTodo(todo: Todo) {
        setTodos((prevTodos) => {
            return [todo, ...prevTodos];
        });
    }

    function completeTodo(id: string) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
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
                />
            ))}
        </div>
    );
}

export default App;
