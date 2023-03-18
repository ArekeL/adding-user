import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";

const AddUser = () => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredUserAge, setEnteredUserAge] = useState("");

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
			return;
		}
		if (+enteredUserAge <= 0) {
			return;
		}
		console.log(enteredUserName, enteredUserAge);
		setEnteredUserName("");
		setEnteredUserAge("");
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={handleAddUser}>
				<label htmlFor='userName'>User Name</label>
				<input type='text' value={enteredUserName} onChange={handleUserName} />
				<label htmlFor='userAge'>Age (Yers)</label>
				<input type='number' value={enteredUserAge} onChange={handleUserAge} />
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
