import { GET_ACTIVE_KEY } from "../actions"

const initState = {
    active: 'about-me'
}

const activeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ACTIVE_KEY:
            return ({
                ...state,
                active: action.payload
            })
        default:
            return state
    }
}


export default activeReducer
