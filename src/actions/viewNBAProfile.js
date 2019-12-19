export const viewNBAProfile = (player, articles) => {
  // console.log({
  //   type: 'VIEW_NBA_PLAYER',
  //     player: player,
  //     articles: articles
  // })
    return {
      type: 'VIEW_NBA_PLAYER',
      player: player.player,
      articles: articles.articles
    };
  };