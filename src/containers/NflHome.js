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
import NFLUpcomingGames from '../components/NFLUpcomingGames'

class NflHome extends React.Component {

    state = {
        articles: null,
        games: null
    }


    componentDidMount() {
        fetch('http://localhost:3000/NFLHome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "standings" : 'update'
            })
          })
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          this.setState({games: resp.games.week.games})
        //   this.props.NbaInfo(resp)
    //       // this.grabTeams(resp.standings.conferences[0])
    //     //   this.setState({
    //         // westernStandings: this.grabTeams(resp.standings.conferences[0]),
    //         // easternStandings: this.grabTeams(resp.standings.conferences[1]),
    //         // statLeaders : resp.leaders
    //     //   })
        })
      }

      cleanArticles(array) {
        let new_articles = array.filter(article => article.content != null)
       //  debugger
        new_articles.forEach(article => {
            let indexOfArticle = new_articles.indexOf(article)
            let new_content = article.content.split('[+')[0]
           //  debugger
            new_articles[indexOfArticle].content = new_content
        })
       //  debugger
       this.setState({articles: new_articles})
    }

render() {
    return(
        <div className="league-home-container nfl-shtuff">
            <div>
            <NflNews />
            <Link to="/nfl/players"><button>View the PLayers</button></Link>
            </div>
            <NFLUpcomingGames games={this.state.games} />
            {/* <NbaStandings /> */}
            {/* <NbaStatsLeaders /> */}
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


export default connect(null, { NbaInfo })(NflHome)