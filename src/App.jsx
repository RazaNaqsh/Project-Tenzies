import Heading from "./components/Heading";
import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./components/Die";

function App() {
	const [dice, setDice] = useState(newDiceArray());

	function generateNewDie() {
		const die = {
			value: Math.ceil(Math.random() * 6),
			id: nanoid(),
			isHeld: false,
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

	function rollDice() {
		setDice((oldDice) => {
			return oldDice.map((die) => (die.isHeld ? die : generateNewDie()));
		});
	}

	function holdDice(id) {
		setDice((oldDice) => {
			return oldDice.map((die) =>
				die.id === id ? { ...die, isHeld: !die.isHeld } : die
			);
		});
	}

	const DieElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			hold={() => holdDice(die.id)}
		/>
	));

	return (
		<div className="App">
			<Heading />
			<main className="Die-container">{DieElements}</main>
			<button
				className="btn-roll"
				onClick={rollDice}
			>
				Roll
			</button>
		</div>
	);
}

export default App;
