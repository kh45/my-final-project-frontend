import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
import UserProfile from '../components/UserProfile'
import { Redirect } from 'react-router-dom'
import Loader from '../components/GridLoader'

class Home extends React.Component {

    state = {
        user: null
    }


    componentDidMount() {
        if (localStorage.getItem('user')) {
            fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
            .then(resp => resp.json())
            .then(resp => this.setState({user: resp}))
        }
    }
    
    
render() {
    return(
        <div>
            {this.state.user == null ? <Loader /> : <UserProfile />}
        </div>
        // <div>{this.props.currentUser.leagues.length === 0 ? <Redirect to='/pickleagues'/> : <UserProfile />}</div>
    )
}

}
{/* const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    } 
} */}
export default connect(null, null)(Home)