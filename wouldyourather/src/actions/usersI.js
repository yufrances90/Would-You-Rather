import * as API from '../utils/api';

import { getAllUsers } from './users';

export function handleGetAllUsers() {
    return (dispatch) => {
        return API.getUsers()
        .then(res => dispatch(getAllUsers(res.users)));
    };
}