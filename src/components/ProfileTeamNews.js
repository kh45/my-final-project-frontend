import React from 'react'
import { connect } from 'react-redux';
// import LottieBBall from '../components/LottieBBall'
// import LottieBBall from './LottieBBall'
import { Link } from 'react-router-dom'

class ProfileTeamNews extends React.Component {
    
    // componentDidMount() {
    //     if (localStorage.getItem('user')) {
    //         fetch(`http://localhost:3000/users/${localStorage.getItem('user')}`)
    //         .then(resp => resp.json())
    //         .then(resp => this.setState({user: resp}))
    //     }
    // }

render() {
    return(
        
        <div className="user-teams dash-section">
                    <h3>Your Teams</h3>
                    </div>
        
    )
}

}

export default connect(null, null)(ProfileTeamNews)