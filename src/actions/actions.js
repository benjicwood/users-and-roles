import * as types from './types'
import users from '../../data/users-list.json'
import roles from '../../data/roles-list.json'

export const setUsers = () => {
    return {
        type: types.SET_USERS,
        users: users
    }
}

export const setRoles = () => {
    return {
        type: types.SET_ROLES,
        roles: roles
    }
}