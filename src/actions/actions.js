import * as types from './types'
import users from '../../data/users-list.json'
import roles from '../../data/roles-list.json'

// set all users to state
export const setUsers = () => {
    return {
        type: types.SET_USERS,
        users: users
    }
}

// set all roles to state
export const setRoles = () => {
    return {
        type: types.SET_ROLES,
        roles: roles
    }
}