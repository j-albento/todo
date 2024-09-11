import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "./models/todo";

interface Props {
    selectedTodo: Todo;
    editTodo: (id: string, name: string) => void;
    isEditing: (isEdit: boolean) => void;
}

export default function EditTodo({ selectedTodo, editTodo, isEditing }: Props) {
    const [updatedTodo, setUpdatedTodo] = useState(selectedTodo);

    function handleInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setUpdatedTodo({ ...updatedTodo, [name]: value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // handle if the name is empty
        if (updatedTodo.name === "") {
            return;
        }
        editTodo(updatedTodo.id, updatedTodo.name);
        isEditing(false);
    }

    function handleCancelSubmit() {
        isEditing(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id={updatedTodo.id}
                    value={updatedTodo.name}
                    onChange={handleInputOnChange}
                />
                <button type="submit">Save</button>
                <button onClick={handleCancelSubmit}>Cancel</button>
            </form>
        </div>
    );
}
