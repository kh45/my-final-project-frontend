import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
import { Link } from 'react-router-dom'
import NflNews from '../components/NflNews'
import NbaStandings from '../components/NbaStandings'
import NbaStatsLeaders from '../components/NbaStatsLeaders'
import { NbaInfo } from '../actions/NbaInfo'

class NbaUpcomingGames extends React.Component {

    state = {
        teams: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/NBAteams')
        .then(resp => resp.json())
        .then(resp => this.setState({teams: resp}))
        }

    findTeam = (team) =>  {
        let tim = this.state.teams.filter(tm => tm["sportradarRef"] === team)[0]["logo"]
        return tim
    }


render() {
    return(
        <div className="upcoming-games-container">
            <h2>UPCOMING GAMES</h2>
            <label for="start">Pick a Date:</label>
            <input type='date' id="start" name="game-day" value="2019-12-25" />
            <div className="Nba-upcoming-games">
                {this.props.games == null ? 'No Games' : this.props.games.map(game => <div className="daily-games"><img className="homepage-tm-img" src={this.findTeam(game.away.id)} /> <p>VS</p> <img className="homepage-tm-img" src={this.findTeam(game.home.id)} /> </div>)}
            </div>
            </div>

    
    )
}

}
// const mapStateToProps = state => {
//     return {
//         currentUser: state.login.currentUser
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }


export default connect(null, { NbaInfo })(NbaUpcomingGames)