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
        articles: []
    }

    componentDidMount() {
        // debugger
        fetch(`http://localhost:3000/players/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(resp => this.setState({player: resp.player, articles: resp.articles}))
    }

    makeNews = () => this.state.articles.map(article => <div><h3>{article.headline}</h3><p>{article.body}</p></div>)

    render() {
        return(
            // <div>
            //     {this.state.player == null ? null : <div> <img src={this.state.player.headshot} />
            //     <Router>
            //         <Route exact path='/nba/players/:id' render={routerProps => <NbaPlayerNews {...routerProps} /> } />
            //     </Router></div>}
            // </div>

            <div>
                {this.state.player == null ? <Loader /> : <img src={this.state.player.headshot} />}
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
