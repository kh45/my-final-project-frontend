import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
import { Link } from 'react-router-dom'
import NbaNews from '../components/NbaNews'
import NbaStandings from '../components/NbaStandings'

class NbaStatsLeaders extends React.Component {

render() {
    return(
        <div className="NBA-stats">
            <div className = "stat">
                <h2>Points</h2>
                <img />
                <h4>PPG: </h4>
            </div>
            <div className = "stat">
                <h2>Rebounds</h2>
                <img />
                <h4>RPG: </h4>
            </div>
            <div className = "stat">
                <h2>Assists</h2>
                <img />
                <h4>APG: </h4>
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


export default connect(null, null)(NbaStatsLeaders)