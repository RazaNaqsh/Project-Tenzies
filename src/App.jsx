import Heading from "./components/Heading";
import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./components/Die";

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

	const DieElements = dice.map((die) => <Die value={die.value} />);

	return (
		<div className="App">
			<Heading />
			<main className="Die-container">{DieElements}</main>
			<button className="btn-roll">Roll</button>
		</div>
	);
}

export default App;
