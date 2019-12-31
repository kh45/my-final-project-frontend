import React from 'react'
import { connect } from 'react-redux';
// import LottieBBall from '../components/LottieBBall'
// import LottieBBall from './LottieBBall'
import { Link } from 'react-router-dom'

class ProfilePlayerNews extends React.Component {
    
    // componentDidMount() {
    //     if (localStorage.getItem('user')) {
    //         fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
    //         .then(resp => resp.json())
    //         .then(resp => this.setState({user: resp}))
    //     }
    // }

    whichPlayers = (league) => {
        let team_range;
        switch (this.props.league) {
            case 'NBA':
                team_range = [0, 31]
                break
            case 'NFL':
                team_range = [30, 63]
                break
            case 'EPL':
                team_range = [62, 83]
                break
            default:
                console.log('hello')
        }
        // debugger
        return this.props.user.players.filter(player => player["team_id"] > team_range[0] && player["team_id"] < team_range[1]).map(player => <div key={player["sportradarRef"]}><h4>Latest News</h4><img className="user-player-picture" src={player.headshot} /> <Link to={`/${this.props.league.toLowerCase()}/players/${player["sportradarRef"]}`}> <button className="btn btn-primary">See Profile</button></Link><hr /> </div>)
    }

render() {
    return(
        
        <div className="user-players dash-section">
                    <h3>Your Players</h3>
                    {this.whichPlayers()}
                    </div>
        
    )
}

}

export default connect(null, null)(ProfilePlayerNews)