import { ChangeEvent, useState } from "react";
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

    function handleSubmit() {
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
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id={updatedTodo.id}
                        value={updatedTodo.name}
                        onChange={handleInputOnChange}
                    />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-success me-2"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleCancelSubmit}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}
