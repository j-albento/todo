import * as Icon from "react-bootstrap-icons";
import { Todo } from "./models/todo";
import { useState } from "react";

interface Props {
    todo: Todo;
}

export default function TodoItem({ todo }: Props) {
    const [isChecked, setIsChecked] = useState(todo.complete);

    function handleCheckedTodo() {
        setIsChecked(!isChecked);
    }

    return (
        <div key={todo.id}>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={handleCheckedTodo}
            />
            <label>{todo.name}</label>
            <Icon.Pin />
        </div>
    );
}
