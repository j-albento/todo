import * as Icon from "react-bootstrap-icons";
import { Todo } from "./models/todo";
import { useState } from "react";
import { Button, Container, InputGroup } from "react-bootstrap";

interface Props {
    todo: Todo;
}

export default function TodoItem({ todo }: Props) {
    const [isChecked, setIsChecked] = useState(todo.complete);

    function handleCheckedTodo() {
        setIsChecked(!isChecked);
    }

    return (
        <Container fluid>
            <InputGroup className="mb-2">
                <InputGroup.Checkbox
                    checked={todo.complete}
                    onChange={handleCheckedTodo}
                />
                <label>{todo.name}</label>

                <Button>
                    <Icon.PencilSquare />
                </Button>

                <Button>
                    <Icon.Trash />
                </Button>

                <Button>
                    <Icon.Pin />
                </Button>
            </InputGroup>
        </Container>
    );
}
