import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<AddUser />
			<UsersList users={[]} />
		</div>
	);
}

export default App;
