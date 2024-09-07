import * as Icon from "react-bootstrap-icons";
import { Todo } from "./models/todo";
import { useState } from "react";
import EditTodo from "./EditTodo";

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
        <div className="form-check">
            {isEdit ? (
                <EditTodo
                    selectedTodo={todo}
                    editTodo={editTodo}
                    isEditing={handleIsEditing}
                />
            ) : (
                <>
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
                    <button onClick={() => setIsEdit(true)}>
                        <Icon.PencilSquare />
                    </button>
                    <button onClick={handleDeleteTodo}>
                        <Icon.Trash />
                    </button>
                    <button onClick={handlePinTodo}>
                        <Icon.Pin />
                    </button>
                </>
            )}
        </div>
    );
}
