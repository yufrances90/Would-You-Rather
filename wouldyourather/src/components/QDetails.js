import React, { Component } from 'react';

import PropTypes from 'prop-types';

class QDetails extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired
    }

    render() {

        const { question, author } = this.props;

        console.log(question);
        console.log(author);

        return (
            <div>
                Hello from QDetails
            </div>
        );
    }
}

export default QDetails;