import React from 'react'
import "./style.css";
// TODO - add proptypes
// user greeting
const Header = props => {
	let Greeting;
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.username) {
		Greeting = (
			<p id="greeting">
				Welcome, <strong>{props.user.username}</strong>
			</p>
		)
	} else if (props.user.username) {
		Greeting = (
			<p id="greeting">
				Welcome, <strong>{props.user.username} </strong>
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header
