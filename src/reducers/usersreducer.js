import * as types from '../actions/types'

export default function reducer (initialState = {}, action) {
    const newState = { ...initialState }

    switch (action.type) {
        case types.SET_USERS: return setUsers(newState, action)
        default: return newState
    }
}

function setUsers (newState, action) {
    delete action.type
    return Object.assign(newState, {...action})
}
