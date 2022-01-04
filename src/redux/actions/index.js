export const GET_ACTIVE_KEY = 'GET_ACTIVE_KEY'
export const SET_DARK_MODE = 'SET_DARK_MODE'

export const getActiveKey = window => dispatch => {
    return dispatch({ type: GET_ACTIVE_KEY, payload: window })
}

export const setDarkMode = darkMode => dispatch => {
    return dispatch({ type: SET_DARK_MODE, payload: darkMode })
}
