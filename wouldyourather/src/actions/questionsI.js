import * as API from '../utils/api';

import {
    getAllQuestions,
    // saveQuestion,
    // saveQuestionAnswer
} from './questions';

export function handleGetAllQuestions(questions) {
    return (dispatch) => {
        return API.getQuestions(questions)
        .then(res => dispatch(getAllQuestions(res.questions)));
    };
}