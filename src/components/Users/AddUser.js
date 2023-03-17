import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
	const handleAddUser = (event) => {
		event.preventDefault();
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={handleAddUser}>
				<label htmlFor='userName'>User Name</label>
				<input type='text' />
				<label htmlFor='userAge'>Age (Yers)</label>
				<input type='number' />
				<Button>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
