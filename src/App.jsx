import { useState, useEffect } from "react";
import UserInput from "./UserInput";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const json = await fetch("http://localhost:1338/doors").then(
				(response) => response.json()
			);
			setData(json);
		}

		fetchData();
	}, []);

	console.log(data);
	return <UserInput />;
}

export default App;
