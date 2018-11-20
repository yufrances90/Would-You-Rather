import * as API from '../utils/api';

import {
    getAllQuestions,
    // saveQuestion,
    // saveQuestionAnswer
} from './questions';

export function handleGetAllQuestions() {
    return (dispatch) => {
        return API.getQuestions()
        .then(res => dispatch(getAllQuestions(res.questions)));
    };
}