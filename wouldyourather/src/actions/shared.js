import * as API from '../utils/api';

import { getAllQuestions } from './questions';
import { getAllUsers } from './users';

export function handleGetInitialData() {
    return (dispatch) => {
        return API.getInitialData()
        .then(res => {
            dispatch(getAllQuestions(res.questions));
            dispatch(getAllUsers(res.users));
        });
    }
}