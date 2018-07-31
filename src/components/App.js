import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import UserList from './UserList'

class UsersAndRoles extends Component {
    componentWillMount () {
        this.props.getUsers()
        this.props.getRoles()
    }

    render () {
        const { usersData, rolesData } = this.props
        return (
            <div>
                <UserList users={usersData} roles={rolesData} />
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