import React from "react";

export default function Heading() {
	return (
		<header>
			<div className="Heading-container">
				<h1 className="Heading-title">Tenzies</h1>
				<p className="Heading-intructions">
					Roll until all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</p>
			</div>
		</header>
	);
}
