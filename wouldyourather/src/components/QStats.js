import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Options } from '../constants/questions';

class QStats extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired
    }

    calculatePercentageAndFormatRes(count, totalCount) {
        return ((count / totalCount) * 100).toFixed(2);
    }

    render() {

        const { question } = this.props;

        const optionOneCount = question[Options.OPTION_ONE].votes.length;
        const optionTwoCount = question[Options.OPTION_TWO].votes.length;
        
        const totalCount = optionOneCount + optionTwoCount;

        return (
            <div>
                <p>
                    Option a: {optionOneCount} &nbsp; &nbsp;
                    [ { this.calculatePercentageAndFormatRes(optionOneCount, totalCount) }% ]
                </p>
                <p>
                    Option b: {optionTwoCount} &nbsp; &nbsp;
                    [ { this.calculatePercentageAndFormatRes(optionTwoCount, totalCount) }% ]
                </p>
            </div>
        );
    }
}

export default QStats;