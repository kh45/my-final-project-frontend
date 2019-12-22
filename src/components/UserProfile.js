import React from 'react'
import { connect } from 'react-redux';
import LottieBBall from './LottieBBall'

class UserProfile extends React.Component {
    
    
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

    showContent = event => {
        debugger
        switch (event.target.name) {
            case 'Leagues':
                console.log(event.target.name)
                break
            case 'Teams':
                console.log(event.target.name)
                break
            case 'Players':
                console.log(event.target.name)
                break
            default:
                console.log('hello')
        }
    }


render() {
    return(
        <div>{this.state.user == null ? <LottieBBall /> : <div>
            {this.state.user.name}'s Dashboard
            <button className="tablink" name="Leagues" onClick={this.showContent}>Leagues</button>
<button className="tablink" name="Teams" onClick={this.showContent} id="defaultOpen">Teams</button>
<button className="tablink btn btn-primary" name="Players" onClick={this.showContent}>Players</button>

<div className="tabcontent Leagues-content">
  <h3>Check On Your Leagues</h3>
  <p>Home is where the heart is..</p>
</div>

<div className="tabcontent Teams-Content">
  <h3>Check On Your Teams</h3>
  <p>Some news this fine day!</p>
</div>

<div id="Contact" className="tabcontent Players-Content">
  <h3>Check On Your Players</h3>
        <div>{this.state.user.players.map(player => <p>{player["full_name"]}</p>)}</div>
</div>

</div>}</div>
        
    )
}

}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.login.currentUser
//     }
// }

export default connect(null, null)(UserProfile)