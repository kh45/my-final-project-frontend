import React from 'react'
import { connect } from 'react-redux';

class UserProfile extends React.Component {
    
    
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

// componentDidMount() {

// }


render() {
    return(
        <div>
            {this.props.currentUser.name}'s Dashboard
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
  <p>Get in touch, or swing by for a cup of coffee.</p>
</div>

        </div>
    )
}

}

const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    }
}

export default connect(mapStateToProps, null)(UserProfile)