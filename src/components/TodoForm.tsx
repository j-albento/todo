import { Todo } from "./models/todo";
import { ChangeEvent, FormEvent, useState } from "react";
import shortid from "shortid";

interface Props {
    addTodo: (todo: Todo) => void;
}

export default function TodoForm({ addTodo }: Props) {
    const initialState = {
        id: "",
        name: "",
        complete: false,
        pinned: false,
    };

    const [todo, setTodo] = useState(initialState);

    function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setTodo({ ...todo, [name]: value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (todo.name === "") {
            return;
        }
        addTodo({ ...todo, id: shortid.generate() });

        setTodo(initialState);
    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control me-2"
                placeholder="Add a task"
                id="todoName"
                name="name"
                value={todo.name}
                onChange={handleInputOnChange}
                autoComplete="off"
            />
            <button className="btn btn-primary" type="submit">
                Add
            </button>
        </form>
    );
}
