const AddUser = () => {
	const handleAddUser = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleAddUser}>
			<label htmlFor='userName'>User Name</label>
			<input className='userName' type='text' />
			<label htmlFor='userAge'>Age (Yers)</label>
			<input className='userAge' type='number' />
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
