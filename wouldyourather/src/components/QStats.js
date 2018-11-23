import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Options } from '../constants/questions';

class QStats extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired
    }

    render() {

        const { question } = this.props;

        const optionOneCount = question[Options.OPTION_ONE].votes.length;
        const optionTwoCount = question[Options.OPTION_TWO].votes.length;
        
        const totalCount = optionOneCount + optionTwoCount;

        return (
            <div>
                <p>
                    Option a.: {optionOneCount} [{optionOneCount / totalCount}]
                </p>
                <p>
                    Option b.: {optionTwoCount} [{optionTwoCount / totalCount}]
                </p>
            </div>
        );
    }
}

export default QStats;