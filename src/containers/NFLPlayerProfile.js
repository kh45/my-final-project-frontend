import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import NbaPlayerNews from '../components/NBAPlayerNews'
// import {viewNBAProfile} from '../actions/viewNBAProfile'
import Loader from "../components/GridLoader"
import GridLoader from '../components/GridLoader'

class NflPlayerProfile extends React.Component {
    state = {
        player: null,
        articles: [],
        user: null
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
                "league" : 'NFL'
            })
        })
        .then(resp => resp.json())
        .then(resp => this.setState({player: resp.player, articles: resp.articles}))
        // .then(resp => this.setState({player: resp.player}))
    }

    followPlayer = () => {
        let action
        if (this.state.user.players.find(player => player["sportradarRef"] === this.state.player["sportradarRef"])) {
            action = 'UNfollow'
        } else {
            action = 'follow'
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
                {this.state.player == null ? <div className="scraping-header"><h2 className="infrared scraper">GATHERING NEWS...<GridLoader /></h2> </div> : 
                <div className="profile-header" style={{"background-image": `linear-gradient(#1c5b86, #237341)`}}>
                    <img src={this.state.player.headshot} />
                    <div>
                    <h3>{this.state.player.full_name}</h3>
                    <h4>#{this.state.player.jersey_number}</h4>
                    </div>
                    <div>
                    <h3>STATS</h3>
                    <h3>STATS</h3>
                    <h3>STATS</h3>
                    <button className="btn btn-primary" onClick={this.followPlayer} >{this.state.user == null ? null : this.state.user.players.find(player => player["sportradarRef"] === this.state.player["sportradarRef"]) ? 'Unfollow' : 'Follow'}
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
export default NflPlayerProfile
