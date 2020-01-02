import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import { Link } from 'react-router-dom'
// import NbaPlayerModal from './NbaPlayerModal'
import NflPlayerModal from './NflPlayerModal'
import { useState } from 'react';
// import Loader from './GridLoader'
// import LottieBBall from './LottieBBall'
import GridLoader from './GridLoader'

class NFLPlayersIndex extends React.Component {

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
    fetch('http://localhost:3000/NFLPlayers')
    .then(response => response.json())
    .then(response => this.setState({allPlayers: response, filteredPlayers: response}))
  }

  handleClick = event => {
      this.setState({
        setModalShow: true,
        modalShow: true,
        selectedPlayer: this.state.allPlayers.find(player => player["sportradarRef"] == event.target.id)
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
    //   debugger
  }


    render() {
        return(
            <div className="player-index">
                <div className="nfl-player-banner">
                    <img className="nfl-player-index-banner" src='https://i.pinimg.com/originals/5d/87/7d/5d877da2f01dac3631f807612ea8f413.jpg' />
                </div>
                <div className="filters">
                <h4 className="filter-header">Filter By Team:</h4>
                <select name="teamFilter" form="teamFilter" onChange={this.filterByTeam} >
                    <option value="All Teams">All Teams</option>
                    <option value="768c92aa-75ff-4a43-bcc0-f2798c2e1724">Buffalo Bills</option>
                    <option value="4809ecb0-abd3-451d-9c4a-92a90b83ca06">Miami Dolphins</option>
                    <option value="5fee86ae-74ab-4bdd-8416-42a9dd9964f3">New York Jets</option>
                    <option value="97354895-8c77-4fd4-a860-32e62ea7382a">New England Patriots</option>
                    <option value="ad4ae08f-d808-42d5-a1e6-e9bc4e34d123">Cincinnati Bengals</option>
                    <option value="d5a2eb42-8065-4174-ab79-0a6fa820e35e">Cleveland Browns</option>
                    <option value="ebd87119-b331-4469-9ea6-d51fe3ce2f1c">Baltimore Ravens</option>
                    <option value="cb2f9f1f-ac67-424e-9e72-1475cb0ed398">Pittsburh Steelers</option>
                    <option value="82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9">Indianapolis Colts</option>
                    <option value="f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de">Jacksonville Jaguars</option>
                    <option value="82d2d380-3834-4938-835f-aec541e5ece7">Houston Texans</option>
                    <option value="d26a1ca5-722d-4274-8f97-c92e49c96315">Tennessee Titans</option>
                    <option value="ce92bd47-93d5-4fe9-ada4-0fc681e6caa0">Denver Broncos</option>
                    <option value="1f6dcffb-9823-43cd-9ff4-e7a8466749b5">Los Angeles Chargers</option>
                    <option value="6680d28d-d4d2-49f6-aace-5292d3ec02c2">Kansas City Chiefs</option>
                    <option value="1c1cec48-6352-4556-b789-35304c1a6ae1">Oakland Raiders</option>
                    <option value="e627eec7-bbae-4fa4-8e73-8e1d6bc5c060">Dallas Cowboys</option>
                    <option value="386bdbf9-9eea-4869-bb9a-274b0bc66e80">Philadelphia Eagles</option>
                    <option value="04aa1c9d-66da-489d-b16a-1dee3f2eec4d">New York Giants</option>
                    <option value="22052ff7-c065-42ee-bc8f-c4691c50e624">Washington Redskins</option>
                    <option value="7b112545-38e6-483c-a55c-96cf6ee49cb8">Chicago Bears</option>
                    <option value="c5a59daa-53a7-4de0-851f-fb12be893e9e">Detroit Lions</option>
                    <option value="a20471b4-a8d9-40c7-95ad-90cc30e46932">Green Bay Packers</option>
                    <option value="33405046-04ee-4058-a950-d606f8c30852">Minnesota Vikings</option>
                    <option value="4254d319-1bc7-4f81-b4ab-b5e6f3402b69">Tampa Bay Buccaneers</option>
                    <option value="e6aa13a4-0055-48a9-bc41-be28dc106929">Atlanta Falcons</option>
                    <option value="f14bf5cc-9a82-4a38-bc15-d39f75ed5314">Carolina Panthers</option>
                    <option value="0d855753-ea21-4953-89f9-0e20aff9eb73">New Orleans Saints</option>
                    <option value="f0e724b0-4cbf-495a-be47-013907608da9">San Francisco 49ers</option>
                    <option value="de760528-1dc0-416a-a978-b510d20692ff">Arizona Cardinals</option>
                    <option value="2eff2a03-54d4-46ba-890e-2bc3925548f3">Los Angeles Rams</option>
                    <option value="3d08af9e-c767-4f88-a7dc-b920c6d2b4a8">Seattle Seahawks</option>
                </select>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h4 className="filter-header">Search By Name:</h4>
                    <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                </form>
                </div>
                
            <div className="NBAplayers-container">
                {this.state.filteredPlayers.length === 0 ? <div className="scraping-header"><h2 className="infrared scraper">FETCHING PLAYERS...<GridLoader /></h2> </div> : this.filterByName().map(player => <div className="player-container" key={player["sportradarRef"]}><h3 className="player-name">{player["full_name"]}</h3><img className="team-logo-backdrop" src={player["team"]["logo"]} /><img onClick={this.handleClick} id={player["sportradarRef"]} data-toggle="modal" data-target={player["NBARef"]} className="player-pic" src={player["headshot"]} /> </div>)}
            </div>
            {this.state.selectedPlayer == null ? null: <NflPlayerModal player={this.state.selectedPlayer} show={this.state.modalShow} onHide={this.handleHide} />}
            </div>
        )
    }
}



export default connect(null, null)(NFLPlayersIndex)