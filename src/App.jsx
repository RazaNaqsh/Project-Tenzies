import Heading from "./components/Heading";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
	// make boxes by mapping
	// display random number
	// roll button to display again
	// hold state inside button
	const [dice, setDice] = useState(newDiceArray());

	function generateNewDie() {
		const die = {
			value: Math.ceil(Math.random() * 6),
			id: nanoid(),
		};
		return die;
	}

	function newDiceArray() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			diceArray.push(generateNewDie());
		}
		return diceArray;
	}
	console.log(dice);
	return (
		<div className="App">
			<Heading />
		</div>
	);
}

export default App;
