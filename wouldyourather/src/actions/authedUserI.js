import { 
    getAuthedUser, 
    setAuthedUser 
} from './authedUser';

export function handleGetAuthedUser(userId) {
    return (dispatch) => {
        return dispatch(getAuthedUser(userId));
    };
}

export function handleSetAuthedUser(userId) {
    return (dispatch) => {
        return dispatch(setAuthedUser(userId));
    };
}

