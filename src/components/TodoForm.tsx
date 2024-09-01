import { Todo } from "./models/todo";
import { ChangeEvent, FormEvent, useState } from "react";
import shortid from "shortid";

interface Props {
    addTodo: (todo: Todo) => void; // returns a void function with a parameter of the todo item to be added
}

export default function TodoForm({ addTodo }: Props) {
    const initialState = {
        id: "",
        name: "",
        complete: false,
        pinned: false,
    };

    const [todo, setTodo] = useState(initialState);

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        const taskName = event.target.value;

        setTodo({ ...todo, name: taskName });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addTodo({ ...todo, id: shortid.generate() });
        setTodo(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-check">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a task"
                    id="taskName"
                    name="taskName"
                    onChange={handleInput}
                />

                <button type="submit" onClick={() => handleSubmit}>
                    Add Item
                </button>
            </div>
        </form>
    );
}
