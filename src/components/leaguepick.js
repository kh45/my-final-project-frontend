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
            // this.addThisLeague(event.target.alt)
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
                <div className="pick-logo-container"><img align="left" className="league-logo nba-pick-logo" alt="NBA" src={require('../assets/nbalogo.png')} onClick={this.whichLeague} /> <p className="pick-name">NBA</p> </div>
                <div className="pick-logo-container"><img className="league-logo nfl-pick-logo" alt='NFL' src={require('../assets/NFLlogo.png')} onClick={this.whichLeague} /><p className="pick-name">NFL</p> </div> 
                <div className="pick-logo-container"><img className="league-logo epl-pick-logo" alt='EPL' src={require('../assets/PremierLogo.png')} onClick={this.whichLeague} /> <h4 className="pick-name">EPL</h4></div>
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