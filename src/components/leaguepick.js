import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

class LeaguePick extends React.Component {

    state = {
        currentUser: null
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
            .then(resp => resp.json())
            .then(resp => this.setState({currentUser: resp}))
        }
    }

    failure = () => swal({
        title: "You are already following this league",
        text: "Option to unfollow leagues coming soon",
        icon: "error",
        button: "Close",
      });

      success = () => swal({
        title: "Congratulations!",
        text: "You are now following this League",
        icon: "success",
        button: "Close",
      });
    
whichLeague = (event) => {
    switch(event.target.alt) {
        case 'NBA':
            this.addThisLeague(event.target.alt)
            break
        case 'NFL':
            this.addThisLeague(event.target.alt)
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
            "User" : this.props.currentUser == null ? this.state.currentUser.id : this.props.currentUser.id
        })
      })
    .then(resp => resp.json())
    .then(user => {
        if (user.result == null) {
            this.success()
            this.props.login(user)}
        else {
            this.failure()
            console.log(user)
        }
    })
        // this.props.login(user)})
  }
    
render() {
    return(
        <div className="pick-leagues-container">
            <h1 className="infrared">Pick Your Leagues</h1>
            <div className="first-pick-container">
                <div className="pick-logo-container"><img align="left" className="league-logo nba-pick-logo animated fadeInLeft delay-1s" alt="NBA" src={require('../assets/nbalogo.png')} onClick={this.whichLeague} /> <p className="pick-name pick-name-nba animated fadeInRight delay-1s">NBA</p> </div>
                <div className="pick-logo-container"><img className="league-logo nfl-pick-logo animated fadeInLeft delay-2s" alt='NFL' src={require('../assets/NFLlogo.png')} onClick={this.whichLeague} /><p className="pick-name pick-name-nfl animated fadeInRight delay-2s">NFL</p> </div> 
                <div className="pick-logo-container"><img className="league-logo epl-pick-logo animated fadeInLeft delay-3s" alt='EPL' src={require('../assets/PremierLogo.png')} onClick={this.whichLeague} /> <h4 className="pick-name pick-name-epl animated fadeInRight delay-3s">EPL</h4></div>
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