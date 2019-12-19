import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
import { Link } from 'react-router-dom'
import NbaNews from '../components/NbaNews'
import NbaStandings from '../components/NbaStandings'

class NbaHome extends React.Component {

render() {
    return(
        <div className="NBA-home-container">
            <NbaNews />
            <NbaStandings />
            <Link to="/nba/players"><button>View the PLayers</button></Link>
        </div>
    )
}

}
const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    }
}


export default connect(mapStateToProps, null)(NbaHome)