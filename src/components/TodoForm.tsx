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

    function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setTodo({ ...todo, [name]: value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (todo) addTodo({ ...todo, id: shortid.generate() });
        setTodo(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-check">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a task"
                    id="todoName"
                    name="name"
                    value={todo.name}
                    onChange={handleInputOnChange}
                    autoComplete="off"
                />

                <button type="submit">Add Item</button>
            </div>
        </form>
    );
}
