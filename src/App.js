import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";
import TodoForm from "./components/TodoForm";

const LOCAL_STORAGE_KEY = "todosApp.todos";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedTodos) setTodos(storedTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	function addTodo(todo) {
		setTodos((prevTodos) => {
			return [todo, ...prevTodos];
		});
	}

	function toggleCompleteTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function deleteTodo(id) {
		const newTodos = [...todos];
		setTodos(newTodos.filter((todo) => id !== todo.id));
	}
	function clearCompleted(todos) {
		const newTodos = todos.filter((todo) => !todo.complete);
		setTodos(newTodos);
	}
	function clearTodos(todos) {
		const newTodos = todos.filter((todo) => todo.complete);
		setTodos(newTodos);
	}

	return (
		<div className="TodoApp">
			<TodoForm addTodo={addTodo} />
			<TodoList
				todos={todos}
				toggleCompleteTodo={toggleCompleteTodo}
				deleteTodo={deleteTodo}
				clearTodos={clearTodos}
			/>
			<CompletedTodoList
				todos={todos}
				clearCompleted={clearCompleted}
				toggleCompleteTodo={toggleCompleteTodo}
			/>
		</div>
	);
}

export default App;
