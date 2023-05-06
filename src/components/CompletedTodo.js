import React from "react";
import styles from "../styles/CompletedTodoList.module.css";
import Checkbox from "@mui/material/Checkbox";

export default function CompletedTodo({ todo, toggleCompleteTodo }) {
	function handleTodoChecked() {
		toggleCompleteTodo(todo.id);
	}

	return (
		<div className={styles.CompletedTodo}>
			<Checkbox
				onChange={handleTodoChecked}
				checked={todo.complete}
				sx={{ height: 20, width: 20, color: "#000", pr: 4 }}
			/>
			{todo.name}
		</div>
	);
}
