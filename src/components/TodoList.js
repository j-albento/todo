import React from "react";
import Todo from "./Todo";
import styles from "../styles/TodoList.module.css";

export default function TodoList({
	todos,
	toggleCompleteTodo,
	deleteTodo,
	clearTodos
}) {
	function handleClearTodos() {
		const UncompletedTodos = todos.filter((todo) => todo.complete);
		clearTodos(UncompletedTodos);
	}
	return (
		<div className={styles.TodoList}>
			<button className={styles.ClearButton} onClick={handleClearTodos}>
				Clear all
			</button>

			{todos.map((todo) => {
				if (todo.complete !== true) {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							toggleCompleteTodo={toggleCompleteTodo}
							deleteTodo={deleteTodo}
						/>
					);
				}
				return null;
			})}
		</div>
	);
}
