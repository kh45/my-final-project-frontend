export const NbaInfo = (resp) => {
    const grabTeams = array => {
        let teams = [];
        array.divisions.forEach(division => {
          division.teams.forEach(team => teams.push(team))
        })
        return teams.sort((a,b) => (a.calc_rank.conf_rank > b.calc_rank.conf_rank) ? 1: -1 )
      }
    return {
        type: 'GET_NBA_INFO',
        western: grabTeams(resp.standings.conferences[0]),
        eastern: grabTeams(resp.standings.conferences[1]),
        stats: resp.leaders.categories
    }
}