import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Avatar,
    Typography
} from '@material-ui/core';

class Profile extends Component {

    static propTypes = {
        currentUser: PropTypes.object.isRequired
    }

    render() {

        const { currentUser } = this.props;

        return (
            <div>
                <Avatar 
                    src={currentUser.avatarURL}
                    style={{
                        width: 150,
                        height: 150
                    }} 
                />
                <div 
                    style={{
                        marginTop: "2em"
                    }}
                >
                    <Typography variant="title">
                        {currentUser.name}
                    </Typography>
                </div>
            </div>
        );
    }
}

export default Profile;