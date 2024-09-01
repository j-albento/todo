import * as Icon from "react-bootstrap-icons";
import { Todo } from "./models/todo";
import { useState } from "react";

interface Props {
    todo: Todo;
    completeTodo: (id: string) => void;
}

export default function TodoItem({ todo, completeTodo }: Props) {
    const [isChecked, setIsChecked] = useState(todo.complete);

    function handleCheckedTodo() {
        setIsChecked(!isChecked);
        completeTodo(todo.id);
    }

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id="todoCheck"
                checked={todo.complete}
                onChange={handleCheckedTodo}
            />
            <label className="form-check-label" htmlFor="todoCheck">
                {todo.name}
            </label>

            <button>
                <Icon.PencilSquare />
            </button>

            <button>
                <Icon.Trash />
            </button>

            <button>
                <Icon.Pin />
            </button>
        </div>
    );
}
