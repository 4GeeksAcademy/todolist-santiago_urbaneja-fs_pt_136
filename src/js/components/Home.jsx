import { useState } from "react";

const Home = () => {
	const [list, setList] = useState(["horacio", "luis", "daniel", "maria", "jose"]);
	const [input, setInput] = useState("");

	function handleClick() {
		if (input.trim() !== "") {
			setList([...list, input]);
			setInput("");
		}
	}

	return (
		<div className="text-center">
			<h1>Lista de usuarios</h1>

			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Nombre..."
			/>
			<button onClick={handleClick}>Agregar</button>

			{
				list.map((user, i) => {
					return (
						<p key={i}>{user} {i}</p>
					)
				})
			}
		</div>
	);
};

export default Home;