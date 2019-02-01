import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/Login/index";
import Signup from "./components/Signup/index";
import CreatePost from "./components/CreatePost/index";
import axios from "axios";
import Greeting from "./components/Greeting/index";
import User from "./pages/User";
// import CreatePostPage from "./pages/CreatePostPage";
import Search from "./pages/Search";

const DisplayLinks = props => {

  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
          </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Maps
          </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              Profile
          </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Blogs
          </Link>
          </li>
          <li>
            <Link to="/createpost" className="nav-link">
              Create Blog
          </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
          </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              login
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              sign up
          </Link>
          </li>
        </ul>
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
          <Route exact path="/" render={() => <Home user={this.state.user} />} />
          <Route exact path="/login" render={() => <LoginForm _login={this._login} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" render={() => <User user={this.state.user} />} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/map" component={Search} />
        </div>
      </Router>
    );
  }
}
export default App;
