import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: firstReducer,
    viewNBAProfile: viewNBAProf,
    NBAInfo: NBAInfo
})

export default rootReducer;

function firstReducer(state = {currentUser: null}, action) {
    console.log(action)
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state
    }
}

function viewNBAProf(state = {player: null, articles: null}, action) {
    console.log(action)
    switch (action.type) {
        case 'VIEW_NBA_PLAYER':
            return {
                player: action.player,
                articles: action.articles
            }
        default:
            return state
    }
}

function NBAInfo(state = {player: null, articles: null}, action) {
    console.log(action)
    switch (action.type) {
        case 'GET_NBA_INFO':
            return {
                player: action.player,
                articles: action.articles
            }
        default:
            return state
    }
}