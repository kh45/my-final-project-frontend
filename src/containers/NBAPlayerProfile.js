import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import NbaPlayerNews from '../components/NBAPlayerNews'
// import {viewNBAProfile} from '../actions/viewNBAProfile'
import Loader from "../components/GridLoader"

class NbaPlayerProfile extends React.Component {
    state = {
        player: null,
        articles: [],
        user: null
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
        .then(resp => resp.json())
        .then(resp => this.setState({user: resp}))
        fetch(`http://localhost:3000/players/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(resp => this.setState({player: resp.player, articles: resp.articles}))
    }

    followPlayer = () => {
        fetch('http://localhost:3000/addPlayer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "id" : this.state.player["NBARef"],
                "user": this.state.user["id"]
            })
          })
        .then(resp => resp.json())
        .then(user => this.setState({user: user}))
      }


    makeNews = () => this.state.articles.map(article => <div><h3>{article.headline}</h3><p>{article.body}</p></div>)

    render() {
        return(
            <div>
                {this.state.player == null ? <Loader /> : 
                <div>
                    <img src={this.state.player.headshot} />
                    <button className="btn btn-primary" onClick={this.followPlayer} >{this.state.user.players.find(player => player["NBARef"] === this.state.player["NBARef"]) ? 'Unfollow' : 'Follow'}
                    </button>
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
