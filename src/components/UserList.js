import React, { Component } from 'react'

import sortNames from '../functions/sort'

export default class UserList extends Component {
    renderList() {
        return this.props.users.sort(sortNames).map(user => {
          const userRole = this.props.roles.find(role => user.default_role === role.id)
        //  const userRoles = this.props.roles.find(role => user.roles === role.id)

          const userRoleName = userRole ? userRole.name : "TBC"
          const userRoleColour = userRole ? userRole.colour : "808080"
          return (
            <tr
              key={user.id}
              className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
              style={{color: '#' + userRoleColour}}
            >
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{userRoleName}</td>
            </tr>
          );
        });
      }

    render() {
        const { users } = this.props

        return (
            <div>
                <table>
                    <tbody>
                        {users && this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}