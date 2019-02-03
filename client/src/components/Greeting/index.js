import React from 'react'
import "./style.css";


const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <h1>Social Animals</h1>
	} else if (props.user.firstName) {
		Greeting = (
			<p id="greeting">
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p id="greeting">
				Welcome back, <strong>{props.user.local.username} </strong>
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
