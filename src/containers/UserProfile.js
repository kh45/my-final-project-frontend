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
        user: null
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
            .then(resp => resp.json())
            .then(resp => this.setState({user: resp}))
        }
    }

render() {
    return(
        <div>
            {this.state.user == null ? <LottieBBall /> : 
            <div>
                <h2>{this.state.user.name}'s Dashboard</h2>
                <select name="teamFilter" form="teamFilter" onChange={this.filterByTeam} >
                    <option value="NBA">NBA</option>
                    <option value="NFL">NFL</option>
                </select>
                <div className="user-dashboard">
                    <ProfileLeagueNews user={this.state.user} />
                    {/* <ProfileTeamNews user={this.state.user}/> */}
                    <ProfilePlayerNews user={this.state.user} />
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