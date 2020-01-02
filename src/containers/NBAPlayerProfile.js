import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import NbaPlayerNews from '../components/NBAPlayerNews'
// import {viewNBAProfile} from '../actions/viewNBAProfile'
import Loader from "../components/GridLoader"
import LottieBBall from '../components/LottieBBall'
import swal from 'sweetalert'

class NbaPlayerProfile extends React.Component {
    state = {
        player: null,
        articles: [],
        user: null,
        stats: null
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
        .then(resp => resp.json())
        .then(resp => this.setState({user: resp}))
        fetch(`http://localhost:3000/players/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "myOrigin" : 'profile',
                "league": 'NBA'
            })
        })
        .then(resp => resp.json())
        .then(resp => this.setState({player: resp.player, articles: resp.articles, stats: resp.stats}))
    }

    success = (message) => swal({
        title: "Congratulations!",
        text: message,
        icon: "success",
        button: "Close",
      });

    followPlayer = () => {
        let action
        if (this.state.user.players.find(player => player["NBARef"] === this.state.player["NBARef"])) {
            action = 'UNfollow'
            this.success('You successfully unfollowed this player')
        } else {
            action = 'follow'
            this.success('You successfully followed this player')
        }
        fetch('http://localhost:3000/addPlayer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "id" : this.state.player["sportradarRef"],
                "user": this.state.user["id"],
                "myAction": action
            })
          })
        .then(resp => resp.json())
        .then(user => this.setState({user: user}))
      }


    makeNews = () => this.state.articles.map(article => <div><h3 className="infrared">{article.headline}</h3><p className="infrared">{article.body}</p></div>)

    render() {
        return(
            <div className="profile-container">
                {this.state.player == null ? <div className="scraping-header"><h2 className="infrared scraper">GATHERING NEWS...<LottieBBall /></h2> </div>: 
                <div className="profile-header" style={{"background-image": `linear-gradient(#${this.state.player.team.primaryColor}, #${this.state.player.team.secondaryColor})`}}>
                    <img src={this.state.player.headshot} />
                    <div>
                    <h3 className="infrared">{this.state.player.full_name}</h3>
                    <h4 className="infrared">#{this.state.player.jersey_number}</h4>
                    </div>
                    <div className="profile-page-stats">
                    <h3 className="infrared">PPG</h3>
                    <h3 className="infrared">RPG</h3>
                    <h3 className="infrared">APG</h3>
                    <h3 className="infrared">FG %</h3>
                    <h3 className="infrared">FT %</h3>
                    <h3 className="infrared">{this.state.stats.seasons[0].teams[0].average.points}</h3>
                    <h3 className="infrared">{this.state.stats.seasons[0].teams[0].average.rebounds}</h3>
                    <h3 className="infrared">{this.state.stats.seasons[0].teams[0].average.assists}</h3>
                    <h3 className="infrared">{Math.round((this.state.stats.seasons[0].teams[0].average.field_goals_made / this.state.stats.seasons[0].teams[0].average.field_goals_att) * 1000) / 10 }</h3>
                    <h3 className="infrared">{Math.round((this.state.stats.seasons[0].teams[0].average.free_throws_made / this.state.stats.seasons[0].teams[0].average.free_throws_att) * 1000) / 10 }</h3>
                    </div>
                    <div className="button-container">
                    <button className="btn btn-primary" onClick={this.followPlayer} >{this.state.user.players.find(player => player["NBARef"] === this.state.player["NBARef"]) ? 'Unfollow' : 'Follow'}
                    </button>
                    </div>
                </div>}
                {this.makeNews()}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         player: state.viewNBAProfile.player
//     }
// }

// export default connect(null, null)(NbaPlayerProfile)
export default NbaPlayerProfile
