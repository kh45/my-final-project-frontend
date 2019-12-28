export const NbaInfo = (resp) => {
  let categories = [{ind: 26, name: 'ppg', players: []}, 
        {ind: 29, name: 'rpg', players: []},
        {ind: 30, name: 'apg', players: []},
        {ind: 23, name: 'threePCT', players: []},
        {ind: 19, name: 'techs', players: []},
        {ind: 32, name: 'blocks', players: []},
        {ind: 24, name: 'ft_pct', players: []},
        {ind: 31, name: 'spg', players: []},
        {ind: 21, name: 'fg_pct', players: []}]
    const grabTeams = array => {
        let teams = [];
        array.divisions.forEach(division => {
          division.teams.forEach(team => teams.push(team))
        })
        return teams.sort((a,b) => (a.calc_rank.conf_rank > b.calc_rank.conf_rank) ? 1: -1 )
      }
      const cleanData = category => {
        category.players.push({player: resp.leaders.categories[category.ind].ranks[0].player, score: resp.leaders.categories[category.ind].ranks[0].score},
          {player: resp.leaders.categories[category.ind].ranks[1].player, score: resp.leaders.categories[category.ind].ranks[1].score},
          {player: resp.leaders.categories[category.ind].ranks[2].player, score: resp.leaders.categories[category.ind].ranks[2].score})
          // category.players.forEach(playa => {
          //   fetch(`http://localhost:3000/players/${playa.reference}`)
          //   .then(resp => resp.json())
          //   // .then(resp => console.log(resp.player.headshot))
          //   .then(resp => playa.headshot = resp.player.headshot)
          // })
        return category
      }
      // const fetchPictures = () => {
      //   fetch(`localhost:3000/players`)
      // }
    return {
        type: 'GET_NBA_INFO',
        western: grabTeams(resp.standings.conferences[0]),
        eastern: grabTeams(resp.standings.conferences[1]),
        stats: {ppg: cleanData(categories[0]),
        rpg: cleanData(categories[1]),
        apg: cleanData(categories[2]),
        threePCT: cleanData(categories[3]),
        techs: cleanData(categories[4]),
        blocks: cleanData(categories[5]),
        ft_pct: cleanData(categories[6]),
        spg: cleanData(categories[7]),
        fg_pct: cleanData(categories[8])}
    }
}