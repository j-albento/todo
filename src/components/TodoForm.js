import React, { useState } from "react";
import shortid from "shortid";
import styles from "../styles/TodoForm.module.css";
import "../App.css";
import AddIcon from "@mui/icons-material/Add";

export default function TodoForm({ addTodo }) {
	const [name, setName] = useState("");

	function handleAddTodo(event) {
		event.preventDefault();
		if (name === "") return;
		const todo = { id: shortid.generate(), name: name, complete: false };
		addTodo(todo);
		console.log(todo);
		setName("");
	}

	function setTodoName(event) {
		setName(event.target.value);
	}
	return (
		<div className={styles.TodoForm}>
			<div className={styles.FormHeader}>
				<h3>Todo List</h3>
				<p>Lets get things done.</p>
			</div>

			<form className={styles.Input} onSubmit={handleAddTodo}>
				<input
					type="text"
					placeholder="Add a task"
					maxLength={40}
					value={name}
					onChange={setTodoName}
				/>
				<button className={styles.AddButton} onClick={handleAddTodo}>
					<AddIcon sx={{ height: 20, width: 20, padding: 0, color: "#fff" }} />
				</button>
			</form>
		</div>
	);
}
