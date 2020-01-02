import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
import { Link } from 'react-router-dom'
import NbaNews from '../components/NbaNews'
import NbaStandings from '../components/NbaStandings'
import NbaStatsLeaders from '../components/NbaStatsLeaders'
import NbaUpcomingGames from '../components/NbaUpcomingGames'
import { NbaInfo } from '../actions/NbaInfo'

class NbaHome extends React.Component {

    state = {
        games: null
    }


    componentDidMount() {
        fetch('http://localhost:3000/NBAHome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "standings" : 'update',
            })
          })
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          this.setState({games: resp.games.games})
          this.props.NbaInfo(resp)
          // this.grabTeams(resp.standings.conferences[0])
        //   this.setState({
            // westernStandings: this.grabTeams(resp.standings.conferences[0]),
            // easternStandings: this.grabTeams(resp.standings.conferences[1]),
            // statLeaders : resp.leaders
        //   })
        })
      }

render() {
    return(
        <div className="league-home-container">
            <div>
            <NbaNews />
            <Link to="/nba/players"><button className="btn btn-primary">View the Players</button></Link>
            </div>
            <NbaUpcomingGames games={this.state.games} />
            <NbaStandings />
            <NbaStatsLeaders />
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


export default connect(null, { NbaInfo })(NbaHome)