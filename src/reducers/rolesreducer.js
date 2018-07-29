import * as types from '../actions/types'

export default function reducer (initialState = {}, action) {
    const newState = { ...initialState }

    switch (action.type) {
        case types.SET_ROLES: return setRoles(newState, action)
        default: return newState
    }
}

function setRoles (newState, action) {
    delete action.type
    return Object.assign(newState, {...action})
}