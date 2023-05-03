import React from "react";
import Todo from "./Todo";
import styles from "../styles/TodoList.module.css";

export default function TodoList({ todos, toggleCompleteTodo, deleteTodo }) {
	return (
		<div className={styles.TodoList}>
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
