import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar
} from '@material-ui/core';

class LTable extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Avatar
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                # of Question Asked
                            </TableCell>
                            <TableCell>
                                # of Question Answered
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Avatar src={user.url} />
                                </TableCell>
                                <TableCell>
                                    {user.name}
                                </TableCell>
                                <TableCell>
                                    {user.numQAsked}
                                </TableCell>
                                <TableCell>
                                    {user.numQAnsed}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default LTable;