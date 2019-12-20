import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
// import { Redirect } from 'react-router-dom'
import { Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component {
    
  logOut = () => {
    localStorage.clear()
    console.log(this.props)
    this.props.history.push("/")
  }
    
render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">Profile</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/nba">NBA <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/home">NFL</a>
            <a className="nav-item nav-link" href="/home">EPL</a>
            <button className="nav-item nav-link btn" onClick={this.logOut}>Logout</button>
            {/* <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> */}
          </div>
        </div>
      </nav>
    )
}

}
const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    } 
}
// export default compose(
//   withRouter,
//   connect(mapStateToProps, null)
// )(NavBar)
export default withRouter(connect(mapStateToProps, null)(NavBar))