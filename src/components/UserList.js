import React, { Component } from 'react'

export default class UserList extends Component {
    renderList() {
        return this.props.data.map((user) => {
            return (
                <tr key={user.id} className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.roles}</td>
                </tr>
            )

        })
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        {data && this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
}