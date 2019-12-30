import React from 'react'
import { connect } from 'react-redux';
import LottieBBall from './LottieBBall'
import { Link } from 'react-router-dom'

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

    showContent = event => {
        debugger
        switch (event.target.name) {
            case 'Leagues':
                console.log(event.target.name)
                break
            case 'Teams':
                console.log(event.target.name)
                break
            case 'Players':
                console.log(event.target.name)
                break
            default:
                console.log('hello')
        }
    }

    // generatePlayers = () => {
    //     this.state
    // }


render() {
    return(
        <div>
            {this.state.user == null ? <LottieBBall /> : 
            <div>
                <h2>{this.state.user.name}'s Dashboard</h2>
                <div className="user-dashboard">
                    <div className="user-leagues dash-section">
                        <h3>Your Leagues</h3>
                    </div>
                    <div className="user-teams dash-section">
                    <h3>Your Teams</h3>
                    </div>
                    <div className="user-players dash-section">
                    <h3>Your Players</h3>
                    {this.state.user.players.map(player => <div><h4>Latest News</h4><img className="user-player-picture" src={player.headshot} /> <Link to={`/nba/players/${player["sportradarRef"]}`}> <button className="btn btn-primary">See Profile</button></Link><hr /> </div>)}
                    </div>
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