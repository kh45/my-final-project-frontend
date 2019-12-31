import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import Login from './components/login' 
import { connect } from 'react-redux';
import Home from './containers/home'
// import UserProfile from './components/UserProfile'
import LeaguePick from './components/leaguepick'
import NavBar from './components/navbar'
import NbaHome from './containers/NbaHome'
import NflHome from './containers/NfHome'
import NbaPlayersIndex from './components/NbaPlayersIndex'
import NFLPlayersIndex from './components/NFLPlayersIndex'
import 'bootstrap/dist/css/bootstrap.min.css';
import NbaPlayerProfile from './containers/NBAPlayerProfile'

class App extends React.Component {
  

  // componentDidMount() {
  //   fetch('http://localhost:3000/players')
  //   .then(response => response.json())
  //   .then(response => this.setState({players: response}))
  // }
  

  // logIn = (event) => {
  //   event.preventDefault()
  //   fetch('http://localhost:3000/login', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Accept' : 'application/json'
  //       },
  //       body: JSON.stringify({
  //           "name" : `${event.target.name.value}`,
  //           "password" : `${event.target.password.value}`,
  //       })
  //     })
  //   .then(resp => resp.json())
  //   .then(user => {
  //     console.log(user)
  //     this.setState({currentUser: user, currentUsersEvents: user.events})
  //   })
  //   .catch(() => alert("Please enter a valid username."))
  // }

  
  render() {


  
  return (
      <Router>
        <Route path="/" render={() => localStorage.getItem('user') ? <NavBar />  : null }></Route>
        <div className="App">
        <Route exact path="/" render={() => localStorage.getItem('user') ? <Redirect to='/home' />  : <Login/> }>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/pickleagues">
          <LeaguePick />
        </Route>
        <Route exact path='/nba'>
          <NbaHome />
        </Route>
        <Route exact path='/nfl'>
          <NflHome />
        </Route>
        <Route exact path='/nba/players'>
          <NbaPlayersIndex />
        </Route>
        <Route exact path='/nfl/players'>
          <NFLPlayersIndex />
        </Route>
        <Route exact path='/nba/players/:id' render={routerProps => <NbaPlayerProfile {...routerProps} /> } />
        </div>
      </Router>
  );

  }
}

const mapStateToProps = state => {
  console.log('hello')
  return {
    currentUser: state.login.currentUser
  }
}

export default connect(mapStateToProps, null)(App)