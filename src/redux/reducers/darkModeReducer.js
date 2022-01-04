import { SET_DARK_MODE } from "../actions"

const darkMode = localStorage.getItem('dark-mode')

const init = {
    darkMode: darkMode
}

const darkModeReducer = (state = init, action) => {
    switch (action.type) {
        case SET_DARK_MODE:
            return ({
                ...state,
                darkMode: action.payload
            })
        default:
            return state
    }
}

export default darkModeReducer
