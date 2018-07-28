import * as types from '../actions/types'

export const initialState = {
    users: []
}

export default function reducer (state, action) {
    const newState = { ...initialState }
    state = state || initialState
    switch (action.type) {
        case types.SET_USERS: return setUsers(newState, action)
        default: return state
    }
}

function setUsers (newState, action) {
    delete action.type
    return Object.assign(newState, {...action})
}