import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

export default function Todo({ todo, toggleCompleteTodo, deleteTodo }) {
	function handleTodoChecked() {
		toggleCompleteTodo(todo.id);
	}

	function handleDeleteTodo() {
		deleteTodo(todo.id);
	}

	return (
		<div className={styles.Todo}>
			<div className={styles.TodoName}>
				<Checkbox
					checked={todo.complete}
					onChange={handleTodoChecked}
					sx={{ width: 20, height: 20, color: "#ccc" }}
				/>
				{todo.name}
			</div>
			<div className={styles.ButtonContainer}>
				<button className={[styles.DeleteButton]} onClick={handleDeleteTodo}>
					<DeleteIcon
						sx={{
							width: 20,
							height: 20,
							padding: 0,
							color: "#fff"
						}}
					/>
				</button>
			</div>
		</div>
	);
}
