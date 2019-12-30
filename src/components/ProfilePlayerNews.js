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

render() {
    return(
        
        <div className="user-players dash-section">
                    <h3>Your Players</h3>
                    {this.props.user.players.map(player => <div><h4>Latest News</h4><img className="user-player-picture" src={player.headshot} /> <Link to={`/nba/players/${player["sportradarRef"]}`}> <button className="btn btn-primary">See Profile</button></Link><hr /> </div>)}
                    </div>
        
    )
}

}

export default connect(null, null)(ProfilePlayerNews)