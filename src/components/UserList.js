import React, { Component } from 'react'

export default class UserList extends Component {
    renderList() {
        return this.props.users.map(user => {
          const userRole = this.props.roles.find(role => user.default_role === role.id)
        //  const userRoles = this.props.roles.find(role => user.roles === role.id)
     //   console.log(userRole)
    //    const rowColour = this.props.roles.find(role => userRole === role.id)
          const userRoleName = userRole ? userRole.name : "TBC"
          const userRoleColour = userRole ? userRole.colour : "black"
console.log(userRoleColour)
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