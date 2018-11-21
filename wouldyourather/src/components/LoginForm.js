import React, { Component } from 'react';

import PropTypes from 'prop-types';

class LoginForm extends Component {

    static propTypes ={
        users: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                Hello from LoginForm
            </div>
        );
    }
}

export default LoginForm;