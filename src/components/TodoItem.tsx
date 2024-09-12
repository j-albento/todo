import * as Icon from "react-bootstrap-icons";
import { Todo } from "./models/todo";
import { useState } from "react";
import EditTodo from "./EditTodo";
import "../App.css";

interface Props {
    todo: Todo;
    completeTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    pinTodo: (id: string) => void;
    editTodo: (id: string, name: string) => void;
}

export default function TodoItem({
    todo,
    completeTodo,
    deleteTodo,
    pinTodo,
    editTodo,
}: Props) {
    const [isChecked, setIsChecked] = useState(todo.complete);
    const [isPinned, setIsPinned] = useState(todo.pinned);
    const [isEdit, setIsEdit] = useState(false);

    function handleCheckedTodo() {
        setIsChecked(!isChecked);
        completeTodo(todo.id);
    }

    function handleDeleteTodo() {
        deleteTodo(todo.id);
    }

    function handlePinTodo() {
        setIsPinned(!isPinned);
        pinTodo(todo.id);
    }

    function handleIsEditing() {
        setIsEdit(!isEdit);
    }

    return (
        <div className="container form-check">
            {isEdit ? (
                <EditTodo
                    selectedTodo={todo}
                    editTodo={editTodo}
                    isEditing={handleIsEditing}
                />
            ) : (
                <div className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            id="todoCheckBox"
                            checked={todo.complete}
                            onChange={handleCheckedTodo}
                        />
                        <label
                            className="form-check-label text-break"
                            style={{ maxWidth: "500px" }}
                            htmlFor="todoCheckBox"
                        >
                            {todo.name}
                        </label>
                    </div>
                    <div>
                        <button
                            className="custom-btn"
                            onClick={() => setIsEdit(true)}
                        >
                            <Icon.PencilSquare size={18} />
                        </button>

                        <button
                            className="custom-btn"
                            onClick={handleDeleteTodo}
                        >
                            <Icon.Trash size={18} />
                        </button>
                        <button className="custom-btn" onClick={handlePinTodo}>
                            <Icon.Pin size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
