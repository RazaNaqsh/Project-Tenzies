import React from "react";

export default function Die(props) {
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white",
	};
	return (
		<div
			className="Die-box"
			style={styles}
			onClick={props.hold}
		>
			<h3 className="Die-num">{props.value}</h3>
		</div>
	);
}
