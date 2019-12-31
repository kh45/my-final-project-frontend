import React from 'react'
import { connect } from 'react-redux';
import LottieBBall from '../components/LottieBBall'
// import LottieBBall from './LottieBBall'
import { Link } from 'react-router-dom'
import ProfileLeagueNews from '../components/ProfileLeagueNews'
import ProfileTeamNews from '../components/ProfileTeamNews'
import ProfilePlayerNews from '../components/ProfilePlayerNews'

class UserProfile extends React.Component {
    
    
    state = {
        user: null,
        league: null,
        changer: 0
    }

    componentDidMount() {
        console.log('hello')
        if (localStorage.getItem('user')) {
            fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
            .then(resp => resp.json())
            .then(resp => this.setState({user: resp, league: resp.leagues[0].name}))
        }
    }

    changeDashboard = (event) => {
        this.setState({league: event.target.value, changer: this.state.changer + 1})
    }

render() {
    return(
        <div>
            {this.state.user == null ? <LottieBBall /> : 
            <div>
                <h2>{this.state.user.name}'s Dashboard</h2>
                <select name="teamFilter" form="teamFilter" onChange={this.changeDashboard} >
                    {this.state.user.leagues.map(league => <option value={league.name}>{league.name}</option>)}
                    {/* <option value="NBA">NBA</option> */}
                    {/* <option value="NFL">NFL</option> */}
                </select>
                <div className="user-dashboard">
                    <ProfileLeagueNews user={this.state.user} key={this.state.changer} league={this.state.league} />
                    {/* <ProfileTeamNews user={this.state.user}/> */}
                    <ProfilePlayerNews user={this.state.user} key={this.state.changer + 1} league={this.state.league}/>
                </div>
            </div>}
        </div>
        
    )
}

}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.login.currentUser
//     }
// }

export default connect(null, null)(UserProfile)