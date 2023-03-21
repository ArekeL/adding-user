import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredUserAge, setEnteredUserAge] = useState("");
	const [error, setError] = useState();

	const handleUserName = (e) => {
		setEnteredUserName(e.target.value);
	};
	const handleUserAge = (e) => {
		setEnteredUserAge(e.target.value);
	};

	const handleAddUser = (event) => {
		event.preventDefault();
		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+enteredUserAge <= 0) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
		props.onAddUser(enteredUserName, enteredUserAge);
		setEnteredUserName("");
		setEnteredUserAge("");
	};

	const handleError = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={handleError}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={handleAddUser}>
					<label htmlFor='userName'>User Name</label>
					<input
						type='text'
						value={enteredUserName}
						onChange={handleUserName}
					/>
					<label htmlFor='userAge'>Age (Yers)</label>
					<input
						type='number'
						value={enteredUserAge}
						onChange={handleUserAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
