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

class NflHome extends React.Component {


    // componentDidMount() {
    //     fetch('http://localhost:3000/NFLHome', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "standings" : 'update',
    //         })
    //       })
    //     .then(resp => resp.json())
    //     .then(resp => {
    //       console.log(resp)
    //       this.props.NbaInfo(resp)
    //       // this.grabTeams(resp.standings.conferences[0])
    //     //   this.setState({
    //         // westernStandings: this.grabTeams(resp.standings.conferences[0]),
    //         // easternStandings: this.grabTeams(resp.standings.conferences[1]),
    //         // statLeaders : resp.leaders
    //     //   })
    //     })
    //   }

render() {
    return(
        <div className="NFL-home-container">
            <div>
            <NflNews />
            <Link to="/nfl/players"><button>View the PLayers</button></Link>
            </div>
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


export default connect(null, { NbaInfo })(NflHome)