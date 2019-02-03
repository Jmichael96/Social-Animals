import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/index";
import LoginForm from "./components/Login/index";
import Signup from "./components/Signup/index";
import CreatePost from "./components/CreatePost/index";
import axios from "axios";
import Greeting from "./components/Greeting/index";
import User from "./pages/User";
import Posts from "./pages/Posts";
import PetSearch from "./pages/PetSearch";
import { MDBBtn, MDBCol } from "mdbreact";


// import Data from "./components/Data/index";
// import CreatePostPage from "./pages/CreatePostPage";
const DisplayLinks = props => {

  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <Link to="/"><MDBBtn color="elegant">Home</MDBBtn></Link>
        <Link to="#"><MDBBtn color="elegant">Maps</MDBBtn></Link>
        <Link to="/profile"><MDBBtn color="elegant">Profile</MDBBtn></Link>
        <Link to="/posts"><MDBBtn color="elegant">Posts</MDBBtn></Link>
        <Link to="/createpost"><MDBBtn color="elegant">Create Post</MDBBtn></Link>
        <Link to="#" onClick={props._logout}><MDBBtn color="elegant">Logout</MDBBtn></Link>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <MDBCol md="5">
        <Link to="/"><MDBBtn color="elegant">Home</MDBBtn></Link>
          <Link to="/login"><MDBBtn color="elegant">Log In</MDBBtn></Link>
          <Link to="/signup"><MDBBtn color="unique">Sign Up</MDBBtn></Link></MDBCol>
          <MDBCol md="5">
                <h6 lassName="">
              This app was created based off our mutual love of animals. Feel free to use this service post about your pet and search for nearby rescue animals!
            </h6></MDBCol>
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
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

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
        <Greeting id="greeting" user={this.state.user} />
        <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
          <Route exact path="/" render={() => <Home  user={this.state.user} />} />
          <Route exact path="/login" render={() => <LoginForm _login={this._login} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" render={() => <User user={this.state.user} />} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/pet" component={PetSearch} />
        </div>
      </Router>
    );
  }
}
export default App;