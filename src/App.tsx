import { useEffect, useState } from "react";

import "./App.css";
import { Todo } from "./components/models/todo";

import TodoItem from "./components/TodoItem";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos([
            {
                id: "1",
                name: "test todo",
                complete: false,
                pinned: false,
            },
        ]);
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default App;
