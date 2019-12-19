export default function viewNBAProf(state = {player: null}, action) {
    console.log(action)
    switch (action.type) {
        case 'VIEW_NBA_PLAYER':
            return {
                ...state,
                player: action.player
            }
        default:
            return state
    }
}