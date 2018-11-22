import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Avatar,
    Typography
} from '@material-ui/core';

class QProfile extends Component {

    static propTypes = {
        author: PropTypes.object.isRequired
    }

    render() {

        const { author } = this.props;

        return (
            <div>
                <Avatar 
                    src={author.avatarURL}
                    style={{
                        width: 150,
                        height: 150
                    }} 
                />
                <Typography variant="title" style={{marginTop: "2em"}}>
                    Author: {author.name}
                </Typography>
            </div>
        );
    }
}

export default QProfile;