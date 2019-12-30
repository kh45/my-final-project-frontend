import React from 'react'
import { connect } from 'react-redux';
// import LottieBBall from '../components/LottieBBall'
// import LottieBBall from './LottieBBall'
import { Link } from 'react-router-dom'

class ProfileLeagueNews extends React.Component {

    state = {
        news: null,
        games: null,
        teams: null
    }
    
    componentDidMount() {
        let league_names = this.props.user.leagues.map(league => league.name)
        // debugger
        fetch('http://localhost:3000/user/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "leagues" : league_names
            })
        })
        .then(resp => resp.json())
        .then(resp => this.setState({news: resp.articles, games: resp.games.games, teams: resp.teams}))
        }

        findTeam = (team) =>  {
            let tim = this.state.teams.filter(tm => tm["sportradarRef"] === team)[0]["logo"]
            return tim
        }
    

render() {
    return(
        
        <div className="user-leagues dash-section">
                        <h3>Your Leagues</h3>
                        {this.props.user.leagues.map(league => <h4>{league.name}</h4>)}
                        <h4 className="jello" >Top Headlines:</h4>
                        <div className="dashboard-news">
    {this.state.news == null ? 'No News' : this.state.news.map(article => <div className="top-headline-news"><img className="top-headline-img" align='left' src={article.urlToImage}/><p>{article.content.split('[+')[0]}</p><hr /></div>)}
                    </div>
                    <h4>UPCOMING GAMES:</h4>
                    <div className="upcoming-games">
    {this.state.games == null ? 'No Games' : this.state.games.map(game => <div className="daily-games"><img className="schedule-img" src={this.findTeam(game.away.id)} /> <p>VS</p> <img className="schedule-img" src={this.findTeam(game.home.id)} /> </div>)}
                    </div>
                    </div>
        
    )
}

}

export default connect(null, null)(ProfileLeagueNews)