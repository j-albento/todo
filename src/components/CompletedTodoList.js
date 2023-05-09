import React from "react";
import styles from "../styles/CompletedTodoList.module.css";
import CompletedTodo from "./CompletedTodo";
import "../App.css";

export default function CompletedTodoList({
	todos,
	clearCompleted,
	toggleCompleteTodo
}) {
	function handleClearCompleted() {
		const completedTodos = todos.filter((todo) => !todo.complete);
		clearCompleted(completedTodos);
	}

	const completed = todos.filter((todo) => todo.complete).length;

	return (
		<>
			<div className={styles.CompletedListHeader}>
				<h3>Completed Tasks</h3>
				<button className={styles.ClearButton} onClick={handleClearCompleted}>
					Clear all
				</button>
				{completed > 0 ? (
					<p>
						You have completed {completed} task{completed === 1 ? "!" : "s!"}
					</p>
				) : (
					<p>You have no completed tasks.</p>
				)}
			</div>

			<div className={styles.CompletedList}>
				{todos.map((todo) => {
					if (todo.complete) {
						return (
							<CompletedTodo
								todo={todo}
								key={todo.id}
								toggleCompleteTodo={toggleCompleteTodo}
							/>
						);
					}
					return null;
				})}
			</div>
		</>
	);
}
