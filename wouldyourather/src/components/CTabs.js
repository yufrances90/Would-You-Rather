import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CTabs extends Component {

    static propTypes = {
        currentUser: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired
    }

    render() {

        const { currentUser, questions } = this.props;

        console.log(currentUser);
        console.log(questions);
        
        return (
            <div>
                Hello from CTabs
            </div>
        );
    }
}

export default CTabs;