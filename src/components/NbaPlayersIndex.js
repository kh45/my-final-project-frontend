import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import { Link } from 'react-router-dom'
// import NbaPlayerModal from './NbaPlayerModal'
import NbaPlayerModal from './NbaPlayerModal'
import { useState } from 'react';
// import Loader from './GridLoader'
import LottieBBall from './LottieBBall'

class NbaPlayersIndex extends React.Component {

    state = {
        allPlayers: [],
        filteredPlayers: [],
        teams: [],
        nameFilter: "",
        selectedPlayer: null,
        modalShow: false,
        setModalShow: false
    }

   componentDidMount() {
    fetch('http://localhost:3000/NBAPlayers')
    .then(response => response.json())
    .then(response => this.setState({allPlayers: response, filteredPlayers: response}))
  }

  handleClick = event => {
      this.setState({
        setModalShow: true,
        modalShow: true,
        selectedPlayer: this.state.allPlayers.find(player => player["NBARef"] == event.target.id)
      })
  }

  handleHide = () => {
      this.setState({
          setModalShow: false,
          modalShow: !this.state.modalShow,
          selectedPlayer: null
      })
  }

  filterByTeam = (event) => {
      if (event.target.value === "All Teams") {
        this.setState({
            filteredPlayers: this.state.allPlayers
        })
    } else {
        this.setState({
            filteredPlayers: this.state.allPlayers.filter(player => player["teamRef"] === event.target.value)
        })
    }
  }

  filterByName = () => {
      return this.state.filteredPlayers.filter(player => player["full_name"].toLowerCase().includes(this.state.nameFilter.toLowerCase()))
  }

  handleChange = event => {
      this.setState({
          nameFilter: event.target.value
      })
  }

  handleSubmit = event => {
      event.preventDefault()
  }


    render() {
        return(
            <div className="player-index">
                <img className="nba-player-index-banner" src='https://cdn.elitesportsny.com/wp-content/uploads/2019/02/banner_nba.jpg' />
                <div className="filters">
                <h4 className="filter-header">Filter By Team:</h4>
                <select name="teamFilter" form="teamFilter" onChange={this.filterByTeam} >
                    <option value="All Teams">All Teams</option>
                    <option value="583ecb8f-fb46-11e1-82cb-f4ce4684ea4c">Atlanta Hawks</option>
                    <option value="583eccfa-fb46-11e1-82cb-f4ce4684ea4c">Boston Celtics</option>
                    <option value="583ec9d6-fb46-11e1-82cb-f4ce4684ea4c">Brooklyn Nets</option>
                    <option value="583ec97e-fb46-11e1-82cb-f4ce4684ea4c">Charlotte Hornets</option>
                    <option value="583ec5fd-fb46-11e1-82cb-f4ce4684ea4c">Chicago Bulls</option>
                    <option value="583ec773-fb46-11e1-82cb-f4ce4684ea4c">Cleveland Cavaliers</option>
                    <option value="583ecf50-fb46-11e1-82cb-f4ce4684ea4c">Dallas Mavericks</option>
                    <option value="583ed102-fb46-11e1-82cb-f4ce4684ea4c">Denver Nuggets</option>
                    <option value="583ec928-fb46-11e1-82cb-f4ce4684ea4c">Detroit Pistons</option>
                    <option value="583ec825-fb46-11e1-82cb-f4ce4684ea4c">Golden State Warriors</option>
                    <option value="583ecb3a-fb46-11e1-82cb-f4ce4684ea4c">Houston Rockets</option>
                    <option value="583ec7cd-fb46-11e1-82cb-f4ce4684ea4c">Indiana Pacers</option>
                    <option value="583ecae2-fb46-11e1-82cb-f4ce4684ea4c">Los Angeles Lakers</option>
                    <option value="583ecdfb-fb46-11e1-82cb-f4ce4684ea4c">Los Angeles Clippers</option>
                    <option value="583eca88-fb46-11e1-82cb-f4ce4684ea4c">Memphis Grizzlies</option>
                    <option value="583ecea6-fb46-11e1-82cb-f4ce4684ea4c">Miami Heat</option>
                    <option value="583ecefd-fb46-11e1-82cb-f4ce4684ea4c">Milwaukee Bucks</option>
                    <option value="583eca2f-fb46-11e1-82cb-f4ce4684ea4c">Minnesota Timberwolves</option>
                    <option value="583ecc9a-fb46-11e1-82cb-f4ce4684ea4c">New Orleans Pelicans</option>
                    <option value="583ec70e-fb46-11e1-82cb-f4ce4684ea4c">New York Knicks</option>
                    <option value="583ecfff-fb46-11e1-82cb-f4ce4684ea4c">Oklahoma City Thunder</option>
                    <option value="583ed157-fb46-11e1-82cb-f4ce4684ea4c">Orlando Magic</option>
                    <option value="583ec87d-fb46-11e1-82cb-f4ce4684ea4c">Philadelphia 76ers</option>
                    <option value="583ecfa8-fb46-11e1-82cb-f4ce4684ea4c">Phoenix Suns</option>
                    <option value="583ed056-fb46-11e1-82cb-f4ce4684ea4c">Portland Trail Blazers</option>
                    <option value="583ed0ac-fb46-11e1-82cb-f4ce4684ea4c">Sacramento Kings</option>
                    <option value="583ecd4f-fb46-11e1-82cb-f4ce4684ea4c">San Antonio Spurs</option>
                    <option value="583ecda6-fb46-11e1-82cb-f4ce4684ea4c">Toronto Raptors</option>
                    <option value="583ece50-fb46-11e1-82cb-f4ce4684ea4c">Utah Jazz</option>
                    <option value="583ec8d4-fb46-11e1-82cb-f4ce4684ea4c">Washington Wizards</option>
                </select>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <h4 className="filter-header">Search By Name:</h4>
                    <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                </form>
                </div>
                
            <div className="NBAplayers-container">
                {this.state.filteredPlayers.length === 0 ? <LottieBBall /> : this.filterByName().map(player => <div className="player-container" key={player["NBARef"]}><h3 className="player-name">{player["full_name"]}</h3><img onClick={this.handleClick} id={player["NBARef"]} data-toggle="modal" data-target={player["NBARef"]} className="player-pic" src={player["headshot"]} /><img className="team-logo-backdrop" src={player["team"]["logo"]} /> </div>)}
            </div>
            {this.state.selectedPlayer == null ? null: <NbaPlayerModal player={this.state.selectedPlayer} show={this.state.modalShow} onHide={this.handleHide} />}
            </div>
        )
    }
}



export default connect(null, null)(NbaPlayersIndex)