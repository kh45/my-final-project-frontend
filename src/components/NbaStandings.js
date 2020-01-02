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
          <h1 style={{'text': 'align'}} className="infrared">Standings</h1>
            <div className="NBA-standings-container">
      <div>
  <h3 className="infrared">West</h3>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col"><p className="infrared">Seed</p></th>
      <th scope="col"><p className="infrared">Team</p></th>
      <th scope="col"><p className="infrared">W</p></th>
      <th scope="col"><p className="infrared">L</p></th>
      <th scope="col"><p className="infrared">PCT</p></th>
      <th scope="col"><p className="infrared">GB</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><p className="infrared">1</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[0].name).logo} /> <p className="infrared">{this.props.westernStandings[0].name}</p></div> : null}</td>
      {/* <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[0].name}</td> */}
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[0].wins}</p>}</td>
        <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[0].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[0].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[0].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">2</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[1].name).logo} /> <p className="infrared">{this.props.westernStandings[1].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[1].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[1].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[1].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[1].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">3</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[2].name).logo} /> <p className="infrared">{this.props.westernStandings[2].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[2].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[2].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[2].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[2].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">4</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[3].name).logo} /> <p className="infrared">{this.props.westernStandings[3].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[3].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[3].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[3].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[3].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">5</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[4].name).logo} /> <p className="infrared">{this.props.westernStandings[4].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[4].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[4].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[4].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[4].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">6</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[5].name).logo} /> <p className="infrared">{this.props.westernStandings[5].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[5].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[5].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[5].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[5].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">7</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[6].name).logo} /> <p className="infrared">{this.props.westernStandings[6].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[6].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[6].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[6].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[6].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">8</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[7].name).logo} /> <p className="infrared">{this.props.westernStandings[7].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[7].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[7].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[7].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[7].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">9</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[8].name).logo} /> <p className="infrared">{this.props.westernStandings[8].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[8].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[8].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[8].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[8].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">10</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[9].name).logo} /> <p className="infrared">{this.props.westernStandings[9].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[9].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[9].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[9].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[9].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">11</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[10].name).logo} /> <p className="infrared">{this.props.westernStandings[10].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[10].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[10].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[10].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[10].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">12</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[11].name).logo} /> <p className="infrared">{this.props.westernStandings[11].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[11].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[11].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[11].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[11].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">13</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[12].name).logo} /> <p className="infrared">{this.props.westernStandings[12].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[12].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[12].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[12].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[12].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">14</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[13].name).logo} /> <p className="infrared">{this.props.westernStandings[13].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[13].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[13].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[13].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[13].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">15</p></th>
      <td>{this.props.westernStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.westernStandings[14].name).logo} /> <p className="infrared">{this.props.westernStandings[14].name}</p></div> : null}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[14].wins}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[14].losses}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[14].win_pct}</p>}</td>
      <td>{this.props.westernStandings == null ? null : <p className="infrared">{this.props.westernStandings[14].games_behind.conference}</p>}</td>
    </tr>
  </tbody>
</table>
</div>
<div>
  <h3 className="infrared">East</h3>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col"><p className="infrared">Seed</p></th>
      <th scope="col"><p className="infrared">Team</p></th>
      <th scope="col"><p className="infrared">W</p></th>
      <th scope="col"><p className="infrared">L</p></th>
      <th scope="col"><p className="infrared">PCT</p></th>
      <th scope="col"><p className="infrared">GB</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><p className="infrared">1</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[0].name).logo} /> <p className="infrared">{this.props.easternStandings[0].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[0].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[0].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[0].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[0].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">2</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[1].name).logo} /> <p className="infrared">{this.props.easternStandings[1].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[1].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[1].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[1].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[1].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">3</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[2].name).logo} /> <p className="infrared">{this.props.easternStandings[2].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[2].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[2].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[2].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[2].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">4</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[3].name).logo} /> <p className="infrared">{this.props.easternStandings[3].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[3].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[3].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[3].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[3].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">5</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[4].name).logo} /> <p className="infrared">{this.props.easternStandings[4].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[4].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[4].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[4].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[4].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">6</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[5].name).logo} /> <p className="infrared">{this.props.easternStandings[5].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[5].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[5].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[5].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[5].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">7</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[6].name).logo} /> <p className="infrared">{this.props.easternStandings[6].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[6].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[6].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[6].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[6].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">8</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[7].name).logo} /> <p className="infrared">{this.props.easternStandings[7].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[7].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[7].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[7].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[7].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">9</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[8].name).logo} /> <p className="infrared">{this.props.easternStandings[8].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[8].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[8].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[8].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[8].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">10</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[9].name).logo} /> <p className="infrared">{this.props.easternStandings[9].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[9].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[9].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[9].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[9].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">11</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[10].name).logo} /> <p className="infrared">{this.props.easternStandings[10].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[10].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[10].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[10].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[10].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">12</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[11].name).logo} /> <p className="infrared">{this.props.easternStandings[11].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[11].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[11].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[11].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[11].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">13</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[12].name).logo} /> <p className="infrared">{this.props.easternStandings[12].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[12].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[12].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[12].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[12].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">14</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[13].name).logo} /> <p className="infrared">{this.props.easternStandings[13].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[13].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[13].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[13].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[13].games_behind.conference}</p>}</td>
    </tr>
    <tr>
      <th scope="row"><p className="infrared">15</p></th>
      <td>{this.props.easternStandings && this.state.allTeams.length > 0 ? <div className="squid"><img className='micro-logo' src={this.state.allTeams.find(team => team.name == this.props.easternStandings[14].name).logo} /> <p className="infrared">{this.props.easternStandings[14].name}</p></div> : null}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[14].wins}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[14].losses}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[14].win_pct}</p>}</td>
      <td>{this.props.easternStandings == null ? null : <p className="infrared">{this.props.easternStandings[14].games_behind.conference}</p>}</td>
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