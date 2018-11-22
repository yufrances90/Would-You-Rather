import * as API from '../utils/api';

import {
    getAllQuestions,
    // saveQuestion,
    saveQuestionAnswer
} from './questions';

export function handleGetAllQuestions() {
    return (dispatch) => {
        return API.getQuestions()
        .then(res => dispatch(getAllQuestions(res.questions)));
    };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return API.saveQuestionAnswer({ authedUser, qid, answer })
        .then(res => dispatch(saveQuestionAnswer(authedUser, qid, answer)));
    }
}