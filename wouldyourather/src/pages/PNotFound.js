import React, { Component } from 'react';

import {
    Typography
} from '@material-ui/core';

class PNotFound extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Typography variant="h3">
                    404 Not Found
                </Typography>
            </div>
        );
    }
}

export default PNotFound;