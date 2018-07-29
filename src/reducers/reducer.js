import { combineReducers } from 'redux';
import users from './usersreducer';
import roles from './rolesreducer';

const allReducers = combineReducers({
    users: users,
    roles: roles
})

export default allReducers