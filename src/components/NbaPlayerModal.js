import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {viewNBAProfile} from '../actions/viewNBAProfile'

class NbaPlayerModal extends React.Component {

  state = {
    stats: null
  }

  componentDidMount() {
    fetch(`http://localhost:3000/players/${this.props.player["sportradarRef"]}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
      },
      body: JSON.stringify({
          "myOrigin" : 'modal',
          "league": 'NBA'
      })
    })
    .then(resp => resp.json())
    .then(resp => this.setState({stats: resp.stats}))
  }

    render() {
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              <h2 className="infrared">{this.props.player["full_name"]}</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <h4></h4> */}
              <div className="modal-total">
              {/* <img src={this.props.player["headshot"]} /> */}
                <div className="modal-background" style={{"background-image": `url(${this.props.player["team"]["logo"]})`}}>
                  <img src={this.props.player["headshot"]} />
              </div>
              <div className="player-modal-summary">
        <h3 className="infrared">PPG: {this.state.stats === null ? null : this.state.stats.seasons[0].teams[0].average.points}</h3>
            <h3 className="infrared">RPG: {this.state.stats === null ? null : this.state.stats.seasons[0].teams[0].average.rebounds}</h3>
            <h3 className="infrared">APG: {this.state.stats === null ? null : this.state.stats.seasons[0].teams[0].average.assists}</h3>
            <h3 className="infrared">FG PCT: {this.state.stats === null ? null : (this.state.stats.seasons[0].teams[0].average.field_goals_made / this.state.stats.seasons[0].teams[0].average.field_goals_att) }</h3>
            </div>
            {this.props.stats ? this.generateStats(this.props.stats.fg_pct) : null}
              <h4 className="player-college infrared">College: {this.props.player["college"]} </h4>
              </div>
              {/* <div className="modal-info">
                hello
              </div> */}
            </Modal.Body>
            <Modal.Footer>
              <Link to={`/nba/players/${this.props.player["sportradarRef"]}`}> <Button>See Profile</Button></Link>
            </Modal.Footer>
          </Modal>
        )
    }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(null, {viewNBAProfile})(NbaPlayerModal)
