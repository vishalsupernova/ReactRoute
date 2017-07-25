const initiaState = { fetching: false, starships: [], error: '' }

function display(state = initiaState, action) {
    switch (action.type) {
        case 'DATA':
            return { ...state, fetching: action.loaddata };
        case 'NAME':
            console.log(action.starshipname)
            return { ...state, fetching: false, starships: action.starshipname }
        case 'ERROR':
            return { ...state, fetching: false, error: action.payload }
        default:
            return state
    }
}

export default display