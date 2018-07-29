import React, { Component } from 'react'

export default class RolesList extends Component {
    renderList() {
        return this.props.data.map((roles) => {
            return (
                <tr key={roles.id} className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <td>{roles.name}</td>
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