import React from "react";

export default function Die(props) {
	return (
		<div className="Die-box">
			<h3 className="Die-num">{props.value}</h3>
		</div>
	);
}
