import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import { Link } from 'react-router-dom'

class NbaStandings extends React.Component {

  // state = {
  //   westernStandings: null,
  //   easternStandings: null
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/NBAHome', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Accept' : 'application/json'
  //       },
  //       body: JSON.stringify({
  //           "standings" : 'update',
  //       })
  //     })
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     console.log(resp)
  //     // this.grabTeams(resp.standings.conferences[0])
  //     this.setState({
  //       westernStandings: this.grabTeams(resp.standings.conferences[0]),
  //       easternStandings: this.grabTeams(resp.standings.conferences[1]),
  //       statLeaders : resp.leaders
  //     })
  //   })
  // }

  // grabTeams = array => {
  //   let teams = [];
  //   array.divisions.forEach(division => {
  //     division.teams.forEach(team => teams.push(team))
  //   })
  //   return teams.sort((a,b) => (a.calc_rank.conf_rank > b.calc_rank.conf_rank) ? 1: -1 )
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
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[0].market}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[1].market}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[2].market}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[3].market}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[4].market}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[5].market}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[6].market}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[7].market}</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[8].market}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[9].market}</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[10].market}</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[11].market}</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[12].market}</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[13].market}</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td colSpan="2">{this.props.westernStandings == null ? null : this.props.westernStandings[14].market}</td>
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
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[0].market}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[1].market}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[2].market}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[3].market}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[4].market}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[5].market}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[6].market}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[7].market}</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[8].market}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[9].market}</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[10].market}</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[11].market}</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[12].market}</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[13].market}</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td colSpan="2">{this.props.easternStandings == null ? null : this.props.easternStandings[14].market}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
        )
    }
}

const mapStateToProps = state => {
  return {
    westernStandings: state.NBAInfo.west,
    easternStandings: state.NBAInfo.east
  }
}

export default connect(mapStateToProps, null)(NbaStandings)