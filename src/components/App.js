import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import UserList from './UserList'

class UsersAndRoles extends Component {
    componentWillMount () {
        this.props.getUsers()
    }

    render () {
        const { usersData } = this.props
        return (
            <div>
                <UserList data={usersData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      usersData: state.users,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getUsers: () => dispatch(actions.setUsers()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UsersAndRoles);