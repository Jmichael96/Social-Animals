import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/Login/index";
import Signup from "./components/Signup/index";
import CreatePost from "./components/CreatePost/index";
import axios from "axios";
import Greeting from "./components/Greeting/index";
import Profile from "./pages/User";
import Posts from "./pages/Posts";
import { MDBBtn, MDBCol } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import "./app.css";

// navbar display according to user authentication
const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav id="main-nav" className="navbar">
        <MDBAnimation type="fadeInLeft">
          <Link to="/"><MDBBtn className="pink darken-4">Home</MDBBtn></Link>
          <Link to="/profile"><MDBBtn className="pink darken-4">Profile</MDBBtn></Link>
          <Link to="/posts"><MDBBtn className="pink darken-4">Posts</MDBBtn></Link>
          <Link to="/createpost"><MDBBtn className="pink darken-4">Create Post</MDBBtn></Link>
          <Link to="#" onClick={props._logout}><MDBBtn className="logout" color="elegant">Logout</MDBBtn></Link>
        </MDBAnimation>
      </nav>
    )
  } else {
    return (
      <nav id="main-nav" className="navbar">
        <MDBAnimation type="fadeIn" delay="1s">
          <MDBCol md="5">
            <Link to="/"><MDBBtn className="pink darken-4">Home</MDBBtn></Link>
            <Link to="/login"><MDBBtn className="pink darken-4">Log In</MDBBtn></Link>
            <Link to="/signup"><MDBBtn color="elegant">Sign Up</MDBBtn></Link></MDBCol>
          <MDBCol md="5">
            <h6>
              This app was created based off our mutual love of animals. Feel free to use this service post about your pet and search for nearby rescue animals!
            </h6></MDBCol>
        </MDBAnimation>
      </nav>
    )
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null,
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }
  // to get the user info
  componentDidMount() {
    axios.get('/api/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })

    console.log(this.state);
  }
  // to get the logout api
  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
        })
      }
    })
  }
  // login api
  _login(username, password) {
    axios
      .post('/api/login', {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        }
      })
  }
  render() {
    return (
      <Router>
        <div>
          {/* <Redirect to={{ pathname: this.state.redirectTo }} /> */}
          <Greeting id="greeting" user={this.state.user} />
          <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
          <Route exact path="/" render={() => <Home user={this.state.user} />} />
          <Route exact path="/login" render={() => <LoginForm _login={this._login} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" render={() => <Profile user={this.state.user} /> } />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}
export default App;