import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import { Link } from 'react-router-dom'

class NbaStandings extends React.Component {

  state = {

  }

  componentDidMount() {
    fetch('http://localhost:3000/NBAHome', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "standings" : 'update',
        })
      })
    .then(resp => resp.json())
    .then(user => console.log(user))
  }

  // setStandings = array = {
  //   return ({
  //     this.setState({keys: 'hello'})
  //   })
  // }

    render() {
        return(
          <div className="both-standings">
          <h1 style={{'text': 'align'}}>Standings</h1>
            <div className="NBA-standings-container">
      <div>
  <h3>Western Conference</h3>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Seed</th>
      <th scope="col">Team</th>
      <th scope="col">Wins</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colSpan="2">{this.state.teams}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colSpan="2">Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td colSpan="2">Wizards</td>
    </tr>
  </tbody>
</table>
</div>
<div>
  <h3>Eastern Conference</h3>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td colSpan="2">Wizards</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td colSpan="2">Wizards</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
        )
    }
}

export default connect(null, null)(NbaStandings)