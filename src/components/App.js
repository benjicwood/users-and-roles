import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import UserList from './UserList'
import RolesList from './RolesList'

class UsersAndRoles extends Component {
    componentWillMount () {
        this.props.getUsers()
        this.props.getRoles()
    }

    render () {
        const { usersData, rolesData } = this.props
        return (
            <div>
                <UserList data={usersData} />
                <RolesList data={rolesData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      usersData: state.users.users,
      rolesData: state.roles.roles
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getUsers: () => dispatch(actions.setUsers()),
      getRoles: () => dispatch(actions.setRoles())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersAndRoles);