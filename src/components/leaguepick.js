import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { Link } from 'react-router-dom'

class LeaguePick extends React.Component {
    
whichLeague = (event) => {
    switch(event.target.alt) {
        case 'NBA':
            this.addThisLeague(event.target.alt)
            break
        case 'NFL':
            console.log('adding the nfl')
            break
        case 'EPL':
            console.log('adding the epl')
            break
        default:
            console.log('hello')
    }
} 

addThisLeague = (league) => {
    fetch('http://localhost:3000/addLeague', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "League" : league,
            "User" : this.props.currentUser.id
        })
      })
    .then(resp => resp.json())
    .then(user => this.props.login(user))
  }
    
render() {
    return(
        <div>
            <h1>Pick Your Leagues</h1>
            <div className="first-pick-container">
                <img className="league-logo" alt="NBA" src={require('../assets/nbalogo.png')} onClick={this.whichLeague} /> 
                <img className="league-logo" alt='NFL' src={require('../assets/NFLlogo.png')} onClick={this.whichLeague} /> 
                <img className="league-logo" alt='EPL' src={require('../assets/PremierLogo.png')} onClick={this.whichLeague} /> 
            </div>
            <Link to="/home"><button>I'm done</button></Link>
        </div>
    )
}

}
const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    } 
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateUser: state.updateUser
//     }
// }
export default connect(mapStateToProps, {login})(LeaguePick)