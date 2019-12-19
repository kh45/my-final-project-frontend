import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {viewNBAProfile} from '../actions/viewNBAProfile'

class NbaPlayerModal extends React.Component {

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
              {this.props.player["full_name"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4></h4>
              <p>
              <img src={this.props.player["headshot"]} />
              <h4>College: {this.props.player["college"]} </h4>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Link to={`/nba/players/${this.props.player["NBARef"]}`}> <Button>See Profile</Button></Link>
            </Modal.Footer>
          </Modal>
        )
    }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(null, {viewNBAProfile})(NbaPlayerModal)
