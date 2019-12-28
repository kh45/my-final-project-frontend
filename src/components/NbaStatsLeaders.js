import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
import { Link } from 'react-router-dom'
import NbaNews from '../components/NbaNews'
import NbaStandings from '../components/NbaStandings'

class NbaStatsLeaders extends React.Component {
    
    state = {
        allPlayers: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/players')
        .then(response => response.json())
        .then(response => this.setState({allPlayers: response}))
      }
      
      generateStats = category => {
          return category.players.map(player => {
          return (
            <div className="stat">
            <img src={this.state.allPlayers.length > 0 ? this.state.allPlayers.find(playa => playa.NBARef === player.player.reference).headshot : null}/>
            <h4>Player: {player.player.full_name}</h4>
            <h4>PPG: {player.score}</h4>
            </div>
          )
      })}

render() {
    return(
        <div className="all-stat-container">
            <h3>LEAGUE LEADERS</h3>
        <div className="NBA-stats">
            {/* <div className = "stat">
                <h2>Points</h2>
                <div>
                <img src={this.props.stats && this.state.allPlayers.length > 0 ? this.state.allPlayers.find(player => player.NBARef === this.props.stats.ppg.ranks[0].player.reference).headshot : null }/>
                <h4>Player: {this.props.stats ? this.props.stats.ppg.ranks[0].player.full_name : null}</h4>
                <h4>PPG: {this.props.stats ? this.props.stats.ppg.ranks[0].score : null}</h4>
                </div>
            </div>
            <div className = "stat">
                <h2>Rebounds</h2>
                <div>
                <img src={this.props.stats && this.state.allPlayers.length > 0 ? this.state.allPlayers.find(player => player.NBARef === this.props.stats.rpg.ranks[0].player.reference).headshot : null }/>
                <h4>Player: {this.props.stats ? this.props.stats.rpg.ranks[0].player.full_name : null}</h4>
                <h4>RPG: {this.props.stats ? this.props.stats.rpg.ranks[0].score : null}</h4>
                </div>
            </div>
            <div className = "stat">
                <h2>Assists</h2>
                <div>
                <img src={this.props.stats && this.state.allPlayers.length > 0 ? this.state.allPlayers.find(player => player.NBARef === this.props.stats.apg.ranks[0].player.reference).headshot : null }/>
                <h4>Player: {this.props.stats ? this.props.stats.apg.ranks[0].player.full_name : null}</h4>
                <h4>APG: {this.props.stats ? this.props.stats.apg.ranks[0].score : null}</h4>
                </div>
            </div> */}
            <div>
            <h2>PPG</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.ppg) : null}
            <div>
            <h2>RPG</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.rpg) : null}
            <div>
            <h2>APG</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.apg) : null}
            <div>
            <h2>THREES</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.threePCT) : null}
            <div>
            <h2>BLOCKS</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.blocks) : null}
            <div>
            <h2>FG PCT</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.fg_pct) : null}
            <div>
            <h2>FT PCT</h2>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.ft_pct) : null}
        </div>
        </div>
    )
}

}

const mapStateToProps = state => {
    return {
        stats: state.NBAInfo.stats
    }
}


export default connect(mapStateToProps, null)(NbaStatsLeaders)