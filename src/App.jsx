import Heading from "./components/Heading";
import Die from "./components/Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";

function App() {
	const [dice, setDice] = useState(newDiceArray());

	const [tenzie, setTenzie] = useState(false);

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const allEqual = dice.every((die, i, arr) => die.value === arr[0].value);

		if (allEqual && allHeld) {
			setTenzie(true);
			// console.log("win");
		}
	}, [dice]);

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
		if (!tenzie) {
			setDice((oldDice) => {
				return oldDice.map((die) => (die.isHeld ? die : generateNewDie()));
			});
		} else {
			setDice(newDiceArray());
			setTenzie(false);
		}
	}

	function holdDice(id) {
		if (!tenzie) {
			setDice((oldDice) => {
				return oldDice.map((die) =>
					die.id === id ? { ...die, isHeld: !die.isHeld } : die
				);
			});
		}
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
			{tenzie && <Confetti />}
			<Heading />
			<main className="Die-container">{DieElements}</main>
			<button
				className="btn-roll"
				onClick={rollDice}
			>
				{tenzie ? "New Game" : "Roll"}
			</button>
		</div>
	);
}

export default App;
