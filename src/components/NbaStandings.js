import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import { Link } from 'react-router-dom'

class NbaStandings extends React.Component {

  state = {
    allTeams: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(resp => this.setState({
      allTeams: resp
    }))
  }

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
  <h3>West</h3>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Seed</th>
      <th scope="col">Team</th>
      <th scope="col">W</th>
      <th scope="col">L</th>
      <th scope="col">PCT</th>
      <th scope="col">GB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[0].name).logo} /> {this.props.westernStandings[0].name}</div> : null}</td>
      {/* <td>{this.props.westernStandings == null ? null : this.props.westernStandings[0].name}</td> */}
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[0].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[0].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[0].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[0].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[1].name).logo} /> {this.props.westernStandings[1].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[1].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[1].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[1].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[1].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[2].name).logo} /> {this.props.westernStandings[2].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[2].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[2].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[2].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[2].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[3].name).logo} /> {this.props.westernStandings[3].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[3].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[3].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[3].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[3].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[4].name).logo} /> {this.props.westernStandings[4].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[4].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[4].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[4].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[4].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[5].name).logo} /> {this.props.westernStandings[5].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[5].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[5].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[5].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[5].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[6].name).logo} /> {this.props.westernStandings[6].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[6].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[6].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[6].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[6].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[7].name).logo} /> {this.props.westernStandings[7].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[7].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[7].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[7].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[7].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[8].name).logo} /> {this.props.westernStandings[8].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[8].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[8].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[8].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[8].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[9].name).logo} /> {this.props.westernStandings[9].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[9].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[9].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[9].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[9].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[10].name).logo} /> {this.props.westernStandings[10].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[10].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[10].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[10].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[10].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[11].name).logo} /> {this.props.westernStandings[11].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[11].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[11].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[11].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[11].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[12].name).logo} /> {this.props.westernStandings[12].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[12].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[12].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[12].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[12].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[13].name).logo} /> {this.props.westernStandings[13].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[13].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[13].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[13].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[13].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[14].name).logo} /> {this.props.westernStandings[14].name}</div> : null}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[14].wins}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[14].losses}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[14].win_pct}</td>
      <td>{this.props.westernStandings == null ? null : this.props.westernStandings[14].games_behind.conference}</td>
    </tr>
  </tbody>
</table>
</div>
<div>
  <h3>East</h3>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Seed</th>
      <th scope="col">Team</th>
      <th scope="col">W</th>
      <th scope="col">L</th>
      <th scope="col">PCT</th>
      <th scope="col">GB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[0].name).logo} /> {this.props.easternStandings[0].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[0].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[0].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[0].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[0].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[1].name).logo} /> {this.props.easternStandings[1].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[1].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[1].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[1].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[1].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[2].name).logo} /> {this.props.easternStandings[2].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[2].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[2].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[2].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[2].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[3].name).logo} /> {this.props.easternStandings[3].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[3].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[3].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[3].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[3].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[4].name).logo} /> {this.props.easternStandings[4].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[4].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[4].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[4].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[4].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[5].name).logo} /> {this.props.easternStandings[5].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[5].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[5].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[5].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[5].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[6].name).logo} /> {this.props.easternStandings[6].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[6].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[6].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[6].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[6].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[7].name).logo} /> {this.props.easternStandings[7].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[7].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[7].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[7].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[7].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[8].name).logo} /> {this.props.easternStandings[8].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[8].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[8].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[8].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[8].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[9].name).logo} /> {this.props.easternStandings[9].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[9].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[9].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[9].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[9].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[10].name).logo} /> {this.props.easternStandings[10].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[10].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[10].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[10].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[10].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[11].name).logo} /> {this.props.easternStandings[11].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[11].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[11].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[11].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[11].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[12].name).logo} /> {this.props.easternStandings[12].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[12].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[12].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[12].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[12].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[13].name).logo} /> {this.props.easternStandings[13].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[13].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[13].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[13].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[13].games_behind.conference}</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[14].name).logo} /> {this.props.easternStandings[14].name}</div> : null}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[14].wins}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[14].losses}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[14].win_pct}</td>
      <td>{this.props.easternStandings == null ? null : this.props.easternStandings[14].games_behind.conference}</td>
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


{/* <td>{this.props.westernStandings && this.state.allTeams.length > 0 == <div><img src={} /></div> ? null : this.props.westernStandings[0].name}</td> */}
{/* <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div><img src={this.state.allTeams.find(team => team.name == this.props.westernStandings[0].name).logo} /> {this.props.westernStandings[0].name}</div> : null}</td> */}
{/* <div><img src={this.state.allTeams.find(team => team.name == this.props.westernStandings[0].name).logo} /> this.props.westernStandings[0].name</div> */}