import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
import UserProfile from '../components/UserProfile'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    
    
render() {
    return(
        <div>{this.props.currentUser.leagues.length === 0 ? <Redirect to='/pickleagues'/> : <UserProfile />}</div>
    )
}

}
const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    } 
}
export default connect(mapStateToProps, null)(Home)