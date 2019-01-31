// import React, { Component } from 'react'
// import LoginForm from "../components/Login/index";
// import axios from "axios";
// // import { Redirect } from 'react-router-dom'
// // import "./style.css";


// class Login extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 		  loggedIn: false,
// 		  user: null
// 		}
// 		this._logout = this._logout.bind(this)
// 		this._login = this._login.bind(this)
// 	  }
// 	  componentWillUnmount() {
// 		axios.get('/api/user').then(response => {
// 		  console.log(response.data)
// 		  if (!!response.data.user) {
// 			console.log('THERE IS A USER')
// 			this.setState({
// 			  loggedIn: true,
// 			  user: response.data.user
// 			})
// 		  } else {
// 			this.setState({
// 			  loggedIn: false,
// 			  user: null
// 			})
// 		  }
// 		})
// 	  }

// 	  _logout(event) {
// 		event.preventDefault()
// 		console.log('logging out')
// 		axios.post('/api/logout').then(response => {
// 		  console.log(response.data)
// 		  if (response.status === 200) {
// 			this.setState({
// 			  loggedIn: false,
// 			  user: null
// 			})
// 		  }
// 		})
// 	  }
	
// 	  _login(username, password) {
// 		axios
// 		  .post('/api/login', {
// 			username,
// 			password
// 		  })
// 		  .then(response => {
// 			console.log(response)
// 			if (response.status === 200) {
// 			  // update the state
// 			  this.setState({
// 				loggedIn: true,
// 				user: response.data.user
// 			  })
// 			}
// 		  })
// 	  }

// 	render(){
// 	return (
// 		<div>

// 		<LoginForm _login={this._login} />

// 		</div>
// 	);
// 	}
// };

// export default Login;